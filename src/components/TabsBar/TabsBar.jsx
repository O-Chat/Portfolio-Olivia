import { NavLink } from 'react-router-dom';

const tabs = [
  { name: 'About.jsx', path: '/about', icon: 'JSX' },
  { name: 'Projects.js', path: '/projects', icon:'JS' },
  { name: 'Skills.css', path: '/skills', icon:'CSS' },
  { name: 'Contact.json', path: '/contact', icon:'JSON' }
];
// bg-[#272727]
export default function TabsBar() {
  return (
    <div className="flex flex-wrap bg-[#1e1e1e] border-b border-[#3d3c3c] min-w-0">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `px-4 py-2 min-w-0 text-sm font-mono text-white  border-[#333] overflow-hidden text-ellipsis whitespace-nowrap text-center flex items-center gap-2
          ${
              isActive 
              ? 'bg-[#272727] border-t-4 border-blue-600' 
              : 'hover:bg-[#3c3c3c]'
            }`
          }
        >
          <img
        src={`./src/assets/${tab.icon}Logo/${tab.icon}.png`}
        alt={`${tab.icon} icon`}
        className="h-4 w-4"
      />
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
}
