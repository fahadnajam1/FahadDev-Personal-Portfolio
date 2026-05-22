import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import HeroCanvas from './canvas/HeroCanvas';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto flex items-center justify-center">
      <HeroCanvas />

      <div className="absolute z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-4 drop-shadow-lg">
            FAHAD <span className="text-primary text-glow">NAJAM</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-4xl font-heading font-semibold text-text-secondary mb-8 h-10"
        >
          <span>I am a </span>
          <span className="text-primary">
            <Typewriter
              words={['Frontend Developer', 'React.js Developer', 'UI Builder', 'Open to Work']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-background font-bold hover:bg-white transition-colors duration-300 shadow-glow hover:shadow-glow-hover">
            View My Work
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-background transition-colors duration-300">
            Download CV
          </a>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-text-secondary flex justify-center items-start p-2 hover:border-primary transition-colors">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-primary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
