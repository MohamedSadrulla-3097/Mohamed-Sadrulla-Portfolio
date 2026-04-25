import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-4.51-2-7-2" />
  </svg>
);

const About = () => {
  const socials = [
    { icon: <LinkedinIcon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />, href: "https://www.linkedin.com/in/mohamed-sadrulla-607717189/", label: "LinkedIn" },
    { icon: <GithubIcon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />, href: "https://github.com/MohamedSadrulla-3097", label: "GitHub" },
    { icon: <Palette className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />, href: "https://dribbble.com/Sadrulla", label: "Dribbble" }
  ];


  return (
    <div className='liquid-glass rounded-[2rem] p-8 sm:p-10 lg:p-12 h-full flex flex-col gap-8 relative group overflow-hidden'>
      <div className="glass-glow" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl lg:text-4xl font-extralight tracking-tight text-[#c084fc] mb-8'>About Me</h2>
        <div className="space-y-4 text-white/60 text-sm sm:text-base leading-relaxed font-light">
          <p>
            I am a <span className="text-white font-medium">Visual Design Engineer</span> dedicated to bridging the gap between <span className="text-[#c084fc] font-medium">technical precision</span> and <span className="text-white font-medium">creative digital aesthetics</span>.
          </p>
          <p>
            My passion lies in crafting <span className="text-white font-medium">visually compelling interfaces</span> and <span className="text-[#c084fc] font-medium">intuitive user experiences</span>, focusing on aesthetic precision and tactile digital interactions.
          </p>
        </div>
      </motion.div>

      <div className='mt-auto pt-8 border-t border-white/10'>
        <p className='text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.3em] font-tech mb-6'>Social Presence</p>
        <div className='flex gap-4'>
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:border-[#c084fc]/40 transition-all group"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#c084fc]/10 rounded-full blur-3xl group-hover:bg-[#c084fc]/20 transition-all duration-500" />
    </div>
  )
}

export default About
