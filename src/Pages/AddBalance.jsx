import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PlusCircle, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const AddBalance = () => {
  const { userBalance, setUserBalance } = useContext(AuthContext);
  const [amount, setAmount] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddBalance = () => {
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) {
      toast.error("Please enter a valid positive amount.");
      return;
    }

    setIsAdding(true);

    setTimeout(() => {
      const newBalance = userBalance + value;
      setUserBalance(newBalance);
      localStorage.setItem("userBalance", newBalance.toString());
      setAmount("");
      setIsAdding(false);

      toast.success("Balance added successfully!");
    }, 500);
  };

  return (
    <div className="py-20 mb-20 px-4 sm:px-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
          <div className="px-6 py-8">
            <div className="w-full">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Add Balance
                </h2>
                <p className="text-gray-600 mt-1">
                  Top up your account for transactions
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter Amount
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <span className="text-gray-500 text-lg">৳</span>
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 
                             focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                             text-gray-800 text-lg transition-all duration-200
                             placeholder:text-gray-400"
                    placeholder="e.g. 500"
                    step="any"
                  />
                </div>
              </div>

              <button
                onClick={handleAddBalance}
                className={`relative overflow-hidden group w-full py-3 px-6 rounded-xl font-medium text-white bg-gradient-to-r bg-[#3A63D8] hover:bg-[#2A48B5] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A63D8] shadow-md hover:shadow-lg active:shadow-sm ${
                  isAdding ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                <span className="absolute top-0 left-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                <span className="flex items-center justify-center space-x-2">
                  <PlusCircle className="h-5 w-5" />
                  <span>{isAdding ? "Processing..." : "Add Balance"}</span>
                </span>
              </button>

              <div className="w-full p-4 mt-6 bg-gradient-to-br from-[#4c74e3] to-[#2d53bc] rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-100 text-sm font-medium uppercase tracking-wider">
                      Current Balance
                    </h3>
                    <p className="text-white text-2xl font-bold mt-1 flex items-center">
                      ৳
                      {userBalance.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBalance;
