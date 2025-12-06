import React from 'react'
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id='Services' className='scroll-mt'>
      <div className='min-h-screen bg-cover bg-center flex items-center w-full'>
        <img className='absolute -z-10 opacity-40 w-full h-screen' src="/resource/texture_bg_right.png" alt="" />
        <div className='grid grid-rows-[1fr_6fr] w-full h-screen mx-30'>
          <div className='text-white h-30 flex justify-start items-end'>
            <h2 className='text-5xl font-semibold text-[#EB5E28] mt-10'>Services</h2>
          </div>
          <div className='grid m-5'>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='grid grid-cols-[1fr_1fr_1fr]'>
              <div className='hover:scale-97 transition-all flex flex-col justify-center items-center mx-2 my-2 bg-black/30 backdrop-blur-sm rounded-2xl border border-[rgb(235,94,40,0.5)]'>
                <a className='flex flex-col items-center' href="https://www.figma.com/proto/DKUmS1Jkd5F7EMOMY1Sca6/Untitled?page-id=0%3A1&node-id=184-160&viewport=1439%2C-422%2C0.17&t=ldzIGYk1l7x94CAU-1&scaling=contain&content-scaling=fixed" target='_blank'><img className='w-12' src="/resource/product_design.svg" alt="" />
                  <p className='mt-5 text-[#EB5E28] font-medium text-xl'>Product Design</p>
                </a>
              </div>
              <div className='hover:scale-97 transition-all flex flex-col justify-center items-center mx-2 my-2 bg-black/30 backdrop-blur-sm rounded-2xl border border-[rgb(235,94,40,0.5)]'>
                <a className='flex flex-col items-center' href="https://www.figma.com/proto/JtfWRv4GBISQ2cFgqemi1n/Zoho-Desk?page-id=0%3A1&node-id=228-1289&scaling=scale-down-width&content-scaling=fixed&t=65ojeQ30iuG8gJLU-1" target='_blank'><img className='w-12' src="/resource/web_design.svg" alt="" />
                  <p className='mt-5 text-[#EB5E28] font-medium text-xl'>Web Design</p>
                </a>
              </div>
              <div className='hover:scale-97 transition-all flex flex-col justify-center items-center mx-2 my-2 bg-black/30 backdrop-blur-sm rounded-2xl border border-[rgb(235,94,40,0.5)]'>
                <a className='flex flex-col items-center' href="/resource/logo_design.pdf" target='_blank'><img className='w-10 h-10' src="/resource/logo_design.svg" alt="" />
                  <p className='mt-5 text-[#EB5E28] font-medium text-xl'>Logo Design</p>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='grid grid-cols-[1fr_1fr_1fr]'>
              <div className='hover:scale-97 transition-all flex flex-col justify-center items-center mx-2 my-2 bg-black/30 backdrop-blur-sm rounded-2xl border border-[rgb(235,94,40,0.5)]'>
                <a className='flex flex-col items-center' href="https://www.figma.com/proto/DKUmS1Jkd5F7EMOMY1Sca6/Untitled?page-id=0%3A1&node-id=287-42&viewport=1940%2C-1526%2C0.25&t=GnYu83mEOHOUENDG-1&scaling=contain&content-scaling=fixed" target='_blank'><img className='w-12' src="/resource/mockups.svg" alt="" />
                  <p className='mt-5 text-[#EB5E28] font-medium text-xl'>Mockups</p>
                </a>
              </div>
              <div className='hover:scale-97 transition-all flex flex-col justify-center items-center mx-2 my-2 bg-black/30 backdrop-blur-sm rounded-2xl border border-[rgb(235,94,40,0.5)]'>
                <a className='flex flex-col items-center' href="/resource/branding.pdf" target='_blank'><img className='w-10' src="/resource/branding.svg" alt="" />
                  <p className='mt-5 text-[#EB5E28] font-medium text-xl'>Branding</p>
                </a>
              </div>
              <div className='hover:scale-97 transition-all flex flex-col justify-center items-center mx-2 my-2 bg-black/30 backdrop-blur-sm rounded-2xl border border-[rgb(235,94,40,0.5)]'>
                <a className='flex flex-col items-center' href="https://www.figma.com/proto/DKUmS1Jkd5F7EMOMY1Sca6/Untitled?page-id=0%3A1&node-id=297-259&viewport=-3809%2C-3534%2C0.34&t=IUWNTL2HmLE25Rli-1&scaling=contain&content-scaling=fixed" target='_blank'><img className='w-12' src="/resource/print_design.svg" alt="" />
                  <p className='mt-5 text-[#EB5E28] font-medium text-xl'>Print Design</p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
