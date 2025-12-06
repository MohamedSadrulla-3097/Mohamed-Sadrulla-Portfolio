import React from 'react'
import { motion } from 'framer-motion'


const Skills = () => {
  return (
    <section id='Skills' className='scroll-mt'>
      <div className='min-h-screen bg-cover bg-center flex items-center w-full'>
        <img className='absolute -z-10 opacity-40 w-full h-screen' src="/resource/texture_bg_right.png" alt="bg_image" />
        <div className='grid grid-rows-[1fr_6fr] w-full h-screen mx-30'>
          <div className='text-white h-30 flex justify-start items-end'>
            <h2 className='text-5xl font-semibold text-[#EB5E28] mt-10'>Skills</h2>
          </div>
          <div className='grid grid-cols-[1fr_1fr_1fr]'>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}

              className='flex flex-col mx-5 my-15 bg-black/30 backdrop-blur-sm rounded-2xl border-3 border-[rgb(235,94,40,0.1)]'>
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_right.png" alt="" />
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_left.png" alt="" />
              <div className='flex justify-center my-10 pt-2 text-[#EB5E28] text-xl font-semibold'>Front End
              </div>
              <div className='grid mx-10 mb-10 text-xs'>
                <a className='hover:scale-120 transition flex justify-start items-center' href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img className='w-12 py-2 mr-10' src="/resource/html.svg" alt="" />
                  <div className='grid grid-cols justify-between items-center gap-2'>
                    <div className='flex justify-between text-white'>
                      <p>HTML</p>
                      <p>90%</p>
                    </div>
                    <div className='w-50 h-1 bg-gray-700 rounded-full'>
                      <div className='w-45 h-1 bg-[#EB5E28] text-[#EB5E28] rounded-full'>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='hover:scale-120 transition flex justify-start items-center' href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img className='w-12 py-2 mr-10' src="/resource/css.svg" alt="" />
                  <div className='grid grid-cols justify-between items-center gap-2'>
                    <div className='flex justify-between text-white'>
                      <p>CSS</p>
                      <p>88%</p>
                    </div>
                    <div className='w-50 h-1 bg-gray-700 rounded-full'>
                      <div className='w-44 h-1 bg-[#EB5E28] text-[#EB5E28] rounded-full'>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='hover:scale-120 transition flex justify-start items-center' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img className='w-12 py-2 mr-10' src="/resource/javascript.svg" alt="" />
                  <div className='grid grid-cols justify-between items-center gap-2'>
                    <div className='flex justify-between text-white'>
                      <p>JavaScript</p>
                      <p>78%</p>
                    </div>
                    <div className='w-50 h-1 bg-gray-700 rounded-full'>
                      <div className='w-39 h-1 bg-[#EB5E28] text-[#EB5E28] rounded-full'>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='hover:scale-120 transition flex justify-start items-center' href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img className='w-12 py-2 mr-10' src="/resource/react.svg" alt="" />
                  <div className='grid grid-cols justify-between items-center gap-2'>
                    <div className='flex justify-between text-white'>
                      <p>React</p>
                      <p>72%</p>
                    </div>
                    <div className='w-50 h-1 bg-gray-700 rounded-full'>
                      <div className='w-36 h-1 bg-[#EB5E28] text-[#EB5E28] rounded-full'>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='hover:scale-120 transition flex justify-start items-center' href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img className='w-12 py-2 mr-10' src="/resource/tailwind.svg" alt="" />
                  <div className='grid grid-cols justify-between items-center gap-2'>
                    <div className='flex justify-between text-white'>
                      <p>Tailwind</p>
                      <p>80%</p>
                    </div>
                    <div className='w-50 h-1 bg-gray-700 rounded-full'>
                      <div className='w-40 h-1 bg-[#EB5E28] text-[#EB5E28] rounded-full'>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
            {/* Back end */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex flex-col mx-5 my-15 bg-black/30 backdrop-blur-sm rounded-2xl border-3 border-[rgb(235,94,40,0.1)]'>
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_right.png" alt="" />
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_left.png" alt="" />
              <div className='flex justify-center my-10 pt-2 text-[#EB5E28] text-xl font-semibold'>Back End
              </div>
              <div className='grid mx-10 mb-10 text-xs'>
                <a className='hover:scale-120 transition flex justify-start items-center' href="https://nodejs.org/en/docs" target="_blank" rel="noopener noreferrer"><img className='w-12 py-2 mr-10' src="/resource/nodejs.svg" alt="" />
                  <div className='grid grid-cols justify-between items-center gap-2'>
                    <div className='flex justify-between text-white'>
                      <p>Nodejs</p>
                      <p>65%</p>
                    </div>
                    <div className='w-50 h-1 bg-gray-700 rounded-full'>
                      <div className='w-32.5 h-1 bg-[#EB5E28] text-[#EB5E28] rounded-full'>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='hover:scale-120 transition flex justify-start items-center' href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer"><img className='w-12 py-2 mr-10' src="/resource/mongodb.svg" alt="" />
                  <div className='grid grid-cols justify-between items-center gap-2'>
                    <div className='flex justify-between text-white'>
                      <p>Mongo Db</p>
                      <p>60%</p>
                    </div>
                    <div className='w-50 h-1 bg-gray-700 rounded-full'>
                      <div className='w-30 h-1 bg-[#EB5E28] text-[#EB5E28] rounded-full'>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </motion.div>
            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}

              className='flex flex-col mx-5 my-15 bg-black/30 backdrop-blur-sm rounded-2xl border-3 border-[rgb(235,94,40,0.1)]'>
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_right.png" alt="" />
              <img className='flex absolute -z-10 opacity-50' src="/resource/texture_bg_left.png" alt="" />
              <div className='flex justify-center my-10 pt-2 text-[#EB5E28] text-xl font-semibold'>Design / Tools
              </div>
              <div className='grid mx-10 mb-10 text-xs'>
                <a className='hover:scale-120 transition flex justify-start items-center' href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer"><img className='w-12 py-2 mr-10' src="/resource/git.svg" alt="" />
                  <div className='grid grid-cols justify-between items-center gap-2'>
                    <div className='flex justify-between text-white'>
                      <p>Git</p>
                      <p>70%</p>
                    </div>
                    <div className='w-50 h-1 bg-gray-700 rounded-full'>
                      <div className='w-35 h-1 bg-[#EB5E28] text-[#EB5E28] rounded-full'>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='hover:scale-120 transition flex justify-start items-center' href="https://help.figma.com/hc/en-us" target="_blank" rel="noopener noreferrer"><img className='w-12 py-2 mr-10' src="/resource/figma.svg" alt="" />
                  <div className='grid grid-cols justify-between items-center gap-2'>
                    <div className='flex justify-between text-white'>
                      <p>Figma</p>
                      <p>95%</p>
                    </div>
                    <div className='w-50 h-1 bg-gray-700 rounded-full'>
                      <div className='w-47.5 h-1 bg-[#EB5E28] text-[#EB5E28] rounded-full'>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
