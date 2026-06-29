import React from 'react';
import { Shield, ArrowUp, Mail, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Mail className="w-4 h-4" />, url: 'mailto:kamaldhakar@placeholder.com' },
    { 
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ), 
      url: 'https://github.com/placeholder' 
    },
    { 
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ), 
      url: 'https://linkedin.com/in/placeholder' 
    }
  ];


  return (
    <footer className="bg-[#02040a] border-t border-gray-900 py-12 relative overflow-hidden font-mono text-xs text-gray-500">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] bg-cyan-500/5 rounded-full blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Left Side: Brand info */}
        <div className="flex items-center space-x-3">
          <div className="bg-[#0b0f19] p-1.5 rounded border border-gray-800">
            <Shield className="w-4 h-4 text-cyan-500" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white font-bold tracking-wider">KAMAL DHAKAR</span>
            <span className="text-[9px] uppercase tracking-widest text-gray-600 mt-0.5">
              SECURE PORTFOLIO SHELL // © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </span>
          </div>
        </div>

        {/* Center: System statistics */}
        <div className="flex items-center space-x-6 text-[10px] text-gray-600 bg-gray-950/40 border border-gray-900/60 px-4 py-2 rounded-full">
          <span className="flex items-center gap-1 text-emerald-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block animate-pulse"></span>
            SECURE LINK: ESTABLISHED
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-cyan-500/50" /> VERCEL_READY: OK
          </span>
        </div>

        {/* Right Side: Social links & Scroll to Top */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0b0f19] border border-gray-900 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <button
            onClick={handleScrollToTop}
            className="w-8 h-8 rounded-lg bg-cyan-950/20 hover:bg-cyan-500 hover:text-black border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
