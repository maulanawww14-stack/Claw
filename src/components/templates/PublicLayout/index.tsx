import React from 'react';
import { Navbar } from '../../organisms';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      <main className="pt-24 pb-12 min-h-[calc(100vh-80px)]">
        {/* Background Ambient Light */}
        <div className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="hidden dark:block absolute bottom-0 right-0 w-64 h-64 bg-emerald-600/5 blur-[100px] pointer-events-none rounded-full" />
        
        {children}
      </main>

      <footer className="py-10 text-center border-t border-slate-200 dark:border-slate-800/50">
        <p className="text-sm font-medium text-slate-400 dark:text-slate-600">
          &copy; 2026 OpenClaw Development Interface. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default PublicLayout;
