import { Search, Bell, Mail, Menu, ChevronDown } from "lucide-react";
import Button from "../Button";
import ThemeToggle from "../ThemeToggle";

const Header = ({ onMenuToggle }) => {
  return (
    <header className="px-4 py-3 transition-colors bg-white border-b border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 sm:px-6 sm:py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="md:hidden dark:text-gray-100 hover:dark:bg-gray-700"
            aria-label="Toggle Sidebar"
          >
            <Menu size={20} />
          </Button>

          <nav className="items-center hidden space-x-2 text-sm text-gray-600 md:flex dark:text-gray-300">
            <span>Home</span>
            <span>/</span>
            <span className="font-medium text-gray-900 dark:text-white">
              Dashboard
            </span>
          </nav>
        </div>

        <div className="flex-1 w-full sm:w-auto sm:flex-initial sm:max-w-md">
          <div className="relative">
            <Search
              size={18}
              className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 transition-colors border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <ThemeToggle />

          <Button variant="ghost" size="sm" className="relative">
            <Bell size={20} className="text-gray-600 dark:text-gray-200" />
            <span className="absolute w-3 h-3 bg-red-500 rounded-full -top-1 -right-1" />
          </Button>

          <Button variant="ghost" size="sm" className="relative">
            <Mail size={20} className="text-gray-600 dark:text-gray-200" />
            <span className="absolute w-3 h-3 bg-green-500 rounded-full -top-1 -right-1" />
          </Button>

          <div className="flex items-center pl-3 space-x-2 border-l border-gray-300 dark:border-gray-600">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?...q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden text-left md:block">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Umar Tambari
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Administrator
              </div>
            </div>
            <ChevronDown
              size={16}
              className="text-gray-400 dark:text-gray-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;