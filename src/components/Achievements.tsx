import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Binary } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Built Full Stack Applications',
      description: 'Engineered web applications linking ASP.NET Core Rest APIs to modern React user dashboards.',
      tags: ['C#', 'React', 'Docker']
    },
    {
      title: 'Developed Secure REST APIs',
      description: 'Implemented standard token-based JWT security, schema validations, and PostgreSQL database interfaces.',
      tags: ['ASP.NET Core', 'JWT', 'PostgreSQL']
    },
    {
      title: 'Hands-on Network Security Tools',
      description: 'Programmed low-level socket monitors parsing Raw IP/TCP packets under Linux sandbox setups.',
      tags: ['Python', 'Sockets', 'Linux']
    },
    {
      title: 'Solved DSA Problems',
      description: 'Applied data structures and core algorithmic patterns (C++, Python) for performance-oriented optimizations.',
      tags: ['C++', 'Algorithms']
    },
    {
      title: 'Continuous Cybersecurity Training',
      description: 'Studying OWASP Top 10 vulnerabilities, API security guidelines, and network pen-testing methodologies.',
      tags: ['OWASP', 'Pen-Testing']
    }
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[#02040a] cyber-grid-green">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-2 flex items-center justify-center gap-1.5">
            <Award className="w-3.5 h-3.5" /> SECURE_CREDENTIALS_AND_LOGS
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Achievements</span>
          </h3>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4" />
        </div>

        {/* Content Centered Layout */}
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="terminal-window rounded-xl overflow-hidden border border-emerald-500/15 text-left"
          >
            {/* Header */}
            <div className="bg-[#0b0f19] px-4 py-2.5 border-b border-emerald-500/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Binary className="w-3.5 h-3.5" /> credentials_analyzer.bin
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 block animate-pulse"></span>
            </div>

            {/* Log List */}
            <div className="p-6 space-y-5 bg-[#03060f]/90">
              {achievements.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 border-l-2 border-emerald-500/20 hover:border-emerald-400 pl-4 py-1 transition-colors duration-300"
                >
                  <div className="mt-0.5 bg-[#0b0f19] p-1 rounded border border-emerald-500/30 self-start">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/20 text-emerald-300 border border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
