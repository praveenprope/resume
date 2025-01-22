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
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-3xl opacity-30"></div>
      <div className="container mx-auto text-center relative z-10">
        <h3 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Benefits
        </h3>
        <p className="text-gray-300 mb-12">
          Discover the benefits of using our template generator.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.47)] transition-shadow duration-300"
            >
              <div className="text-5xl mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
