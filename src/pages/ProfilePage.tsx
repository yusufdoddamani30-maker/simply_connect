import React from 'react';
import { 
  User, 
  MapPin, 
  Link as LinkIcon, 
  Twitter, 
  Github, 
  Linkedin,
  Edit3,
  Plus,
  Trophy,
  Zap,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { MOCK_PROJECTS } from '../data/mockData';
import { cn } from '../utils/helpers';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="relative">
        <div className="h-48 md:h-64 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-[2.5rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <button className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/30 transition-all">
            <Edit3 className="w-5 h-5" />
          </button>
        </div>
        
        <div className="px-8 -mt-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <div className="relative">
              <img 
                src={user?.avatar} 
                alt={user?.name} 
                className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] object-cover border-8 border-zinc-50 dark:border-zinc-950 shadow-xl"
              />
              <div className="absolute bottom-2 right-2 w-8 h-8 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg border-2 border-white dark:border-zinc-950">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-center md:text-left pb-2">
              <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white">{user?.name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2 text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {user?.branch}</span>
                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> Year {user?.year}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 pb-2">
            <button className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2">
              <Edit3 className="w-4 h-4" /> Edit Profile
            </button>
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-2xl font-bold text-sm hover:bg-emerald-600 hover:scale-105 transition-all shadow-lg shadow-emerald-500/20">
              Share Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* About */}
          <section className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">About</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {user?.bio || "No bio added yet. Tell the community about yourself!"}
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-zinc-500 hover:text-emerald-500 transition-all"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-zinc-500 hover:text-emerald-500 transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-zinc-500 hover:text-emerald-500 transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-zinc-500 hover:text-emerald-500 transition-all"><LinkIcon className="w-5 h-5" /></a>
            </div>
          </section>

          {/* Stats Summary */}
          <section className="p-8 bg-zinc-900 rounded-[2.5rem] text-white">
            <h2 className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-6">Stats Summary</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-black">12</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-black">48</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Collabs</p>
              </div>
              <div>
                <p className="text-2xl font-black">850</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Skill Pts</p>
              </div>
              <div>
                <p className="text-2xl font-black">15</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Badges</p>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Badges</h2>
              <button className="text-xs font-bold text-emerald-500 hover:underline">View all</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {user?.badges.map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center group hover:bg-emerald-500 transition-all cursor-pointer">
                    <Trophy className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                  </div>
                  <span className="text-[8px] font-black text-zinc-500 uppercase text-center leading-tight">{badge}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-zinc-200 dark:border-zinc-700">
                  <Plus className="w-5 h-5 text-zinc-400" />
                </div>
                <span className="text-[8px] font-black text-zinc-400 uppercase text-center leading-tight">New Badge</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Skills & Interests */}
          <section className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {user?.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-xl border border-emerald-500/20">
                      {skill}
                    </span>
                  ))}
                  <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs font-bold rounded-xl border border-dashed border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                    Add Skill +
                  </button>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {user?.interests.map(interest => (
                    <span key={interest} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold rounded-xl">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Projects</h2>
              <button className="px-4 py-2 bg-emerald-500 text-white text-xs font-bold rounded-xl hover:bg-emerald-600 transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" /> New Project
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {MOCK_PROJECTS.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                      <Zap className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                    </div>
                    <span className={cn(
                      "px-2 py-1 text-[8px] font-black rounded-lg uppercase tracking-widest",
                      project.status === 'ongoing' ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                    )}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-[10px] font-bold rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2.5 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-black rounded-xl hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                    View Details <ExternalLink className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
