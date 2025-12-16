import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';

interface Props {
  onAnalyze: (text: string) => Promise<void>;
  isLoading: boolean;
}

const AnalysisView: React.FC<Props> = ({ onAnalyze, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length > 5) {
      onAnalyze(text);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 text-center">
      <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 to-amber-200 shadow-inner">
        <Sparkles className="h-8 w-8 text-amber-600" />
      </div>
      
      <h2 className="mb-4 text-3xl font-bold text-gray-900 serif">AI 财富基因解码</h2>
      <p className="mb-8 text-lg text-gray-600">
        请简短描述您的消费习惯、对储蓄的看法，以及您在面对金钱决策时的感受。
        <br/><span className="text-sm opacity-70">(例如：“我喜欢存钱，买东西会货比三家...” 或 “我觉得钱就是用来享受生活的...”)</span>
      </p>

      <form onSubmit={handleSubmit} className="relative mx-auto max-w-xl">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-100 transition-all">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full resize-none border-none bg-transparent p-6 text-lg text-gray-800 placeholder-gray-300 focus:ring-0 min-h-[180px]"
            placeholder="在这里输入您的描述..."
            disabled={isLoading}
          />
          <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 flex justify-between items-center">
             <span className="text-xs text-gray-400">
               {text.length < 10 ? '请至少输入 10 个字' : `${text.length} 字`}
             </span>
             <button
              type="submit"
              disabled={isLoading || text.length < 10}
              className={`flex items-center gap-2 rounded-xl px-6 py-2.5 font-semibold text-white transition-all shadow-md
                ${isLoading || text.length < 10 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-gray-900 hover:bg-black hover:scale-105 active:scale-95'
                }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  分析中...
                </>
              ) : (
                <>
                  开始分析 <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      <div className="mt-12 grid grid-cols-3 gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
         <img src="https://picsum.photos/seed/finance1/100/100" className="rounded-lg mx-auto" alt="deco"/>
         <img src="https://picsum.photos/seed/finance2/100/100" className="rounded-lg mx-auto" alt="deco"/>
         <img src="https://picsum.photos/seed/finance3/100/100" className="rounded-lg mx-auto" alt="deco"/>
      </div>
    </div>
  );
};

export default AnalysisView;