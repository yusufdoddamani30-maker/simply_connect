import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquareShare, 
  Plus, 
  X, 
  Clock, 
  Zap, 
  User,
  Search,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { MOCK_TASKS } from '../data/mockData';
import { cn, formatDate } from '../utils/helpers';

export const MicroCollaborationPage: React.FC = () => {
  const [tasks, setTasks] = useState(MOCK_TASKS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    reward: '',
    skills: ''
  });

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    const task = {
      id: `t${Date.now()}`,
      title: newTask.title,
      description: newTask.description,
      author: 'You',
      skillsRequired: newTask.skills.split(',').map(s => s.trim()),
      reward: newTask.reward,
      createdAt: new Date().toISOString()
    };
    setTasks([task, ...tasks]);
    setIsModalOpen(false);
    setNewTask({ title: '', description: '', reward: '', skills: '' });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white flex items-center gap-3">
            <MessageSquareShare className="w-8 h-8 text-emerald-500" /> Micro Collaborations
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Get quick help or offer your skills for small tasks.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-emerald-500 text-white rounded-2xl font-black text-sm hover:bg-emerald-600 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
        >
          <Plus className="w-5 h-5" /> Create Request
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Task List */}
        <div className="lg:col-span-2 space-y-4">
          {tasks.map((task, i) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">{task.title}</h3>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Requested by {task.author}</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-amber-500/10 text-amber-500 text-[10px] font-black rounded-lg uppercase tracking-widest">
                  {task.reward}
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                {task.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {task.skillsRequired.map(s => (
                    <span key={s} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-[10px] font-bold rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> {formatDate(task.createdAt)}
                  </span>
                  <button className="px-4 py-2 bg-emerald-500 text-white text-[10px] font-black rounded-xl hover:bg-emerald-600 transition-all uppercase tracking-widest">
                    Help Out
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-xl font-black mb-6">Your Impact</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-amber-500" />
                    </div>
                    <span className="text-sm font-bold opacity-80">Tasks Completed</span>
                  </div>
                  <span className="text-2xl font-black">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="text-sm font-bold opacity-80">Reputation Score</span>
                  </div>
                  <span className="text-2xl font-black">4.9/5</span>
                </div>
              </div>
              <button className="w-full mt-8 py-4 bg-white text-zinc-900 rounded-2xl font-black text-xs hover:scale-105 transition-all flex items-center justify-center gap-2">
                View Leaderboard <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">Trending Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Python', 'UI Design', 'Debugging', 'SQL', 'Figma'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold rounded-lg hover:bg-emerald-500 hover:text-white transition-all cursor-pointer">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-zinc-200 dark:border-zinc-800 p-8 lg:p-10"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white">Create Request</h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all">
                  <X className="w-6 h-6 text-zinc-400" />
                </button>
              </div>

              <form onSubmit={handleCreateTask} className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Title</label>
                  <input 
                    type="text"
                    required
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder="e.g. Need help with React Hooks"
                    className="w-full mt-2 p-4 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Description</label>
                  <textarea 
                    required
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    placeholder="Explain what you need help with..."
                    className="w-full mt-2 p-4 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all dark:text-white h-32 resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Reward</label>
                    <input 
                      type="text"
                      required
                      value={newTask.reward}
                      onChange={(e) => setNewTask({ ...newTask, reward: e.target.value })}
                      placeholder="e.g. Coffee, Shoutout"
                      className="w-full mt-2 p-4 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Skills (comma separated)</label>
                    <input 
                      type="text"
                      required
                      value={newTask.skills}
                      onChange={(e) => setNewTask({ ...newTask, skills: e.target.value })}
                      placeholder="React, CSS"
                      className="w-full mt-2 p-4 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all dark:text-white"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/20"
                >
                  Post Request
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
