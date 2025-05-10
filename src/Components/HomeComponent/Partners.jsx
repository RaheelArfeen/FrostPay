import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee'

const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        fetch('/bills.json')
            .then(res => res.json())
            .then(data => setPartners(data))
            .catch(err => console.error('Failed to load partners:', err));
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <section className={`py-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="md:w-[1400px] mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Partner Organizations</h2>
                <div>
                    <Marquee>
                        <div className='flex overflow-hidden h-[200px]'>
                            {partners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center p-4 rounded-lg h-[170px] ml-6 min-w-[230px] transition-all duration-300 border-4 border-transparent bg-[#ffffffeb] hover:border-[#7FA9ED]"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="h-20 w-20 flex items-center justify-center mb-3">
                                        <img src={partner.icon} alt={partner.bill_type} className="max-h-full max-w-full" />
                                    </div>
                                    <p className="text-center font-medium">{partner.organization}</p>
                                    <p className="text-center text-sm text-gray-500 capitalize">{partner.bill_type}</p>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Partners;
