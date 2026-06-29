import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, ShieldAlert, Cpu } from 'lucide-react';

interface CommandHistory {
  command: string;
  output: string | React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Scroll to bottom on history change
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  useEffect(() => {
    // Welcome message on load
    setHistory([
      {
        command: 'systeminfo',
        output: (
          <div className="space-y-1">
            <p className="text-cyan-400">Kamal Dhakar - Cybersecurity Portfolio Shell [v1.0.0]</p>
            <p className="text-gray-400">Type <span className="text-emerald-400 font-semibold">help</span> to view all available commands.</p>
            <p className="text-gray-500">Access Level: GUEST_DEVELOPER_RECRUITER</p>
          </div>
        )
      }
    ]);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: string | React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        output = (
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-w-md text-xs mt-1">
            <div><span className="text-emerald-400">about</span> - Who is Kamal Dhakar?</div>
            <div><span className="text-emerald-400">skills</span> - Languages and tools</div>
            <div><span className="text-emerald-400">projects</span> - View developed software</div>
            <div><span className="text-emerald-400">education</span> - University metrics</div>
            <div><span className="text-emerald-400">achievements</span>- Key achievements list</div>
            <div><span className="text-emerald-400">contact</span> - Find Kamal online</div>
            <div><span className="text-emerald-400">secret</span> - Decrypt secret packet</div>
            <div><span className="text-emerald-400">clear</span> - Clear output log</div>
          </div>
        );
        break;
      case 'about':
        output = (
          <div className="space-y-1">
            <p><strong className="text-cyan-400">Kamal Dhakar</strong> - B.Tech CSE (Cyber Security) student at JECRC University.</p>
            <p>Aspiring Software Developer, Backend Developer, and Cyber Security Enthusiast.</p>
            <p>Passionate about building highly secure, RESTful, and scalable applications with clean architecture.</p>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-2 mt-1">
            <div>
              <span className="text-cyan-400 font-semibold">Languages:</span> C++, C#, Python, JavaScript, SQL
            </div>
            <div>
              <span className="text-cyan-400 font-semibold">Backend:</span> ASP.NET Core Web API, REST API, JWT Authentication, EF Core
            </div>
            <div>
              <span className="text-cyan-400 font-semibold">Frontend:</span> HTML, CSS, React, TypeScript, Tailwind CSS
            </div>
            <div>
              <span className="text-cyan-400 font-semibold">Database & Tools:</span> PostgreSQL, Git, GitHub, Docker, Linux, VS Code, Postman, Swagger
            </div>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-2 mt-1">
            <div>
              <p className="text-emerald-400 font-bold">1. CyberGuardLab [FULL STACK]</p>
              <p className="text-gray-400">ASP.NET Core Web API, React, PostgreSQL, JWT Auth, EF Core, Docker</p>
              <p className="text-gray-500">Security education & vulnerability scanning orchestrator portal.</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">2. Network Packet Sniffer [SECURITY TOOL]</p>
              <p className="text-gray-400">Python, Raw Sockets, Linux, TCP/IP, IPv4</p>
              <p className="text-gray-500">Live packets decoder and protocol inspection tool.</p>
            </div>
          </div>
        );
        break;
      case 'education':
        output = (
          <div className="space-y-1">
            <p><span className="text-cyan-400">Degree:</span> B.Tech in Computer Science Engineering (Cyber Security)</p>
            <p><span className="text-cyan-400">University:</span> JECRC University (Expected Grad: 2027)</p>
            <p><span className="text-cyan-400">CGPA:</span> 6.81 / 10.0</p>
          </div>
        );
        break;
      case 'achievements':
        output = (
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Built Full Stack Applications with ASP.NET Core & React</li>
            <li>Developed Secure REST APIs with JWT & EF Core</li>
            <li>Learning Cyber Security, Network Sniffing & Pentesting</li>
            <li>Solved Data Structures & Algorithms problems</li>
          </ul>
        );
        break;
      case 'contact':
        output = (
          <div className="space-y-1">
            <p><span className="text-cyan-400">Email:</span> kamaldhakar@placeholder.com</p>
            <p><span className="text-cyan-400">GitHub:</span> github.com/placeholder</p>
            <p><span className="text-cyan-400">LinkedIn:</span> linkedin.com/in/placeholder</p>
            <p><span className="text-cyan-400">LeetCode:</span> leetcode.com/placeholder</p>
          </div>
        );
        break;
      case 'secret':
        output = (
          <div className="text-neon-green animate-pulse space-y-1">
            <p className="font-bold flex items-center gap-1">
              <ShieldAlert className="w-4 h-4 text-emerald-400" /> DECRYPTING ENCRYPTED SEGMENT...
            </p>
            <p>Extracting payload bytes: [75 97 109 97 108 95 68 104 97 107 97 114]</p>
            <p className="font-mono text-xs text-white bg-emerald-950/60 p-2 rounded border border-emerald-500/30">
              {"FLAG{K4M4L_D4HK4R_CYB3R_D3V_2027}"}
            </p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        output = '';
        break;
      default:
        output = (
          <span className="text-red-400 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" /> Command not found: "{trimmed}". Type "help" for a list of commands.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="w-full">
      <div className="terminal-window rounded-xl border border-cyan-500/20 glow-blue overflow-hidden flex flex-col h-[400px]">
        {/* Terminal Header */}
        <div className="bg-[#0b0f19] px-4 py-3 flex items-center justify-between border-b border-cyan-500/10">
          <div className="flex items-center space-x-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">
              guest@kamal-dhakar: ~/portfolio
            </span>
          </div>
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/60 block cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/60 block cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/60 block cursor-pointer"></span>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="flex-1 p-6 overflow-y-auto font-mono text-xs md:text-sm text-gray-300 space-y-4 cursor-text bg-[#03060f]/95 scrollbar-thin"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center text-cyan-400 font-semibold">
                <span className="text-emerald-500 mr-1.5">guest@kamal-dhakar:~$</span>
                <span>{item.command}</span>
              </div>
              <div className="pl-4 text-gray-300 whitespace-pre-wrap">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Prompt Input */}
        <div className="bg-[#0b0f19] p-3 border-t border-cyan-500/10 flex items-center">
          <span className="font-mono text-xs md:text-sm text-emerald-500 font-bold mr-2 select-none">
            guest@kamal-dhakar:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent text-cyan-300 font-mono text-xs md:text-sm focus:outline-none placeholder-cyan-800/80"
            placeholder="Type 'help' to begin..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus={false}
          />
          <Cpu className="w-4 h-4 text-cyan-500/60 ml-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
