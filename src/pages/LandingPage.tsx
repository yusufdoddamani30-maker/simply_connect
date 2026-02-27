import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, 
  Wand2, 
  Zap, 
  BarChart3, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const features = [
  { icon: Users, title: 'Smart Teammate Matching', desc: 'Find the perfect partners based on skills, interests, and compatibility scores.' },
  { icon: Wand2, title: 'AI Team Builder', desc: 'Let our AI suggest the ideal team composition for your next big project.' },
  { icon: Zap, title: 'Micro Collaborations', desc: 'Get quick help or offer your skills for small tasks within the campus community.' },
  { icon: BarChart3, title: 'Skill Insights', desc: 'Track your growth and see which skills are trending in your field.' },
  { icon: Shield, title: 'Verified Mentors', desc: 'Connect with experienced seniors and professors for guidance.' },
  { icon: Globe, title: 'Campus Network', desc: 'Build a professional network that starts right here on campus.' },
];

const stats = [
  { label: 'Active Students', value: '5,000+' },
  { label: 'Projects Launched', value: '1,200+' },
  { label: 'Events Hosted', value: '450+' },
];

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors">
      {/* Nav */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-xl font-bold tracking-tight">CampusNet</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#features" className="hover:text-emerald-500 transition-colors">Features</a>
          <a href="#stats" className="hover:text-emerald-500 transition-colors">Stats</a>
          <Link to="/login" className="hover:text-emerald-500 transition-colors">Login</Link>
          <Link to="/register" className="px-5 py-2.5 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full">
            The Future of Campus Collaboration
          </span>
          <h1 className="mt-8 text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            BUILD TEAMS.<br />
            <span className="text-emerald-500">SCALE IDEAS.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 mb-10">
            CampusNet connects students with the right teammates, mentors, and projects. 
            Powered by AI to help you succeed in your academic journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-lg hover:bg-emerald-600 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Join the Network <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/login" className="w-full sm:w-auto px-8 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl font-bold text-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
              Sign In
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-zinc-50 dark:bg-zinc-900/50 py-32 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Everything you need to collaborate</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Tools designed specifically for the modern university student.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <f.icon className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-5xl font-black text-emerald-500 mb-2">{s.value}</p>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-widest text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Trusted by students worldwide</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl text-left">
              <p className="text-lg italic mb-6">"CampusNet helped me find a designer for my final year project in just two days. The compatibility score was spot on!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                <div>
                  <p className="font-bold">Emily Watson</p>
                  <p className="text-sm opacity-80">CS Student, Stanford</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl text-left">
              <p className="text-lg italic mb-6">"As a mentor, it's so much easier to track student progress and offer help where it's actually needed."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                <div>
                  <p className="font-bold">Dr. James Carter</p>
                  <p className="text-sm opacity-80">Professor, MIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">CampusNet</span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm">
              Empowering students to collaborate, innovate, and build the future together.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li><a href="#" className="hover:text-emerald-500">Features</a></li>
              <li><a href="#" className="hover:text-emerald-500">Team Builder</a></li>
              <li><a href="#" className="hover:text-emerald-500">Insights</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li><a href="#" className="hover:text-emerald-500">About</a></li>
              <li><a href="#" className="hover:text-emerald-500">Privacy</a></li>
              <li><a href="#" className="hover:text-emerald-500">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500">
          © 2026 CampusNet. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
