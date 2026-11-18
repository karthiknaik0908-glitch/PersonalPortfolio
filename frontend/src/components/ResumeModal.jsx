import React from 'react';
import {
  X,
  FileDown,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const resumeUrl = `/${personalInfo.resumeFileName}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold">
              <FileDown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Karthik Janardhan Naik — Resume</h3>
              <p className="text-xs text-indigo-100">
                Computer Science & Engineering • Canara Engineering College
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Overview */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Resume Summary</span>
              <span className="text-indigo-600">PDF Document</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Contains detailed academic records, complete technical skill breakdown (C, Java, Python, React, Node.js, MongoDB), and technical writeups for SmartShop AI, MediQueue, and Medicine Availability Finder.
            </p>
          </div>

          {/* Key Highlights inside resume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-white border border-slate-100">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>B.E. Computer Science & Engg.</span>
            </div>
            <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-white border border-slate-100">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full-Stack Web Engineering</span>
            </div>
            <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-white border border-slate-100">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>MERN Stack + Databases</span>
            </div>
            <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-white border border-slate-100">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verified Project Portfolio</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <a
              href={resumeUrl}
              download={personalInfo.resumeFileName}
              className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>Preview in New Tab</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
