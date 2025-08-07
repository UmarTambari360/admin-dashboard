import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "./SideBar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const closeHandler = () => setSidebarOpen(false);
    window.addEventListener("closeSidebar", closeHandler);
    return () => window.removeEventListener("closeSidebar", closeHandler);
  }, []);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
      <Header onMenuToggle={toggleSidebar} sidebarOpen={sidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        <main className="flex-1 p-4 transition-all duration-300 md:ml-16 lg:ml-64">
          <div className="max-w-full">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
