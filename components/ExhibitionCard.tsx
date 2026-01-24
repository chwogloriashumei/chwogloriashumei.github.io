
import React from 'react';
import { Exhibition } from '../types';

interface ExhibitionCardProps {
  exhibition: Exhibition;
}

const ExhibitionCard: React.FC<ExhibitionCardProps> = ({ exhibition }) => {
  return (
    <div className="group relative flex flex-col bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/50 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={exhibition.imageUrl} 
          alt={exhibition.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 text-sky-700 text-xs font-bold rounded-full backdrop-blur-sm tracking-wider uppercase">
            {exhibition.tag}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-sky-700 transition-colors">
          {exhibition.title}
        </h3>
        <p className="text-sm font-medium text-slate-500 mb-4 italic leading-relaxed font-serif">
          {exhibition.subtitle}
        </p>
        <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
          {exhibition.description}
        </p>
        
        <div className="pt-6 border-t border-slate-100 mt-auto">
          <p className="text-xs text-slate-400 mb-4">
            — {exhibition.author}
          </p>
          <a 
            href={exhibition.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-sky-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            前往展覽
            <svg 
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;
