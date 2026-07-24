import { motion } from "framer-motion";
import {
  ArrowDown,
  // Code,
  // Terminal,
  // Laptop,
  // Palette,
  // Sparkles,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Button from "../components/UI/Button";
import AnimatedText from "../components/UI/AnimatedText";
import SocialLinks from "../components/UI/SocialLinks";
import ProfileImage from "../data/image/personal.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-20 pb-16"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 dark:border-slate-700/30 shadow-2xl bg-white/5 dark:bg-slate-300/5">
                <img
                  src={ProfileImage}
                  alt="Akanksha Srivastava"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3 order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <AnimatedText
                  text="Hello, I'm"
                  className="text-xl md:text-2xl text-black/90 dark:text-white/90"
                  delay={0.2}
                />
                <AnimatedText
                  text="Akanksha Srivastava"
                  highlightedWords={["Akanksha", "Srivastava"]}
                  className="text-4xl md:text-4xl lg:text-6xl font-bold"
                  delay={0.5}
                />

                <AnimatedText
                  text="Passionate Full-Stack Developer specializing in React.js, JavaScript, Node.js, Express.js, MongoDB, and REST APIs. Experienced in building responsive, scalable, and user-focused web applications through real-world projects and internship experience. Dedicated to clean architecture, performance optimization, and creating impactful digital experiences with modern development practices."
                  className="text-xl md:text-xl text-black/70 dark:text-white/70 max-w-2xl"
                  highlightedWords={["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]}
                  delay={0.9}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <Button variant="primary" className="w-full sm:w-auto">
                    View My Work
                  </Button>
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <Button variant="outline" className="w-full sm:w-auto">
                    Contact Me
                  </Button>
                </ScrollLink>
              </div>

              <SocialLinks />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className="flex flex-col items-center cursor-pointer"
          >
            <p className="text-black/50 dark:text-white/50 mb-2 text-sm">Scroll Down</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowDown size={20} className="text-primary-500" />
            </motion.div>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
