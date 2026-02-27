import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wand2, 
  Plus, 
  X, 
  Users, 
  CheckCircle2, 
  Loader2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { cn } from '../utils/helpers';
import { MOCK_USERS } from '../data/mockData';

export const TeamBuilderPage: React.FC = () => {
  const [projectType, setProjectType] = useState('');
  const [requiredRoles, setRequiredRoles] = useState<string[]>([]);
  const [roleInput, setRoleInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTeam, setGeneratedTeam] = useState<any[] | null>(null);

  const addRole = () => {
    if (roleInput.trim() && !requiredRoles.includes(roleInput.trim())) {
      setRequiredRoles([...requiredRoles, roleInput.trim()]);
      setRoleInput('');
    }
  };

  const removeRole = (role: string) => {
    setRequiredRoles(requiredRoles.filter(r => r !== role));
  };

  const handleGenerate = () => {
    if (!projectType || requiredRoles.length === 0) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const team = requiredRoles.map((role, i) => {
        const match = MOCK_USERS[i % MOCK_USERS.length];
        return {
          role,
          user: match,
          compatibility: 85 + Math.floor(Math.random() * 15)
        };
      });
      setGeneratedTeam(team);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white flex items-center gap-3">
          <Wand2 className="w-8 h-8 text-emerald-500" /> AI Team Builder
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Define your project and let AI find the perfect team for you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Configuration */}
        <div className="space-y-6">
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Project Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">What are you building?</label>
                <input 
                  type="text"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  placeholder="e.g. AI-powered study assistant, Fintech app..."
                  className="w-full mt-2 p-4 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Required Roles</label>
                <div className="flex gap-2 mt-2">
                  <input 
                    type="text"
                    value={roleInput}
                    onChange={(e) => setRoleInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addRole()}
                    placeholder="e.g. UI Designer, Backend Dev..."
                    className="flex-1 p-4 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all dark:text-white"
                  />
                  <button 
                    onClick={addRole}
                    className="p-4 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-all"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {requiredRoles.map(role => (
                    <span key={role} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold rounded-xl flex items-center gap-2">
                      {role}
                      <button onClick={() => removeRole(role)} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !projectType || requiredRoles.length === 0}
                className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-600 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Analyzing Network...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" /> Generate Ideal Team
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
            <div className="flex gap-3">
              <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                Our AI uses advanced matching algorithms to find students whose skills, interests, and availability perfectly complement your project needs.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!generatedTeam && !isGenerating && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-zinc-100 dark:bg-zinc-900/50 rounded-[2.5rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800"
              >
                <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-zinc-400" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Ready to build?</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Configure your project on the left and click generate to see your dream team.</p>
              </motion.div>
            )}

            {isGenerating && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
                  <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Finding the perfect matches...</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Analyzing 5,000+ student profiles and project histories.</p>
              </motion.div>
            )}

            {generatedTeam && !isGenerating && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-zinc-900 dark:text-white">Generated Team</h3>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                      94% Overall Compatibility
                    </div>
                  </div>

                  <div className="space-y-4">
                    {generatedTeam.map((member, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-3">
                          <img src={member.user.avatar} className="w-10 h-10 rounded-xl object-cover" alt="" />
                          <div>
                            <p className="text-sm font-bold text-zinc-900 dark:text-white">{member.user.name}</p>
                            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">{member.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-black text-zinc-900 dark:text-white">{member.compatibility}%</p>
                          <p className="text-[8px] text-zinc-500 uppercase font-bold">Match</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <button className="w-full py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                      Send Team Invitations <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                  <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">Why this team?</h4>
                  <ul className="space-y-3">
                    {[
                      'Complementary tech stacks (Frontend + Backend)',
                      'Shared interest in the project domain',
                      'Proven track record of working in similar teams',
                      'Balanced experience levels (Junior + Senior)'
                    ].map((reason, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
