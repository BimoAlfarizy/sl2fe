import React, { useState } from 'react';
import { Bell, Database, Cpu, Download, Moon, Sun, Key } from 'lucide-react';

const AdminDashboard = ({ darkMode, toggleDarkMode }) => {
  const [threshold, setThreshold] = useState(150);
  const [apiKey] = useState('sk_test_51Mx...9zR');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-2">
        <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Control</h2>
            <p className="text-gray-500 dark:text-gray-400">System Configuration</p>
        </div>
        <button 
            onClick={toggleDarkMode}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 transition-colors"
        >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="text-blue-500" /> Connected Sensors
            </h3>
            <div className="space-y-3">
                {[{ id: 'SN-01', loc: 'Bandung', status: 'Online' }, { id: 'SN-02', loc: 'Bekasi', status: 'Offline' }].map((dev, idx) => (
                    <div key={idx} className="flex justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-100 dark:border-slate-600">
                        <span className="text-gray-700 dark:text-gray-200">{dev.loc} ({dev.id})</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${dev.status === 'Online' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{dev.status}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Bell className="text-orange-500" /> Alert Thresholds
            </h3>
            <div className="mb-4">
                <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AQI Trigger Limit</span>
                    <span className="text-sm font-bold text-blue-600">{threshold}</span>
                </div>
                <input 
                    type="range" min="50" max="300" value={threshold} 
                    onChange={(e) => setThreshold(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="+62 812..." className="flex-1 px-4 py-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>
            </div>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Database className="text-purple-500" /> Data Export
            </h3>
            <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-700 dark:text-white hover:bg-gray-50">
                    <Download size={16} /> Export CSV
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-700 dark:text-white hover:bg-gray-50">
                    <Download size={16} /> Export JSON
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;