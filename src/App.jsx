import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Report from './components/Report';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        sidebarOpen={sidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="bg-white shadow-sm p-6 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-blue-600">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className="p-8">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'profile' && (
            <Profile 
              isLoggedIn={isLoggedIn} 
              user={user} 
              onLogin={handleLogin} 
              onRegister={handleRegister} 
            />
          )}
          {currentPage === 'report' && <Report />}
        </div>
      </main>
    </div>
  );
};

export default App;