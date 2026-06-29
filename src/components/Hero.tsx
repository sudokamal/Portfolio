import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalComponent } from './Terminal';
import { ArrowRight, Download, Mail, ShieldCheck } from 'lucide-react';


export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'B.Tech CSE (Cyber Security) Student',
    'Aspiring Software Developer',
    'Backend Developer',
    'Cyber Security Enthusiast'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = window.setTimeout(() => {
        setTypedText((prev) => currentFullRole.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentFullRole) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Wait 2s before starting deletion
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden cyber-grid"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Left Side: Text and CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Status Chip */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="self-start flex items-center gap-2 bg-[#0b0f19] border border-cyan-500/20 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-400"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>PORTFOLIO_LINK_STABLE // VERSION_2.027</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl font-mono"
            >
              Hi there, I am
            </motion.h3>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              <span className="text-white">Kamal </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-glow-blue">
                Dhakar
              </span>
            </motion.h1>
            
            {/* Animated Typing Role */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-3xl font-mono text-cyan-400/90 font-medium h-10 flex items-center"
            >
              <span className="typing-cursor">{typedText}</span>
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg max-w-xl font-light leading-relaxed border-l-2 border-emerald-500/40 pl-4 py-1.5"
          >
            Aspiring Software Developer | Backend Developer | Cyber Security Enthusiast
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-semibold rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/25 flex items-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 bg-[#0b0f19] hover:bg-[#161b22] text-white font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              Contact Me
              <Mail className="w-4 h-4 text-cyan-400" />
            </button>

            <a
              href="#resume-placeholder"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered (placeholder). Ready to replace with actual document.");
              }}
              className="px-6 py-3 bg-transparent hover:bg-emerald-950/20 text-emerald-400 hover:text-emerald-300 font-medium rounded-lg border border-emerald-500/30 hover:border-emerald-400 flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Interactive Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-lg lg:max-w-none">
            {/* Embedded Shell */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-15 group-hover:opacity-30 blur transition duration-500" />
              <div className="relative">
                <TerminalComponent />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
