import { useState } from 'react';

const faqs = [
  {
    question: "Which is the best software for billing?",
    answer: "Vyapar app is the best billing software available for SMEs in India. The Vyapar app provides access to a range of useful features. They can make the business management process seamless for business owners. Using our billing tool, you can save a lot of time and effort required in creating GST invoices. You can use automation tools, managing inventory using tracking features. Further, you can create reports using stored data, and much more."
  },
  {
    question: "What is billing software?",
    answer: "Billing software helps in managing the tracking of services and products sold to customers."
  },
  {
    question: "How much does a billing software cost?",
    answer: "The cost varies depending on the features and the provider. Some options offer a free basic version."
  },
  {
    question: "Which software is best for billing?",
    answer: "Vyapar, Tally, and Zoho are popular billing software options in India."
  },
  {
    question: "Is there free billing software?",
    answer: "Yes, Vyapar offers a free version with basic billing features."
  },
  {
    question: "Which software is used for GST billing?",
    answer: "Vyapar is widely used for GST billing due to its compliance with GST regulations."
  },
  {
    question: "Which is the best free billing software for PC?",
    answer: "Zoho Invoice and Vyapar offer free versions that work well for PCs."
  },
  {
    question: "Which is the best free billing software in India?",
    answer: "Vyapar is a highly rated free billing software in India."
  },
  {
    question: "How do I invoice clients for free?",
    answer: "You can use free tools like Zoho Invoice or Vyapar's free version to create and send invoices."
  },
  {
    question:"What is online billing software?",
    answer:"Online billing software is used to create bills for customers online. The billing tool is used by businesses to get paid for a contract. The billing software that makes online bills do not require you to download the app. You can go to online billing software by Vyapar, enter details for the invoice to create GST bills. Once generated, you can send them over to your customers."
  },
  {
    question:"What is the cheapest billing software?",
    answer:"Vyapar brings you the cheapest billing software that comes with various accounting features. You can use the app at a small subscription cost. It helps create professional invoices for customers. Using affordable billing software, you can reduce the cost of operating your business. After all, Vyapar assists you in various business management tasks."
  },
  {
    question:"What is offline invoicing",
    answer:"Offline invoicing refers to creating invoices using offline invoicing software. It doesn’t have the requirement of an active internet connection. Using offline invoicing tool features is crucial for most business owners in India. It is due to the lack of connectivity in rural areas. Many businesses can’t access the internet during load shedding. Long hours of a power cut makes it impossible to bill without offline access. So they must have the best invoicing software for Windows and Mac like Vyapar. Using the Vyapar invoicing app makes it easier for them to create GST invoices without internet access. The customers don’t have to wait due to internet connectivity issues. Vyapar ensures that the data is safe by helping businesses enable automatic data backups."
  },
  {
    question:"What is offline billing software?",
    answer:"Offline billing software creates professional GST bills for customers without an active internet connection. An offline billing tool is helpful for businesses in poor network connectivity. Regions like hilly and rural regions are best examples. Using the offline version helps ensure that customers get uninterrupted billing experience. The app data remains secure as the business owner can also do local backups. Further, the app can set up automatic backups too."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-8 px-4 lg:px-8">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto mt-6 bg-white rounded-lg shadow">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 px-6 flex justify-between items-center text-gray-700 font-semibold hover:bg-gray-100"
            >
              {faq.question}
              <span className="text-red-500">
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-black-600 bg-pink-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
