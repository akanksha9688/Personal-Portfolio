import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import AnimatedText from '../components/UI/AnimatedText';
import experience from '../data/experience';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold mb-4 gradient-text">Professional Summary</h3>
              
              <div className="space-y-4 text-white/80">
                <AnimatedText
                  text="Passionate Frontend Developer with 1+ years of experience creating fast, responsive web apps—blending technical precision with user-centered design to build clean, scalable interfaces."
                  delay={0.1}
                />
                
                <AnimatedText
                  text="I specialize in building rich user interfaces and interactive experiences that bridge the gap between design and functionality."
                  delay={0.2}
                  highlightedWords={['interfaces', 'interactive']}
                />
                
                <AnimatedText
                  text="My approach combines clean code principles, performance optimization, and user-centered design to deliver exceptional digital experiences."
                  delay={0.3}
                  highlightedWords={['clean code', 'performance', 'user-centered']}
                />
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 gradient-text">Development Philosophy</h3>
                
                <ul className="space-y-3 text-white/80">
                  <AnimatedText
                    text="• I believe in user-first design and development"
                    delay={0.1}
                  />
                  
                  <AnimatedText
                    text="• Code should be clean, maintainable, and well-documented"
                    delay={0.2}
                  />
                  
                  <AnimatedText
                    text="• Performance optimization is not an afterthought"
                    delay={0.3}
                  />
                  
                  <AnimatedText
                    text="• Continuous learning keeps us relevant and innovative"
                    delay={0.4}
                  />
                </ul>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 gradient-text">Experience Timeline</h3>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={`${job.company}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-6 pb-6 border-l border-white/20 last:border-0 last:pb-0"
                  >
                    <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
                    
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold">{job.title}</h4>
                      <p className="text-white/70">{job.company}</p>
                      <p className="text-primary-400 text-sm">{job.period}</p>
                    </div>
                    
                    <p className="text-white/80 mb-3">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={`${job.company}-${tech}`}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;