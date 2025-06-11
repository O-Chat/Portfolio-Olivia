import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Explorer from './components/Explorer/Explorer.jsx';
import SidePanel from './components/SidePanel/SidePanel.jsx';
import TabsBar from './components/TabsBar/TabsBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
  const toggleSidePanel = () => {
    setIsSidePanelOpen((prev) => !prev);
  };

 
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Explorer Bar (vertical) */}
        {/* <Explorer toggleSidePanel={toggleSidePanel} /> */}
        <Explorer toggleSidePanel={toggleSidePanel} isSidePanelOpen={isSidePanelOpen} />

        {/* SidePanel (file tree area) */}
        {isSidePanelOpen && <SidePanel />}

        {/* Tabs + Main Content */}
        <div className="flex flex-col flex-1">
          <TabsBar />
          <main className="flex-1 overflow-auto  bg-[#272727] text-white p-4">
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
  
}
