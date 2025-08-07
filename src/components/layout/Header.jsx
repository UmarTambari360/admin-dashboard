import { Search, Bell, Mail, Menu, ChevronDown } from "lucide-react";
import Button from "../Button";
import ThemeToggle from "../ThemeToggle";

const Header = ({ onMenuToggle, sidebarOpen }) => {
  return (
    <header className="px-4 py-4 transition-colors bg-white border-b border-gray-200 shadow-sm sm:px-6 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="md:hidden"
          >
            <Menu size={20} />
          </Button>

          <nav className="items-center hidden space-x-2 text-sm text-gray-600 sm:flex dark:text-gray-300">
            <span className="hidden sm:inline">Home</span>
            <span className="hidden sm:inline">/</span>
            <span className="font-medium text-gray-900 dark:text-white">
              Dashboard
            </span>
          </nav>
        </div>

        <div className="flex-1 hidden max-w-lg mx-4 lg:mx-8 lg:flex">
          <div className="relative w-full">
            <Search
              size={20}
              className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 transition-colors border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />

          <div className="relative hidden sm:block">
            <Button variant="ghost" size="sm" className="relative">
              <Bell size={20} />
              <span className="absolute w-3 h-3 bg-red-500 rounded-full -top-1 -right-1"></span>
            </Button>
          </div>

          <div className="relative hidden sm:block">
            <Button variant="ghost" size="sm" className="relative">
              <Mail size={20} />
              <span className="absolute w-3 h-3 bg-green-500 rounded-full -top-1 -right-1"></span>
            </Button>
          </div>

          <div className="flex items-center pl-2 space-x-2 border-l border-gray-300 sm:pl-4 sm:space-x-3 dark:border-gray-600">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden lg:block">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Umar Tambari
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Administrator
              </div>
            </div>
            <ChevronDown
              size={16}
              className="hidden text-gray-400 sm:block dark:text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 lg:hidden">
        <div className="relative">
          <Search
            size={20}
            className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 transition-colors border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
