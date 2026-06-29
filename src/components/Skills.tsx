import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LayoutTemplate, Server, Database, Wrench, Shield } from 'lucide-react';

interface SkillItem {
  name: string;
  level: string; // for details or aesthetic progress
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple';
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5" />,
      color: 'blue',
      skills: [
        { name: 'C++', level: 'Advanced' },
        { name: 'C#', level: 'Intermediate' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'SQL', level: 'Advanced' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-5 h-5" />,
      color: 'green',
      skills: [
        { name: 'ASP.NET Core Web API', level: 'Intermediate' },
        { name: 'REST API Design', level: 'Advanced' },
        { name: 'JWT Authentication', level: 'Advanced' },
        { name: 'Entity Framework Core', level: 'Intermediate' }
      ]
    },
    {
      title: 'Frontend Frameworks',
      icon: <LayoutTemplate className="w-5 h-5" />,
      color: 'blue',
      skills: [
        { name: 'HTML & CSS', level: 'Advanced' },
        { name: 'React', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Advanced' }
      ]
    },
    {
      title: 'Database Management',
      icon: <Database className="w-5 h-5" />,
      color: 'purple',
      skills: [
        { name: 'PostgreSQL', level: 'Intermediate' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Wrench className="w-5 h-5" />,
      color: 'green',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Linux', level: 'Intermediate' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'Swagger', level: 'Advanced' },
        { name: 'Postman', level: 'Advanced' }
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring' as const, stiffness: 100, damping: 12 } 
    }
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#02040a] cyber-grid">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2 flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> SECURE_CAPABILITIES_SHEET
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white font-sans">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Skills</span>
          </h3>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4" />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          {categories.map((category, idx) => {
            const isBlue = category.color === 'blue';
            const isGreen = category.color === 'green';
            
            return (
              <motion.div

                key={idx}
                variants={cardVariants}
                className={`glass-card rounded-xl p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-500 flex flex-col justify-between ${
                  isBlue 
                    ? 'hover:border-cyan-500/30 hover:shadow-cyan-500/5' 
                    : isGreen 
                    ? 'hover:border-emerald-500/30 hover:shadow-emerald-500/5' 
                    : 'hover:border-purple-500/30 hover:shadow-purple-500/5'
                }`}
              >
                {/* Visual border pulse on hover */}
                <div className={`absolute top-0 left-0 w-full h-[2px] transition-all duration-500 opacity-50 group-hover:opacity-100 ${
                  isBlue ? 'bg-cyan-500' : isGreen ? 'bg-emerald-500' : 'bg-purple-500'
                }`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2 rounded-lg border ${
                      isBlue 
                        ? 'bg-cyan-950/20 border-cyan-500/20 text-cyan-400' 
                        : isGreen 
                        ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-400' 
                        : 'bg-purple-950/20 border-purple-500/20 text-purple-400'
                    }`}>
                      {category.icon}
                    </div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase font-mono text-white">
                      {category.title}
                    </h4>
                  </div>

                  {/* Badges Container */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        variants={badgeVariants}
                        className={`flex flex-col px-3 py-1.5 rounded border text-xs font-mono transition-all duration-300 ${
                          isBlue 
                            ? 'bg-cyan-950/10 border-cyan-500/10 hover:border-cyan-500/30 hover:bg-cyan-950/20 text-cyan-200' 
                            : isGreen 
                            ? 'bg-emerald-950/10 border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-950/20 text-emerald-200' 
                            : 'bg-purple-950/10 border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-950/20 text-purple-200'
                        }`}
                      >
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-[9px] text-gray-500 uppercase mt-0.5">{skill.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card footer decorative code block */}
                <div className="mt-8 pt-4 border-t border-gray-900 flex items-center justify-between text-[9px] font-mono text-gray-600">
                  <span>SEC_LEVEL: LOW_FAIL_SAFE</span>
                  <span>SYS_ID: 0x{idx}F9A</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
