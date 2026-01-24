
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-20 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sky-50 text-sky-600 text-sm font-bold tracking-widest uppercase border border-sky-100 animate-fade-in">
          Virtual Reality × Cross-Culture
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
          弘光科技大學<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 italic font-serif">
            跨文化 × VR 英語展覽入口
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed">
          探索科技與藝術交織的教育新國度，透過虛擬實境體驗跨文化的魅力，
          開啟英語學習的無限可能。
        </p>
        
        <div className="mt-10 flex justify-center space-x-4">
          <div className="w-12 h-1 bg-sky-500 rounded-full"></div>
          <div className="w-4 h-1 bg-sky-200 rounded-full"></div>
          <div className="w-4 h-1 bg-sky-200 rounded-full"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
    </header>
  );
};

export default Header;
