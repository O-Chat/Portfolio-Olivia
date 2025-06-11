import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HomeIcon, Cog6ToothIcon, FolderIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
export default function Explorer({ toggleSidePanel, isSidePanelOpen }) {
   const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('explorer'); // default active

  const handleClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') navigate('/');
    else if (tab === 'explorer') toggleSidePanel();
  };
  return (
    <div className="w-12 bg-[#1e1e1e] text-white flex flex-col items-center justify-between py-4 border-[#3d3c3c] border-b-1 border-t-1 border-r-1">
    <div className="flex flex-col">
     
      <button
          onClick={() => handleClick('explorer')}
          className={`p-2 hover:text-blue-400 ${
            activeTab === 'explorer' && isSidePanelOpen ? 'border-l-2 border-blue-500 bg-[#2d2d2d]' : ''
          }`}
          title="Explorer"
          >
          <FolderIcon className="h-6 w-6 text-gray-400" />
        </button>

      
      <button
          onClick={() => handleClick('bb')}
          className={`p-2 text-lg hover:text-blue-400 ${
            activeTab === 'bb' ? '' : ''
          }`}
          title="Search"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />

        </button>
    </div>
    <div className="flex flex-col">
     
      <button
      onClick={() => navigate('/')}
      className="text-gray-400 hover:text-blue-400 p-2"
      title="Home">
      <HomeIcon className="h-6 w-6" />
      </button>
     
      <button
      // onClick={toggleSidePanel}
      className="text-gray-400 hover:text-blue-400 p-2"
      title="Settings">
     <Cog6ToothIcon className="h-6 w-6" />
      </button>

    </div>
    </div>
  );
}