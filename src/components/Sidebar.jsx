import React from 'react';
import { Home, User, FileText, LogOut } from 'lucide-react';

const Sidebar = ({ 
  sidebarOpen, 
  currentPage, 
  setCurrentPage, 
  isLoggedIn, 
  handleLogout 
}) => {
  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white border-r-4 border-blue-600 transition-all duration-300 overflow-hidden`}>
      <div className="p-6">
        <h1 className="text-xl font-bold text-blue-600">BojongSantoz</h1>
      </div>
      
      <nav className="mt-8">
        <button
          onClick={() => setCurrentPage('profile')}
          className={`w-full flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
            currentPage === 'profile' ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
          }`}
        >
          <User size={20} className="mr-3" />
          Profile
        </button>
        
        <button
          onClick={() => setCurrentPage('dashboard')}
          className={`w-full flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
            currentPage === 'dashboard' ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
          }`}
        >
          <Home size={20} className="mr-3" />
          Dashboard
        </button>
        
        <button
          onClick={() => setCurrentPage('report')}
          className={`w-full flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
            currentPage === 'report' ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
          }`}
        >
          <FileText size={20} className="mr-3" />
          Report
        </button>
        
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors mt-8">
            <LogOut size={20} className="mr-3" />
            Log out
          </button>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;