import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9be3918-05f0-46c0-8e56-ee79e7483b8e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Sent Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }
  };

  return (
    <section id='Contact' className='scroll-mt'>
      <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden'>
        <img className='absolute -z-10 opacity-40 w-full h-screen' src="/resource/texture_bg_right.png" alt="" />
        <div className='grid grid-rows-[1fr_6fr] w-full h-screen mx-30'>
          <div className='text-white h-30 flex justify-start items-end'>
            <h2 className='text-5xl font-semibold text-[#EB5E28] mt-10'>Contact</h2>
          </div>
          <div className='grid grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='flex flex-col w-full justify-start items-centre mt-10 pr-35'>
              <form onSubmit={onSubmit}>
                <div className='flex flex-col gap-5'>
                  <div className='w-full text-white'>
                    Name
                    <input className='w-full border border-[#eb5e28] rounded-xl px-4 py-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                  </div>
                  <div className='w-full text-white'>
                    Email
                    <input className='w-full border border-[#eb5e28] rounded-xl px-4 py-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
                  </div>
                </div>
                <div className='w-full text-white my-5'>
                  Message
                  <textarea className='w-full h-50 border border-[#eb5e28] text-white rounded-xl px-4 py-3 mt-2 resize-none'
                    name="Message" placeholder='Your Message' required></textarea>
                </div>
                <button id='#Contact' className=" cursor-pointer w-full px-10 py-5 bg-[#EB5E28] text-white font-normal rounded-full shadow-md hover:scale-105 transition">
                  {result ? result : "Send Message"}
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='flex justify-center items-center'>
              <img src="/resource/contact_image.png" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

