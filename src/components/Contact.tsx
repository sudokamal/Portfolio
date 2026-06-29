import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Terminal, Send, CheckCircle2, Loader2 } from 'lucide-react';


export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const executeSimulatedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in the required fields (Name, Email, Message).");
      return;
    }

    setStatus('submitting');
    setTerminalLogs([
      `guest@kamal-dhakar:~$ mailer --send --name "${formData.name.replace(/"/g, '\\"')}"`,
      'Initializing encryption layer (RSA 4096)...',
      'Connecting to mail gateway server at mail.kamaldhakar.dev...',
    ]);

    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        'Verifying DKIM & SPF records... [PASS]',
        'Packaging payload: ' + JSON.stringify({ name: formData.name, email: formData.email, subject: formData.subject }).slice(0, 50) + '...'
      ]);
    }, 600);

    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        'Transmitting payload over secure socket port 465... [100%]',
        'SMTP Handshake complete. Status code: 250 OK.',
        '✔ Message transmitted successfully! Kamal will respond shortly.'
      ]);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:kamaldhakar@placeholder.com',
      color: 'hover:text-cyan-400 hover:border-cyan-500/50'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/placeholder',
      color: 'hover:text-white hover:border-white/50'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: 'https://linkedin.com/in/placeholder',
      color: 'hover:text-cyan-400 hover:border-cyan-500/50'
    },
    {
      name: 'LeetCode',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.8 9.8a1.374 1.374 0 0 0 0 1.94l4 4a1.374 1.374 0 0 0 1.94 0l9.8-9.8a1.374 1.374 0 0 0 0-1.94l-4-4A1.374 1.374 0 0 0 13.483 0zm-.92 2.29l3.58 3.58L7.04 15.03l-3.58-3.58L12.56 2.29zM19.14 7.04l3.58 3.58-8.15 8.15-3.58-3.58 8.15-8.15zM22.28 12.56a1.374 1.374 0 0 0 0 1.94l-4 4a1.374 1.374 0 0 0-1.94 0l-9.8-9.8a1.374 1.374 0 0 0 0-1.94l4-4a1.374 1.374 0 0 0 1.94 0l9.8 9.8a1.374 1.374 0 0 0 .96.414z" />
        </svg>
      ),
      url: 'https://leetcode.com/placeholder',
      color: 'hover:text-amber-500 hover:border-amber-500/50'
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#02040a] cyber-grid-green">
      {/* Glow backgrounds */}
      <div className="absolute bottom-12 right-12 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-2 flex items-center justify-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" /> SECURE_CONTACT_GATEWAY
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Me</span>
          </h3>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Socials & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white tracking-wide font-sans">
                Get in Touch
              </h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Whether you are looking to hire a software engineering intern, collaborate on a security scan utility project, or just chat about ASP.NET and raw packets, feel free to establish a connection.
              </p>
              
              {/* Contact list details */}
              <div className="space-y-4 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded bg-[#0b0f19] border border-gray-800 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-gray-500 block">PRIMARY COMMUNICATIONS</span>
                    <a href="mailto:kamaldhakar@placeholder.com" className="text-white hover:text-cyan-400 transition-colors">
                      kamaldhakar@placeholder.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-4">
              <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">
                EXTERNAL NETWORKS
              </h5>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-lg bg-[#0b0f19] border border-gray-800 text-gray-400 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 ${item.color}`}
                    title={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form / Terminal Console */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-xl p-8 relative overflow-hidden h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status === 'idle' ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={executeSimulatedSubmit}
                    className="space-y-4 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-[#0b0f19] border border-gray-800 focus:border-cyan-500/50 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors font-mono"
                          placeholder="Agent Name"
                        />
                      </div>
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#0b0f19] border border-gray-800 focus:border-cyan-500/50 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors font-mono"
                          placeholder="agent@agency.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-[#0b0f19] border border-gray-800 focus:border-cyan-500/50 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors font-mono"
                        placeholder="Inquiry Topic"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                        Message Payload <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#0b0f19] border border-gray-800 focus:border-cyan-500/50 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors font-mono resize-none"
                        placeholder="Enter transmission content..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-semibold rounded-lg text-sm flex items-center justify-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="terminal-logs"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="terminal-window rounded-lg overflow-hidden border border-cyan-500/20 text-left font-mono text-xs p-6 flex flex-col justify-between h-80"
                  >
                    <div className="space-y-2.5 overflow-y-auto">
                      {terminalLogs.map((log, lIdx) => (
                        <div
                          key={lIdx}
                          className={
                            log.startsWith('guest@') 
                              ? 'text-cyan-400 font-semibold' 
                              : log.startsWith('✔') 
                              ? 'text-emerald-400 font-bold' 
                              : 'text-gray-400'
                          }
                        >
                          {log}
                        </div>
                      ))}
                    </div>

                    {status === 'submitting' ? (
                      <div className="flex items-center gap-2 text-cyan-500/70 border-t border-cyan-500/10 pt-4 mt-4">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING PACKET PAYLOAD...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between border-t border-emerald-500/25 pt-4 mt-4 text-emerald-400 font-semibold">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> TRANSMISSION SUCCESSFUL
                        </span>
                        <button
                          onClick={() => setStatus('idle')}
                          className="px-3 py-1 bg-emerald-950/40 hover:bg-emerald-900 border border-emerald-500/30 rounded text-[10px] text-emerald-400 uppercase tracking-widest cursor-pointer"
                        >
                          Send Another
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
