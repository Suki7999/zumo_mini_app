'use client'
import SideBar from '/src/components/Sidebar';
import Header from '/src/components/Header';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="w-1/5 h-[100%] text-white hidden md:block"> {/* Hide on smaller screens */}
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      </div>
      <div className="flex flex-col flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <main className="p-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;