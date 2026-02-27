import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Award, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../utils/helpers';

const data = [
  { name: 'React', level: 85, color: '#10b981' },
  { name: 'Python', level: 65, color: '#3b82f6' },
  { name: 'UI Design', level: 90, color: '#f59e0b' },
  { name: 'Node.js', level: 45, color: '#8b5cf6' },
  { name: 'SQL', level: 70, color: '#ec4899' },
];

const trendingSkills = [
  { name: 'Generative AI', growth: '+124%', icon: Sparkles },
  { name: 'Cybersecurity', growth: '+85%', icon: Target },
  { name: 'Cloud Native', growth: '+62%', icon: Zap },
];

export const SkillInsightsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white">Skill Insights</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Visualize your growth and stay ahead of campus trends.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Your Skill Proficiency</h2>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                <TrendingUp className="w-4 h-4 text-emerald-500" /> Updated today
              </div>
            </div>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-zinc-900 text-white p-3 rounded-xl shadow-xl border border-zinc-800">
                            <p className="text-xs font-bold uppercase tracking-widest mb-1">{payload[0].payload.name}</p>
                            <p className="text-xl font-black text-emerald-500">{payload[0].value}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="level" radius={[10, 10, 10, 10]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 bg-emerald-500 rounded-[2.5rem] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-2">Top Performer</h3>
                <p className="text-emerald-50 text-sm opacity-80 mb-6">You're in the top 5% of UI Designers in your branch.</p>
                <button className="px-6 py-3 bg-white text-emerald-600 rounded-xl font-black text-xs hover:scale-105 transition-all">
                  View Leaderboard
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-all"></div>
            </div>

            <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-2xl font-black mb-2">AI Suggestion</h3>
                <p className="text-zinc-400 text-sm mb-6">Based on your interests, learning <span className="text-white font-bold">Three.js</span> could boost your profile.</p>
                <button className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-black text-xs hover:scale-105 transition-all">
                  Start Learning
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-110 transition-all"></div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <section className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Trending on Campus</h2>
            <div className="space-y-4">
              {trendingSkills.map((skill, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 group hover:border-emerald-500/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white dark:bg-zinc-900 rounded-xl flex items-center justify-center shadow-sm">
                      <skill.icon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900 dark:text-white">{skill.name}</p>
                      <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{skill.growth} growth</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Underrepresented Skills</h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
              These skills are in high demand for campus projects but have few experts. Learning these will make you highly sought after.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Rust', 'Solidity', 'Kubernetes', 'UX Writing', 'Data Ethics'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold rounded-lg border border-zinc-200 dark:border-zinc-700">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="p-8 bg-zinc-100 dark:bg-zinc-900/50 rounded-[2.5rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 text-center">
            <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-zinc-400" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Set a Learning Goal</h3>
            <p className="text-[10px] text-zinc-500 mt-1">Track your progress towards a new skill.</p>
            <button className="mt-4 text-xs font-black text-emerald-500 hover:underline uppercase tracking-widest">
              Add Goal +
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
