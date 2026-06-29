import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Shield } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#02040a] cyber-grid">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2 flex items-center justify-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" /> SECURE_CREDENTIALS_DATABASE
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">History</span>
          </h3>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4" />
        </div>

        {/* Content Centered Layout */}
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="glass-card-blue rounded-xl p-8 relative overflow-hidden group hover:border-cyan-400/40 transition-colors duration-300 text-left"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />
            
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white tracking-wide">
                  JECRC University
                </h4>
                <p className="text-sm font-mono text-cyan-400 mt-1.5 uppercase tracking-wider">
                  B.Tech in Computer Science Engineering
                </p>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Specialization: Cyber Security
                </p>
              </div>
              <GraduationCap className="w-10 h-10 text-cyan-500/30" />
            </div>

            {/* Course Detail Logs */}
            <div className="mt-8 space-y-5">
              <div className="flex items-center space-x-3 text-xs text-gray-400">
                <Calendar className="w-4 h-4 text-cyan-500" />
                <span>Expected Graduation: <strong>2027</strong></span>
              </div>

              {/* CGPA Card */}
              <div className="bg-[#0b0f19] border border-gray-800 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 font-mono block">CUMULATIVE SCORE</span>
                  <span className="text-xl font-black text-emerald-400 tracking-wider">6.81 CGPA</span>
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-dashed border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-bold font-mono">
                  68%
                </div>
              </div>

              <div className="text-sm text-gray-400 font-light leading-relaxed border-l-2 border-cyan-500/20 pl-4 py-1">
                Deeply focused on core computing systems, cryptographic frameworks, security engineering, threat profiling, database administration, and software application architecture design models.
              </div>
            </div>

            {/* Card footer decorative code block */}
            <div className="mt-8 pt-4 border-t border-gray-900 flex items-center justify-between text-[9px] font-mono text-gray-600">
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> SEC_LEVEL: CLASSIFIED
              </span>
              <span>SYS_RECORD: #JECRC-2027</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
