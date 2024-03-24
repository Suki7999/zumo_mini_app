'use client'
import React, { useState } from 'react';
import SideBar from '/src/components/Sidebar';
import Header from '/src/components/Header';
import BreadCrumbs from '/src/app/components/Breadcrumbs';

const Layout = ({ children, layoutType }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="flex h-screen">

      <div className="w-1/5 h-[100%] text-white hidden md:block">
        <SideBar isOpen={isSideBarOpen}/>
      </div>

      <div className="flex flex-col flex-1">

        {layoutType ? <BreadCrumbs crumb={layoutType}/> : <Header toggleSideBar={toggleSideBar}/>}

        <main className="p-2">
          {children}
        </main>
      </div>
      
      {isSideBarOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-20">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button 
              className="text-white"
              onClick={toggleSideBar}
            >
              Close
            </button>
          </div>
          <div className="flex justify-end pt-16 px-4">
            <SideBar isOpen={isSideBarOpen}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;