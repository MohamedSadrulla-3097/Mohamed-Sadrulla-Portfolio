import React from "react";
import { motion } from "framer-motion";

const SkillItem = ({ name, icon, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-center gap-6 group"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#c084fc]/40 transition-all duration-300 group-hover:scale-105">
      <img
        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
        src={icon}
        alt={name}
      />
    </div>
    <div className="flex-1">
      <div className="flex justify-between text-[11px] sm:text-xs font-tech text-white/40 uppercase tracking-[0.2em] mb-1">
        <span className="group-hover:text-white transition-colors">{name}</span>
        <span className="text-[#c084fc] font-bold">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mt-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-[#c084fc] to-[#5d32dc] rounded-full"
        />
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { name: "Figma", level: 95, icon: "/resource/figma.svg" },
    { name: "Affinity", level: 90, icon: "/resource/affinity.svg" },
    { name: "React", level: 72, icon: "/resource/react.svg" },
    { name: "Tailwind", level: 80, icon: "/resource/tailwind.svg" },
    { name: "JavaScript", level: 78, icon: "/resource/javascript.svg" },
    { name: "Node.js", level: 65, icon: "/resource/nodejs.svg" },
    { name: "Next.js", level: 70, icon: "/resource/nextjs.svg" },
  ];

  return (
    <div className="liquid-glass rounded-[2rem] p-8 sm:p-10 lg:p-12 h-full relative group overflow-hidden">
      <div className="glass-glow" />
      <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight text-[#c084fc] mb-10">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {skills.map((skill, index) => (
          <SkillItem key={skill.name} {...skill} delay={index * 0.1} />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#c084fc]/5 blur-3xl rounded-full" />
    </div>
  );
};

export default Skills;
