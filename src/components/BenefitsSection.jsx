const BenefitsSection = () => {
  const benefits = [
    {
      title: "Save Time",
      description: "Generate templates in seconds and focus on what matters.",
      icon: "⏱️",
    },
    {
      title: "Professional Quality",
      description: "Access expertly designed templates for any purpose.",
      icon: "🎨",
    },
    {
      title: "PDF Download",
      description: "Easily download your templates in PDF format for convenience.",
      icon: "📄",
    },
    {
      title: "User-Friendly",
      description: "A simple interface that anyone can use with ease.",
      icon: "👌",
    },
  ];

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto text-center">
      <h3 className="text-4xl font-bold mb-8 text-[#f59f7a]">Benifits</h3>
      <p className="text-gray-600 mb-12">
          Discover the benefits of using our template generator.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 text-blue-600">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
