const subsections = [
  {
      title: 'Create GST Bills for customers and share them online',
      description: 'Vyapar billing software allows you to generate GST invoices for clients and share them digitally. This tool aids in establishing a professional brand image with its essential GST billing functionalities.',
      image: 'https://vyaparapp.in/v/z/wp-content/uploads/2024/05/make_gst_bills_and_share_with_your_customers.webp',
      readMore: true
    },
  {
    title: 'Manage Inventory Seamlessly',
    description: 'Vyapar brings the finest inventory management software with incredibly effective features. It helps improve business performance.',
    image: 'https://vyaparapp.in/v/z/wp-content/uploads/2024/05/check_inventory_instantly-1024x792.webp',
    readMore: true
  },
  {
    title: 'Send Payment Reminders to Recover Dues',
    description: 'Vyapar’s accounting and billing software assists small and medium-sized enterprises (SMEs) in securing prompt payments and managing their cash flow effectively.',
    image: 'https://vyaparapp.in/v/z/wp-content/uploads/2024/05/remind_to_recover_payments.webp',
    readMore: true
  },
  {
    title: 'GST Filing Made Simpler and Faster',
    description: 'Filing GST can be a daunting task for entrepreneurs. With Vyapar billing software, generating GST reports becomes effortless, streamlining the entire filing procedure.',
    image: 'https://vyaparapp.in/v/z/wp-content/uploads/2024/05/gst_filing_made_simplerAndFaster-1024x781.webp',
    readMore: true
  }
];

const Subsection = () => {
return (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto space-y-12">
      {subsections.map((section, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-1 ml-56 md:grid-cols-2 items-center gap-6 ${index % 2 === 1 ? 'md:grid-cols-2-reverse' : ''}`}>
          <div>
            <h2 className="text-4xl  font-bold text-gray-900">{section.title}</h2>
            <p className="mt-4 text-gray-600">{section.description}</p>
            {section.readMore && (
              <button className="mt-4 text-red-500">+ Read More</button>
            )}
          </div>
          <div>
            <img 
              src={section.image} 
              alt={section.title} 
              className="mx-auto w-64 h-64 object-contain md:w-72 md:h-72" 
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);
};

export default Subsection;