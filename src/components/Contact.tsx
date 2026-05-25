import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Sparkles, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

interface ContactProps {
  isDark: boolean;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    let tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'FullName is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      tempErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      isValid = false;
    } else if (formData.subject.trim().length < 4) {
      tempErrors.subject = 'Subject must be at least 4 characters';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Remove error fields as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API submission sequence over 1.5 seconds
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Contact Shivam
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left panel: Info cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <h3 className={`text-2xl font-bold font-sans tracking-tight mb-2 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Let's Discuss New Opportunities!
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Have a full-stack Laravel/React role, or seeking to construct a custom enterprise dashboard system? Reach out via form or direct email!
            </p>

            {/* Address boxes */}
            <div className="space-y-4 pt-4">
              
              <div className={`p-4 rounded-2xl border flex items-center gap-4 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-4xs font-mono text-slate-500 uppercase block leading-none">Email address</span>
                  <a href={`mailto:${personalInfo.email}`} className={`text-xs sm:text-sm font-bold font-mono hover:underline ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border flex items-center gap-4 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-4xs font-mono text-slate-500 uppercase block leading-none">Mobile Number</span>
                  <a href={`tel:${personalInfo.phone}`} className={`text-xs sm:text-sm font-bold font-mono hover:underline ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border flex items-center gap-4 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-4xs font-mono text-slate-500 uppercase block leading-none">Primary Location</span>
                  <span className={`text-xs sm:text-sm font-bold font-sans block ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Geometric graphical mockup of North India / Lucknow map */}
            <div className={`h-40 rounded-2xl border overflow-hidden p-4 relative flex flex-col justify-end text-left select-none ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
            }`}>
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #f97316 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px'
              }} />
              {/* Lucknow marker graphic */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
                </span>
                <span className="text-4xs font-mono font-bold text-orange-400 bg-slate-950 border border-orange-500/30 px-1.5 py-0.5 rounded mt-1 shadow">
                  LUCKNOW, UP
                </span>
              </div>
              <span className="text-4xs font-mono text-slate-500 relative z-10">Uttar Pradesh, India Core Geographic Coordinates</span>
            </div>

          </div>

          {/* Right panel: validation Form Box */}
          <div className="lg:col-span-7 text-left">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isDark 
                ? 'glass-card-dark border-white/10 bg-white/5 backdrop-blur-xl' 
                : 'glass-card-light border-slate-250 bg-white/70 shadow-sm'
            }`}>
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    {/* Name input */}
                    <div>
                      <label className={`text-2xs font-mono uppercase tracking-wider font-bold mb-1.5 block ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Shivam Gupta"
                        className={`w-full py-3 px-4 rounded-xl text-sm transition-colors outline-none border focus:ring-1 focus:ring-orange-500 ${
                          errors.name 
                            ? 'border-red-500 focus:ring-red-500 bg-red-500/5' 
                            : isDark 
                              ? 'bg-black/30 border-white/5 text-white' 
                              : 'bg-white border-slate-200 text-slate-900'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-red-400 text-3xs font-mono flex items-center gap-1 mt-1">
                          <AlertCircle size={10} /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email input */}
                    <div>
                      <label className={`text-2xs font-mono uppercase tracking-wider font-bold mb-1.5 block ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        Your Email Address
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@yourdomain.com"
                        className={`w-full py-3 px-4 rounded-xl text-sm transition-colors outline-none border focus:ring-1 focus:ring-orange-500 ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500 bg-red-500/5' 
                            : isDark 
                              ? 'bg-black/30 border-white/5 text-white' 
                              : 'bg-white border-slate-200 text-slate-900'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-red-400 text-3xs font-mono flex items-center gap-1 mt-1">
                          <AlertCircle size={10} /> {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Subject input */}
                    <div>
                      <label className={`text-2xs font-mono uppercase tracking-wider font-bold mb-1.5 block ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        Message Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Proposals, Laravel developer role..."
                        className={`w-full py-3 px-4 rounded-xl text-sm transition-colors outline-none border focus:ring-1 focus:ring-orange-500 ${
                          errors.subject 
                            ? 'border-red-500 focus:ring-red-500 bg-red-500/5' 
                            : isDark 
                              ? 'bg-black/30 border-white/5 text-white' 
                              : 'bg-white border-slate-200 text-slate-900'
                        }`}
                      />
                      {errors.subject && (
                        <span className="text-red-400 text-3xs font-mono flex items-center gap-1 mt-1">
                          <AlertCircle size={10} /> {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message body input */}
                    <div>
                      <label className={`text-2xs font-mono uppercase tracking-wider font-bold mb-1.5 block ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Hi Shivam, I am looking to construct an enterprise CRM system..."
                        className={`w-full py-3 px-4 rounded-xl text-sm transition-colors outline-none border focus:ring-1 focus:ring-orange-500 resize-none ${
                          errors.message 
                            ? 'border-red-500 focus:ring-red-500 bg-red-500/5' 
                            : isDark 
                              ? 'bg-black/30 border-white/5 text-white' 
                              : 'bg-white border-slate-200 text-slate-900'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-red-400 text-3xs font-mono flex items-center gap-1 mt-1">
                          <AlertCircle size={10} /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit action button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-xs font-bold font-sans tracking-widest uppercase bg-gradient-to-r from-orange-500 to-orange-600 text-black cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-550/10"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={15} /> Send Message to Shivam
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success Feedback container */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                      <Check size={32} />
                    </div>

                    <div className="space-y-2">
                      <h4 className={`text-xl font-bold font-sans flex items-center gap-1.5 justify-center ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        <Sparkles size={16} className="text-orange-500 animate-pulse" /> Message Dispatched!
                      </h4>
                      <p className={`text-xs max-w-sm mx-auto ${isDark ? 'text-slate-100/6a' : 'text-slate-500'}`}>
                        Thank you for contacting Shivam. Your message payload has been successfully dispatched! Here are the details sent:
                      </p>
                    </div>

                    {/* Review of submitted data */}
                    <div className={`p-4 rounded-2xl w-full text-left font-mono text-2xs space-y-1 ${
                      isDark ? 'bg-black/40 border border-white/5 text-slate-350' : 'bg-slate-5/40 text-slate-650'
                    }`}>
                      <p><span className="text-orange-500 font-bold">To:</span> {personalInfo.email}</p>
                      <p><span className="text-orange-500 font-bold">From:</span> {formData.name} ({formData.email})</p>
                      <p><span className="text-orange-500 font-bold">Subject:</span> {formData.subject}</p>
                      <p className="border-t border-white/5 pt-1 mt-1 text-slate-400">"{formData.message}"</p>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className={`text-2xs font-mono font-bold tracking-wider uppercase border px-4 py-2 rounded-xl transition-all cursor-pointer ${
                        isDark 
                          ? 'border-white/10 hover:bg-white/10 text-slate-300' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
