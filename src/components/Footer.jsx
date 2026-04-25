import React from 'react'
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const InstagramIcon = (props) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <div className='liquid-glass rounded-[2rem] p-8 sm:p-10 lg:p-12 relative overflow-hidden group'>
      <div className="glass-glow" />

      {/* Decorative techy curves */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <path 
            d="M0,150 C150,250 350,50 550,200 S850,100 1000,250" 
            fill="none" 
            stroke="#c084fc" 
            strokeWidth="1.2" 
            strokeDasharray="6,8"
          />
          <path 
            d="M0,200 C200,300 400,100 600,250 S800,150 1000,200" 
            fill="none" 
            stroke="#c084fc" 
            strokeWidth="0.6"
          />
        </svg>
      </div>

      <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex flex-col gap-8 text-center md:text-left'
        >
          <div className='space-y-6'>
            <h3 className='text-xl lg:text-2xl font-extralight tracking-tight text-[#c084fc] uppercase tracking-widest'>Reach Me</h3>
            <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
              <a href="mailto:mohamedsadrulla301097@gmail.com" className='bg-white/5 border border-white/10 px-6 py-3.5 rounded-2xl flex items-center group/link hover:border-[#c084fc]/40 transition-all'>
                <Mail className='w-4 h-4 mr-3 text-[#c084fc] opacity-40 group-hover/link:opacity-100 transition-opacity' />
                <span className='text-white/40 text-[10px] sm:text-[11px] group-hover/link:text-white transition-colors break-all font-light font-tech tracking-wider'>mohamedsadrulla301097@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/graphic_studio.97" target='_blank' rel="noopener noreferrer" className='bg-white/5 border border-white/10 px-6 py-3.5 rounded-2xl flex items-center group/link hover:border-[#c084fc]/40 transition-all'>
                <InstagramIcon className='w-4 h-4 mr-3 text-[#c084fc] opacity-40 group-hover/link:opacity-100 transition-opacity' />
                <span className='text-white/40 text-[10px] sm:text-[11px] group-hover/link:text-white transition-colors font-light font-tech tracking-wider'>graphic_studio.97</span>
              </a>
            </div>
          </div>
        </motion.div>


        <div className='flex flex-col items-center md:items-end gap-3'>
          <a href="#Home" className="hover:scale-105 transition-transform duration-500">
            <img
              className="w-32 md:w-40 lg:w-44 opacity-40 hover:opacity-100 transition-opacity"
              src="/resource/logo_dark.svg"
              alt="Mohamed Sadrulla"
            />
          </a>
          <p className='text-[#c084fc] font-tech tracking-tighter text-[9px] sm:text-[10px] uppercase opacity-60'>Front End Dev / Visual Designer</p>
          <div className='text-white/10 text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-tech mt-4'>
            © Mohamed Sadrulla • 2026
          </div>

        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c084fc]/5 blur-3xl rounded-full pointer-events-none" />
    </div>
  )
}

export default Footer
