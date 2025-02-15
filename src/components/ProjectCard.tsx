import { motion } from "framer-motion";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="group relative z-10"
    >
      <div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
        <div className="h-48 bg-neutral-800 group-hover:bg-neutral-700 transition-colors">
          <div className="h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.span 
              className="text-neutral-200 text-sm font-medium px-4 py-2 rounded-full border border-neutral-700 font-mono"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              View Project
            </motion.span>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-3 text-neutral-200 group-hover:text-neutral-100 transition-colors font-mono tracking-tight">{title}</h3>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed mb-6 font-sans">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="px-4 py-1.5 text-sm bg-neutral-800 text-neutral-400 rounded-full border border-neutral-700 hover:border-neutral-600 transition-colors font-mono"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 