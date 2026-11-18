import React, { useState } from 'react';
import {
  Send,
  Mail,
  User,
  Tag,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  MapPin,
  Building,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { submitContactForm } from '../services/api';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '', data: null });

  // Validation logic
  const errors = {};
  if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }
  if (!formData.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (formData.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters long.';
  }
  if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(errors).length > 0) {
      setStatus({
        type: 'error',
        message: 'Please resolve the highlighted validation errors above.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await submitContactForm(formData);
      setStatus({
        type: 'success',
        message: response.message || 'Your message has been sent successfully! Thank you for reaching out.',
        data: response.data,
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Failed to deliver message. Please verify backend connectivity.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Communication Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have a project in mind, career opportunity, or technical inquiry? Submit your message through the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Reach out directly via email, phone, or connect through professional networks.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                
                {/* Email Item */}
                <div className="flex items-start space-x-3 p-3.5 bg-white rounded-2xl border border-slate-100">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Email (Placeholder)</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-slate-800 hover:text-indigo-600 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* College / Location Item */}
                <div className="flex items-start space-x-3 p-3.5 bg-white rounded-2xl border border-slate-100">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Institution</span>
                    <span className="font-medium text-slate-800 block">
                      {personalInfo.college}
                    </span>
                    <span className="text-xs text-slate-500">
                      Benjanapadavu, Mangalore, Karnataka
                    </span>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start space-x-3 p-3.5 bg-white rounded-2xl border border-slate-100">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Location</span>
                    <span className="font-medium text-slate-800">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start space-x-3 p-3.5 bg-white rounded-2xl border border-slate-100">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Phone (Placeholder)</span>
                    <span className="font-medium text-slate-800">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-200/80">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                  Professional Profiles:
                </span>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-xs"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Validated and dispatched directly to the Node.js + MongoDB Atlas backend.
                </p>
              </div>

              {/* Alert Feedback Messages */}
              {status.type === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start space-x-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold">{status.message}</p>
                    {status.data?.id && (
                      <p className="text-xs text-emerald-600 mt-1">
                        Reference ID: <code className="bg-white/80 px-1 py-0.5 rounded font-mono">{status.data.id}</code>
                      </p>
                    )}
                  </div>
                </div>
              )}

              {status.type === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start space-x-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold">{status.message}</p>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border transition-colors focus:outline-none ${
                          touched.name && errors.name
                            ? 'border-rose-300 focus:border-rose-500 bg-rose-50/20'
                            : 'border-slate-200 focus:border-indigo-500 bg-slate-50/50 focus:bg-white'
                        }`}
                      />
                    </div>
                    {touched.name && errors.name && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. alex@example.com"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border transition-colors focus:outline-none ${
                          touched.email && errors.email
                            ? 'border-rose-300 focus:border-rose-500 bg-rose-50/20'
                            : 'border-slate-200 focus:border-indigo-500 bg-slate-50/50 focus:bg-white'
                        }`}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Tag className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Software Engineering Opportunity / Collaboration"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border transition-colors focus:outline-none ${
                        touched.subject && errors.subject
                          ? 'border-rose-300 focus:border-rose-500 bg-rose-50/20'
                          : 'border-slate-200 focus:border-indigo-500 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                  </div>
                  {touched.subject && errors.subject && (
                    <p className="text-xs text-rose-600 mt-1 font-medium">{errors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-xs text-slate-400">
                      {formData.message.length} / 3000 chars
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Hi Karthik, I reviewed your portfolio and would like to discuss..."
                      className={`w-full p-4 rounded-xl text-sm border transition-colors focus:outline-none resize-y ${
                        touched.message && errors.message
                          ? 'border-rose-300 focus:border-rose-500 bg-rose-50/20'
                          : 'border-slate-200 focus:border-indigo-500 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                  </div>
                  {touched.message && errors.message && (
                    <p className="text-xs text-rose-600 mt-1 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
