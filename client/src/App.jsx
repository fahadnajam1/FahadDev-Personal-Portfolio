import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background text-text-primary overflow-hidden">
        <Navbar />
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
        
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  );
};

export default App;
