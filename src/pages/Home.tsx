import { Suspense, lazy } from 'react';
import Loading from '../components/UI/Loading';

const HeroSection = lazy(() => import('../sections/HeroSection'));
const AboutSection = lazy(() => import('../sections/AboutSection'));
const ProjectsSection = lazy(() => import('../sections/ProjectsSection'));
const SkillsSection = lazy(() => import('../sections/SkillsSection'));
const ContactSection = lazy(() => import('../sections/ContactSection'));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </Suspense>
  );
};

export default Home;