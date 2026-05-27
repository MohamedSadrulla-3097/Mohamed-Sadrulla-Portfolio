import React from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({ title, company, period, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative pl-8 border-l border-white/10 group"
  >
    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#c084fc] transition-colors shadow-[0_0_10px_rgba(192,132,252,0)] group-hover:shadow-[0_0_10px_rgba(192,132,252,0.5)]" />

    <span className="text-[10px] sm:text-xs text-[#c084fc] font-tech uppercase tracking-[0.2em]">
      {period}
    </span>
    <h3 className="text-base sm:text-lg font-bold text-white mt-1.5 tracking-tight">
      {title}
    </h3>
    <h4 className="text-sm text-white/30 font-medium mb-3">{company}</h4>
    <p className="text-sm text-white/50 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300 font-light">
      {description}
    </p>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      title: "UI / Graphic Designer",
      company: "Tejas Groups",
      period: "2020 - 2025",
      description:
        "Designed promotional materials and handled client design requests. Started self-learning web technologies and implemented personal projects.",
    },
    {
      title: "AutoCAD Designer",
      company: "Modine Thermal Systems",
      period: "2019 - 2020",
      description:
        "Developed precise 2D and 3D technical drawings for thermal system components, ensuring manufacturing accuracy and optimization through CAD modeling.",
    },
    {
      title: "AutoCAD Designer",
      company: "Wheels India Pvt Ltd",
      period: "2018 - 2019",
      description:
        "Created detailed 2D technical drawings and layouts for commercial vehicle wheels in AutoCAD, maintaining dimensional tolerances and supporting manufacturing accuracy",
    },
  ];

  return (
    <div className="liquid-glass rounded-[2rem] p-8 sm:p-10 lg:p-12 h-full relative group overflow-hidden">
      <div className="glass-glow" />
      <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight text-[#c084fc] mb-12">
        Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
