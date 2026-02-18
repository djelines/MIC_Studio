
import React from 'react';
import { motion } from 'framer-motion';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, color }) => {
  const colorMap: Record<string, string> = {
    member1: 'group-hover:border-member1 group-hover:shadow-member1/20',
    member2: 'group-hover:border-member2 group-hover:shadow-member2/20',
    member3: 'group-hover:border-member3 group-hover:shadow-member3/20',
    member4: 'group-hover:border-member4 group-hover:shadow-member4/20',
  };

  const iconColorMap: Record<string, string> = {
    member1: 'text-member1',
    member2: 'text-member2',
    member3: 'text-member3',
    member4: 'text-member4',
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`group relative p-8 rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 transition-all duration-300 shadow-lg ${colorMap[color]}`}
    >
      <div className={`mb-6 p-4 rounded-2xl bg-gray-100 dark:bg-white/5 inline-block transition-transform group-hover:scale-110 ${iconColorMap[color]}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
      
      {/* Glow Effect */}
      <div className={`absolute -inset-0.5 rounded-3xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-current ${iconColorMap[color]}`} />
    </motion.div>
  );
};

export default ValueCard;
