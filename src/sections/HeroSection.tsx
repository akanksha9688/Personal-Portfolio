import { motion } from "framer-motion";
import {
  ArrowDown,
  Code,
  // Terminal,
  // Laptop,
  Palette,
  Sparkles,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Button from "../components/UI/Button";
import AnimatedText from "../components/UI/AnimatedText";
import SocialLinks from "../components/UI/SocialLinks";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-20 pb-16"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <AnimatedText
                  text="Hello, I'm"
                  className="text-xl md:text-2xl text-white/90"
                  delay={0.2}
                />
                <AnimatedText
                  text="Akanksha Srivastava"
                  highlightedWords={["Akanksha", "Srivastava"]}
                  className="text-4xl md:text-4xl lg:text-6xl font-bold"
                  delay={0.5}
                />

                <AnimatedText
                  text="I build scalable web apps with React, Next.js, TypeScript & Tailwind —leveraging component-driven architecture, efficient state management, API integration, and CI/CD pipelines."
                  className="text-xl md:text-xl text-white/70 max-w-2xl"
                  highlightedWords={["React", "TypeScript", "Tailwind", "API", "CI/CD"]}
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

          <div className="lg:col-span-2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              {/* Floating Cards */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="space-y-4"
              >
                {/* Code Card */}
                <div className="glass rounded-xl p-4 ml-8 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Code className="text-primary-500" size={24} />
                    <div className="text-sm">
                      <div className="text-primary-400 font-mono">
                        &lt;code&gt;
                      </div>
                      <div className="text-white/80">Clean, Modern Code</div>
                    </div>
                  </div>
                </div>

                {/* Design Card */}
                <div className="glass rounded-xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Palette className="text-secondary-500" size={24} />
                    <div className="text-sm">
                      <div className="text-secondary-400 font-mono">design</div>
                      <div className="text-white/80">Beautiful UI/UX</div>
                    </div>
                  </div>
                </div>

                {/* Performance Card */}
                <div className="glass rounded-xl p-4 ml-12 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="text-accent-500" size={24} />
                    <div className="text-sm">
                      <div className="text-accent-400 font-mono">optimized</div>
                      <div className="text-white/80">Fast and user-friendly</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 animate-float" />
              <div
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-xl bg-secondary-500/20 backdrop-blur-sm border border-secondary-500/30 animate-float"
                style={{ animationDelay: "2s" }}
              /> */}
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
            <p className="text-white/50 mb-2 text-sm">Scroll Down</p>
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
