import React, { useState } from 'react';

const Report = () => {
  const [category, setCategory] = useState('Pollution');

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Community Report</h2>
        <p className="text-gray-500 dark:text-gray-400">Submit visible pollution evidence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">New Report</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white" placeholder="e.g., Heavy smoke in Cileunyi" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {['Pollution', 'Fire', 'Smell', 'Waste'].map((cat) => (
                  <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-lg text-sm transition-colors ${category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300'}`}>{cat}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white" placeholder="Describe what you see..." />
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg">Submit Report</button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Location</h3>
           <div className="bg-gray-100 dark:bg-slate-700 h-64 rounded-lg flex items-center justify-center text-gray-400">
              [Map Placeholder for Location Picking]
           </div>
        </div>
      </div>
    </div>
  );
};

export default Report;