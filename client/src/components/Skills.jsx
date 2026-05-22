import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import SkillsOrb from './canvas/SkillsOrb';

const CircularProgress = ({ percent, name }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-[100px] h-[100px] flex items-center justify-center mb-3">
        {/* Background Circle */}
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
          />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#00D4AA"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <span className="text-white font-bold text-lg font-heading">{percent}%</span>
      </div>
      <p className="text-text-secondary text-sm font-medium tracking-wide">{name}</p>
    </div>
  );
};

const Skills = () => {
  // Group skills by category
  const categories = [...new Set(SKILLS.map((skill) => skill.category))];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <p className="sm:text-[18px] text-[14px] text-text-secondary uppercase tracking-wider font-heading">
          My Technical Expertise
        </p>
        <h2 className="text-white font-heading font-black md:text-[60px] sm:text-[50px] text-[40px]">
          Skills.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-full lg:w-1/2">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * catIdx }}
              className="mb-10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-heading border-b border-white/10 pb-2 inline-block">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SKILLS.filter(s => s.category === category).map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="glass rounded-xl hover:shadow-glow-hover transition-all group"
                  >
                    <CircularProgress percent={skill.percent} name={skill.name} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0"
        >
          <div className="relative w-full h-[400px]">
            {/* The 3D Orb represents the core of the technologies */}
            <SkillsOrb />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
