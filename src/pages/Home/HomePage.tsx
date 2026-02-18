import React from 'react';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-600/20 blur-[120px] pointer-events-none rounded-full" />
      
      <h1 className="relative mb-6 text-6xl font-black tracking-tight text-slate-900 dark:text-white md:text-8xl">
        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">Better</span>.
      </h1>
      <p className="max-w-xl mb-12 text-xl font-medium text-slate-600 dark:text-slate-400">
        Template project modern dengan React, TypeScript, Tailwind, dan Zustand yang sudah terintegrasi dengan Routing dan Dynamic Theme.
      </p>
      
      <div className="flex gap-4">
        <Button onClick={() => navigate('/dashboard')} size="lg">Go to Dashboard</Button>
        <Button variant="secondary" size="lg" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Learn More</Button>
      </div>
    </div>
  );
};

export default HomePage;
