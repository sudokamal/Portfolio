import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Terminal, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur toggle on scroll
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#02040a]/80 backdrop-blur-md border-b border-cyan-500/10 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo / Brand */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-30 group-hover:opacity-100 blur transition duration-300" />
              <div className="relative bg-[#0b0f19] p-1.5 rounded border border-cyan-500/30">
                <Shield className="w-5 h-5 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col font-mono leading-none">
              <span className="text-sm font-black tracking-widest text-white">
                KAMAL<span className="text-cyan-400">.D</span>
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">
                SECURE_DEV
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-xs uppercase font-mono tracking-widest transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-cyan-400 font-bold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-cyan-950/30 border-b-2 border-cyan-400 rounded-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right Status Panel */}
          <div className="hidden lg:flex items-center space-x-4 font-mono text-[10px] text-gray-400">
            <span className="flex items-center gap-1.5 bg-[#0b0f19] border border-emerald-500/20 px-2.5 py-1 rounded text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              FIREWALL_ACTIVE
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <Cpu className="w-3.5 h-3.5 text-cyan-500/50" /> Ping: 14ms
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 w-full bg-[#02040a]/95 border-b border-cyan-500/20 z-30 md:hidden font-mono"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-3 text-left border-b border-[#161b22] uppercase tracking-widest text-xs flex justify-between items-center ${
                    activeSection === item.id ? 'text-cyan-400 font-bold' : 'text-gray-400'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <Terminal className="w-4 h-4 text-cyan-400" />}
                </button>
              ))}
              <div className="pt-4 flex justify-between items-center text-[10px] text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block animate-pulse"></span>
                  SECURE PORT 443
                </span>
                <span>CGPA: 6.81</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
