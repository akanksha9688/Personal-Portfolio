import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import projects from '../data/projects';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Projects
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="flex p-1 rounded-lg glass">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-white/20 dark:bg-slate-300/20 text-black dark:text-white'
                  : 'bg-transparent text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-white/20 dark:bg-slate-300/20 text-black dark:text-white'
                  : 'bg-transparent text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'
              }`}
            >
              Featured
            </button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project, index) => (
            <motion.div
            key={project.id}
            className="h-full flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden p-0">
          
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-slate-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                  <p className="text-black/70 dark:text-white/70 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="px-2 py-1 text-xs rounded-full bg-white/10 dark:bg-slate-300/10 text-black/90 dark:text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-white/10 dark:bg-slate-300/10 text-black/90 dark:text-white/90">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border-t border-white/10 dark:border-slate-700/30 flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/70 dark:text-white/70 hover:text-primary-500 dark:hover:text-primary-600 transition-colors duration-300 flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/70 dark:text-white/70 hover:text-primary-500 dark:hover:text-primary-600 transition-colors duration-300 flex items-center gap-1"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;