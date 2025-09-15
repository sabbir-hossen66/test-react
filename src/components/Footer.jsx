import { Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
     <footer className="bg-black border-t border-gray-800 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex items-center justify-between mb-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">C</span>
            </div>
            <span className="text-white text-2xl font-semibold">CirriNote</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-800">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © CirriNote 2025
          </div>

          {/* Credits */}
          <div className="text-gray-500 text-sm">
            Crafted with passion by CreoWis
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;