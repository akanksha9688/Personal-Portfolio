import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from '../UI/ParticleBackground';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;