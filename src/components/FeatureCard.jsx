import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable FeatureCard Component
 * 
 * Props:
 * - icon: Lucide Icon component
 * - title: Title of the feature card
 * - description: Description text
 * - delay: Animation start delay in seconds
 */
export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-8 rounded-3xl glass-panel shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4 text-left border border-slate-200/40 dark:border-slate-800/40 hover:border-emerald-500/30 dark:hover:border-emerald-500/30"
    >
      {/* Icon Wrapper with natural green circles */}
      <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 transition-colors">
        <Icon size={28} strokeWidth={2} />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
