import { motion } from "framer-motion";
import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="group relative z-10"
    >
      <div className="p-8 rounded-xl bg-neutral-900 border border-neutral-800 transition-colors">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="mb-6 text-neutral-400 group-hover:text-neutral-200 transition-colors"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200 group-hover:text-neutral-100 transition-colors font-mono tracking-tight">{title}</h3>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed font-sans">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard; 