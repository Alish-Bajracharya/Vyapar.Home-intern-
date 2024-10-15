import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faChartLine, faCoins, faWifi, faWallet, faLock } from '@fortawesome/free-solid-svg-icons';

const benefits = [
  {
    title: 'Lifetime free basic usage',
    description:
      'Using our free GST accounting and billing software, you can seamlessly create custom invoices. Further, you can manage your dashboard and track inventory items. The free access provides you many other useful features.',
    additionalInfo:
      'We have kept all essential features of our business accounting tool accessible for free. The free features are available for lifetime for Android mobile users. Our aim behind free access is...',
    icon: faGift,
  },
  {
    title: 'Track your business status',
    description:
      'Vyapar business dashboard makes the entire management process seamless. You can check business cash flow, inventory status, open orders, and payment updates in one place.',
    additionalInfo:
      'With free GST billing software and invoicing tools, you can manage your business using...',
    icon: faChartLine,
  },
  {
    title: 'Manage cashflow seamlessly',
    description:
      'GST billing & accounting software allows businesses to record transactions. It helps track payments. Over 1 crore businesses have tried out our free billing software features.',
    additionalInfo:
      'Cashflow management is widely used for their billing, accounting, and many more business requirements...',
    icon: faCoins,
  },
  {
    title: 'Online/Offline Billing',
    description:
      'Using our billing tool, you need not stop business operations due to weak internet connectivity. You can use the offline billing features in the app to generate bills.',
    additionalInfo:
      'Vyapar app helps you generate invoices for your customers without requiring you to stay...',
    icon: faWifi,
  },
  {
    title: 'Provide multiple payment options',
    description:
      'Your customers are less likely to default on the payments if you provide multiple payment options for convenience. You can provide choices like UPI, QR, NEFT, IMPS, e-wallet, and credit/debit cards.',
    icon: faWallet,
  },
  {
    title: 'Keep data safe with backups',
    description:
      'Using our free GST software for billing in India, you can set up an automatic data backup, allowing you to safeguard the data stored in the app.',
    additionalInfo:
      'For additional safety, you can create a local backup too...',
    icon: faLock,
  },
];

const Benefits = () => {
  // State to track which benefit is expanded
  const [expanded, setExpanded] = useState(null);

  const toggleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8">
          Benefits of GST Billing Software
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8 ml-20">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index}>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={benefit.icon} className="text-red-500 text-3xl mr-4" />
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
                {expanded === index && <p className="text-gray-400 mt-1">{benefit.additionalInfo}</p>}
                <button 
                  className="text-red-500 mt-2" 
                  onClick={() => toggleReadMore(index)}
                >
                  {expanded === index ? '- Read less' : '+ Read more'}
                </button>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src="https://vyaparapp.in/v/z/wp-content/uploads/2024/05/benefits_of_gst_billing_and_invoicing_software.webp"
              alt="Mobile App"
              className="w-2/4 h-4/5 mt-12 "
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8 mr-20">
            {benefits.slice(3).map((benefit, index) => (
              <div key={index + 3}>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={benefit.icon} className="text-red-500 text-3xl mr-4" />
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
                {expanded === index + 3 && <p className="text-gray-400 mt-1">{benefit.additionalInfo}</p>}
                <button 
                  className="text-red-500 mt-2" 
                  onClick={() => toggleReadMore(index + 3)}
                >
                  {expanded === index + 3 ? '- Read less' : '+ Read more'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
