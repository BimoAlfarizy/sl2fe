import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Report from './components/Report';
import AdminDashboard from './components/AdminDashboard';
import ComplianceTracker from './components/ComplianceTracker';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUser({ email });
  };

  const handleRegister = (name, email) => {
    setIsLoggedIn(true);
    setUser({ name, email });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage('dashboard');
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <Sidebar 
        sidebarOpen={sidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      <main className="flex-1 overflow-auto relative">
        <div className={`shadow-sm p-6 flex items-center justify-between sticky top-0 z-40 ${darkMode ? 'bg-slate-800 text-white border-b border-slate-700' : 'bg-white text-gray-800'}`}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:text-blue-600 transition-colors">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="flex items-center gap-3 text-sm font-medium">
             <span className="cursor-pointer hover:text-blue-500 font-bold">EN</span>
             <span className="text-gray-300 opacity-50">|</span>
             <span className="cursor-pointer text-gray-400 hover:text-blue-500">ID</span>
          </div>
        </div>
        
        <div className="p-8">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'report' && <Report />}
          {currentPage === 'profile' && (
            <Profile 
              isLoggedIn={isLoggedIn} 
              user={user} 
              onLogin={handleLogin} 
              onRegister={handleRegister} 
            />
          )}
          {currentPage === 'admin' && (
            <AdminDashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          )}
          {currentPage === 'compliance' && <ComplianceTracker />}
        </div>
      </main>
    </div>
  );
};

export default App;
