import React, { useState } from 'react';

const Report = () => {
  const [reportCategory, setReportCategory] = useState('Air Pollution');

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Report</h2>
        <p className="text-gray-500">Report</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submit New Report */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Submit New Report</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Title</label>
              <input
                type="text"
                placeholder="Enter report title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Category</label>
              <div className="flex flex-wrap gap-2">
                {['Air Pollution', 'Fire Hazard', 'Flooding', 'Hazardous', 'Other'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setReportCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      reportCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Provide a detailed description"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
                <p className="text-gray-500">Drag and drop or click to upload</p>
                <p className="text-sm text-gray-400 mt-2">(Max resolution/size: [...])</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors">
                Submit
              </button>
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Use My Location
              </button>
            </div>
          </div>
        </div>

        {/* Location Selection */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Location Selection</h3>
          <p className="text-sm text-gray-600 mb-4">Manually input your location</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Street / Area</label>
              <input
                type="text"
                placeholder="Enter street or area"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;