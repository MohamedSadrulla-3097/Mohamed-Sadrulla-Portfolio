import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img className='absolute h-80 opacity-40' src="/resource/footer.png" alt="" />
        <div className='flex w-full h-80 justify-center items-center bg-[#121212]'>
          <div className='grid grid-rows-3 z-10 w-full h-full mx-30 py-10'>
            <div className='flex justify-center items-center text-white'>
              <div className='grid items-center w-full text-2xl'>
                <div className='grid py-10'>
                  <span>Reach Me at:</span>
                </div>
                <div className='grid gap-4 '>
                  <div className='flex'><img className='w-5 mr-5' src="/resource/mail.svg" alt="" /><a className='underline text-xl font-light' href="mohamedsadrulla301097@gmail.com">mohamedsadrulla301097@gmail.com</a></div>
                  <div className='flex'><img className='w-5 mr-5' src="/resource/instagram.svg" alt="" /><a className='underline text-xl font-light' href="https://www.instagram.com/graphic_studio.97?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>graphic_studio.97</a></div>
                </div>
              </div>
              <div className='grid w-full h-40'>
                <div className='flex justify-end'>
                  <a id='Home' href="#Home">
                    <img
                      className="w-45 mt-3 mr-10"
                      src="/resource/logo_dark.svg"
                      alt="Home"
                    />
                  </a>
                </div>
                <div className='flex justify-end'>
                  <p className='underline mt-2'>Front End Dev / UI & UX Designer</p>
                </div>
              </div>
            </div>
            <img className='flex mt-30' src="/resource/footer_line.svg" alt="" />
            <div className='flex justify-center items-center text-white mt-20'>Copyrights © Mohamed Sadrulla 2025.</div>
          </div>
        </div>
      </motion.div>
    </section >
  )
}

export default Footer
