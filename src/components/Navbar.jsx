import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                  <span className="text-black font-bold text-lg">C</span>
                </div>
                <span className="text-white text-xl font-semibold">CirriNote</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                  About
                </a>
                <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Features
                </a>
                <a href="#faqs" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                  FAQs
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>

            {/* Try Now Button and Mobile menu button */}
            <div className="flex items-center space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium border border-gray-600 transition-all duration-200 hover:border-gray-500">
                🛒 Try Now
              </button>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-400 hover:text-white focus:outline-none focus:text-white p-2"
                >
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-gray-800">
                <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200">
                  About
                </a>
                <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200">
                  Features
                </a>
                <a href="#faqs" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200">
                  FAQs
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;