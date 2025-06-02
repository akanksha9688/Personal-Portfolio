import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface ProgressBarProps {
  value: number;
  label?: string;
  animated?: boolean;
  className?: string;
}

const ProgressBar = ({
  value,
  label,
  animated = true,
  className = '',
}: ProgressBarProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${value}%`,
        transition: { duration: 1.2, ease: 'easeOut' },
      });
    }
  }, [controls, inView, value]);

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-white/80 text-sm">{label}</span>
          <span className="text-primary-400 text-sm font-medium">{value}%</span>
        </div>
      )}
      <div
        ref={ref}
        className="h-2 bg-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={animated ? controls : { width: `${value}%` }}
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default ProgressBar;