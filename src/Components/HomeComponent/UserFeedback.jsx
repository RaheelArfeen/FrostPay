import React, { useEffect, useState } from "react";


const UserFeedback = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <section
        className={`py-16 bg-white transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg transform transition-all duration-500 hover:shadow-xl">
              <div className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span
                        key={i}
                        className="animate-pulse"
                      >
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 flex-grow">
                    "FrostPay has simplified my bill payments completely. I used to forget due dates, but now everything is organized in one place."
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#D3E4FD] flex items-center justify-center">
                      <span className="text-frost-700 font-medium">RA</span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">Rafsan Ahmed</h4>
                      <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg transform transition-all duration-500 hover:shadow-xl">
              <div className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span
                        key={i}
                        className="animate-pulse"
                      >
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 flex-grow">
                    "As a busy professional, I love that I can pay all my bills in one go. The interface is clean, easy to use, and the process is quick and hassle-free."
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#D3E4FD] flex items-center justify-center">
                      <span className="text-frost-700 font-medium">SK</span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">Sumaya Khan</h4>
                      <p className="text-sm text-gray-500">
                        Chittagong, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg hidden lg:block transform transition-all duration-500 hover:shadow-xl delay-200">
              <div className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span
                        key={i}
                        className="animate-pulse"
                      >
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 flex-grow">
                    "The best feature is the balance tracking. I know exactly how much I'm spending on utilities each month. Very helpful!"
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#D3E4FD] flex items-center justify-center">
                      <span className="text-frost-700 font-medium">MR</span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">Mahabub Rahman</h4>
                      <p className="text-sm text-gray-500">
                        Sylhet, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserFeedback;
