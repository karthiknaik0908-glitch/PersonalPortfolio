import React from 'react';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real-world full-stack and domain-specific applications built to solve healthcare, retail, and geolocation challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Project Header Bar with Gradient */}
                <div className="h-32 bg-gradient-to-br from-slate-100 via-indigo-50/50 to-purple-50/80 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 text-indigo-700 shadow-2xs border border-indigo-100">
                      {project.category}
                    </span>
                    <span className="flex items-center space-x-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-xs font-mono font-medium text-slate-400">
                      Project #{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-indigo-600 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Feature Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-lg font-medium bg-slate-100/90 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 mt-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300 hover:shadow-xs transition-all"
                  title="GitHub Repository (Placeholder)"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs hover:shadow-sm transition-all"
                  title="Live Demo (Placeholder)"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Placeholders */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            * GitHub repositories and Live Demo links are configured with editable placeholders ready to link to your hosted projects.
          </p>
        </div>

      </div>
    </section>
  );
}
