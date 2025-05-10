import { useState, useEffect, useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { Check, ChevronDown } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";

const Bills = () => {
  const { bills } = useLoaderData();
  const [filteredBills, setFilteredBills] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const { user } = useContext(AuthContext);
  const paidBills = user?.paidBills || [];

  useEffect(() => {
    setFilteredBills(bills);
  }, [bills]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedType === "all") {
      setFilteredBills(bills);
    } else {
      setFilteredBills(bills.filter((bill) => bill.bill_type === selectedType));
    }
  }, [selectedType, bills]);

  const billTypes = ["all", ...new Set(bills.map((bill) => bill.bill_type))];

  const handleSelect = (type) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
    setTimeout(() => setDropdownVisible(false), 250);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
      setTimeout(() => setDropdownVisible(false), 250);
    } else {
      setDropdownVisible(true);
      setTimeout(() => setIsDropdownOpen(true), 10);
    }
  };

  return (
    <div className="md:max-w-[1400px] w-full mx-auto px-4 min-h-[600px] my-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Utility Bills</h1>

      <div className="mb-6 max-w-xs mx-auto relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Bill Type
        </label>
        <div
          className="border border-gray-200 rounded-md py-2 px-4 cursor-pointer flex items-center justify-between"
          onClick={toggleDropdown}
        >
          {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
          <ChevronDown
            className={`transition duration-400 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            strokeWidth={1}
          />
        </div>

        {dropdownVisible && (
          <div
            className={`absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md p-1.5 transform origin-top transition-all duration-300 ${
              isDropdownOpen
                ? "scale-y-100 opacity-100"
                : "scale-y-95 opacity-0 pointer-events-none"
            }`}
          >
            {billTypes.map((type) => (
              <div
                key={type}
                onClick={() => handleSelect(type)}
                className={`px-4 py-2 cursor-pointer rounded-md mb-1 flex items-center ${
                  selectedType === type
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-50"
                }`}
              >
                {selectedType === type && (
                  <Check className="w-4 h-4 mr-2 text-green-600" />
                )}
                <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBills.length > 0 ? (
          filteredBills.map((bill) => {
            // Read updated paid status from localStorage
            const storedBill = localStorage.getItem(`bill_${bill.id}`);
            let isPaid = false;

            if (storedBill) {
              try {
                const parsed = JSON.parse(storedBill);
                isPaid = parsed.paid === true;
              } catch (e) {
                console.error("Error parsing bill data:", e);
              }
            }

            return (
              <div
                key={bill.id}
                className="border border-gray-300 rounded-xl shadow p-6 flex flex-col justify-between relative bg-white hover:scale-102 hover:shadow-xl transition duration-500"
              >
                {isPaid && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-1">
                    <Check className="h-5 w-5" />
                  </div>
                )}

                <div className="flex items-center mb-4">
                  <img
                    src={bill.icon}
                    alt={bill.bill_type}
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{bill.organization}</h3>
                    <p className="text-sm text-gray-600 capitalize">
                      {bill.bill_type}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">
                      ৳{bill.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-medium">
                      {new Date(bill["due-date"]).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {isPaid ? (
                  <button
                    className="w-full bg-green-500 text-white py-2 rounded cursor-not-allowed"
                    disabled
                  >
                    Paid
                  </button>
                ) : (
                  <Link
                    to={`/bills/${bill.id}`}
                    className="block text-center bg-[#3A63D8] hover:bg-[#2A48B5] transition text-white py-2 rounded"
                  >
                    Pay
                  </Link>
                )}
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-10">
            <p>No bills found for this type.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bills;
