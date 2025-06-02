import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import social from '../../data/social';

const SocialLinks = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex space-x-4 ${className}`}
    >
      {social.map((item) => {
        const Icon = LucideIcons[item.icon as keyof typeof LucideIcons];
        
        return (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors duration-300 hover-glow"
            aria-label={item.name}
          >
            {Icon && <Icon size={18} className="text-white" />}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;