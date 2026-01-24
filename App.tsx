
import React from 'react';
import Header from './components/Header';
import ExhibitionCard from './components/ExhibitionCard';
import Footer from './components/Footer';
import { EXHIBITIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation - simple branding */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/60 backdrop-blur-lg border-b border-white/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">HK</div>
            <span className="font-bold text-slate-800 tracking-tight text-lg">弘光科技大學</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-sky-600 transition-colors">首頁</a>
            <a href="#exhibitions" className="hover:text-sky-600 transition-colors">線上展覽</a>
            <a href="#" className="hover:text-sky-600 transition-colors">關於本站</a>
          </div>
          <button className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg uppercase tracking-wider hover:bg-sky-700 transition-colors shadow-sm">
            聯絡我們
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <Header />

      {/* Main Exhibition Grid */}
      <main id="exhibitions" className="flex-grow max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {EXHIBITIONS.map((ex) => (
            <ExhibitionCard key={ex.id} exhibition={ex} />
          ))}
        </div>

        {/* Feature/Context Section */}
        <section className="mt-32 p-12 bg-indigo-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">開啟科技與美學的<br />教學新對話</h2>
              <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                本展覽由卓淑美老師協同外籍教師共同規劃，結合 VR 技術與跨文化素養，旨在為學生打造沉浸式的語言學習環境。透過服飾、對話與情境體驗，我們不僅學習語言，更在數位空間中建立全球視野。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium border border-white/20">虛擬實境</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium border border-white/20">永續發展</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium border border-white/20">英語口說</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium border border-white/20">跨文化素養</span>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square rounded-full border-[12px] border-white/5 flex items-center justify-center p-8">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-400 to-indigo-400 p-1">
                  <div className="w-full h-full rounded-full bg-indigo-900 flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/seed/vr-art/600/600" alt="Tech Visual" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                  </div>
                </div>
              </div>
              {/* Overlay stats or floating element */}
              <div className="absolute bottom-10 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase">參與人數</p>
                    <p className="text-slate-800 font-bold text-xl">1,200+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
