import React from 'react';
import {
  Compass,
  Target,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const corePillars = [
  {
    title: 'Full-Stack Web Development',
    description: 'Building end-to-end web applications with modern frontend frameworks (React) and robust backend architectures (Node.js, Express, MongoDB).',
    icon: Layers,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    title: 'Algorithmic Problem Solving',
    description: 'Solid foundation in Data Structures and Algorithms with C, Java, and Python, focused on optimized time and space complexity.',
    icon: Code2,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
  {
    title: 'Database & Cloud Integration',
    description: 'Hands-on experience structuring scalable NoSQL schemas in MongoDB Atlas and real-time database synchronisation via Firebase.',
    icon: Database,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    title: 'Clean Code & Engineering Practices',
    description: 'Committed to writing maintainable, reusable, well-documented code using modern Git version control and RESTful API standards.',
    icon: Sparkles,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A passionate Computer Science student dedicated to creating impactful, efficient, and user-centric software solutions.
          </p>
        </div>

        {/* Introduction & Career Objective Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Personal Introduction */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-5">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Engineering Student & Developer
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  Canara Engineering College, Mangalore
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              I am an undergraduate student pursuing a Bachelor of Engineering (B.E.) in 
              <strong className="text-slate-800"> Computer Science and Engineering </strong> 
              at <strong className="text-slate-800">Canara Engineering College</strong>, Mangalore. 
              My journey in technology began with a strong curiosity about how computer software operates behind the scenes, which evolved into a dedicated passion for engineering scalable web applications.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Throughout my academic curriculum and self-directed projects, I have developed expertise in core languages such as 
              <span className="font-semibold text-slate-800"> C, Python, and Java</span>, as well as modern full-stack web technologies including 
              <span className="font-semibold text-slate-800"> React, Node.js, Express, MongoDB Atlas, and Firebase</span>.
            </p>

            {/* Location & Quick Meta */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-600">
              <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Available for Internships & Full-time Roles</span>
              </div>
            </div>
          </div>

          {/* Career Objective Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            {/* Background glow decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-indigo-200 border border-white/10">
                <Target className="w-3.5 h-3.5 text-indigo-300" />
                <span>Career Objective</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Building Tomorrow's Scalable Software
              </h3>

              <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed italic border-l-2 border-indigo-400 pl-4 py-1">
                "{personalInfo.careerObjective}"
              </blockquote>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-indigo-200">
                <span>Focus: Full-Stack & Systems</span>
                <span>Open for Collaboration</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 text-center mb-8">
            Core Competencies & Engineering Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md hover:border-indigo-100 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className={`inline-flex p-3 rounded-xl border ${pillar.color} mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {pillar.description}
                    </p>
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
