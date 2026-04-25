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
      setResult("");
    }
  };

  return (
    <div className='liquid-glass rounded-[2rem] p-8 sm:p-10 lg:p-12 h-full relative group overflow-hidden'>
      <div className="glass-glow" />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl lg:text-4xl font-extralight tracking-tight text-[#c084fc] mb-3'>Get in Touch</h2>
          <p className='text-white/30 text-sm sm:text-base mb-10 font-light leading-relaxed'>Have a project in mind? Let's build something amazing together.</p>

          <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'>
              <input 
                className='w-full bg-white/5 border border-white/10 focus:border-[#c084fc]/50 outline-none rounded-2xl px-5 py-4 text-sm text-white transition-all font-light placeholder:text-white/20' 
                type="text" 
                name='Name' 
                placeholder='Name' 
                required 
              />
              <input 
                className='w-full bg-white/5 border border-white/10 focus:border-[#c084fc]/50 outline-none rounded-2xl px-5 py-4 text-sm text-white transition-all font-light placeholder:text-white/20' 
                type="email" 
                name='Email' 
                placeholder='Email' 
                required 
              />
            </div>
            <textarea 
              className='w-full h-40 bg-white/5 border border-white/10 focus:border-[#c084fc]/50 outline-none rounded-2xl px-5 py-4 text-sm text-white transition-all resize-none font-light placeholder:text-white/20'
              name="Message" 
              placeholder='Your Message' 
              required
            ></textarea>
            <button 
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-[#c084fc] text-black font-tech text-[10px] sm:text-xs uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-[#c084fc]/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              {result ? result : "Send Message"}
            </button>
          </form>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='hidden lg:flex justify-center items-center overflow-visible'
        >
          <div className="relative w-full flex justify-center">
            <div className="absolute inset-0 bg-[#c084fc]/15 rounded-full blur-[120px] scale-[1.8]" />
            <img 
              src="/resource/laptop_glow.png" 
              alt="Contact" 
              className="relative z-10 w-full max-w-md xl:max-w-xl drop-shadow-[0_30px_60px_rgba(192,132,252,0.4)] opacity-100 lg:scale-[1.4] transition-transform duration-700"
              style={{ transform: 'translateZ(0)' }} 
            />
          </div>
        </motion.div>



      </div>
    </div>
  )
}

export default Contact
