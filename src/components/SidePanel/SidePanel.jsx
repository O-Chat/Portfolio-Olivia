// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// export default function SidePanel() {
//   const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);
//     const togglePortfolio = () => {
//       setIsPortfolioOpen((prev) => !prev);
//     };
//   return (
//     <div className="w-80 bg-[#1e1e1e] border-1 border-[#3d3c3c] text-white">
//       <div className="p-4 space-y-2">
//         <h1 className='text-xl pl-2 pr-2'>EXPLORER</h1>
//         <Link to="/" className="block hover:text-blue-400">📄 About.jsx</Link>
//         <Link to="/projects" className="block hover:text-blue-400">📁 Projects</Link>
//         <Link to="/skills" className="block hover:text-blue-400">📁 Skills</Link>
//         <Link to="/contact" className="block hover:text-blue-400">📄 Contact.jsx</Link>
//       </div>
//     </div>
//   );
// }




// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// export default function SidePanel() {
//   const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);

//   const togglePortfolio = () => {
//     setIsPortfolioOpen((prev) => !prev);
//   };

//   return (
//     <div className="hidden md:block w-60 bg-[#1e1e1e] border-r-1 border-[#3d3c3c] text-white">
//       <div className="p-4 space-y-2 ">
//         {/* EXPLORER title */}
//         <div className="border-b-1 border-[#3d3c3c] ">
//         <h1 className="text-xl pl-2 ">EXPLORER</h1>
//         </div>
//         {/* Portfolio Section Toggle */}
//         <div
//           onClick={togglePortfolio}
//           className="cursor-pointer pl-2 flex items-center gap-1 hover:text-blue-400"
//         >
//           <span className="text-l  ">
//             {isPortfolioOpen ? '📂' : '📁'} Portfolio
//           </span>
//         </div>

//         {/* Collapsible Links */}
//         {isPortfolioOpen && (
//           <div className="ml-6 space-y-1 text-sm ">
//             <Link to="/about" className="block hover:text-blue-400">📄 About.jsx</Link>
//             <Link to="/projects" className="block hover:text-blue-400">📁 Projects</Link>
//             <Link to="/skills" className="block hover:text-blue-400">📁 Skills</Link>
//             <Link to="/contact" className="block hover:text-blue-400">📄 Contact.jsx</Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

export default function SidePanel() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);

  const togglePortfolio = () => {
    setIsPortfolioOpen((prev) => !prev);
  };

  return (
    <div className="hidden md:block w-60 bg-[#1e1e1e] border-r-1 border-b-1 border-[#3d3c3c] text-white">
      <div className="p-4 space-y-2">
        {/* EXPLORER title */}
        <div className="border-b-1 border-[#3d3c3c]">
          <h1 className="text-xl pl-2">EXPLORER</h1>
        </div>

        {/* Portfolio Section Toggle */}
        <div
          onClick={togglePortfolio}
          className="cursor-pointer pl-2 flex items-center gap-1 hover:text-blue-400">
         
        <svg
    className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
      isPortfolioOpen ? 'rotate-90' : ''
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
  <span className="text-l">Portfolio</span>
</div>

        {/* Collapsible Links */}
        {isPortfolioOpen && (
          <div className="ml-6 space-y-1 text-sm">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` px-2 py-1 rounded hover:text-blue-400 flex items-center gap-2 ${
                  isActive ? 'bg-blue-600 text-white' : ''
                }`
              }
            >
              <img
    src="./src/assets/JSXLogo/JSX.png"
    alt="JSX Logo"
    className="h-5 w-5"
  />
               About.jsx
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                ` px-2 py-1 rounded hover:text-blue-400 flex items-center gap-2 ${
                  isActive ? 'bg-blue-600 text-white' : ''
                }`
              }
            >
               <img
    src="./src/assets/JSLogo/JS.png"  
    alt="JSX Logo"
    className="h-5 w-5"
  />
               Projects.js
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                ` px-2 py-1 rounded hover:text-blue-400 flex items-center gap-2 ${
                  isActive ? 'bg-blue-600 text-white' : ''
                }`
              }
            >
               <img
    src="./src/assets/CSSLogo/CSS.png"  
    alt="CSS Logo"
    className="h-5 w-5"
  />
              Skills.css
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                ` px-2 py-1 rounded hover:text-blue-400 flex items-center gap-2 ${
                  isActive ? 'bg-blue-600 text-white' : ''
                }`
              }
            >
               <img
    src="./src/assets/JSONLogo/JSON.png"  
    alt="CSS Logo"
    className="h-5 w-5"
  />
               Contact.json
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}


  
  