import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Terminal, Lock, CircleDot } from 'lucide-react';


interface Project {
  title: string;
  category: 'Full-Stack' | 'Networking / Security' | 'Upcoming';
  status: 'ACTIVE' | 'SYSTEM_TOOL' | 'STABLE' | 'ENCRYPTED' | 'DEVELOPING';
  description: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      title: 'CyberGuardLab',
      category: 'Full-Stack',
      status: 'STABLE',
      description: 
        'A full-stack cybersecurity learning and asset orchestration platform. Developed with a scalable modular architecture, it delivers secure authentication, real-time node statistics, RESTful APIs, and responsive controls, creating a comprehensive sandbox for cybersecurity studies and scanning integration.',
      features: [
        'JWT Secure Authentication (Login/Register)',
        'RESTful APIs & PostgreSQL DB Schema',
        'Entity Framework Core Clean Architecture',
        'Containerized Deployment with Docker',
        'Auto-Documented endpoints via Swagger UI',
        'Responsive React & TypeScript Dashboard'
      ],
      technologies: [
        'ASP.NET Core',
        'C#',
        'React',
        'TypeScript',
        'PostgreSQL',
        'EF Core',
        'JWT',
        'Docker',
        'Swagger'
      ],
      githubUrl: 'https://github.com/placeholder/CyberGuardLab',
      demoUrl: '#demo-placeholder'
    },
    {
      title: 'Network Packet Sniffer',
      category: 'Networking / Security',
      status: 'SYSTEM_TOOL',
      description: 
        'A performance-focused network analyzer written in Python that intercepts, decodes, and logs live network traffic. The tool parses raw frames directly, decrypting packet structures from layer 2 up to layer 4 protocols for education and auditing purposes.',
      features: [
        'Raw Sockets Layer 2 Packet Capture',
        'Ethernet Frame header parsing',
        'IPv4 analysis & header validation',
        'TCP, UDP, and ICMP protocol decoding',
        'Configurable packet logging and CLI outputs',
        'Custom protocol filtering queries'
      ],
      technologies: [
        'Python',
        'Raw Sockets',
        'Linux Shell',
        'Networking',
        'TCP/IP',
        'IPv4',
        'Git'
      ],
      githubUrl: 'https://github.com/placeholder/PacketSniffer',
      demoUrl: '#demo-placeholder'
    }
  ];

  const futureProjects: Project[] = [
    {
      title: 'Active Directory Pentest Lab orchestrator',
      category: 'Upcoming',
      status: 'DEVELOPING',
      description: 
        'An automated infrastructure deployment script utility to spin up localized Active Directory sandboxes using Docker and Terraform, configured with intentional vulnerabilities to practice penetration testing.',
      features: [
        'Automated Domain Controller setup',
        'Intentional misconfigurations configuration',
        'Telemetry monitoring setup'
      ],
      technologies: ['Terraform', 'Docker', 'Bash', 'PowerShell', 'Active Directory']
    },
    {
      title: 'IDS Threat Intelligence Hub',
      category: 'Upcoming',
      status: 'ENCRYPTED',
      description: 
        'A microservice aggregating and parsing real-time IP reputation and CVE databases. Designed to integrate with packet analysis tools to trigger automated alerts upon matching high-risk patterns.',
      features: [
        'Real-time threat feed aggregation',
        'Automated alert hooks with Discord/Slack',
        'Local vulnerability matching logic'
      ],
      technologies: ['Go', 'gRPC', 'Redis', 'PostgreSQL', 'Docker']
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#02040a] cyber-grid-green">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-2 flex items-center justify-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" /> SECURE_PROJECT_ORCHESTRATION
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Projects</span>
          </h3>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4" />
        </div>

        {/* Active Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Corner lights */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none" />
              
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-2 font-sans tracking-wide">
                      {project.title}
                    </h4>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/20 px-2 py-1 rounded border border-emerald-500/30 animate-pulse">
                    <ShieldCheck className="w-3.5 h-3.5" /> {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 text-left">
                  {project.description}
                </p>

                {/* Features Checklist */}
                <div className="mb-6">
                  <h5 className="text-xs font-semibold text-white uppercase tracking-wider font-mono mb-3 text-left">
                    Key Implementations:
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-gray-400">
                        <span className="text-emerald-400 mr-2 mt-0.5 font-bold">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-1 rounded bg-[#0b0f19] border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 border-t border-gray-900 pt-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 bg-[#0b0f19] hover:bg-[#161b22] border border-gray-800 hover:border-cyan-500/50 rounded-lg text-xs font-mono font-medium text-white flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a>
                <a
                  href={project.demoUrl}
                  onClick={(e) => {
                    if (project.demoUrl === '#demo-placeholder') {
                      e.preventDefault();
                      alert(`${project.title} Live Demo - Currently served as local developer instance. Repository includes docker setup for quick local preview.`);
                    }
                  }}
                  className="flex-1 py-2.5 bg-cyan-950/20 hover:bg-cyan-500 hover:text-black border border-cyan-500/30 hover:border-cyan-500 rounded-lg text-xs font-mono font-medium text-cyan-400 hover:font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Projects Divider */}
        <div className="border-t border-gray-900 pt-16">
          <h4 className="text-sm font-semibold tracking-widest text-gray-500 uppercase font-mono mb-8 text-center flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-gray-600 animate-pulse" /> Upcoming Protocols Under Encryption
          </h4>

          {/* Future Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-xl p-6 relative overflow-hidden group border border-dashed border-gray-800 hover:border-emerald-500/20 transition-all duration-300 text-left"
              >
                {/* Visual lock status */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/10">
                  <CircleDot className="w-3 h-3 text-emerald-400 animate-ping" />
                  {project.status}
                </div>

                <div className="mb-4">
                  <span className="text-[9px] font-mono uppercase text-emerald-500/70">
                    {project.category}
                  </span>
                  <h5 className="text-base font-semibold text-gray-300 mt-1 font-sans group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h5>
                </div>

                <p className="text-gray-500 text-xs font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-950 border border-gray-900 text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
