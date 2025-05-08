import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userBalance, setUserBalance] = useState(0);
  const [paidBills, setPaidBills] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const storedBalance = localStorage.getItem('userBalance');
    if (storedBalance) {
      setUserBalance(Number(storedBalance));
    }

    const bills = [];
    for (let i = 1; i <= 5; i++) {
      const billStatus = localStorage.getItem(`bill_${i}_paid`);
      if (billStatus === 'true') {
        bills.push(i);
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
      <div className="page-container flex justify-center items-center h-screen">
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md">
          <p className="text-gray-700">Please log in to view your profile.</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8 hover:shadow-lg transition duration-300">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border border-gray-300">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'User'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold bg-gray-100 text-gray-600">
                  {user.displayName ? user.displayName.charAt(0) : 'U'}
                </div>
              )}
            </div>
            <h2 className="text-2xl font-semibold mt-4">{user.displayName || 'User'}</h2>
            <p className='text-sm'>{user.email || 'example@gmail.com'}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-medium text-gray-700">Balance</h3>
                <p className="text-2xl font-bold text-blue-600">৳{userBalance.toLocaleString()}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-medium text-gray-700">Paid Bills</h3>
                <p className="text-2xl font-bold text-blue-600">{paidBills.length}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            <Link
              to="/update-profile"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Update Profile
            </Link>
            <Link
              to="/add-balance"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add Balance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
