import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Terminal, Sparkles, Binary } from 'lucide-react';


export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative bg-[#02040a] cyber-grid-green">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-2/3 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-2 flex items-center justify-center gap-1.5">
            <Binary className="w-3.5 h-3.5" /> SECURE_DOSSIER // PROFILE
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Me</span>
          </h3>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Decrypted Bio Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 glass-card-green rounded-xl p-8 flex flex-col justify-between text-left relative overflow-hidden group hover:border-emerald-400/30 transition-colors duration-300"
          >
            {/* Corner Accent Marks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-400" />

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs">
                <Terminal className="w-4 h-4" />
                <span>root@kamal-dhakar:~# cat bio.log</span>
              </div>

              <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                <p>
                  I am a <strong className="text-white font-medium">B.Tech Computer Science Engineering student</strong> specializing in <strong className="text-cyan-400 font-medium">Cyber Security</strong> at JECRC University. My academic journey combined with hands-on labs drives my deep passion for backend software development and digital defense.
                </p>
                <p>
                  I bridge the gap between building resilient web APIs and ensuring their security posture. Specializing in the <strong className="text-white font-medium">.NET ecosystem (ASP.NET Core Web API, C#)</strong> and <strong className="text-white font-medium">Python security automation</strong>, I construct software with security baked-in rather than bolted-on.
                </p>
                <p>
                  Problem solving is at the heart of my work. I enjoy solving complex Data Structures & Algorithms challenges, debugging networking layers, and understanding live packet flows to guard systems against cyber threats. I am committed to continuous learning, constantly updating my skillset as technologies and threat landscapes evolve.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-emerald-500/10 pt-4 text-xs font-mono text-gray-500">
              <span>STATUS: READY_FOR_INTERNSHIPS</span>
              <span>LANG: EN_IN</span>
            </div>
          </motion.div>

          {/* Right Column: Database Records (Stats Card) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* System Info Dossier */}
            <div className="glass-card-blue rounded-xl p-6 text-left relative overflow-hidden group hover:border-cyan-400/30 transition-colors duration-300 flex-1">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
              
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-cyan-400" /> SYSTEM_METRICS_LOG
              </h4>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">FULL NAME:</span>
                  <span className="text-white font-semibold">Kamal Dhakar</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">SPECIALIZATION:</span>
                  <span className="text-cyan-400 font-semibold">CSE (Cyber Security)</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">INSTITUTION:</span>
                  <span className="text-white">JECRC University</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">GRADUATION YEAR:</span>
                  <span className="text-white">2027</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">ACADEMIC CGPA:</span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/25">6.81 / 10.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">INTERNSHIP FOCUS:</span>
                  <span className="text-white text-right text-xs">Software / Backend / CyberSec</span>
                </div>
              </div>
            </div>

            {/* Quick Pillars info */}
            <div className="glass-card rounded-xl p-6 text-left relative overflow-hidden">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-yellow-400" /> CORE OBJECTIVES
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#0b0f19] border border-gray-800 p-2.5 rounded">
                  <div className="text-cyan-400 font-bold">01 / SECURE</div>
                  <div className="text-gray-500 mt-1">Building defenses directly inside the code layers.</div>
                </div>
                <div className="bg-[#0b0f19] border border-gray-800 p-2.5 rounded">
                  <div className="text-emerald-400 font-bold">02 / ROBUST</div>
                  <div className="text-gray-500 mt-1">High scalability using ASP.NET Core & Docker.</div>
                </div>
                <div className="bg-[#0b0f19] border border-gray-800 p-2.5 rounded">
                  <div className="text-purple-400 font-bold">03 / ANALYTIC</div>
                  <div className="text-gray-500 mt-1">Deep analysis of networks, logs, and protocols.</div>
                </div>
                <div className="bg-[#0b0f19] border border-gray-800 p-2.5 rounded">
                  <div className="text-yellow-400 font-bold">04 / AGILE</div>
                  <div className="text-gray-500 mt-1">Quick iterations and solving complex DSA tasks.</div>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
