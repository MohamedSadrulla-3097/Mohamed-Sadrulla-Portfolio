import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, img, description, link, delay, extraClass }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group flex flex-col bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:border-[#c084fc]/40 transition-all"
  >
    <div className="relative overflow-hidden aspect-video">
      <img
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${extraClass || ""}`}
        src={img}
        alt={title}
      />
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-white text-lg font-bold mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-6 flex-1 font-light">
        {description}
      </p>
      <a
        className="inline-flex items-center text-[#c084fc] text-[10px] sm:text-xs font-tech uppercase tracking-widest hover:underline gap-2 mt-auto group/link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore Project
        <ExternalLink className="w-3.5 h-3.5 text-[#c084fc] group-hover/link:translate-x-1 transition-transform" />
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "E Commerce App",
      img: "/resource/Project_Ecommerce.png",
      description:
        "A full-stack e-commerce platform built with Next.js, featuring secure authentication, a seamless end-to-end shopping experience, and integrated payment gateways for the Green ECO project.",
      link: "https://meristems-e-commerce.vercel.app/auth",
    },
    {
      title: "Real Estate App",
      img: "/resource/Project_1.png",
      description:
        "Illam helps users sell and construct their dream homes. Built with React and Tailwind.",
      link: "https://illam-plum.vercel.app/",
    },
    {
      title: "3D Car Showcase",
      img: "/resource/Project_2.png",
      description:
        "High-performance 3D car showcase made using Three.js with interactive controls.",
      link: "https://3d-car-showcase-seven.vercel.app/",
      extraClass: "brightness-90 group-hover:brightness-100",
    },
  ];

  return (
    <div className="liquid-glass rounded-[2rem] p-8 sm:p-10 lg:p-12 h-full relative group overflow-hidden">
      <div className="glass-glow" />
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight text-[#c084fc]">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((proj, index) => (
          <ProjectCard key={proj.title} {...proj} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
