import { Mail, Phone, Snowflake } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative py-16 mb-12 overflow-hidden">

      <div className="relative z-10 md:max-w-[1400px] w-full mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-[#3A63D8] flex items-center gap-2">
              <Snowflake className="w-7 h-7 text-[#2A48B5]" />
              Contact FrostPay
            </h2>
            <p className="text-gray-700 text-lg">
              Whether you’re facing a frozen transaction or just need warm guidance, we’re here to help.
              Reach out any time—day or night.
            </p>
            <div className="text-gray-800 space-y-4 text-base">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#3A63D8]" />
                <a href="mailto:support@frostpay.com" className="hover:underline">support@frostpay.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#3A63D8]" />
                +880 123 456 7890
              </p>
              <p><strong>Support Hours:</strong> Always Open</p>
            </div>
          </div>

          <form className="backdrop-blur-xl bg-white/70 border border-blue-100 rounded-2xl p-8 space-y-6 shadow-xl ring-1 ring-inset ring-white/40 hover:ring-[#3A63D8] transition duration-300">
            <div>
              <label className="block text-gray-800 mb-1 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A63D8] bg-white/60 backdrop-blur-sm"
                placeholder="Frosty McUser"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-1 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A63D8] bg-white/60 backdrop-blur-sm"
                placeholder="you@frostmail.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-1 font-medium">Message</label>
              <textarea
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 resize-none focus:ring-[#3A63D8] bg-white/60 backdrop-blur-sm"
                rows="5"
                placeholder="I have a question about my snowflake credits..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3A63D8] text-white font-medium px-6 py-3 rounded-full hover:bg-[#2A48B5] transition shadow-md"
            >
              Send FrostMessage
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
