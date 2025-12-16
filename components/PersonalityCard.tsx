import React from 'react';
import { MoneyPersonality } from '../types';
import { ICON_MAP } from '../constants';

interface Props {
  data: MoneyPersonality;
  isDetailed?: boolean;
}

const PersonalityCard: React.FC<Props> = ({ data, isDetailed = false }) => {
  const Icon = ICON_MAP[data.icon];

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${isDetailed ? 'border-2 border-yellow-500/50' : 'border border-gray-100'}`}>
      {/* Top Image Placeholder with Overlay */}
      <div className="h-32 w-full overflow-hidden bg-gray-100 relative">
        <img 
          src={`https://picsum.photos/seed/${data.imageKeyword}/500/300`} 
          alt={data.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4 text-white">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-white/20 p-1.5 backdrop-blur-sm">
              <Icon size={18} className="text-yellow-300" />
            </div>
            <span className="text-xs font-medium tracking-wider uppercase text-yellow-100 opacity-90">Archetype</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-1 text-xl font-bold text-gray-900 serif">{data.nameCn}</h3>
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-gray-400">{data.name}</p>
        
        <p className={`text-gray-600 leading-relaxed ${isDetailed ? '' : 'line-clamp-3'}`}>
          {data.description}
        </p>

        {isDetailed && (
          <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h4 className="mb-2 text-sm font-bold text-gray-900 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span> 
                核心特质 (Traits)
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.traits.map((t, i) => (
                  <span key={i} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl bg-yellow-50 p-4">
              <h4 className="mb-2 text-sm font-bold text-yellow-800 flex items-center gap-2">
                 💡 优化建议 (Advice)
              </h4>
              <p className="text-sm text-yellow-900/80 leading-relaxed">
                {data.advice}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalityCard;