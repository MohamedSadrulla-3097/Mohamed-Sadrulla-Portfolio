import React from 'react'
import { motion } from 'framer-motion';
import { Layers, Monitor, PenTool, Layout, Briefcase, Printer } from 'lucide-react';

const ServiceItem = ({ title, icon: Icon, link, delay }) => {
  const LucideIcon = Icon;
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className='flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#c084fc]/50 hover:bg-[#c084fc]/5 transition-all group text-center h-full'
    >
      <div className='w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500'>
        <LucideIcon className="w-8 h-8 text-[#c084fc] opacity-40 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className='text-[10px] sm:text-xs font-tech text-white/30 uppercase tracking-[0.3em] group-hover:text-white transition-colors'>{title}</p>
    </motion.a>
  );
};

const Services = () => {
  const services = [
    { title: "Product", icon: Layers, link: "https://www.figma.com/proto/DKUmS1Jkd5F7EMOMY1Sca6/Untitled?page-id=0%3A1&node-id=184-160" },
    { title: "Web", icon: Monitor, link: "https://www.figma.com/proto/JtfWRv4GBISQ2cFgqemi1n/Zoho-Desk?page-id=0%3A1&node-id=228-1289" },
    { title: "Logo", icon: PenTool, link: "/resource/logo_design.pdf" },
    { title: "Mockups", icon: Layout, link: "https://www.figma.com/proto/DKUmS1Jkd5F7EMOMY1Sca6/Untitled?page-id=0%3A1&node-id=287-42" },
    { title: "Branding", icon: Briefcase, link: "/resource/branding.pdf" },
    { title: "Print", icon: Printer, link: "https://www.figma.com/proto/DKUmS1Jkd5F7EMOMY1Sca6/Untitled?page-id=0%3A1&node-id=297-259" },
  ];

  return (
    <div className='liquid-glass rounded-[2rem] p-8 sm:p-10 lg:p-12 h-full relative group overflow-hidden'>
      <div className="glass-glow" />
      <h2 className='text-3xl lg:text-4xl font-extralight tracking-tight text-[#c084fc] mb-12'>My Services</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8'>
        {services.map((service, index) => (
          <ServiceItem key={service.title} {...service} delay={index * 0.05} />
        ))}
      </div>
    </div>
  )
}

export default Services
