import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="Home" className="scroll-mt">
      <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden'>
        <img className='absolute -z-10 opacity-40 w-full h-screen' src="/resource/texture_bg_right.png" alt="bg_image" />
        <div className='grid grid-cols-[2fr_1fr] w-full h-screen mx-30'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ delay: 0.2, duration: 1.3 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}

            className='flex flex-col gap-10 justify-center items-start text-white'>
            <div className='text-7xl text-white font-semibold'>
              <h1>
                Mohamed Sadrulla
              </h1>
            </div>
            <div className='text-4xl font-semibold text-[#EB5E28]'>Front End Dev / UI & UX Designer</div>
            <div className='text-2xl text-white'><p>I design and build clean, fast, and user-focused <br />web interfaces that deliver real impact.</p></div>
            <div class="flex gap-5 mt-8">
              <a href="#Contact" class="px-10 py-5 bg-[#EB5E28] text-white font-normal rounded-full shadow-md hover:scale-105 transition">Contact Me</a>
              <a href="/resource/cv.pdf" target="_blank" class="px-10 py-5 bg-white border text-black border-gray-300 rounded-full font-semibold shadow-sm hover:bg-gray-50 transition">Download CV</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ delay: 0.2, duration: 1.3 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex justify-end items-center'>
            <div>
              <Tilt
                perspective={1000}
                scale={1}
                glareEnable={true}
                glareMaxOpacity={0.001}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                className="w-fit"
              >
                <img
                  src="/resource/hero_image.png"
                  alt="Hero"
                  className="w-110 object-cover mt-10" />
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
