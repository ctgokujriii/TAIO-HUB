'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Moving Forward Together: The Future of the Taxi Industry in the United Kingdom",
    excerpt: "Explore how smart operational strategies, community connectivity, and female empowerment are driving the UK taxi industry into a new era...",
    date: "Feb 23, 2026",
    readTime: "6 min read",
    author: "TAIO Editorial",
    category: "Industry Trends",
    slug: "future-of-taxi-industry-uk",
    image: "/londontaxi.jpg" 
  },
  {
    id: 2,
    title: "The Role of Taxis in the International World",
    excerpt: "From major financial hubs to small tourist destinations, discover how taxis provide flexible, door-to-door mobility that supports daily life globally...",
    date: "Feb 21, 2026",
    readTime: "5 min read",
    author: "TAIO Editorial",
    category: "Global Insights",
    slug: "role-of-taxis-international",
    image: "/officesetting.png" 
  },
  {
    id: 3,
    title: "Tips for Taxi Drivers to Increase Daily Earnings",
    excerpt: "Increasing daily earnings is not just about driving more hours — it’s about driving smarter. Discover actionable tips to boost your income...",
    date: "Feb 17, 2026",
    readTime: "4 min read",
    author: "Fleet Management",
    category: "Driver Guides",
    slug: "tips-to-increase-daily-earnings",
    image: "/digitalgrid.png" 
  }
];

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const gridPosts = BLOG_POSTS.slice(1);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-gray-950 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Latest Insights
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            Operational strategies, industry trends, and deep dives from the TAIO Hub team.
          </p>
        </motion.div>

        {/* Featured Hero Post */}
        <motion.article 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="group relative bg-gray-900/50 backdrop-blur-md rounded-3xl border border-gray-800 overflow-hidden mb-16 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-72 lg:h-auto overflow-hidden">
              <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent lg:hidden" />
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4 inline-block">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-cyan-400 transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <p className="text-gray-400 text-lg mb-8 line-clamp-3">{featuredPost.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 border-t border-gray-800 pt-6">
                <div className="flex items-center gap-2"><User size={16} className="text-cyan-400"/> {featuredPost.author}</div>
                <div className="flex items-center gap-2"><Calendar size={16}/> {featuredPost.date}</div>
                <div className="flex items-center gap-2"><Clock size={16}/> {featuredPost.readTime}</div>
              </div>

              <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all w-fit shadow-lg shadow-cyan-500/20">
                Read Article <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.article>

        {/* Secondary Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {gridPosts.map((post, index) => (
            <motion.article
              key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-900/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 pt-6 border-t border-gray-800 mt-auto">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold group/link">
                    Read <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </main>
  );
}