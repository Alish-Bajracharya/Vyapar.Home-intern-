const Hero = () => {
    return (
      <section className="flex flex-col lg:flex-row items-center justify-between bg-gray-50 py-16">
        <div className="text-center lg:text-left lg:max-w-md px-4 ml-44">
          <h1 className="text-6xl font-bold text-gray-900">
            GST Billing Software in India for Small Businesses
          </h1>
          <p className="text-base  mt-4 text-gray-600">
          Manage your business professionally with Vyapar, India’s leading software for billing, inventory, and accounting. Join 1 Cr+ satisfied SMEs in India who trust Vyapar.
          </p>
          <button className="mt-8 text-xl  bg-red-500 text-white py-3 px-14 rounded-xl">
            Download Vyapar Now!
          </button>
        </div>
        <img
          src="https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/new-vyapar-hero.webp"
          alt="Vyapar Software"
          className="mt-10 lg:mt-0 lg:ml-40 mx-auto lg:max-w-md"
        />
      </section>
    );
  };
  
  export default Hero;
  