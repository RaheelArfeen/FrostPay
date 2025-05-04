import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Simulated user data (replace with real auth logic later)
  const currentUser = {
    displayName: 'Jane Doe',
    email: 'jane@example.com',
    photoURL: '',
  };
  const userBalance = 2500;

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleLogout = async () => {
    // Simulated logout logic
    console.log('Logging out...');
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-frost-900 text-xl font-bold">
              Frost<span className="text-frost-600">Pay</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-frost-600 px-3 py-2 hover:scale-105 transition-transform">Home</Link>
            <Link to="/bills" className="text-gray-700 hover:text-frost-600 px-3 py-2 hover:scale-105 transition-transform">Bills</Link>
            <Link to="/profile" className="text-gray-700 hover:text-frost-600 px-3 py-2 hover:scale-105 transition-transform">My Profile</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="relative group">
                <div className="rounded-full h-8 w-8 overflow-hidden border border-gray-300 cursor-pointer">
                  <img
                    src={currentUser.photoURL || ''}
                    alt={currentUser.displayName || 'User'}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50">
                  <div className="px-4 py-2 text-sm font-semibold border-b">My Account</div>
                  <div className="px-4 py-2 text-sm">Balance: ৳{userBalance.toLocaleString()}</div>
                  <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Log out</button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="border border-gray-300 px-4 py-1 rounded hover:scale-105 transition-transform">Login</Link>
                <Link to="/register" className="bg-frost-600 text-white px-4 py-1 rounded hover:scale-105 transition-transform">Register</Link>
              </>
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:scale-105 transition-transform"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-3 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-frost-600 hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/bills" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-frost-600 hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>Bills</Link>
              <Link to="/profile" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-frost-600 hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>My Profile</Link>

              {currentUser ? (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center px-3 pb-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-300">
                      <img src={currentUser.photoURL || ''} alt={currentUser.displayName || 'User'} className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{currentUser.displayName || 'User'}</div>
                      <div className="text-sm font-medium text-gray-500">{currentUser.email}</div>
                    </div>
                  </div>
                  <div className="px-3 py-2 text-sm text-gray-700">Balance: ৳{userBalance.toLocaleString()}</div>
                  <button onClick={handleLogout} className="w-full mt-2 border px-4 py-2 rounded hover:scale-105 transition-transform">Log out</button>
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full border border-gray-300 text-center py-2 rounded hover:scale-105 transition-transform">Login</Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="block w-full bg-frost-600 text-white text-center py-2 rounded hover:scale-105 transition-transform">Register</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
