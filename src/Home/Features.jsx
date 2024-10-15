const features = [
    { icon: "😀", title: "1 Crore+", description: "Happy Customers" },
    { icon: "📱", title: "Free", description: "Android Mobile App" },
    { icon: "⭐", title: "Rated 4.7/5", description: "On Google Play Store" },
    { icon: "💻", title: "Multi-Device", description: "Use together on Mobile/Desktop" },
    { icon: "👥", title: "Multi-User", description: "User Management Feature" }
  ];
  
  const Features = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  