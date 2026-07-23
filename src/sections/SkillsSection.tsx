import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Card from '../components/UI/Card';
import skills from '../data/skills';
import sih from '../data/image/SIH.png';
import techExpo from '../data/image/Tech Expo .png';
import bootcamp from '../data/image/bootcamp certificate.png';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools' | 'other';

const certificates = [
  {
    title: 'Intelligent Sewage Detection and Monitoring System',
    description: 'SIH 2023 Finalist',
    image: sih,
  },
  {
    title: 'Tech Expo Runner-Up',
    description: 'College Tech Expo',
    image: techExpo,
  },
  {
    title: 'Innovation Design and Entrepreneurship Bootcamp Phase-III',
    description: 'Certified',
    image: bootcamp,
  },
  {
    title: 'HackerRank',
    description: 'SQL, Python, Problem Solving (Basic and Intermediate)',
    image: undefined,
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[number] | null>(null);
  
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
                    ? 'bg-white/20 dark:bg-slate-300/20 text-black dark:text-white'
                    : 'bg-transparent text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>
        
        <Card className="p-6 md:p-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {filteredSkills.map((skill, index) => (
              <motion.li
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="list-disc ml-5 text-black/80 dark:text-white/80 text-sm"
              >
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </Card>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6 gradient-text">Certifications & Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden p-0">
                    {certificate.image ? (
                      <button
                        type="button"
                        onClick={() => setSelectedCertificate(certificate)}
                        className="block w-full cursor-zoom-in"
                        aria-label={`View ${certificate.title} certificate full size`}
                      >
                        <img
                          src={certificate.image}
                          alt={`${certificate.title} certificate`}
                          className="w-full h-40 object-cover"
                        />
                      </button>
                    ) : (
                      <div className="w-full h-40 flex items-center justify-center bg-white/10 dark:bg-slate-300/10 text-black/60 dark:text-white/60">
                        Certificate image coming soon
                      </div>
                    )}
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-black dark:text-white">
                        {certificate.title}
                      </h4>
                      <p className="mt-2 text-black/70 dark:text-white/70">
                        {certificate.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {selectedCertificate?.image && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCertificate.title} certificate preview`}
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-[95vw]"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate full size`}
                className="max-h-[85vh] max-w-[90vw] object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="absolute -right-3 -top-3 rounded-full bg-white p-2 text-black shadow-lg transition-transform hover:scale-110"
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;