import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "sonner";

const BillsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userBalance, setUserBalance } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/bills.json");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedBill = localStorage.getItem(`bill_${id}`);
    if (storedBill) {
      const parsed = JSON.parse(storedBill);
      if (parsed.paid) {
        setIsPaid(true);
      }
    }
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  const bill = Array.isArray(data)
    ? data.find((card) => String(card.id).trim() === String(id).trim())
    : null;

  if (!bill) {
    return (
      <div className="md:max-w-[1400px] w-full mx-auto px-4 min-h-[600px] my-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Bill Not Found</h1>
        <p className="text-center text-gray-600">The requested bill could not be found.</p>
      </div>
    );
  }

  const dueDate = new Date(bill["due-date"]);
  const currentDate = new Date();
  const isDueDatePassed = currentDate > dueDate;

  const handlePayBill = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsPaid(true);
      setIsProcessing(false);
      const updatedBalance = userBalance - bill.amount;
      setUserBalance(updatedBalance);

      // Save full bill object with payment info
      const billToStore = {
        ...bill,
        paid: true,
        paidAt: new Date().toISOString(),
      };
      localStorage.setItem(`bill_${id}`, JSON.stringify(billToStore));

      // Update stored balance
      localStorage.setItem("userBalance", updatedBalance.toString());

      toast.success(`${bill.bill_type} bill paid successfully`);
    }, 1000);

    setTimeout(() => {
      navigate("/bills");
    }, 3000);
  };

  return (
    <div className="md:max-w-[1400px] w-full w-full mx-auto px-4 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg my-32 shadow-lg">
        <div className="pt-6 relative">
          {!isPaid && isDueDatePassed && (
            <div className="absolute top-0 left-0 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
              Due Date Passed
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center relative">
              <img src={bill.icon} alt={bill.organization} className="w-36 h-36 mb-4" />
              <h2 className="text-2xl font-bold text-center">{bill.organization}</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Bill Information</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Bill Type:</span>
                    <span className="font-medium capitalize">{bill.bill_type}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">৳{bill.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-medium">{new Date(bill["due-date"]).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-gray-600">Your Balance:</span>
                    <span className="font-medium">৳{userBalance.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                {isPaid ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
                    This bill has been paid successfully.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userBalance < bill.amount && (
                      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded text-left">
                        Your balance is insufficient to pay this bill.
                      </div>
                    )}
                    <button
                      onClick={handlePayBill}
                      className="bg-[#3A63D8] hover:bg-[#2A48B5] text-white py-2 px-4 rounded"
                      disabled={isProcessing || userBalance < bill.amount}
                    >
                      {isProcessing ? "Processing..." : "Pay Bill"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => navigate("/bills")}
            className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer transition"
          >
            Back to Bills
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillsDetail;
