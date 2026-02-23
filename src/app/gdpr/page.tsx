'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Database, Lock, UserCheck, FileText, Mail } from 'lucide-react';

const sections = [
  {
    icon: ShieldCheck,
    title: 'Our Commitment to Privacy',
    content: 'At TAIO Hub, we process thousands of interactions daily. We recognize that in the dispatch and transportation industry, data security is paramount. We are fully committed to complying with the General Data Protection Regulation (GDPR) and the UK Data Protection Act to ensure that passenger, driver, and client data is handled with the utmost integrity.'
  },
  {
    icon: Database,
    title: 'Data Controller vs. Data Processor',
    content: 'In the context of our outsourcing services, our clients (taxi firms and dispatch businesses) are the Data Controllers. TAIO Hub acts strictly as a Data Processor. We only access, use, and process personal data (such as passenger names, contact numbers, and pickup/drop-off locations) under the explicit written instructions of our clients to fulfill our dispatch and telephonist duties.'
  },
  {
    icon: Lock,
    title: 'Security & Infrastructure',
    content: 'We employ state-of-the-art security measures to protect data from unauthorized access, alteration, disclosure, or destruction. This includes end-to-end encryption for communication channels, strict role-based access controls for our telephonists and dispatchers, and secure, isolated network environments for all client operations.'
  },
  {
    icon: FileText,
    title: 'Data Retention & Deletion',
    content: 'We do not hold client or passenger data longer than is strictly necessary to perform our services. Call logs, dispatch records, and performance metrics are retained according to the parameters set by the Data Controller and are securely permanently deleted upon the termination of the service contract or upon direct request.'
  },
  {
    icon: UserCheck,
    title: 'Data Subject Rights',
    content: 'We fully support our clients in honoring Data Subject Rights. If a passenger or driver requests access to their data, asks for rectification, or invokes their "Right to be Forgotten", TAIO Hub has established rapid-response protocols to assist the Data Controller in executing these requests within the legally required timeframes.'
  }
];

export default function GDPRPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative bg-gray-950 text-white overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-fixed opacity-5 pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            <ShieldCheck className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              GDPR Compliance
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </motion.p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-colors shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700 group-hover:border-cyan-500/50 group-hover:text-cyan-400 text-gray-400 transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Data Protection Officer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-cyan-500/30 text-center"
        >
          <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Have Data Privacy Questions?</h3>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            If you have specific questions about how TAIO Hub handles your data, or need to request a Data Processing Agreement (DPA), our team is here to help.
          </p>
          <a
            href="mailto:info@taiohub.com"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-cyan-500/20"
          >
            Contact our Privacy Team
          </a>
        </motion.div>

      </div>
    </main>
  );
}