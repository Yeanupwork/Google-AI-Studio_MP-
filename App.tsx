import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, X, ChevronRight, Share2, ArrowLeft } from 'lucide-react';
import { AppView, AnalysisResult, MoneyPersonality } from './types';
import { PERSONALITIES } from './constants';
import PersonalityCard from './components/PersonalityCard';
import AnalysisView from './components/AnalysisView';
import { analyzePersonality } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [matchedProfile, setMatchedProfile] = useState<MoneyPersonality | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (text: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await analyzePersonality(text);
      setAnalysisResult(result);
      const profile = PERSONALITIES.find(p => p.id === result.personalityId);
      setMatchedProfile(profile || PERSONALITIES[0]); // Fallback safe
      setView(AppView.RESULT);
    } catch (err) {
      setError('抱歉，AI 分析服务暂时不可用，请稍后再试。');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetest = () => {
    setAnalysisResult(null);
    setMatchedProfile(null);
    setView(AppView.ANALYSIS);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-800 selection:bg-yellow-200">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setView(AppView.HOME)}
          >
            <div className="rounded bg-gray-900 p-1.5 text-white">
              <Sparkles size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight serif">Money DNA</span>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setView(AppView.LIST)}
              className={`text-sm font-medium transition-colors ${view === AppView.LIST ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              所有人格图鉴
            </button>
            {view !== AppView.ANALYSIS && view !== AppView.RESULT && (
              <button 
                onClick={() => setView(AppView.ANALYSIS)}
                className="hidden sm:block rounded-full bg-gray-900 px-4 py-1.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
              >
                开始测试
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="min-h-[calc(100vh-80px)]">
        
        {/* Error Notification */}
        {error && (
          <div className="mx-auto mt-4 max-w-md rounded-lg bg-red-50 p-4 text-center text-sm text-red-600">
            {error}
          </div>
        )}

        {/* VIEW: HOME */}
        {view === AppView.HOME && (
          <div className="relative overflow-hidden">
             {/* Abstract Background Decoration */}
             <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-yellow-200/40 to-orange-100/40 blur-3xl" />
             <div className="absolute top-40 -left-20 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-blue-100/40 to-purple-100/40 blur-3xl" />

            <div className="mx-auto max-w-4xl px-4 py-24 text-center relative z-10">
              <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wider text-gray-500">Identifying Your MONEY PERSONALITY</span>
              </div>
              
              <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 serif md:text-7xl">
                解构你的 <br/>
                <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">财富基因</span>
              </h1>
              
              <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 md:text-xl">
                无论是“稳健规划者”还是“时尚体验家”，了解您的金钱人格是掌握财务自由的第一步。
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button 
                  onClick={() => setView(AppView.ANALYSIS)}
                  className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-black hover:shadow-xl sm:w-auto"
                >
                  <Sparkles size={20} className="text-yellow-400" />
                  AI 智能测试
                </button>
                <button 
                  onClick={() => setView(AppView.LIST)}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
                >
                  <BookOpen size={20} />
                  浏览 10 种人格
                </button>
              </div>

              {/* Teaser Grid */}
              <div className="mt-20 grid grid-cols-2 gap-4 opacity-50 md:grid-cols-5">
                 {PERSONALITIES.slice(0,5).map(p => (
                   <div key={p.id} className="hidden md:block">
                      <div className="h-2 w-full bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-16 w-full bg-gray-100 rounded-lg"></div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW: ANALYSIS (INPUT) */}
        {view === AppView.ANALYSIS && (
          <AnalysisView onAnalyze={handleAnalyze} isLoading={isLoading} />
        )}

        {/* VIEW: RESULT */}
        {view === AppView.RESULT && matchedProfile && analysisResult && (
          <div className="mx-auto max-w-4xl px-4 py-12">
            <button 
              onClick={() => setView(AppView.ANALYSIS)} 
              className="mb-6 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
            >
              <ArrowLeft size={16} /> 返回测试
            </button>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-600">AI 分析结果</div>
                <h2 className="mb-6 text-4xl font-bold serif text-gray-900">
                  您属于：<br/>
                  <span className="text-amber-600">{matchedProfile.nameCn}</span>
                </h2>
                
                <div className="prose prose-lg mb-8 text-gray-600 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <p className="italic text-gray-800">"{analysisResult.reasoning}"</p>
                </div>

                <div className="flex gap-4">
                  <button onClick={handleRetest} className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition-colors hover:bg-gray-50">
                    重新测试
                  </button>
                   <button 
                     onClick={() => setView(AppView.LIST)} 
                     className="rounded-xl bg-gray-900 text-white px-6 py-3 font-medium transition-colors hover:bg-gray-800 flex items-center gap-2"
                   >
                    查看所有人格 <ChevronRight size={16}/>
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-200 to-yellow-400 opacity-30 blur-lg"></div>
                <PersonalityCard data={matchedProfile} isDetailed={true} />
              </div>
            </div>
          </div>
        )}

        {/* VIEW: LIST */}
        {view === AppView.LIST && (
          <div className="mx-auto max-w-7xl px-4 py-12">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold serif text-gray-900 mb-4">10 种金钱人格图鉴</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                每种人格都有其独特的优势与盲点。理解它们，能帮助我们在理财道路上扬长避短。
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {PERSONALITIES.map((p) => (
                <PersonalityCard key={p.id} data={p} />
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm text-gray-400">
            Brought to you by Women's Health & Wealth (WHM)
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;