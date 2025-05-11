import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "sonner";
import "./CSS/Header.css";

const Navbar = () => {
  const { logOut, userBalance, loading } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    setTimeout(() => {
      logOut();
      toast.success("Successfully logged out!");
    }, 300);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setDropdownOpen(false);
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[65px] flex justify-center items-center bg-white border-b border-gray-200 sticky top-0 z-50">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-[#1A1F2C] text-xl font-bold">
              Frost<span className="text-[#3A63D8]">Pay</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className="text-[#374151] hover:text-[#3A63D8] px-3 py-2 hover:scale-105 transition-transform"
            >
              Home
            </NavLink>
            <NavLink
              to="/bills"
              className="text-[#374151] hover:text-[#3A63D8] px-3 py-2 hover:scale-105 transition-transform"
            >
              Bills
            </NavLink>
            <NavLink
              to="/contact"
              className="text-[#374151] hover:text-[#3A63D8] px-3 py-2 hover:scale-105 transition-transform"
            >
              Contact
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <div className="relative">
                  <div
                    className="rounded-full h-10 w-10 overflow-hidden border-2 border-gray-300 cursor-pointer hover:scale-110 hover:border-[#7FA9ED] transition"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg">
                        {user?.displayName
                          ? user.displayName.charAt(0).toUpperCase()
                          : "U"}
                      </div>
                    )}
                  </div>

                  <div className="absolute top-0 -right-1 h-3.5 w-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 w-60 bg-white shadow-lg border border-gray-200 rounded-md z-50 mt-1.5">
                    <div className="py-2 px-3 border-b border-gray-200 text-sm font-semibold">
                      <span className="text-gray-400 font-normal">
                        signed in As
                      </span>{" "}
                      <br /> {user.email}
                    </div>
                    <div className="p-1 border-b border-gray-200">
                      <div className="hover:bg-gray-100 px-2 py-1.5 transition rounded-md flex items-center justify-between">
                        <span>Balance:</span> ৳
                        {userBalance ? userBalance.toLocaleString() : "0"}
                      </div>
                    </div>
                    <NavLink to="/profile" className="block px-1 pt-1">
                      <div className="hover:bg-gray-100 px-2 py-1 rounded-md transition">
                        Profile
                      </div>
                    </NavLink>
                    <NavLink to="/update-profile" className="block px-1">
                      <div className="hover:bg-gray-100 px-2 py-1 rounded-md transition">
                        Update Profile
                      </div>
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="block px-1 pb-1 w-full text-left"
                    >
                      <div className="hover:bg-gray-100 px-2 py-1 rounded-md transition">
                        Log Out
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="border border-gray-300 bg-[#F1F5F9] px-4 py-1 rounded hover:scale-105 transition-transform"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#3A63D8] text-white px-4 py-1 rounded hover:scale-105 transition-transform"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:scale-105 transition-transform"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-3 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className="block px-3 py-2 text-base font-medium text-[#374151] hover:text-[#3A63D8] hover:scale-105 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/bills"
                className="block px-3 py-2 text-base font-medium text-[#374151] hover:text-[#3A63D8] hover:scale-105 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Bills
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-[#374151] hover:text-[#3A63D8] hover:scale-105 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>

              {user ? (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center px-3 pb-3">
                    <div
                      className="rounded-full h-9 w-9 overflow-hidden border border-gray-300 cursor-pointer hover:scale-110 transition"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {user?.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={user.displayName}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg">
                          {user?.displayName
                            ? user.displayName.charAt(0).toUpperCase()
                            : "U"}
                        </div>
                      )}
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.displayName || "User"}
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-2 text-sm text-[#374151]">
                    <span className="font-semibold">Balance:</span> ৳
                    {userBalance ? userBalance.toLocaleString() : "0"}
                  </div>
                  <div className="px-3 py-2 text-sm text-[#374151]">
                    <span className="font-semibold">Email:</span>{" "}
                    {user.email || "example@gmail.com"}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full mt-2 border px-4 py-2 rounded hover:scale-105 transition-transform"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block w-full border border-gray-300 bg-[#F1F5F9] text-center py-2 rounded hover:scale-105 transition-transform"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-[#3A63D8] text-white text-center py-2 rounded hover:scale-105 transition-transform"
                  >
                    Register
                  </Link>
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
