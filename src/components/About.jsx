import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="About" className="scroll-mt">
      <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden'>
        <img className='absolute -z-10 opacity-40 w-full h-screen' src="/resource/texture_bg_left.png" alt="bg_image" />
        <div
          className='grid grid-rows-[auto_6fr] w-full h-screen mx-30'>
          <div className='text-white h-30 flex justify-start items-end'>
            <h2 className='text-5xl font-semibold text-[#EB5E28] mt-10'>About</h2>
          </div>
          <div className='grid w-full h-screen'>
            <div className='grid grid-cols-[1fr_1fr]'>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ delay: 0.2, duration: 1.3 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
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
                    src="/resource/about_image.png"
                    alt="About"
                    className="w-105 object-cover mt-0"
                  />
                </Tilt>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                transition={{ delay: 0.2, duration: 1.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className='text-white text-xl font-mono  text-justify leading-8'>
                  I’m a Diploma in Mechanical Engineering graduate who found a deep passion for design and creativity, leading me into modern web development. What began with Graphic and UI/UX Design grew into a strong interest in building full-stack applications using the MERN Stack.
                  <br />
                  <br />
                  I continuously explore new tools, work on freelance projects, and create practical digital solutions. I’m now ready to join a forward-thinking company as a Front End Developer to contribute to real-world projects and grow alongside a skilled team.
                </p>
                <div className='mt-10'>
                  <p className='text-white text-xl mt-15'>Let's Connect.</p>
                  <div className='flex flex-row gap-5 mt-5'>
                    <a className='hover:scale-120 transition' href="https://www.linkedin.com/in/mohamed-sadrulla-607717189/" target="_blank" rel="noopener noreferrer"> <img src="/resource/linkedin_icon.svg" alt="" /></a>
                    <a className='hover:scale-120 transition' href="https://github.com/MohamedSadrulla-3097" target="_blank" rel="noopener noreferrer"> <img src="/resource/github_icon.svg" alt="" /></a>
                    <a className='hover:scale-120 transition' href="https://dribbble.com/Sadrulla" target="_blank" rel="noopener noreferrer"> <img src="/resource/dribbble_icon.svg" alt="" /></a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About
