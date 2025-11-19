import React from 'react';
import LiveMap from './LiveMap';

const Dashboard = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-gray-500">Information about your current plan and usages</p>
      </div>

      {/* Air Quality Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Air Quality Status</h3>
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-gray-600">⚙️</button>
          </div>
        </div>
        
        <div className="relative h-64 mb-4">
          <svg viewBox="0 0 600 200" className="w-full h-full">
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#86efac', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#86efac', stopOpacity: 0}} />
              </linearGradient>
            </defs>
            
            {/* Area under curve */}
            <path
              d="M 50,120 C 100,100 150,130 200,110 C 250,90 300,100 350,80 C 400,60 450,70 500,60 C 520,58 540,65 550,80 L 550,180 L 50,180 Z"
              fill="url(#areaGradient)"
            />
            
            {/* Line */}
            <path
              d="M 50,120 C 100,100 150,130 200,110 C 250,90 300,100 350,80 C 400,60 450,70 500,60 C 520,58 540,65 550,80"
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
            />
            
            {/* Data point */}
            <circle cx="450" cy="70" r="4" fill="#4ade80" stroke="white" strokeWidth="2" />
            
            {/* Label */}
            <text x="430" y="50" className="text-xs fill-gray-600">AQI</text>
            <text x="420" y="70" className="text-xl font-bold fill-gray-800">150</text>
          </svg>
          
          {/* Time labels */}
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>10:30 AM</span>
            <span>11:30 AM</span>
            <span>12:30 AM</span>
            <span>01:30 PM</span>
            <span>02:30 PM</span>
            <span>03:30 PM</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-500 mb-2">AQI</p>
          <p className="text-3xl font-bold text-gray-800">150</p>
          <p className="text-sm text-gray-600">Unhealthy</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-500 mb-2">PM2.5</p>
          <p className="text-3xl font-bold text-gray-800">70 μg/m³</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-500 mb-2">PM10</p>
          <p className="text-3xl font-bold text-gray-800">100 μg/m³</p>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recommendation */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommendation</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <span className="text-orange-500">😷</span>
              <span>Wear an N95 mask</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span className="text-blue-500">🏃</span>
              <span>Avoid outdoor exercise</span>
            </div>
          </div>
        </div>

        {/* Live Maps */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Live Maps</h3>
          <div className="h-64 rounded-lg overflow-hidden">
            <LiveMap center={[-6.9175, 107.6191]} zoom={13} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;