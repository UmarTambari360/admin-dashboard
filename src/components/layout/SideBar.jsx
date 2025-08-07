import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  CreditCard,
  Bell,
  Palette,
  Calendar,
  Brush
} from "lucide-react";

const Sidebar = ({ isOpen = true, isMobile = false }) => {
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      active: true,
      badge: "NEW",
    },
    {
      icon: Users,
      label: "Users",
    },
    {
      icon: BarChart3,
      label: "Analytics",
    },
    {
      icon: CreditCard,
      label: "Billing",
    },
    {
      icon: Calendar,
      label: "Calendar",
    },
    {
      icon: Bell,
      label: "Notifications",
      badge: "3",
    },
    {
      icon: Settings,
      label: "Settings",
    },
  ];

  const themeItems = [
    { icon: Palette, label: "Colors" },
    { icon: Brush, label: "Typography" },
  ];

  const showLabels = isOpen || (!isMobile && window.innerWidth >= 1024);

  return (
    <div
      className={`
      fixed left-0 top-0 h-full bg-white shadow-2xl dark:bg-gray-800 dark:text-gray-100 transition-all duration-300 z-50
      ${isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"}
      ${isOpen && isMobile ? "w-64" : ""}
      ${!isMobile && isOpen ? "lg:w-64" : ""}
      ${!isMobile && !isOpen ? "lg:w-20 md:w-20" : ""}
      ${!isMobile ? "hidden md:block" : ""}
    `}
    >
      <div className="p-6 border-b border-gray-800 dark:border-gray-700">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg dark:bg-blue-500 dark:text-gray-100">
            <LayoutDashboard size={20} />
          </div>
          {(isOpen || window.innerWidth >= 1024) && (
            <span
              className={`ml-3 text-lg font-semibold text-gray-800 dark:text-gray-100 transition-opacity duration-300 ${
                !isOpen && window.innerWidth >= 768 && window.innerWidth < 1024
                  ? "lg:opacity-0 lg:hidden"
                  : ""
              } ${!isOpen && window.innerWidth >= 1024 ? "hidden" : ""}`}
            >
              Tambari Store
            </span>
          )}
        </div>
      </div>

      <nav className="mt-6">
        <div className="px-4">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`
                  flex items-center px-3 py-3 rounded-lg mb-1 cursor-pointer transition-colors
                  ${
                    item.active
                      ? "bg-blue-600 text-white"
                      : "text-gray-800 hover:bg-gray-800 hover:text-white dark:text-gray-100 dark:hover:bg-gray-400"
                  }
                `}
              >
                <IconComponent size={20} />
                {(isOpen || window.innerWidth >= 1024) && (
                  <>
                    <span
                      className={`ml-3 text-sm font-medium transition-opacity duration-300 ${
                        !isOpen &&
                        window.innerWidth >= 768 &&
                        window.innerWidth < 1024
                          ? "md:opacity-0 md:hidden lg:opacity-100 lg:block"
                          : ""
                      } ${
                        !isOpen && window.innerWidth >= 1024 ? "hidden" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.badge && (
                      <span
                        className={`
                        ml-auto px-2 py-1 text-xs rounded-full transition-opacity duration-300
                        ${
                          item.badge === "NEW"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }
                        ${
                          !isOpen &&
                          window.innerWidth >= 768 &&
                          window.innerWidth < 1024
                            ? "md:opacity-0 md:hidden lg:opacity-100 lg:block"
                            : ""
                        }
                        ${!isOpen && window.innerWidth >= 1024 ? "hidden" : ""}
                      `}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {(isOpen || window.innerWidth >= 1024) && (
          <div
            className={`px-4 mt-8 transition-opacity duration-300 ${
              !isOpen && window.innerWidth >= 768 && window.innerWidth < 1024
                ? "md:opacity-0 md:hidden lg:opacity-100 lg:block"
                : ""
            } ${!isOpen && window.innerWidth >= 1024 ? "hidden" : ""}`}
          >
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Theme
            </h4>
            {themeItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center px-3 py-2 mb-1 text-gray-400 rounded-lg cursor-pointer datransition-colors lex hover:bg-gray-800 hover:text-white dark:hover:bg-gray-400"
                >
                  <IconComponent size={16} />
                  <span className="ml-3 text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
