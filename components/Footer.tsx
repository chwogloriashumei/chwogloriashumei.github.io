
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-slate-900">弘光科技大學</h2>
          <p className="text-sm text-slate-500 mt-1 italic font-serif">HungKuang University</p>
        </div>
        
        <div className="text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} 弘光科技大學 英語展覽入口網. All Rights Reserved.</p>
          <p className="mt-1">Designed for Education, Technology, and Global Awareness.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-sky-600 transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="text-slate-400 hover:text-sky-600 transition-colors">
            <span className="sr-only">Website</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
