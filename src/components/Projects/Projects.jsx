
  export default function Projects() {
    return (
      <div className="min-h-192 bg-[#1e1e1e] text-white p-8 font-mono">
        <h1 className="text-3xl font-bold mb-6 text-green-400">Projects</h1>
  
        <div className="space-y-6">
  
          {/* Project 1: Portfolio */}
          <div className="bg-[#2b2b2b] p-5 rounded-xl shadow-md hover:shadow-green-500/20 transition-shadow">
            <h2 className="text-xl font-semibold text-green-300">CodePersona - My Portfolio</h2>
            <p className="text-gray-300">Built using <span className="text-green-400">React.js</span> and Tailwind CSS. Fully responsive and inspired by VS Code’s interface.</p>
            <a
              href="https://github.com/O-Chat/Portfolio-Olivia"
              className="text-blue-400 underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo-https://github.com/O-Chat/Portfolio-Olivia
            </a>
          </div>

          {/* Project 2: E-Voting System */}
          <div className="bg-[#2b2b2b] p-5 rounded-xl shadow-md hover:shadow-green-500/20 transition-shadow">
            <h2 className="text-xl font-semibold text-green-300">BlockVote : Blockchain based E-Voting System</h2>
            <p className="text-gray-300">Designed a full-stack, <span className="text-green-400">blockchain-powered</span> e-voting platform <span className="text-green-400">(React·Node.js·MongoDB)</span> with <span className="text-green-400">JWT-secured</span>
role access, delivering tamper-proof ballots and real-time, verifiable election results.</p>
            <a
              href="https://github.com/O-Chat/EVotingSystem"
              className="text-blue-400 underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo-https://github.com/O-Chat/EVotingSystem
            </a>
          </div>
           {/* Project 3: Emergency Transport System (In Progress) */}
        <div className="bg-[#2b2b2b] p-5 rounded-xl shadow-md hover:shadow-green-500/20 transition-shadow">
          <h2 className="text-xl font-semibold text-green-300">ETMS - Emergency Transport Maintenance System(Ongoing)</h2>
          <p className="text-gray-300">Built a full-stack emergency dispatch simulator using <span className="text-green-400">React.js </span>(frontend) and <span className="text-green-400">C++</span> for core logic. Imple-
ments <span className="text-green-400">Dijkstra’s Algorithm</span> to assign the nearest ambulance, firetruck, or police unit.</p>
          <a
            href="https://github.com/O-Chat/ETMS" // replace with actual repo link
            className="text-blue-400 underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo (In Progress)- https://github.com/O-Chat/ETMS
          </a>
        </div>

           {/* Project 4: AES-128bit */}
           <div className="bg-[#2b2b2b] p-5 rounded-xl shadow-md hover:shadow-green-500/20 transition-shadow">
            <h2 className="text-xl font-semibold text-green-300">AES 128-bit implementation</h2>
            <p className="text-gray-300">Implemented AES-128 encryption from scratch in <span className="text-green-400">C++</span> with support for
ECB mode, file encryption and PKCS#7 Padding, command line interface
and modular OOP Design .</p>
            <a
              href="https://github.com/O-Chat/Cryptography/tree/main/AES" // replace with your actual repo
              className="text-blue-400 underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo-https://github.com/O-Chat/Cryptography/tree/main/AES
            </a>
            </div>
  
          {/* Project 5: Netflix UI Clone */}
          <div className="bg-[#2b2b2b] p-5 rounded-xl shadow-md hover:shadow-green-500/20 transition-shadow">
            <h2 className="text-xl font-semibold text-green-300">Netflix UI Clone</h2>
            <p className="text-gray-300">Designed using <span className="text-green-400">HTML, Tailwind CSS,</span> and <span className="text-green-400">JavaScript</span>. Mimics Netflix homepage layout.</p>
            <a
              href="https://github.com/O-Chat/Netflix-UI-Clone" // replace with your actual repo
              className="text-blue-400 underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo-https://github.com/O-Chat/Netflix-UI-Clone
            </a>
          </div>

          

            
          
          </div>
          </div>
          )
          }
  
         
  