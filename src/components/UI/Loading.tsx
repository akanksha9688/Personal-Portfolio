import { motion } from 'framer-motion';

const Loading = () => {
  const orbitVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
  };

  const particleVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        repeatType: "reverse",
        repeat: Infinity,
        duration: 1.4
      }
    })
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          variants={orbitVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 4
          }}
          className="relative w-24 h-24"
        >
          {/* Central Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-4 h-4 bg-primary-500 rounded-full blur-md"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Orbiting Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={particleVariants}
              initial="initial"
              animate="animate"
              className="absolute w-2 h-2 bg-secondary-500 rounded-full"
              style={{
                top: `${Math.sin((i * Math.PI) / 4) * 36}px`,
                left: `${Math.cos((i * Math.PI) / 4) * 36}px`,
              }}
            />
          ))}

          {/* Pulse Rings */}
          <motion.div
            className="absolute inset-0 border-2 border-primary-500 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0.8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "anticipate"
            }}
          />
          <motion.div
            className="absolute inset-0 border-2 border-accent-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "anticipate",
              delay: 0.4
            }}
          />
        </motion.div>

        {/* Animated Text */}
        <motion.p 
          className="text-primary-300 text-lg font-medium"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Loading
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              repeatType: "reverse",
              delay: 0.2
            }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              repeatType: "reverse",
              delay: 0.4
            }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              repeatType: "reverse",
              delay: 0.6
            }}
          >
            .
          </motion.span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;