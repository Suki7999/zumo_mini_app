'use client'
import SideBar from '/src/components/Sidebar';
import Header from '/src/components/Header';
import { useState } from 'react';

const Layout = ({ children, layoutType}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="w-1/5 h-[100%] text-white hidden md:block"> {/* Hide on smaller screens */}
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      </div>
      <div className="flex flex-col flex-1">
        {
          layoutType === 'video' ?
          <div className='bg-violet-500 flex items-center justify-items-start w-full h-[128px] rounded-b-md text-white pl-4 cursor-pointer'>
            <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 15.5587H2.16617" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path d="M14.7564 29.1174L2.56732 16.9283C1.81089 16.172 1.81089 14.9455 2.56732 14.1891L14.7564 2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <p className='text-[25px] ml-28'>Видио</p>
          </div>:
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        }
        <main className="p-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;