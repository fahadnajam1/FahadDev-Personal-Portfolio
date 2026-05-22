import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="sm:text-[18px] text-[14px] text-text-secondary uppercase tracking-wider font-heading">
          Achievements
        </p>
        <h2 className="text-white font-heading font-black md:text-[60px] sm:text-[50px] text-[40px]">
          Certifications.
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-wrap justify-center gap-10">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full md:w-[600px] glass p-1 rounded-2xl relative group overflow-hidden"
          >
            {/* Animated Gold Border Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 blur-sm z-0" />
            
            <div className="relative bg-background rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center z-10 border border-white/5 h-full">
              <div className="w-full md:w-[200px] shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                />
              </div>

              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-white text-2xl font-bold font-heading">{cert.title}</h3>
                <p className="text-primary text-md font-semibold mt-1">{cert.issuer} &bull; {cert.date}</p>
                <div className="bg-white/5 rounded px-3 py-1 mt-3 mb-5 border border-white/10 text-text-secondary text-sm font-mono break-all w-full md:w-auto">
                  ID: {cert.credentialId}
                </div>
                
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-primary/20 text-primary hover:bg-primary hover:text-background px-6 py-2 rounded-full font-bold transition-colors shadow-none hover:shadow-glow-hover"
                >
                  <FaExternalLinkAlt /> Verify
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
