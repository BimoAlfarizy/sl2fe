import React, { useState } from 'react';

const Profile = ({ isLoggedIn, user, onLogin }) => {
  const [email, setEmail] = useState('');

  if (isLoggedIn) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 max-w-2xl mx-auto border border-gray-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">User Profile</h2>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
            <p className="text-green-800 dark:text-green-200">Logged in as: <strong>{user.email}</strong></p>
        </div>
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" value="Admin User" disabled className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700 dark:text-gray-400" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
                <input type="text" value="System Administrator" disabled className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700 dark:text-gray-400" />
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-gray-200 dark:border-slate-700 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(email); }} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="admin@slc2.org"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
          <input type="password" value="password" readOnly className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white" />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Profile;
