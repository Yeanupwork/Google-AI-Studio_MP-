export interface MoneyPersonality {
  id: string;
  name: string;
  nameCn: string;
  description: string;
  traits: string[];
  icon: string;
  advice: string;
  imageKeyword: string;
}

export interface AnalysisResult {
  personalityId: string;
  confidence: number;
  reasoning: string;
}

export enum AppView {
  HOME = 'HOME',
  ANALYSIS = 'ANALYSIS',
  RESULT = 'RESULT',
  LIST = 'LIST'
}