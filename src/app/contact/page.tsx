'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  // Your exact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Cabs Dispatch Outsourcing',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check the URL for the message parameter passed from QuoteEstimator
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const msg = urlParams.get('message');
      
      if (msg) {
        setFormData(prev => ({
          ...prev,
          message: msg,
          service: 'Cabs Dispatch/Telephonist Outsource '
        }));
      }
    }
  }, []);

  // Your exact EmailJS Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_z5fdow8',     // Your EmailJS Service ID
        'template_4zwzfra',    // Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: formData.service,
          message: formData.message,
          to_email: 'ali.aleem75@gmail.com',  
        },
        'pQzQumk14f9kJ8B0i'      // Your EmailJS Public Key
      );

      setSubmitStatus('success');
      formRef.current?.reset();
      
      // Clean up the URL
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      setFormData({
        name: '', email: '', phone: '', company: '', service: 'Cabs Dispatch Outsourcing', message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen pt-32 pb-24 relative bg-gray-950 text-white overflow-hidden selection:bg-cyan-500/30">
      {/* Background CSS Grid Pattern (Replacing the missing PNG) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold tracking-wider uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Get Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Free Quote</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your operations? Let's discuss how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side: Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 transition-all duration-700"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                      placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                      className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                      placeholder="+44 7XXX XXX XXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                      placeholder="john@company.co.uk" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                    <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange}
                      className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                      placeholder="Your Company Name" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Interested In *</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange}
                    className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all [&>option]:bg-gray-900 cursor-pointer">
                    <option value="Cabs Dispatch Outsourcing">Cabs Dispatch Outsourcing</option>
                    <option value="Cabs Telephonist Outsourcing">Cabs Telephonist Outsourcing</option>
                    <option value="UK Council School Runs Outsourcing">UK Council School Runs Outsourcing</option>
                    <option value="Admin Management">Admin Management</option>
                    <option value="UK/US Trucking Solutions">UK/US Trucking Solutions</option>
                    <option value="Cabs Dispatch/Telephonist Outsource ">Cabs Dispatch/Telephonist Outsource </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={4}
                    className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder-gray-600"
                    placeholder="Tell us about your requirements..." />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                </button>

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 text-center font-medium mt-4">
                    Thank you! Your message has been sent successfully. We'll reply within 24 hours.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-center font-medium mt-4">
                    Oops! Something went wrong. Please email us directly at info@taiohub.com
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right Side: Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>

              <div className="space-y-8 mb-8">
                <a href="mailto:info@taiohub.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors shrink-0">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Us</h4>
                    <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">info@taiohub.com</p>
                  </div>
                </a>

                {/* Your precise WhatsApp Link & Number */}
                <a
                  href="https://wa.me/447346144030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors shrink-0">
                    <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.678 1.447h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.883 3.485" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Call / WhatsApp</h4>
                    <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">+44 7346 144 030</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">United Kingdom</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4">Business Hours</h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t border-cyan-500/10 pt-3">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="pt-3">
                    <span className="text-cyan-400 font-bold tracking-wide uppercase text-xs flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> 24/7 Emergency Dispatch
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}