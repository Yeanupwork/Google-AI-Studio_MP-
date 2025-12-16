import { MoneyPersonality } from './types';
import { 
  PiggyBank, 
  Scale, 
  ShoppingBag, 
  TrendingUp, 
  Users, 
  Lock, 
  HeartHandshake, 
  Trophy, 
  Plane, 
  Crown 
} from 'lucide-react';

export const PERSONALITIES: MoneyPersonality[] = [
  {
    id: 'slow-prudent',
    name: 'The Slow & Prudent',
    nameCn: '稳健规划者',
    description: '她相信每月必须储蓄一定金额，对日常开销精打细算。月底的余额都会存入储蓄池。她认为耐心是美德，偏好低风险、回报稳定的投资。',
    traits: ['纪律性强', '规避风险', '精打细算'],
    icon: 'PiggyBank',
    advice: '尝试拨出一小部分资金（5-10%）用于长期增长型投资，不要因过度谨慎而错失良机。',
    imageKeyword: 'bonsai'
  },
  {
    id: 'quiet-adaptable',
    name: 'The Quiet, Adaptable & Sacrificial',
    nameCn: '安静适应与牺牲者',
    description: '她能根据财务状况调整生活方式，必要时愿意牺牲自己喜爱的事物。像稳健规划者一样，她也偏好低风险、回报稳定的投资。',
    traits: ['适应力强', '自我牺牲', '保守投资'],
    icon: 'Scale',
    advice: '不要总是牺牲自己的需求。为自己设定财务目标，而不仅仅是为了适应环境。',
    imageKeyword: 'lake'
  },
  {
    id: 'stylish-flamboyant',
    name: 'The Stylish & Flamboyant',
    nameCn: '时尚体验家',
    description: '她常身着名牌、佩戴昂贵饰品，但可能并未真正负担得起。她对时尚和风格有错位的优先级，面临积累消费债务的风险。',
    traits: ['追求时尚', '冲动消费', '重视形象'],
    icon: 'ShoppingBag',
    advice: '设定“先储蓄后消费”的自动化规则。将对奢侈品的热爱转化为对奢侈品公司股票的投资。',
    imageKeyword: 'fashion'
  },
  {
    id: 'prudent-aggressive',
    name: 'The Prudent & Aggressive',
    nameCn: '稳健进取者',
    description: '外表上她的消费显得温和节制，但在幕后，她精通理财，拥有多样化的投资组合。',
    traits: ['外柔内刚', '精通投资', '资产多元'],
    icon: 'TrendingUp',
    advice: '继续保持。您可以考虑通过指导他人来提升自己的影响力，或探索更复杂的资产配置。',
    imageKeyword: 'chess'
  },
  {
    id: 'husband-handle',
    name: 'Let My Spouse Handle it',
    nameCn: '依赖伴侣型',
    description: '无知绝非福气。这类女性常在太晚时才发现丈夫留下的只有债务。这种财务依赖可能成为家庭矛盾的导火索。',
    traits: ['财务依赖', '缺乏关注', '潜在风险'],
    icon: 'Users',
    advice: '参与家庭财务决策是您的权利也是责任。从了解每月的家庭收支表开始。',
    imageKeyword: 'umbrella'
  },
  {
    id: 'secretive-flamboyant',
    name: 'The Secretive & Flamboyant',
    nameCn: '神秘奢华型',
    description: '她只允许极少数人知道她的财富藏在哪里——房产投资、珠宝和分散在多家银行的现金，这些只是冰山一角。',
    traits: ['高度隐私', '资产隐蔽', '低调奢华'],
    icon: 'Lock',
    advice: '适当的透明度有助于资产传承和税务规划。考虑建立信托来管理您的隐私与财富。',
    imageKeyword: 'vault'
  },
  {
    id: 'sacrificial-mother',
    name: 'Sacrificial Daughter, Mother & Wife',
    nameCn: '奉献付出者',
    description: '对这类女性而言，家庭至上。她确保挚爱拥有所有必需品，如果能力允许，还会提供奢侈享受，常把自己放在最后。',
    traits: ['家庭至上', '无私奉献', '忽略自我'],
    icon: 'HeartHandshake',
    advice: '爱自己是照顾好家人的前提。将“自我照顾”列为家庭预算的固定项目，而不是可选项。',
    imageKeyword: 'nest'
  },
  {
    id: 'smart-competitive',
    name: 'Smart & Competitive',
    nameCn: '聪慧竞争者',
    description: '她熟悉各种金融渠道，将资金投入到自己最舒适和自信的领域。多样性也是她投资个性的一个特点。',
    traits: ['金融知识', '竞争意识', '自信投资'],
    icon: 'Trophy',
    advice: '确信您的自信是建立在深入研究之上，而非过度自信。保持谦逊，持续学习。',
    imageKeyword: 'skyscraper'
  },
  {
    id: 'explorer',
    name: 'The Explorer',
    nameCn: '探索者',
    description: '为了体验更多世界，她倾向于跳上下一班飞机，直到回来才考虑钱的问题。对于探索型女性来说，储蓄通常很少。',
    traits: ['活在当下', '热爱旅行', '储蓄稀缺'],
    icon: 'Plane',
    advice: '为您的人生冒险设立一个专门的“探索基金”。不要让财务压力成为您探索世界的阻碍。',
    imageKeyword: 'compass'
  },
  {
    id: 'royal-princess',
    name: 'The Royal Princess',
    nameCn: '皇家公主型',
    description: '人们可能认为她是世上最幸运的女人，因为一切都已为她安排妥当，她成长于优越环境，从未需要为钱操心。',
    traits: ['生活优越', '缺乏概念', '依赖性强'],
    icon: 'Crown',
    advice: '学习基础的财富管理知识，以确保这份幸运能够长久维持，并传给下一代。',
    imageKeyword: 'palace'
  }
];

export const ICON_MAP: Record<string, any> = {
  PiggyBank, Scale, ShoppingBag, TrendingUp, Users, Lock, HeartHandshake, Trophy, Plane, Crown
};