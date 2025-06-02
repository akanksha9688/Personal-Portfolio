import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import ProgressBar from '../components/UI/ProgressBar';
import skills from '../data/skills';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools' | 'other';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  
  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'other', label: 'Other' },
  ];
  
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10 overflow-x-auto pb-2"
        >
          <div className="flex p-1 rounded-lg glass">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-transparent text-white/70 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>
        
        <Card className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProgressBar
                  value={skill.level}
                  label={skill.name}
                  animated={true}
                />
              </motion.div>
            ))}
          </div>
        </Card>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 gradient-text">Core Competencies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Development</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                    Modern JavaScript (ES6+) and TypeScript
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                    React with Hooks and Context API
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                    State Management (Redux)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                    CSS-in-JS and CSS Frameworks
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                    Testing (Jest, React Testing Library)
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Technical Skills</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-3" />
                    Responsive and Adaptive Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-3" />
                    Performance Optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-3" />
                    Web Accessibility (WCAG)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-3" />
                    Modern Build Tools and Workflows
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-3" />
                    Version Control (Git) and CI/CD
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;