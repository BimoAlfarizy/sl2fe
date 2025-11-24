import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, FileText, TrendingDown, Factory, Activity } from 'lucide-react';

const ComplianceTracker = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const logs = [
    { date: '2023-10-24', pollutant: 'PM2.5', emission: 45, limit: 65, status: 'Pass' },
    { date: '2023-10-23', pollutant: 'CO', emission: 8.2, limit: 9.0, status: 'Warning' },
    { date: '2023-10-22', pollutant: 'PM10', emission: 160, limit: 150, status: 'Fail' },
  ];

  const factorySensors = [
    { id: 'IND-001', name: 'PT. Textile Sejahtera', location: 'Cileunyi Zone A', pollutant: 'PM2.5', limit: 50, current: 42, status: 'Compliant' },
    { id: 'IND-002', name: 'Bojong Metalworks', location: 'Cileunyi Zone B', pollutant: 'CO', limit: 25, current: 28, status: 'Violation' },
    { id: 'IND-003', name: 'Bandung ChemCorp', location: 'Rancaekek', pollutant: 'SO2', limit: 10, current: 8.5, status: 'Warning' },
    { id: 'IND-004', name: 'Paperindo Utama', location: 'Padalarang', pollutant: 'NO2', limit: 40, current: 12, status: 'Compliant' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Industry Compliance</h2>
          <p className="text-gray-500 dark:text-gray-400">Regulatory Monitoring & Sensor Data</p>
        </div>
        
        <div className="flex bg-gray-100 dark:bg-slate-800 p-1 rounded-lg self-start md:self-auto">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'overview' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`}
          >
            Overview & Logs
          </button>
          <button 
            onClick={() => setActiveTab('sensors')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'sensors' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`}
          >
            Live Industry Sensors
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2 text-green-800 font-semibold">
                    <ShieldCheck size={20} /> Compliance Rate
                </div>
                <p className="text-3xl font-bold text-green-900">94%</p>
             </div>
             <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2 text-gray-800 dark:text-white font-semibold">
                    <FileText size={20} /> Reports Filed
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
             </div>
             <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2 text-gray-800 dark:text-white font-semibold">
                    <TrendingDown size={20} /> Emission Trend
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">-18%</p>
             </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                <h3 className="font-semibold text-gray-800 dark:text-white">Violation History Logs</h3>
            </div>
            <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-slate-700/50 text-gray-500 dark:text-gray-400 text-xs uppercase">
                    <tr>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Pollutant</th>
                        <th className="px-6 py-3">Emission</th>
                        <th className="px-6 py-3">Limit</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                    {logs.map((log, i) => (
                        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-slate-700/30">
                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{log.date}</td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-800 dark:text-white">{log.pollutant}</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{log.emission}</td>
                            <td className="px-6 py-4 text-sm text-gray-400">{log.limit}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${log.status === 'Pass' ? 'bg-green-100 text-green-800' : log.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                    {log.status === 'Fail' && <AlertTriangle size={10} />} {log.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in zoom-in duration-300">
            {factorySensors.map((factory) => (
                <div key={factory.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 relative overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Factory size={18} />
                                </div>
                                <h3 className="font-bold text-gray-800 dark:text-white text-lg">{factory.name}</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 ml-11">{factory.location}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                            factory.status === 'Compliant' ? 'bg-green-50 text-green-700 border-green-200' : 
                            factory.status === 'Warning' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 
                            'bg-red-50 text-red-700 border-red-200'
                        }`}>
                            {factory.status}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 dark:bg-slate-700/30 p-3 rounded-lg border border-gray-100 dark:border-slate-600">
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">Assigned Limit</p>
                            <p className="font-mono font-semibold text-gray-700 dark:text-gray-200 text-lg">
                                {factory.limit} <span className="text-xs font-normal text-gray-400">ppm</span>
                            </p>
                        </div>
                        <div className={`p-3 rounded-lg border ${factory.current > factory.limit ? 'bg-red-50 border-red-100 dark:bg-red-900/10 dark:border-red-800' : 'bg-gray-50 border-gray-100 dark:bg-slate-700/30 dark:border-slate-600'}`}>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">Current Emission</p>
                            <div className="flex items-center gap-2">
                                <p className={`font-mono font-bold text-lg ${factory.current > factory.limit ? 'text-red-600' : 'text-gray-700 dark:text-gray-200'}`}>
                                    {factory.current}
                                </p>
                                {factory.current > factory.limit && <AlertTriangle size={16} className="text-red-500 animate-pulse" />}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Activity size={16} className="text-indigo-500" />
                            <span>Pollutant: <span className="font-semibold text-gray-700 dark:text-gray-200">{factory.pollutant}</span></span>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                            Details <span>→</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ComplianceTracker;
