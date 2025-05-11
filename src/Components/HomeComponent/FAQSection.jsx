import { useState } from 'react';

const FAQSection = () => {
  const faqItems = [
    {
      question: "How do I pay my bills with FrostPay?",
      answer: "Simply sign up for an account, add your balance, navigate to the Bills section, and select the bill you want to pay. Follow the guided payment process to complete your transaction securely."
    },
    {
      question: "Is FrostPay secure?",
      answer: "Yes, FrostPay uses bank-level encryption to protect all your financial data. We employ advanced security measures to ensure your personal information and transactions remain secure at all times."
    },
    {
      question: "Can I schedule automatic payments?",
      answer: "Yes, you can set up automatic payments for recurring bills. Just select the bill you want to automate, click on 'Set up Auto-pay', and choose your preferred payment schedule."
    },
    {
      question: "What payment methods are accepted?",
      answer: "FrostPay currently accepts bank transfers, credit cards, debit cards, and mobile banking payments. We're constantly working to add more payment options for your convenience."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team through the 'Help' section in your account, via email at support@frostpay.com, or by phone at +880 123 456 7890. We're available 24/7 to assist you."
    }
  ];

  const [openItem, setOpenItem] = useState(null);
  const toggleItem = (index) => setOpenItem(openItem === index ? null : index);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="md:max-w-[1400px] w-full mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#3A63D8]">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Have questions about using FrostPay? Here are some of the most common inquiries our users ask. If you need more help, we're just a message away.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#3A63D8] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#2A48B5] transition"
            >
              Contact Support
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openItem === index;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium hover:bg-blue-100 transition"
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`px-6 text-gray-600 transition-all duration-700 ${
                      isOpen ? 'max-h-96 py-2 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
