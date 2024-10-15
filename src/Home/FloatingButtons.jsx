import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div>
          {/* Download Now Button */}
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
            <button className="bg-red-500 font-semibold text-white px-14 py-3 rounded-full shadow-lg hover:bg-red-600">
              Download Vyapar Now
            </button>
          </div>

          {/* Chat Button */}
          <div className="fixed bottom-4 right-4">
            <button className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600">
              <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 0a2 2 0 01-2 2H8l-2 2V4a2 2 0 012-2h8a2 2 0 012 2v12z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
