import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const ExperienceCard = ({ experience, idx }) => {
  const isEven = idx % 2 === 0;

  return (
    <div className={`mb-12 flex w-full justify-between items-center space-x-8 \${isEven ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-[45%] glass p-6 rounded-2xl relative shadow-md group hover:shadow-glow-hover transition-all duration-300"
      >
        {/* Pointer Triangle */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-card border-t border-r border-white/10 transform rotate-45 \${
            isEven ? '-right-2' : '-left-2 -rotate-[135deg]'
          }`}
        />
        
        <div>
          <h3 className="text-white text-[24px] font-bold font-heading">{experience.title}</h3>
          <p className="text-primary text-[16px] font-semibold mt-1 font-heading">{experience.company}</p>
        </div>
        <p className="text-text-secondary text-[14px] mt-2 mb-4 italic">{experience.date}</p>
        <p className="text-text-primary text-[15px] leading-relaxed">
          {experience.description}
        </p>
      </motion.div>

      {/* Center dot placeholder logic */}
      <div className="w-[10%] flex justify-center invisible">
        {/* Space for the center line */}
      </div>
    </div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto relative z-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="sm:text-[18px] text-[14px] text-text-secondary uppercase tracking-wider font-heading text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-heading font-black md:text-[60px] sm:text-[50px] text-[40px] text-center">
          Work Experience.
        </h2>
      </motion.div>

      <div ref={ref} className="mt-20 flex flex-col items-center relative max-w-5xl mx-auto w-full">
        {/* The Animated Middle Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 rounded-full origin-top" />
        <motion.div 
          style={{ scaleY }}
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary rounded-full origin-top shadow-[0_0_10px_#00D4AA]" 
        />

        {/* Entries */}
        <div className="w-full flex flex-col relative z-10">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative w-full">
              {/* Dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-5 h-5 bg-background border-4 border-primary rounded-full z-20 shadow-glow"
              />
              <ExperienceCard experience={exp} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
