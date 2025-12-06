import React from 'react'
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id='Projects' className='scroll-mt'>
      <div className='min-h-screen bg-cover bg-center flex items-center w-full'>
        <img className='absolute -z-10 opacity-40 w-full h-screen' src="/resource/texture_bg_right.png" alt="" />
        <div className='grid grid-rows-[1fr_6fr] w-full h-screen mx-30'>
          <div className='text-white h-30 flex justify-start items-end'>
            <h2 className='text-5xl font-semibold text-[#EB5E28] mt-10'>Projects</h2>
          </div>
          <div className='grid grid-cols-[1fr_1fr_1fr]'>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='flex z-1 flex-col mx-5 my-15 hover:scale-105 transition-all bg-black/30 backdrop-blur-sm rounded-2xl border-3 border-[rgb(235,94,40,0.1)]'>
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_right.png" alt="" />
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_left.png" alt="" />
              <div className='flex justify-center my-10 pt-2 text-[#EB5E28] text-xl font-semibold'>Real Estate App</div>
              <div>
                <img className='px-5' src="/resource/Project_1.png" alt="" />
              </div>
              <div className='px-5 flex text-justify py-7 text-white text-l font-light leading-6'>
                Illam a real estate concept app, which helps for selling & Constructing your dream house.
                built with (React vite + Tailwind CSS)
              </div>
              <a className='px-5 flex text-justify py-7 text-white text-l font-light underline' href="https://illam-plum.vercel.app/" target='_blank'><img className='w-5 mr-1' src="/resource/link_chain.svg" alt="" /> Link : Explore illam</a>
            </motion.div>
            <motion.div
              initial={{ scale: 1.2 }}
              transition={{ duration: 1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}

              className='flex z-2 flex-col mx-5 my-15 hover:scale-105 transition-all bg-black/30 backdrop-blur-sm rounded-2xl border-3 border-[rgb(235,94,40,0.1)]'>
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_right.png" alt="" />
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_left.png" alt="" />
              <div className='flex justify-center my-10 pt-2 text-[#EB5E28] text-xl font-semibold'>3d Car Showcase</div>
              <div>
                <img className='px-5' src="/resource/Project_2.png" alt="" />
              </div>
              <div className='px-5 flex text-justify py-7 text-white text-l font-light leading-6'>
                A 3D car showcase made using Three.js, enabling model switching..
                Developed from scratch using clean HTML/CSS/JS.
              </div>
              <a className='px-5 flex text-justify py-7 text-white text-l font-light underline' href="https://carshowcase3d.netlify.app/" target='_blank'><img className='w-5 mr-1' src="/resource/link_chain.svg" alt="" /> Link : Explore Car Showcase</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='flex z-1 flex-col mx-5 my-15 hover:scale-105 transition-all bg-black/30 backdrop-blur-sm rounded-2xl border-3 border-[rgb(235,94,40,0.1)]'>
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_right.png" alt="" />
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_left.png" alt="" />
              <div className='flex justify-center my-10 pt-2 text-[#EB5E28] text-xl font-semibold'>Tape 9T'S Concept app</div>
              <div>
                <img className='px-5' src="/resource/Project_3.png" alt="" />
              </div>
              <div className='px-5 flex text-justify py-7 text-white text-l font-light leading-6'>
                Social Media platform concept app, designed in Figma developed and
                built using (React vite + Tailwind CSS)
              </div>
              <a className='px-5 flex text-justify py-7 text-white text-l font-light underline' href="https://concept-social-media-video-platform.vercel.app/" target='_blank'><img className='w-5 mr-1' src="/resource/link_chain.svg" alt="" /> Link : Tape 9T'S</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects