import React from "react";

const Companies = () => {
  const companies = [
    {
      name: "TechNova",
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=200&auto=format&fit=crop&q=60&crop=center",
      description: "Leading technology solutions provider",
    },
    {
      name: "EcoEnergy",
      logo: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=200&h=200&auto=format&fit=crop&q=60&crop=center",
      description: "Sustainable energy solutions",
    },
    {
      name: "FinSecure",
      logo: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=200&h=200&auto=format&fit=crop&q=60&crop=center",
      description: "Trusted financial services",
    },
    {
      name: "DataFlow",
      logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=200&auto=format&fit=crop&q=60&crop=center",
      description: "Data management experts",
    },
    {
      name: "BuildRight",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&auto=format&fit=crop&q=60&crop=center",
      description: "Construction and development",
    },
    {
      name: "CodeMatrix",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&auto=format&fit=crop&q=60&crop=center",
      description: "Software development innovators",
    },
  ];

  return (
    <section className="py-16">
      <div className="md:max-w-[1400px] w-full mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Companies That Trust Us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white hover:shadow-lg transition-shadow rounded-lg shadow-md"
            >
              <div className="h-16 w-16 rounded-full overflow-hidden mb-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-center mb-1">
                {company.name}
              </h3>
              <p className="text-gray-500 text-sm text-center">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
