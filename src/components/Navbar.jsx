import  { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setPage('home');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4 shadow-lg border-b border-gray-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0">
            <a href="#home" onClick={handleNavClick} className="text-2xl font-bold text-white flex items-center gap-2 cursor-pointer">
              <span className="text-orange-500">🔥</span> 
              MairaTahr
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={handleNavClick} className="text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium">
                {link.name}
              </a>
            ))}
            
            <a href="/Resume.pdf" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium">
              Download CV
            </a>

            <div className="flex items-center space-x-4 border-l border-gray-700 pl-6 ml-2">
              <button onClick={() => setPage('login')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Login
              </button>
              <button onClick={() => setPage('signup')} className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium">
                Sign Up
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 absolute w-full shadow-xl border-b border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={handleNavClick} className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-orange-500 hover:bg-gray-800 rounded-md">
                {link.name}
              </a>
            ))}
            
            <a href="/Resume.pdf" className="block w-full text-center mt-4 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-3 rounded-md transition-all duration-300 font-medium mb-4">
              Download CV
            </a>

            <div className="border-t border-gray-800 pt-4 px-3 space-y-3">
              <button onClick={() => { setPage('login'); setIsMobileMenuOpen(false); }} className="block w-full text-center text-gray-300 hover:text-white font-medium py-2">
                Login
              </button>
              <button onClick={() => { setPage('signup'); setIsMobileMenuOpen(false); }} className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md transition-all duration-300 font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;