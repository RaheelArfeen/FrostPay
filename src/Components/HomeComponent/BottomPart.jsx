import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const BottomPart = () => {
  const { user: currentUser } = useContext(AuthContext);

  return (
    <section className="py-16 bg-gradient-to-r from-[#2A48B5] to-[#1A1F2C] relative overflow-hidden">
      <div className="md:w-[1400px] mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
          Ready to Simplify Your Bill Payments?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in">
          Join thousands of users who trust FrostPay for their utility bill management.
          Sign up today and experience the convenience!
        </p>

        <Link
          to={currentUser ? "/bills" : "/register"}
          className="inline-block px-6 py-3 text-lg font-semibold rounded-lg bg-white text-[#1A2C92] hover:bg-[#F1F0FB] transition-all duration-300 transform hover:scale-105 animate-fade-in"
        >
          {currentUser ? "Go to Dashboard" : "Create Free Account"}
        </Link>
      </div>
    </section>
  );
};

export default BottomPart;
