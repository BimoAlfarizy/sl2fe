import React, { useState, useEffect } from 'react';
import LiveMap from './LiveMap';
import AIRecommendationWindow from './AIRecommendationWindow';
import { Wind, Droplets, Thermometer } from 'lucide-react';

const Dashboard = () => {
  const [aiData, setAiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAiData({
        status: "Unhealthy Conditions Detected",
        message: "Based on wind patterns and PM2.5 density in Cileunyi, air quality is expected to degrade over the next 2 hours.",
        actions: [
          "Wear N95 masks if commuting via motorcycle.",
          "Close ventilation in schools and offices.",
          "Avoid outdoor sports until 4:00 PM."
        ],
        confidence: 0.89
      });
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Real-time Monitor</h2>
        <p className="text-gray-500 dark:text-gray-400">West Java Regional Sensor Network</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border-l-4 border-orange-500 relative overflow-hidden">
          <div className="relative z-10">
             <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-bold uppercase">AQI Level</p>
             <p className="text-4xl font-bold text-gray-800 dark:text-white">150</p>
             <p className="text-sm text-orange-600 font-medium mt-1">Unhealthy</p>
          </div>
          <Wind className="absolute right-4 top-4 text-gray-100 dark:text-slate-700 opacity-50" size={64} />
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500 relative overflow-hidden">
          <div className="relative z-10">
             <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-bold uppercase">PM2.5 Concentration</p>
             <p className="text-4xl font-bold text-gray-800 dark:text-white">70 <span className="text-lg text-gray-400 font-normal">µg/m³</span></p>
          </div>
          <Droplets className="absolute right-4 top-4 text-gray-100 dark:text-slate-700 opacity-50" size={64} />
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500 relative overflow-hidden">
           <div className="relative z-10">
             <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-bold uppercase">Temperature</p>
             <p className="text-4xl font-bold text-gray-800 dark:text-white">28°C</p>
           </div>
           <Thermometer className="absolute right-4 top-4 text-gray-100 dark:text-slate-700 opacity-50" size={64} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live Sensor Map
          </h3>
          <div className="h-[400px] w-full rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 relative z-0">
            <LiveMap center={[-6.9175, 107.6191]} zoom={13} />
          </div>
        </div>

        <div className="h-[475px]">
          <AIRecommendationWindow aiData={aiData} isLoading={isLoading} />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">24-Hour Trend Analysis</h3>
        <div className="relative h-48 w-full">
           <svg viewBox="0 0 600 150" className="w-full h-full" preserveAspectRatio="none">
             <defs>
               <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                 <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
               </linearGradient>
             </defs>
             <path d="M0,100 C50,80 100,120 150,90 C200,60 250,70 300,50 C350,30 400,40 450,60 C500,80 550,70 600,50 L600,150 L0,150 Z" fill="url(#chartGradient)" />
             <path d="M0,100 C50,80 100,120 150,90 C200,60 250,70 300,50 C350,30 400,40 450,60 C500,80 550,70 600,50" fill="none" stroke="#ef4444" strokeWidth="2" />
           </svg>
           <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-400 px-2">
             <span>06:00</span><span>10:00</span><span>14:00</span><span>18:00</span><span>22:00</span><span>02:00</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;