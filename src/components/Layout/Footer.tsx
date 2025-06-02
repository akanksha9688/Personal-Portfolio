import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowUp, Code, Heart } from 'lucide-react';
import SocialLinks from '../UI/SocialLinks';

const Footer = () => {
  return (
    <footer className="relative pb-8 pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-background/90 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl py-8 px-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center">
              <Code size={24} className="text-primary-500 mr-2" />
              <span className="text-xl font-bold gradient-text">Dev</span>
            </div>
            
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-pointer transition-all duration-300 hover-glow"
            >
              <ArrowUp size={18} className="text-white" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 gradient-text">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-white/70 hover:text-primary-500 cursor-pointer transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 gradient-text">Connect</h3>
              <SocialLinks />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 gradient-text">Contact me</h3>
              <p className="text-white/70 mb-2">akankshasrivastava9415@gmail.com</p>
              <p className="text-white/70">Lucknow, UP(India)</p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 text-center text-white/50 flex items-center justify-center">
            <p>© {new Date().getFullYear()} • Designed by Akanksha</p>
            <Heart size={16} className="mx-1 text-error-500" />
            <p>using React & Tailwind CSS</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;