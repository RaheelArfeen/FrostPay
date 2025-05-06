import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1F2C] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Frost<span className="text-[#7FA9ED]">Pay</span>
            </h3>
            <p className="text-gray-300">
              Simplifying bill payments with a clean, winter-fresh approach.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/bills" className="text-gray-300 hover:text-white transition-colors">Bills</Link></li>
              <li><Link to="/profile" className="text-gray-300 hover:text-white transition-colors">My Profile</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
              <p>Email: support@frostpay.com</p>
              <p>Phone: +880 123 456 7890</p>
              <p>Address: Ice Tower, Dhaka, Bangladesh</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} FrostPay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;