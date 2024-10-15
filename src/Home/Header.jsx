const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <div className="flex items-center">
        <img src="https://vyaparwebsiteimages.vypcdn.in/logo1.svg" alt="Vyapar Logo" className="h-10" />
      </div>
      <nav>
        <ul className="flex space-x-6 text-gray-600">
          <li>Try Mobile App</li>
          <li>Pricing</li>
          <li>About Us</li>
          <li>Desktop</li>
          <li>Careers</li>
          <li>Partner with Us</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
