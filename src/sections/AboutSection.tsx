import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
//import AnimatedText from '../components/UI/AnimatedText';
import experience from '../data/experience';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Pranveer Singh Institute Of Technology',
    period: 'Dec 2020 - July 2024',
    result: 'CGPA: 8.3',
  },
  {
    degree: 'senior secondary High School',
    institution: 'Kamla Nehru Institute of Child Education',
    period: '2019',
    //result: 'Percentage: 70%',
  },
  {
    degree: 'Secondary High School',
    institution: 'Kamla Nehru Institute of Child Education',
    period: '2017',
    //result: 'Percentage: 89.3%',
  },
];

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
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-start">
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 gradient-text">Education</h3>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={`${item.institution}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-6 pb-6 border-l border-white/20 dark:border-slate-700/30 last:border-0 last:pb-0"
                  >
                    <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />

                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-black dark:text-white">{item.degree}</h4>
                      <p className="text-black/70 dark:text-white/70">{item.institution}</p>
                      <p className="text-primary-400 text-sm">{item.period}</p>
                    </div>

                    <p className="text-black/80 dark:text-white/80">{item.result}</p>
                  </motion.div>
                ))}
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
                    className="relative pl-6 pb-6 border-l border-white/20 dark:border-slate-700/30 last:border-0 last:pb-0"
                  >
                    <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
                    
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-black dark:text-white">{job.title}</h4>
                      <p className="text-black/70 dark:text-white/70">{job.company}</p>
                      <p className="text-primary-400 text-sm">{job.period}</p>
                    </div>
                    
                    <p className="text-black/80 dark:text-white/80 mb-3">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={`${job.company}-${tech}`}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 dark:bg-green-300/10 text-black/90 dark:text-white/90"
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