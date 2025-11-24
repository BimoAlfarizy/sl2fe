import React from 'react';
import { Home, User, FileText, LogOut, Settings, Shield } from 'lucide-react';

const Sidebar = ({ 
  sidebarOpen, 
  currentPage, 
  setCurrentPage, 
  isLoggedIn, 
  handleLogout 
}) => {
  
  const NavButton = ({ page, icon: Icon, label }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`w-full flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
        currentPage === page ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
      }`}
    >
      <Icon size={20} className="mr-3" />
      {label}
    </button>
  );

  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white border-r-4 border-blue-600 transition-all duration-300 overflow-hidden flex flex-col h-full shadow-lg z-50`}>
      <div className="p-6">
        <h1 className="text-xl font-bold text-blue-600 flex items-center gap-2">
          SLC2 <span className="text-gray-400 font-normal text-sm">Climate</span>
        </h1>
      </div>
      
      <nav className="mt-2 flex-1">
        <NavButton page="dashboard" icon={Home} label="Live Dashboard" />
        <NavButton page="report" icon={FileText} label="Community Report" />
        <NavButton page="compliance" icon={Shield} label="Industry Compliance" />
        <NavButton page="profile" icon={User} label="Profile" />
      </nav>

      <div className="pb-6 border-t border-gray-100 pt-2">
        <NavButton page="admin" icon={Settings} label="Admin & Settings" />
        
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors mt-2">
            <LogOut size={20} className="mr-3" />
            Log out
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
