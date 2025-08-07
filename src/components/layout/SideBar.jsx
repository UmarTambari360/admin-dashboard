import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  CreditCard,
  Bell,
  Palette,
  Calendar,
  Brush,
} from "lucide-react";

const Sidebar = ({ isOpen = true }) => {
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

  return (
    <div
      className={`
      fixed left-0 top-0 h-full bg-white dark:bg-gray-900 shadow-2xl border-gray-600 transition-all duration-300 z-50
      ${isOpen ? "w-64" : "w-20"}
      ${isOpen ? "block" : "hidden"}
      md:block
      md:w-20
      lg:w-64
    `}
    >
      <div className="p-6 border-b border-gray-800 dark:border-gray-700">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg dark:bg-blue-500">
            <LayoutDashboard size={20} />
          </div>
          {isOpen && (
            <span className="ml-3 text-lg font-semibold text-black dark:text-gray-100 md:hidden lg:block">
              Tambari Store
            </span>
          )}
        </div>
      </div>

      <div className="absolute md:hidden top-4 right-4">
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              const event = new CustomEvent("closeSidebar");
              window.dispatchEvent(event);
            }
          }}
          className="text-2xl font-extrabold text-gray-800 transition-colors border border-gray-100 dark:text-white"
        >
          X
        </button>
      </div>

      <nav className="mt-6">
        <div className="px-4">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`
                  flex items-center px-3 py-3 rounded-lg mb-1 cursor-pointer transition-colors text-gray-800 dark:text-gray-100
                  ${
                    item.active
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                <IconComponent size={20} />
                {isOpen && (
                  <>
                    <span className="ml-3 text-sm font-medium md:hidden lg:block">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span
                        className={`
                        ml-auto px-2 py-1 text-xs rounded-full
                        ${
                          item.badge === "NEW"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }
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

        {isOpen && (
          <div className="px-4 mt-8 md:hidden lg:block">
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-100">
              Theme
            </h4>
            {themeItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center px-3 py-2 mb-1 text-gray-800 transition-colors rounded-lg cursor-pointer dark:text-gray-100 hover:bg-gray-800 hover:text-white"
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