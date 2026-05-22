import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full relative z-10 border-t border-white/10 bg-background pt-10 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center z-10 relative gap-6">
        <p className="text-text-secondary text-sm">
          Built with <span className="text-red-500 animate-pulse inline-block">❤️</span> by <span className="text-white font-medium">Fahad Najam</span> &copy; {new Date().getFullYear()}
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/fahadnajam1"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-white transition-colors text-xl p-2"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/fahadnajam45"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-[#0a66c2] transition-colors text-xl p-2"
          >
            <FaLinkedin />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
      
      {/* Decorative footer glow */}
      <div className="absolute bottom-0 center-x transform translate-y-1/2 w-[50%] h-[50px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
