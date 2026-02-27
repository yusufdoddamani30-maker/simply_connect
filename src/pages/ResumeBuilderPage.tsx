import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Plus, 
  Trash2, 
  Eye, 
  Layout,
  CheckCircle2,
  Zap,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils/helpers';

export const ResumeBuilderPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [resumeData, setResumeData] = useState({
    summary: 'Passionate student developer looking for opportunities to build impactful solutions.',
    experience: [
      { company: 'Tech Solutions Inc.', role: 'Intern', period: 'Summer 2025', desc: 'Assisted in building a React-based dashboard.' }
    ],
    projects: [
      { name: 'CampusNet', role: 'Lead Developer', desc: 'Built a student networking platform using React and AI.' }
    ]
  });

  const handleDownload = () => {
    alert('Downloading your resume as PDF...');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white flex items-center gap-3">
            <FileText className="w-8 h-8 text-emerald-500" /> AI Resume Builder
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Create a professional resume optimized for campus placements.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white dark:bg-zinc-900 p-1 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex">
            <button 
              onClick={() => setActiveTab('edit')}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2",
                activeTab === 'edit' ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              )}
            >
              <Layout className="w-4 h-4" /> Edit
            </button>
            <button 
              onClick={() => setActiveTab('preview')}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2",
                activeTab === 'preview' ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              )}
            >
              <Eye className="w-4 h-4" /> Preview
            </button>
          </div>
          <button 
            onClick={handleDownload}
            className="px-6 py-3 bg-zinc-900 dark:bg-zinc-800 text-white rounded-2xl font-black text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
          >
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Editor Side */}
        <div className={cn("space-y-6", activeTab === 'preview' && "hidden lg:block")}>
          <section className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Professional Summary</h2>
            <textarea 
              value={resumeData.summary}
              onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
              className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all dark:text-white h-32 resize-none text-sm"
              placeholder="Write a brief summary of your professional background..."
            />
          </section>

          <section className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Experience</h2>
              <button className="p-2 bg-emerald-500/10 text-emerald-500 rounded-xl hover:bg-emerald-500 hover:text-white transition-all">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {resumeData.experience.map((exp, i) => (
                <div key={i} className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 relative group">
                  <button className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input 
                      type="text" 
                      value={exp.company}
                      className="bg-transparent font-bold text-sm dark:text-white border-b border-zinc-200 dark:border-zinc-700 focus:border-emerald-500 outline-none pb-1"
                      placeholder="Company"
                    />
                    <input 
                      type="text" 
                      value={exp.period}
                      className="bg-transparent text-xs text-zinc-500 border-b border-zinc-200 dark:border-zinc-700 focus:border-emerald-500 outline-none pb-1 text-right"
                      placeholder="Period"
                    />
                  </div>
                  <input 
                    type="text" 
                    value={exp.role}
                    className="w-full bg-transparent text-xs font-bold text-emerald-500 mb-2 outline-none"
                    placeholder="Role"
                  />
                  <textarea 
                    value={exp.desc}
                    className="w-full bg-transparent text-xs text-zinc-500 resize-none outline-none"
                    placeholder="Description"
                  />
                </div>
              ))}
            </div>
          </section>

          <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex gap-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400">AI Optimization</h4>
              <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-1 leading-relaxed">
                Your resume is currently 82% optimized for ATS systems. Add more keywords related to "Full Stack Development" to improve your score.
              </p>
            </div>
          </div>
        </div>

        {/* Preview Side */}
        <div className={cn("bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden", activeTab === 'edit' && "hidden lg:block")}>
          <div className="h-full p-12 md:p-16 space-y-10">
            {/* Resume Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">{user?.name}</h2>
              <div className="flex justify-center gap-4 text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                <span>{user?.email}</span>
                <span>•</span>
                <span>{user?.branch}</span>
                <span>•</span>
                <span>Year {user?.year}</span>
              </div>
              <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>

            {/* Resume Summary */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] border-b border-zinc-100 dark:border-zinc-800 pb-2">Professional Summary</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                "{resumeData.summary}"
              </p>
            </div>

            {/* Resume Skills */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] border-b border-zinc-100 dark:border-zinc-800 pb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {user?.skills.map(s => (
                  <span key={s} className="text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Experience */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] border-b border-zinc-100 dark:border-zinc-800 pb-2">Experience</h3>
              {resumeData.experience.map((exp, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-black text-zinc-900 dark:text-white flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-emerald-500" /> {exp.company}
                      </h4>
                      <p className="text-xs font-bold text-emerald-500 mt-0.5">{exp.role}</p>
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pl-6 border-l-2 border-zinc-100 dark:border-zinc-800">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume Projects */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] border-b border-zinc-100 dark:border-zinc-800 pb-2">Key Projects</h3>
              {resumeData.projects.map((proj, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-black text-zinc-900 dark:text-white flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-emerald-500" /> {proj.name}
                      </h4>
                      <p className="text-xs font-bold text-emerald-500 mt-0.5">{proj.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pl-6 border-l-2 border-zinc-100 dark:border-zinc-800">
                    {proj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
