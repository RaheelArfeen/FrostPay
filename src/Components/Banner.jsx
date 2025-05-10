import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Link } from 'react-router';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: "Pay All Your Bills in One Place",
    description:
      "Manage electricity, gas, water, internet and more with FrostPay's easy payment system.",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
  },
  {
    title: "Never Miss a Payment Again",
    description:
      "Get reminders for upcoming bills and pay them on time, every time.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Quick & Secure Payments",
    description:
      "Your financial data is protected with bank-level security while you enjoy fast transactions.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  },
];

const Banner = () => {
  const { user: currentUser } = useContext(AuthContext);
  const [isSlide, setIsSlide] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsSlide(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`relative w-full transition-all duration-700 ease-out ${isSlide ? "translate-y-0 opacity-100" : 'translate-y-3 opacity-0'}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={800}
        spaceBetween={10}
        className="w-full h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C] to-transparent opacity-70 z-10"></div>
              <div
                className="absolute inset-0 bg-cover bg-center z-0 transition duration-700 scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="relative z-20 h-full flex items-center">
                <div className="md:w-[1400px] mx-auto px-4">
                  <div className="max-w-lg animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-white/90 mb-8">{slide.description}</p>
                    <Link
                      to={currentUser ? '/bills' : '/register'}
                      className="inline-block px-8 py-3 bg-[#3A63D8] text-white rounded-md hover:bg-[#2A48B5] transition duration-400 hover:scale-105 text-sm"
                    >
                      {currentUser ? 'Pay Bills Now' : 'Get Started'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          className="custom-prev hidden md:flex absolute top-1/2 left-4 z-30 transform -translate-y-1/2 w-9 h-9 rounded-full items-center justify-center bg-white text-black cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          &#8592;
        </button>

        <button
          className="custom-next hidden md:flex absolute top-1/2 right-4 z-30 transform -translate-y-1/2 w-9 h-9 rounded-full items-center justify-center bg-white text-black cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        >
          &#8594;
        </button>

        <div className="swiper-pagination flex md:hidden justify-center mt-4 !static"></div>
      </Swiper>
    </div>
  );
};

export default Banner;
