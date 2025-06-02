import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft, Globe, Github } from 'lucide-react';
import projects from '../data/projects';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Loading from '../components/UI/Loading';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Loading />;
  }

  return (
    <div className="pt-28 pb-16 min-h-screen container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Button
          variant="outline"
          size="sm"
          icon={<ArrowLeft size={18} />}
          onClick={() => navigate('/')}
        >
          Back to Projects
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="p-0" hoverEffect={false}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 md:p-8 h-full" hoverEffect={false}>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h1>
            
            <p className="text-white/80 mb-6">
              {project.longDescription || project.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 gradient-text">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Button
                variant="primary"
                icon={<Globe size={18} />}
                className="w-full sm:w-auto"
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                Live Demo
              </Button>
              
              <Button
                variant="outline"
                icon={<Github size={18} />}
                className="w-full sm:w-auto"
                onClick={() => window.open(project.githubLink, '_blank')}
              >
                View Code
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6 gradient-text">Other Projects You Might Like</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.id !== id)
            .slice(0, 3)
            .map((project) => (
              <Card key={project.id} className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;