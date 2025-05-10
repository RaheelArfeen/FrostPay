import React, { useEffect, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <section
        className={`py-16 transition-opacity duration-700 bg-white ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:w-[1400px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose FrostPay?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg px-8 py-4 transform transition-all duration-500 hover:-translate-y-2">
              <div className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D3E4FD] mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-[#2A48B5]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Quick Payments</h3>
                  <p className="text-gray-600 mt-2">
                    Pay your bills in just a few clicks without any hassle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg px-8 py-4 transform transition-all duration-500 hover:-translate-y-2 delay-100">
              <div className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D3E4FD] mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-[#2A48B5]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Secure Platform</h3>
                  <p className="text-gray-600 mt-2">
                    Your financial data is protected with bank-level encryption.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg px-8 py-4 transform transition-all duration-500 hover:-translate-y-2 delay-200">
              <div className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D3E4FD] mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-[#2A48B5]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Timely Reminders</h3>
                  <p className="text-gray-600 mt-2">
                    Never miss a payment with our convenient due date reminders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
