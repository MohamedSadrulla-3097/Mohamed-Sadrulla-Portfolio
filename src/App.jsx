import { useEffect } from 'react'
import './index.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // 1. Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      anchors: true,
      duration: 1.5,
    });

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    // 2. GSAP Entrance Animations
    const tiles = gsap.utils.toArray('.bento-tile');
    tiles.forEach((tile) => {
      gsap.from(tile, {
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tile,
          start: 'top bottom-=50',
          toggleActions: 'play none none none',
        }
      });
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // 3. Dynamic Favicon Logic
    const originalFavicon = "/favicon.svg";
    const faviconLink = document.querySelector("link[rel~='icon']");
    
    // SVG Templates
    const getSvg = (back, fore) => {
      const svg = `<svg width="341" height="341" viewBox="0 0 341 341" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M147.5 13.2791C161.732 5.06194 179.268 5.06195 193.5 13.2791L295.157 71.9709C309.39 80.188 318.157 95.3739 318.157 111.808V229.192C318.157 245.626 309.39 260.812 295.157 269.029L193.5 327.721C179.268 335.938 161.732 335.938 147.5 327.721L45.8427 269.029C31.6102 260.812 22.8427 245.626 22.8427 229.192V111.808C22.8427 95.3739 31.6102 80.188 45.8427 71.9709L147.5 13.2791Z" fill="${back}"/><path d="M112.689 142.779L156.778 118.151C162.472 114.971 166 108.959 166 102.437V63.4918C166 49.5658 150.864 40.9146 138.865 47.982L56.865 96.2786C51.372 99.514 48 105.413 48 111.788V232.06C48 238.516 51.458 244.478 57.0624 247.684L138.919 294.509C150.95 301.391 165.92 292.662 165.856 278.801L165.444 189.417C165.398 179.508 157.352 171.5 147.444 171.5H143.779C133.838 171.5 125.779 179.559 125.779 189.5V224.987C125.779 235.45 112.359 239.76 106.267 231.253C104.983 229.461 104.281 227.318 104.255 225.114L103.468 158.706C103.39 152.108 106.928 145.996 112.689 142.779Z" fill="${fore}"/><path d="M285.035 95.7973L201.443 47.2884C198.86 45.7895 195.927 45 192.941 45C183.585 45 176 52.5846 176 61.9407V115.812V145.547C176 153.04 180.642 159.749 187.653 162.391L210.5 171L246.92 187.524C251.536 189.618 254.5 194.219 254.5 199.287C254.5 202.374 253.685 205.407 252.137 208.077L245.125 220.177C239.186 230.426 225.138 232.243 216.787 223.843L212.236 219.266C208.882 215.893 207 211.33 207 206.574V204V186.439C207 177.912 200.088 171 191.561 171C182.987 171 176.055 177.986 176.122 186.56L176.844 278.605C176.952 292.398 191.898 300.949 203.844 294.052L285 247.196C290.569 243.981 294 238.038 294 231.608V204V183.876C294 176.176 289.102 169.328 281.814 166.841L222.385 146.557C215.277 144.131 210.5 137.452 210.5 129.942C210.5 116.763 224.48 108.283 236.167 114.372L267.684 130.79C279.667 137.033 294 128.339 294 114.827V111.366C294 104.949 290.584 99.0178 285.035 95.7973Z" fill="${fore}"/></svg>`;
      return `data:image/svg+xml;base64,${btoa(svg)}`;
    };

    const blackIcon = getSvg("black", "white");
    const whiteIcon = getSvg("white", "black");
    
    let interval;
    let isWhite = false;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        interval = setInterval(() => {
          if (faviconLink) {
            faviconLink.href = isWhite ? blackIcon : whiteIcon;
            isWhite = !isWhite;
          }
        }, 500);
      } else {
        clearInterval(interval);
        if (faviconLink) faviconLink.href = originalFavicon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      ScrollTrigger.getAll().forEach(t => t.kill());
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);






  return (
    <div className='w-full min-h-screen relative'>

      {/* Background Elements */}
      <div className="bg-orb w-[400px] h-[400px] bg-[#5d32dc] top-[-10%] left-[-10%] blur-[120px]" />
      <div className="bg-orb w-[300px] h-[300px] bg-[#c084fc] bottom-[10%] right-[0%] blur-[100px] animation-delay-2000" />
      <div className="bg-orb w-[250px] h-[250px] bg-[#5d32dc] top-[40%] right-[10%] blur-[80px] animation-delay-4000" />


      <ToastContainer />
      
      <main className="container mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-8 md:pt-12 pb-12 sm:pb-20 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">



        {/* Bento Tiles */}
        <div id="Home" className="bento-tile md:col-span-12 lg:col-span-8 isolate">
          <Hero />
        </div>
        <div id="About" className="bento-tile md:col-span-12 lg:col-span-4 isolate">
          <About />
        </div>
        <div id="Skills" className="bento-tile md:col-span-12 lg:col-span-4 isolate">
          <Skills />
        </div>
        <div id="Projects" className="bento-tile md:col-span-12 lg:col-span-8 isolate">
          <Projects />
        </div>
        <div id="Experience" className="bento-tile md:col-span-12 lg:col-span-6 isolate">
          <Experience />
        </div>
        <div id="Services" className="bento-tile md:col-span-12 lg:col-span-6 isolate">
          <Services />
        </div>
        <div id="Contact" className="bento-tile md:col-span-12 isolate">
          <Contact />
        </div>
        <div className="bento-tile md:col-span-12 isolate">
          <Footer />
        </div>

      </main>


    </div>
  )
}

export default App
