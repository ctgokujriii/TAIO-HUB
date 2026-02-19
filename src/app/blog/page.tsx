// app/blog/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Mock Data - Replace this with real data later
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of AI in 2026",
    excerpt: "Exploring how artificial intelligence is reshaping industries and daily life...",
    date: "Feb 15, 2026",
    author: "Alex Rivera",
    category: "Technology",
    slug: "future-of-ai-2026"
  },
  {
    id: 2,
    title: "Optimizing Next.js Performance",
    excerpt: "A deep dive into server components, caching strategies, and speed...",
    date: "Feb 10, 2026",
    author: "Sarah Chen",
    category: "Development",
    slug: "optimizing-nextjs"
  },
  {
    id: 3,
    title: "Minimalist Design Trends",
    excerpt: "Why less is more in modern web design architecture...",
    date: "Jan 28, 2026",
    author: "Mike Ross",
    category: "Design",
    slug: "minimalist-design"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Latest Insights
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and deep dives from the TAIO Hub team.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group"
            >
              <div className="flex items-center gap-2 text-sm text-blue-400 mb-3">
                <span className="bg-blue-500/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-400 mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-800">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </span>
                </div>
              </div>
              
              {/* Link to single post (doesn't exist yet, but ready) */}
              <Link 
                href={`/blog/${post.slug}`} 
                className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}