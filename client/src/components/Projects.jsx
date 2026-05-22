import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'React.js', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => {
        if (filter === 'React.js') return project.tags.includes('React.js');
        return project.category === filter;
      });

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="sm:text-[18px] text-[14px] text-text-secondary uppercase tracking-wider font-heading">
          My Work
        </p>
        <h2 className="text-white font-heading font-black md:text-[60px] sm:text-[50px] text-[40px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos in it. 
          It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 \${
              filter === cat 
                ? 'bg-primary text-background shadow-glow' 
                : 'bg-card text-text-primary hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group perspective-1000"
            >
              <div className="relative w-full h-[400px] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden glass rounded-2xl p-5 flex flex-col justify-between overflow-hidden shadow-md">
                  <div className="relative w-full h-[200px] mb-4 overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[24px] font-heading">{project.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[12px] bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-glow-hover border border-primary/30 bg-background/95">
                  <h3 className="text-primary font-bold text-[24px] mb-4 font-heading">{project.title}</h3>
                  <p className="text-text-primary text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4 mt-auto">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-primary text-background px-4 py-2 rounded-full font-bold hover:bg-white transition-colors"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 border-2 border-white/20 px-4 py-2 rounded-full font-bold hover:bg-white/10 transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
