import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="liquid-glass rounded-[2rem] p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-center overflow-hidden relative group">
      <div className="glass-glow" />

      {/* Decorative techy curves */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 C150,100 350,300 550,150 S850,250 1000,100"
            fill="none"
            stroke="#c084fc"
            strokeWidth="1.2"
            strokeDasharray="6,8"
          />
          <path
            d="M0,250 C200,150 400,350 600,200 S800,300 1000,150"
            fill="none"
            stroke="#c084fc"
            strokeWidth="0.6"
          />
        </svg>
      </div>

      {/* Subtle hover glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#c084fc] to-[#5d32dc] rounded-[2rem] blur opacity-0 group-hover:opacity-10 transition duration-500" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1"
        >
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              Mohamed <br />
              <span className="text-[#c084fc] font-black">Sadrulla</span>
            </h1>
          </div>

          <div className="text-lg sm:text-xl font-medium tracking-tight text-white/90">
            Visual Designer <span className="text-white/20 mx-2">/</span> Front
            End Developer
          </div>

          <p className="text-sm sm:text-base text-white/50 max-w-sm lg:max-w-md leading-relaxed font-light">
            Engineering high-fidelity, visually-driven interfaces that merge
            aesthetic precision with seamless performance and tactile
            innovation.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
            <a
              href="#Contact"
              className="px-8 py-3.5 bg-[#c084fc] text-black font-tech text-[10px] sm:text-xs uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-[#c084fc]/20 hover:scale-105 transition-all"
            >
              Contact Me
            </a>
            <a
              href="/resource/Mohamed_Sadrulla_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-white/5 border border-white/10 text-white text-[10px] sm:text-xs uppercase tracking-widest font-tech rounded-2xl hover:bg-white/10 transition-all"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center lg:justify-end group/photo order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative p-0.5 rounded-full lg:rounded-[2rem] border border-white/5 overflow-hidden w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[340px]">
            {/* Subtle glow behind photo on hover */}
            <div className="absolute inset-0 bg-[#c084fc]/20 blur-3xl opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500" />

            <Tilt
              perspective={2000}
              scale={1.02}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              className="relative w-full rounded-full lg:rounded-[2rem] overflow-hidden z-10"
            >
              <img
                src="/resource/profile_pic.jpg"
                alt="Mohamed Sadrulla"
                className="w-full h-full object-cover rounded-full lg:rounded-[2rem] aspect-square lg:aspect-[4/5]"
                style={{ transform: "translateZ(0)" }}
              />
            </Tilt>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
