import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle,
  Building,
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Formal engineering education grounded in computer science principles, system design, and practical laboratory exercises.
          </p>
        </div>

        {/* Education Timeline / Detailed Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Building className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-indigo-600 mt-0.5">
                      {edu.field}
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 mt-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end justify-between gap-2 shrink-0">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Highlights & Coursework */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Academic Highlights */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center space-x-2">
                    <Award className="w-4 h-4 text-indigo-600" />
                    <span>Key Highlights</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>Relevant Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs px-3 py-1.5 rounded-xl font-medium bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-100 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
