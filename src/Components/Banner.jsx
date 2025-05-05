import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext, useState } from "react";

const slides = [
  {
    title: "Pay All Your Bills in One Place",
    description: "Manage electricity, gas, water, internet and more with FrostPay's easy payment system.",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Never Miss a Payment Again",
    description: "Get reminders for upcoming bills and pay them on time, every time.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    color: "from-teal-600 to-teal-800"
  },
  {
    title: "Quick & Secure Payments",
    description: "Your financial data is protected with bank-level security while you enjoy fast transactions.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    color: "from-purple-600 to-purple-800"
  }
];

const Banner = () => {
  const { user } = useContext(AuthContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      <div className='absolute inset-0 bg-gradient-to-r from-[#1A1F2C] to-transparent opacity-70 z-10'></div>

      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700 scale-105"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-white/90 mb-8">
              {slides[currentSlide].description} 
            </p>
            <Link
              to={user ? "/bills" : "/register"}
              className="inline-block px-6 py-3 bg-[#3A63D8] text-white rounded-md hover:bg-[#2A48B5] transition-transform hover:scale-105"
            >
              {user ? "Pay Bills Now" : "Get Started"}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>

      {/* Carousel Left/Right Buttons */}
      <button
        onClick={goToPrevSlide}
        disabled={currentSlide === 0}
        className={`absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black w-8 h-8 flex items-center justify-center rounded-full z-30 transition ${
          currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        &#8592;
      </button>

      <button
        onClick={goToNextSlide}
        disabled={currentSlide === slides.length - 1}
        className={`absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black w-8 h-8 flex items-center justify-center rounded-full z-30 transition ${
          currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Banner;
