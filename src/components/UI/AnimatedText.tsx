import { motion } from 'framer-motion';
// import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  once?: boolean;
  highlightedWords?: string[];
  delay?: number;
}

const AnimatedText = ({
  text,
  className = '',
  once = true,
  highlightedWords = [],
  delay = 0,
}: AnimatedTextProps) => {
  const lines = Array.isArray(text) ? text : [text];
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const shouldHighlight = (word: string): boolean => {
    return highlightedWords.some(highlight => 
      word.toLowerCase().includes(highlight.toLowerCase())
    );
  };

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => (
        <motion.div
          key={`line-${lineIndex}`}
          className="overflow-hidden"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
        >
          <div className="flex flex-wrap">
            {line.split(' ').map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={child}
                className={shouldHighlight(word) ? 'gradient-text mr-2' : 'mr-2'}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedText;