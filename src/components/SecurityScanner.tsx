import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Lock } from 'lucide-react';


interface SecurityScannerProps {
  onComplete: () => void;
}

export const SecurityScanner: React.FC<SecurityScannerProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const scanSteps = [
    'Initializing secure connection...',
    'Establishing SSH handshake with JECRC-NET...',
    'Bypassing local sandbox restrictions (User: Recruiter)...',
    'Loading credential database...',
    'Injecting Kamal Dhakar profile data...',
    'Fetching CGPA metrics (Result: 6.81/10)...',
    'Mapping skills: C++, C#, Python, React, ASP.NET Core...',
    'Analyzing portfolio safety database...',
    'Checking projects encryption status: CyberGuardLab [SECURE]...',
    'Decrypting packet logs: Sniffer.py [ACTIVE]...',
    'Starting visual rendering system...',
    'ACCESS GRANTED. Welcome to Kamal\'s Portfolio.'
  ];

  useEffect(() => {
    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < scanSteps.length) {
        setLogs((prev) => [...prev, scanSteps[logIndex]]);
        setProgress((prev) => Math.min(prev + (100 / scanSteps.length), 100));
        logIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1200);
      }
    }, 280);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#02040a] z-50 flex flex-col items-center justify-center p-4 font-mono select-none">
      <div className="w-full max-w-2xl terminal-window rounded-lg overflow-hidden border border-cyan-500/20 glow-blue">
        {/* Terminal Header */}
        <div className="bg-[#0b0f19] px-4 py-3 flex items-center justify-between border-b border-cyan-500/10">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Security Protocol Analyzer v2.0.27
            </span>
          </div>
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50 block"></span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-80 overflow-y-auto text-sm flex flex-col space-y-2 scrollbar-thin">
          <AnimatePresence>
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={`flex items-start ${
                  index === logs.length - 1 ? 'text-neon-blue' : 'text-gray-400'
                }`}
              >
                <span className="text-cyan-500/70 mr-2 font-semibold">
                  [{index === logs.length - 1 ? '▶' : '✔'}]
                </span>
                <span>{log}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress Bar & Footer */}
        <div className="bg-[#0b0f19] p-4 border-t border-cyan-500/10 flex flex-col space-y-3">
          <div className="flex justify-between text-xs text-cyan-400/80">
            <span className="flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 animate-spin" /> SCANNING CORE COMPONENTS...
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-[#161b22] h-2.5 rounded-full overflow-hidden border border-cyan-500/10">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-gray-500">
            <span className="flex items-center gap-1 uppercase">
              <Lock className="w-3 h-3" /> TLS 1.3 | AES_256_GCM
            </span>
            <span>TARGET: RECRUITER_DEV</span>
          </div>
        </div>
      </div>
    </div>
  );
};
