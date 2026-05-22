import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../constants';

const CountUp = ({ to }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      // Simple string if it has symbols
      if (typeof to === 'string') {
        const numPart = parseInt(to.replace(/[^0-9]/g, ''));
        const hasPlus = to.includes('+');
        if (!isNaN(numPart)) {
          let count = 0;
          const duration = 2000; // ms
          const interval = Math.floor(duration / numPart);
          const counter = setInterval(() => {
            count += 1;
            if (nodeRef.current) {
              nodeRef.current.textContent = count + (hasPlus ? '+' : '');
            }
            if (count >= numPart) {
              clearInterval(counter);
            }
          }, interval || 50);
        }
      }
    }
  }, [inView, to]);

  return <span ref={nodeRef}>{to}</span>;
};

import profileImg from '../profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="sm:text-[18px] text-[14px] text-text-secondary uppercase tracking-wider font-heading">
          Introduction
        </p>
        <h2 className="text-white font-heading font-black md:text-[60px] sm:text-[50px] text-[40px]">
          Overview.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          {/* 3D tilt effect fallback css */}
          <div className="group perspective-1000">
            <div className="w-64 h-64 rounded-full p-2 bg-gradient-to-tr from-primary to-background rounded-full animate-spin-slow transition-transform duration-500 group-hover:rotate-x-12 group-hover:rotate-y-12">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-card flex items-center justify-center">
                <img 
                  src={profileImg} 
                  alt="Fahad Najam" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <p className="text-text-secondary text-[17px] leading-[30px] font-body mb-8">
            I'm a skilled Frontend Developer with expertise in React.js, Tailwind CSS, and 3D web graphics using Three.js. 
            I'm currently pursuing a BS in Software Engineering at NFC IET University (Graduating 2026). 
            With a mix of strong technical skills and an eye for creative UI/UX design, I build scalable, accessible, 
            and visually stunning web applications. I've worked closely with international clients to deliver impactful digital solutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="glass p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-glow transition-all"
              >
                <h3 className="text-3xl font-heading font-bold text-primary mb-2">
                  <CountUp to={stat.value} />
                </h3>
                <p className="text-text-primary text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
