import { Users, Building, Handshake, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#3A63D8] text-white p-4 rounded-lg hidden md:block">
                <p className="font-bold text-3xl">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          {/* Right column with content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About FrostPay</h2>
            <p className="text-lg text-gray-700 mb-6">
              FrostPay was founded in 2020 with a simple mission: to make bill payments simple, 
              secure, and stress-free for everyone. Our platform has since grown to serve 
              thousands of users across Bangladesh, helping them manage their utility bills 
              efficiently from one central place.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our dedicated team of professionals works tirelessly to ensure that your experience 
              is seamless and your data is protected. We partner with leading utility providers 
              to offer you the most comprehensive bill payment solution available.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-[#F1F0FB] rounded-lg">
                  <Users className="h-6 w-6 text-[#3A63D8]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">20,000+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-[#F1F0FB] rounded-lg">
                  <Building className="h-6 w-6 text-[#3A63D8]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">15+</h3>
                  <p className="text-gray-600">Utility Partners</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-[#F1F0FB] rounded-lg">
                  <Handshake className="h-6 w-6 text-[#3A63D8]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">99.9%</h3>
                  <p className="text-gray-600">Customer Satisfaction</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-[#F1F0FB] rounded-lg">
                  <BriefcaseBusiness className="h-6 w-6 text-[#3A63D8]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">500,000+</h3>
                  <p className="text-gray-600">Bills Processed</p>
                </div>
              </div>
            </div>
            
            <button className="bg-[#3A63D8] hover:bg-[#2A48B5] text-white px-8 py-3 rounded-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;