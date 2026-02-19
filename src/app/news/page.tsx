// app/news/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Bell, Tag, Clock } from 'lucide-react';

const NEWS_ITEMS = [
  {
    id: 1,
    title: "TAIO Hub Launches New Dashboard",
    date: "Today, 10:00 AM",
    tag: "Product Update",
    content: "We are thrilled to announce the release of our new analytics dashboard..."
  },
  {
    id: 2,
    title: "Community Milestone Reached",
    date: "Yesterday",
    tag: "Community",
    content: "We just hit 10,000 active users on our platform! Thank you for being part of the journey."
  },
  {
    id: 3,
    title: "Maintenance Scheduled",
    date: "Feb 18, 2026",
    tag: "System",
    content: "Scheduled maintenance will occur on Sunday at 2 AM UTC. Services may be briefly interrupted."
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <Bell className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">News & Announcements</h1>
            <p className="text-gray-400">Stay updated with the latest from TAIO Hub.</p>
          </div>
        </div>

        <div className="space-y-6">
          {NEWS_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium 
                    ${item.tag === 'System' ? 'bg-red-500/10 text-red-400' : 
                      item.tag === 'Product Update' ? 'bg-green-500/10 text-green-400' : 
                      'bg-blue-500/10 text-blue-400'}`}>
                    {item.tag}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.date}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}