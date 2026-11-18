import React from 'react';
import {
  ArrowDown,
  FileDown,
  Send,
  Mail,
  Code2,
  FolderGit2,
  Cpu,
  GraduationCap,
  Building2,
  Sparkles,
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const statIcons = {
  FolderGit2: FolderGit2,
  Cpu: Cpu,
  GraduationCap: GraduationCap,
  Building2: Building2,
};

export default function Hero({ onOpenResume }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 -z-10 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-16 left-10 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-100/60 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status / Location Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-xs sm:text-sm font-semibold shadow-xs animate-fade-in">
              <Sparkles className="w-4 h-4 text-indigo-600 animate-spin-slow" />
              <span>B.E. Computer Science & Engineering</span>
              <span className="text-indigo-300">•</span>
              <span className="text-slate-600 font-normal">Canara Engineering College</span>
            </div>

            {/* Name & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hi, I'm <br className="hidden sm:block" />
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-indigo-600 bg-white border border-indigo-200 hover:bg-indigo-50/70 hover:border-indigo-300 shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <Send className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-xs transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile (Placeholder)"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-xs transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile (Placeholder)"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-xs transition-all"
                  aria-label="Send Email"
                  title="Email Me (Placeholder)"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-amber-600 hover:border-amber-200 hover:shadow-xs transition-all"
                  aria-label="LeetCode Profile"
                  title="Coding Profiles (Placeholder)"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Card & Tech Float Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96">
              
              {/* Profile Card Container */}
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-slate-100 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                
                {/* Avatar Presentation */}
                <div className="relative pt-8 pb-4 flex flex-col items-center text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white p-1.5 shadow-lg border-2 border-indigo-100 flex items-center justify-center">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 flex flex-col items-center justify-center text-white font-extrabold text-3xl sm:text-4xl shadow-inner">
                      <span>KJ</span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    Karthik Janardhan Naik
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mt-1.5 border border-indigo-100">
                    B.E. Computer Science & Engg.
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Canara Engineering College, Mangalore
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 w-full grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="bg-slate-50 p-2 rounded-xl">
                      <span className="block text-slate-400 font-medium">Domain</span>
                      <span className="block font-semibold text-slate-700">Full-Stack Web</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-xl">
                      <span className="block text-slate-400 font-medium">Core Stack</span>
                      <span className="block font-semibold text-slate-700">MERN / Java / C</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Technology Badges */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-indigo-100 flex items-center space-x-2 animate-float">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <span className="text-xs font-bold text-slate-700">React.js</span>
              </div>

              <div className="absolute top-20 -right-5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-indigo-100 flex items-center space-x-2 animate-float" style={{ animationDelay: '1.2s' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-700">Node & Express</span>
              </div>

              <div className="absolute bottom-16 -left-6 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-indigo-100 flex items-center space-x-2 animate-float" style={{ animationDelay: '2.4s' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
                <span className="text-xs font-bold text-slate-700">MongoDB Atlas</span>
              </div>

              <div className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-indigo-100 flex items-center space-x-2 animate-float" style={{ animationDelay: '1.8s' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-xs font-bold text-slate-700">Java & Python</span>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item) => {
              const IconComp = statIcons[item.icon] || Cpu;
              return (
                <div
                  key={item.label}
                  className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-indigo-100 transition-all text-center group"
                >
                  <div className="inline-flex p-2.5 rounded-xl bg-indigo-50 text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
