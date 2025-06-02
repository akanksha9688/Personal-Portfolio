import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'hero', offset: -100 },
  { name: 'About', to: 'about', offset: -80 },
  { name: 'Projects', to: 'projects', offset: -80 },
  { name: 'Skills', to: 'skills', offset: -80 },
  { name: 'Contact', to: 'contact', offset: -80 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-lg bg-black/70' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <RouterLink to="/" className="flex items-center">
            {/* <Code size={28} className="text-primary-500 mr-2" /> */}
            {/* <span className="text-xl font-bold gradient-text">Darpan</span> */}
          </RouterLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="text-white/80 hover:text-primary-500 cursor-pointer transition-colors duration-300"
              >
                {item.name}
              </ScrollLink>
            ))}
            <a
              href="https://drive.google.com/file/d/1ggYrRXZ-cZD0fKB9TDx42Kxy73Qprld_/view?usp=sharing"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 glass mt-2">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              onClick={closeMenu}
              className="text-white/80 hover:text-primary-500 py-2 transition-colors duration-300"
            >
              {item.name}
            </ScrollLink>
          ))}
          <a
            href="https://drive.google.com/file/d/1ggYrRXZ-cZD0fKB9TDx42Kxy73Qprld_/view?usp=sharing"
            className="btn btn-outline w-full text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;