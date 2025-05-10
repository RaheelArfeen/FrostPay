import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userBalance, setUserBalance] = useState(0);
  const [paidBills, setPaidBills] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const storedBalance = localStorage.getItem("userBalance");
    if (storedBalance) {
      setUserBalance(Number(storedBalance));
    }

    const bills = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("bill_")) {
        const billData = localStorage.getItem(key);
        try {
          const bill = JSON.parse(billData);
          if (bill && bill.paid) {
            bills.push(bill);
          }
        } catch (e) {
          console.error("Error parsing bill data", e);
        }
      }
    }
    setPaidBills(bills);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md">
          <p className="text-gray-700">Please log in to view your profile.</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 px-4 py-2 bg-[#5C86E2] text-white rounded hover:bg-[#3A63D8] transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="md:max-w-[1400px] w-full mx-auto px-4 py-10 flex flex-col gap-6">
      <div className="bg-[#5C86E2] rounded-xl text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-white text-orange-600 text-2xl font-bold">
                {user.displayName ? user.displayName.charAt(0) : "U"}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              {user.displayName}
            </h2>
            <p>{user.email}</p>
          </div>
        </div>
        <Link
          to="/update-profile"
          className="bg-white text-[#3A63D8] px-4 py-2 rounded shadow hover:bg-[#7FA9ED] hover:text-white transition text-center"
        >
          Update Profile
        </Link>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Account Information</h3>
        <div className="space-y-6 text-sm">
          <div className="flex justify-between items-center border-b pb-2 border-[#eaebed]">
            <span className="text-gray-600 text-base">Full Name</span>
            <span className="md:text-lg text-base">{user.displayName}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2 border-[#eaebed]">
            <span className="text-gray-600 text-base">Email Address</span>
            <span className="md:text-lg text-base">{user.email}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2 border-[#eaebed]">
            <span className="text-gray-600 text-base">Account Balance</span>
            <span className="text-green-600 font-semibold md:text-lg text-base">
              ৳{userBalance.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#D3E4FD] shadow-lg rounded-xl py-4 w-full">
        <div className="border-b border-[#c7d0e2] px-4 sm:px-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        </div>

        {paidBills.length === 0 ? (
          <div className="text-center py-10 px-4">
            <div className="bg-gray-100 p-4 rounded-full inline-block mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card h-8 w-8 text-gray-500"
                aria-hidden="true"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
            </div>
            <p className="text-gray-600">You have not paid any bills yet.</p>
            <Link
              to="/bills"
              className="mt-3 inline-block text-blue-600 hover:underline text-sm"
            >
              View Available Bills
            </Link>
          </div>
        ) : (
          <ul className="space-y-4 p-4">
            {paidBills.map((bill) => (
              <li
                key={bill.id}
                className="bg-white rounded-xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={bill.icon}
                    alt={bill.organization}
                    className="w-12 h-12"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {bill.organization}
                    </h4>
                    <p className="text-sm text-gray-500 capitalize">
                      {bill.bill_type}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm text-gray-600">
                    <p>Bill ID: {bill.id}</p>
                    <p>
                      Paid At:{" "}
                      {bill.paidAt
                        ? new Date(bill.paidAt).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 justify-between">
                    <p className="text-orange-600 font-bold text-lg">
                      ৳{bill.amount}
                    </p>
                    <button className="bg-green-600 transition text-white text-sm px-4 py-2 rounded flex items-center gap-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                      </svg>{" "}
                      Bill Paid
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
