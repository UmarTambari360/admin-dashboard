import { useState, useEffect } from 'react';
import Sidebar from './SideBar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setIsMobile(mobile);
      
      if (width >= 1024) {
        setSidebarOpen(true);
      } else if (width >= 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getMainContentMargin = () => {
    if (isMobile) {
      return 'ml-0';
    } else if (sidebarOpen) {
      return 'lg:ml-64';
    } else {
      return 'md:ml-20 lg:ml-20';
    }
  };

  return (
    <div className="flex h-screen transition-colors bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} isMobile={isMobile} />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${getMainContentMargin()}`}>

        <Header 
          onMenuToggle={toggleSidebar}
          sidebarOpen={sidebarOpen}
        />
        
        <main className="flex-1 p-4 overflow-y-auto sm:p-6">
          {children}
        </main>
      </div>

      {sidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 z-40 bg-gray-100 opacity-50 bg-"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default DashboardLayout;