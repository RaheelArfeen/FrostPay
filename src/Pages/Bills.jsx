import React, { useEffect, useState } from 'react';

const Bills = () => {
    const [partners, setPartners] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        fetch('/bills.json')
            .then(res => res.json())
            .then(data => setPartners(data))
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <section className={`py-16 bg-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Partner Organizations</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {partners.length > 0 ? (
                        partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-xl border shadow-sm transition-transform hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="p-6 flex-grow">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={partner.icon}
                                            alt={partner.bill_type}
                                            className="w-12 h-12 mr-4"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{partner.organization}</h3>
                                            <p className="text-sm text-gray-600 capitalize">{partner.bill_type}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-t">
                                    <button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg"
                                        disabled
                                    >
                                        Pay
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p>No partner organizations found.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
    
};

export default Bills;
