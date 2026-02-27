import React from 'react';
import { Bell, Search, Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-30 transition-colors">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <button className="lg:hidden p-2 text-zinc-600 dark:text-zinc-400">
            <Menu className="w-5 h-5" />
          </button>
          <div className="relative max-w-md w-full hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search for projects, students, or skills..." 
              className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-900 border-none rounded-full text-sm focus:ring-2 focus:ring-emerald-500 transition-all dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-all"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full relative transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-zinc-200 dark:border-zinc-800">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">{user?.name}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">{user?.role}</p>
            </div>
            <img 
              src={user?.avatar} 
              alt={user?.name} 
              className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-500/20"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
