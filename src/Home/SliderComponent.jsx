import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SliderComponent = () => {
  const slides = [
    {
      title: 'Freelance Professionals',
      content:
        'Vyapar billing software and accounting tools are suitable for freelancers. They can create professional quotes and invoices for their customers and work independently.',
      image:
        'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/freelance%20professional.webp',
    },
    {
      title: 'Lifestyle and Fashion',
      content:
        'Vyapar helps lifestyle and fashion businesses manage their invoices and inventory efficiently. It ensures seamless billing operations for various customer demands.',
      image:
        'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/fashion%20photoshoot-pana.webp',
    },
    {
      title: 'Retail Store',
      content: 'For retail stores, Vyapar helps track inventory, manage orders, and create professional invoices for customers, simplifying store management.',
      image: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/retail_shop.webp',
    },
    {
      title: 'Supermarket Chains',
      content: 'Supermarket chains can use Vyapar to track large inventories, manage orders efficiently, and generate invoices, making operations smooth and error-free.',
      image: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/Supermarket.webp',
    },
    {
      title: 'Medical Shop and Pharmacies',
      content: 'Pharmacies can track inventory, generate professional invoices, and manage prescriptions and customer records seamlessly using Vyapar software.',
      image: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/Pharmacist-bro.webp',
    },
    {
      title: 'Startups and SMEs',
      content: 'Startups and SMEs can benefit from Vyapar’s comprehensive billing and accounting tools, enabling them to scale their operations efficiently.',
      image: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/business.webp',
    },
    {
      title: 'Construction Business',
      content: 'Vyapar helps construction businesses manage invoices, track payments, and manage cash flow seamlessly for various projects.',
      image: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/construction-cuate.webp',
    },  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-tight mb-6">
        Built for your Industry
      </h2>
      <p className="text-lg md:text-xl text-gray-600 text-center leading-relaxed max-w-3xl mx-auto mb-10">
      Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.</p>


      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-white text-gray-500 hover:text-gray-800 focus:outline-none p-2 rounded-full shadow-md"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex items-center">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-1/3 h-full object-cover"
          />
          <div className="p-6 text-left w-2/3">
            <h3 className="text-2xl font-semibold mb-4">{slides[currentSlide].title}</h3>
            <p className="text-lg">{slides[currentSlide].content}</p>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-white text-gray-500 hover:text-gray-800 focus:outline-none p-2 rounded-full shadow-md"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
