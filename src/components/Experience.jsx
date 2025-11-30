import React from 'react'
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id='Experience' className='scroll-mt'>
      <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden'>
        <img className='absolute -z-10 opacity-40 w-full h-screen' src="/resource/texture_bg_left.png" alt="bg_image" />
        <div className='grid grid-rows-[1fr_6fr] w-full h-screen mx-30'>
          <div className='text-white h-30 flex justify-start items-end'>
            <h2 className='text-5xl font-semibold text-[#EB5E28] mt-10'>Experience</h2>
          </div>
          <div className='grid grid-cols-[5fr_1fr_5fr]'>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='mx-7 flex flex-col justify-around py-5'>
              <div className='px-7 py-5 flex bg-white/1 border-2 border-[#EB5E28] border-dashed text-white rounded-2xl'>
                <span>
                  <h3 className='text-xl font-base'>
                    UI / Graphic Designer Tejas Groups <br /> Lawspet, Puducherry.
                  </h3>
                  <h4 className='text-sm font-light py-2'>
                    ( Apr 2020 - Nov 2024 )
                  </h4>
                  <h5 className='text-justify text-sm font-light py-1'>
                    Designed promotional materials and handled client design requests. <br />
                    Started self-learning web technologies (HTML, CSS, JS, React) and implemented personal projects.
                  </h5>
                </span>
              </div>
              <div className='px-7 py-5 bottom-0 justify-start bg-white/1 border-2 border-[#EB5E28] border-dashed text-white rounded-2xl'>
                <span>
                  <h3 className='text-xl font-base'>
                    Robot Welding Machine Operator <br /> Wheels India Pvt Ltd, Padi,Chennai.
                  </h3>
                  <h4 className='text-sm font-light py-2'>
                    ( Jul 2018 - Jul 2019 )
                  </h4>
                  <h5 className='text-justify text-sm font-light py-1'>
                    Operated and maintained production line systems ensuring efficiency and quality control. <br />
                    Developed structured problem-solving and process optimization skills.
                  </h5>
                </span>
              </div>
            </motion.div>

            <div className='flex justify-center items-center'>
              <img className='flex h-100' src="/resource/Timeline.svg" alt="" />
            </div>
            <div className='flex justify-center items-center'>
              <div className='mx-7 flex items-center justify-center'>
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className='px-7 py-5 justify-start bg-white/1 border-2 border-[#EB5E28] border-dashed text-white rounded-2xl'>
                  <span>
                    <h3 className='text-xl font-base'>
                      Oil Coolers Package Modine Thermal Systems <br /> Sipcot, Sriperembudur.
                    </h3>
                    <h4 className='text-sm font-light py-2'>
                      ( Aug 2019 - Mar 2020 )
                    </h4>
                    <h5 className='text-justify text-sm font-light py-1'>
                      Supported daily operations and technical maintenance in manufacturing units. <br />
                      Improved process workflows and teamwork efficiency.
                    </h5>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
