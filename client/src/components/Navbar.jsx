import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 \${
        scrolled ? 'glass shadow-glow' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[24px] font-bold cursor-pointer font-heading tracking-wide">
            Fahad <span className="text-primary">Dev</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {NAV_LINKS.map((nav) => (
            <li
              key={nav.id}
              className={`\${
                active === nav.title ? 'text-primary' : 'text-text-secondary'
              } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
            >
              <a 
                href={`#\${nav.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(nav.title);
                  const element = document.getElementById(nav.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="text-[28px] object-contain cursor-pointer text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <HiX /> : <HiMenuAlt3 />}
          </div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.2 }}
                className="p-6 glass absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {NAV_LINKS.map((nav) => (
                    <li
                      key={nav.id}
                      className={`font-body font-medium cursor-pointer text-[16px] \${
                        active === nav.title ? 'text-primary' : 'text-text-secondary'
                      }`}
                    >
                      <a 
                        href={`#\${nav.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setToggle(!toggle);
                          setActive(nav.title);
                          const element = document.getElementById(nav.id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
