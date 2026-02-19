'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Newspaper, BookOpen } from 'lucide-react';

const updates = [
  {
    type: 'Blog',
    icon: BookOpen,
    title: 'The Future of AI in 2026',
    desc: 'Exploring how artificial intelligence is reshaping industries...',
    link: '/blog/future-of-ai-2026',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  },
  {
    type: 'News',
    icon: Newspaper,
    title: 'TAIO Hub Launches New Dashboard',
    desc: 'We are thrilled to announce the release of our new analytics...',
    link: '/news', // linking to main news page for now
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  }
];

export default function LatestUpdates() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              Latest Insights
            </h2>
            <p className="text-gray-400 max-w-lg">
              Stay ahead with our latest articles, product updates, and industry news.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="flex gap-4">
                <Link href="/blog" className="px-6 py-2 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-colors">
                    All Blogs
                </Link>
                <Link href="/news" className="px-6 py-2 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors">
                    All News
                </Link>
             </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {updates.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-lg flex items-center justify-center mb-6`}>
                  <item.icon className="w-6 h-6" />
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${item.color}`}>
                    {item.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {item.desc}
                </p>

                <Link href={item.link} className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}