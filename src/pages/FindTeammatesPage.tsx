import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  GraduationCap, 
  Briefcase, 
  ArrowUpRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import { MOCK_USERS } from '../data/mockData';
import { cn } from '../utils/helpers';
import { useAuth } from '../context/AuthContext';

export const FindTeammatesPage: React.FC = () => {
  const { user: currentUser } = useAuth();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'student' | 'mentor'>('all');
  const [branchFilter, setBranchFilter] = useState('all');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const branches = Array.from(new Set(MOCK_USERS.map(u => u.branch)));

  const filteredUsers = MOCK_USERS.filter(u => {
    if (u.id === currentUser?.id) return false;
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || 
                         u.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    const matchesBranch = branchFilter === 'all' || u.branch === branchFilter;
    return matchesSearch && matchesRole && matchesBranch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white">Find Your Next Teammate</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Discover students and mentors with the skills you need.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search by name or skills (e.g. React, Python)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all dark:text-white"
          />
        </div>
        <div className="flex gap-2">
          <select 
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
            className="px-4 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-sm font-bold text-zinc-700 dark:text-zinc-300 focus:ring-2 focus:ring-emerald-500 transition-all"
          >
            <option value="all">All Branches</option>
            {branches.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          <div className="flex bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-1">
            {(['all', 'student', 'mentor'] as const).map((role) => (
              <button
                key={role}
                onClick={() => setRoleFilter(role)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all",
                  roleFilter === role 
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                )}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((u, i) => (
          <motion.div
            key={u.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 p-8 hover:border-emerald-500/50 transition-all group relative"
          >
            {/* Compatibility Badge */}
            <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 text-emerald-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                {u.compatibility}% Match
                <button 
                  onMouseEnter={() => setShowTooltip(u.id)}
                  onMouseLeave={() => setShowTooltip(null)}
                  className="p-0.5 hover:bg-emerald-500/20 rounded transition-colors"
                >
                  <Info className="w-3 h-3" />
                </button>
              </div>
              
              {/* Tooltip */}
              <AnimatePresence>
                {showTooltip === u.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-10 right-0 w-48 p-3 bg-zinc-900 text-white text-[10px] rounded-xl shadow-xl z-20"
                  >
                    <p className="font-bold mb-2 text-emerald-400">Why this match?</p>
                    <ul className="space-y-1 opacity-80">
                      <li>• Shared interest in AI</li>
                      <li>• Complementary skills</li>
                      <li>• Similar project history</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img src={u.avatar} alt={u.name} className="w-24 h-24 rounded-[2rem] object-cover ring-4 ring-zinc-50 dark:ring-zinc-800 group-hover:ring-emerald-500/20 transition-all" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white dark:bg-zinc-900 rounded-xl shadow-lg flex items-center justify-center border border-zinc-100 dark:border-zinc-800">
                  {u.role === 'student' ? <GraduationCap className="w-4 h-4 text-emerald-500" /> : <Briefcase className="w-4 h-4 text-emerald-500" />}
                </div>
              </div>

              <h3 className="text-xl font-black text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">{u.name}</h3>
              <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">{u.branch} • Year {u.year}</p>
              
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                {u.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-1.5 mt-6">
                {u.skills.slice(0, 4).map(s => (
                  <span key={s} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold rounded-lg">
                    {s}
                  </span>
                ))}
                {u.skills.length > 4 && (
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-[10px] font-bold rounded-lg">
                    +{u.skills.length - 4}
                  </span>
                )}
              </div>

              <div className="w-full grid grid-cols-2 gap-3 mt-8">
                <button className="py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-bold rounded-2xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all">
                  Profile
                </button>
                <button className="py-3 bg-emerald-500 text-white text-xs font-bold rounded-2xl hover:bg-emerald-600 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
                  Connect <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8 text-zinc-400" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">No teammates found</h3>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};
