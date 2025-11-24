import React from 'react';
import { Sparkles, Brain, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const AIRecommendationWindow = ({ aiData, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-indigo-100 dark:border-slate-700 h-full flex flex-col justify-center items-center text-center animate-pulse">
        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-full mb-4">
          <Brain className="text-indigo-600 dark:text-indigo-400 animate-bounce" size={32} />
        </div>
        <h3 className="text-indigo-900 dark:text-indigo-200 font-semibold">AI is processing...</h3>
        <p className="text-sm text-indigo-400 dark:text-indigo-500 mt-2">Analyzing atmospheric patterns</p>
      </div>
    );
  }

  const data = aiData || { status: "No Data", message: "Waiting for input...", confidence: 0 };

  const getTheme = (status) => {
    const s = status.toLowerCase();
    if (s.includes('unhealthy') || s.includes('hazardous')) return 'red';
    if (s.includes('moderate')) return 'orange';
    return 'green';
  };

  const theme = getTheme(data.status);
  const colors = {
    red: { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', text: 'text-red-800 dark:text-red-200', icon: 'text-red-600 dark:text-red-400' },
    orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', text: 'text-orange-800 dark:text-orange-200', icon: 'text-orange-600 dark:text-orange-400' },
    green: { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', text: 'text-green-800 dark:text-green-200', icon: 'text-green-600 dark:text-green-400' }
  };
  const activeColor = colors[theme];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col">
      <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="text-indigo-500" size={18} />
          <h3 className="font-bold text-slate-700 dark:text-slate-200">AI Recommendations</h3>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">v2.1 Beta</span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className={`rounded-lg border ${activeColor.border} ${activeColor.bg} p-4 mb-4`}>
          <div className="flex items-start gap-3">
            {theme === 'red' && <AlertTriangle className={activeColor.icon} size={24} />}
            {theme === 'orange' && <Info className={activeColor.icon} size={24} />}
            {theme === 'green' && <CheckCircle className={activeColor.icon} size={24} />}
            <div>
              <h4 className={`font-bold ${activeColor.text} mb-1`}>{data.status}</h4>
              <p className={`text-sm ${activeColor.text} opacity-90 leading-relaxed`}>{data.message}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <h5 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Suggested Actions</h5>
          <ul className="space-y-2">
             {data.actions && data.actions.map((action, idx) => (
               <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 p-2 rounded border border-slate-100 dark:border-slate-600">
                 <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span>{action}
               </li>
             ))}
          </ul>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs text-slate-400">
           <span>Confidence: {(data.confidence * 100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendationWindow;