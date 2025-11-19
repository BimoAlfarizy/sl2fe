import React, { useState } from 'react';

const Profile = ({ isLoggedIn, user, onLogin, onRegister }) => {
  const [activeTab, setActiveTab] = useState(isLoggedIn ? 'settings' : 'login');
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    password: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      onLogin(formData.email);
      setActiveTab('settings');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      onRegister(formData.name, formData.email);
      setActiveTab('settings');
      setShowRegister(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Profile</h2>
        <p className="text-gray-500">Information about your Profile</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        {isLoggedIn && (
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-3 px-4 ${activeTab === 'settings' ? 'border-b-2 border-blue-600 text-blue-600 font-semibold' : 'text-gray-600'}`}
          >
            Profile Settings
          </button>
        )}
        {!isLoggedIn && !showRegister && (
          <button
            onClick={() => setActiveTab('login')}
            className="pb-3 px-4 border-b-2 border-blue-600 text-blue-600 font-semibold"
          >
            Login
          </button>
        )}
        {!isLoggedIn && showRegister && (
          <button
            onClick={() => setShowRegister(false)}
            className="pb-3 px-4 text-gray-600 hover:text-blue-600"
          >
            ← Back to Login
          </button>
        )}
      </div>

      {/* Profile Settings */}
      {activeTab === 'settings' && isLoggedIn && (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-green-800">✓ Logged in as: <strong>{user?.email}</strong></p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Profile Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Countries</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Enter your country"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-8 rounded-lg transition-colors">
                Save Profile
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="Enter contact name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  placeholder="Enter contact email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  placeholder="Enter contact phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language (Bahasa)</label>
                <p className="text-sm text-gray-500 mb-2">Select your preferred language</p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Indonesia</button>
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Sundanese</button>
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">English</button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Kinersius</button>
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Email</button>
                </div>
              </div>
              <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-8 rounded-lg transition-colors">
                Save Contact Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Register */}
      {!isLoggedIn && showRegister && (
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Register</h3>
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Countries</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter your country"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-8 rounded-lg transition-colors">
              Register
            </button>
            <p className="text-center text-sm text-gray-600">
              Already have an account? <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setShowRegister(false)}>Login</span>
            </p>
          </form>
        </div>
      )}

      {/* Login */}
      {!isLoggedIn && !showRegister && (
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Login</h3>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-8 rounded-lg transition-colors">
              LOGIN
            </button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setShowRegister(true)}>Register</span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;