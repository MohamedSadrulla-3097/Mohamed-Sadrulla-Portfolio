import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "Projects", "Skills", "About", "Experience", "Services", "Contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase = "hover:text-[#EB5E28] transition-all duration-100 font-base";

  const activeStyle = "text-[#EB5E28] font-base";

  return (
    <div className="container flex mx-auto justify-center h-20 items-center fixed top-0 z-10 md:20px lg:32px">
      <ul className="hidden md:flex justify-center w-auto h-15 items-center gap-15 bg-white/2 backdrop-blur-sm rounded-full border-white/10 py-2 text-white font-base px-10">

        <a
          href="#Experience"
          className={`${linkBase} ${activeSection === "Experience" ? activeStyle : ""}`}
        >
          Experience
        </a>

        <a
          href="#Skills"
          className={`${linkBase} ${activeSection === "Skills" ? activeStyle : ""}`}
        >
          Skills
        </a>

        <a
          href="#About"
          className={`${linkBase} ${activeSection === "About" ? activeStyle : ""}`}
        >
          About
        </a>

        {/* HOME LOGO */}
        <a href="#Home" className="flex justify-center items-center">
          <img
            className="w-8 md:20px lg:32px"
            src="/resource/logo_main.svg"
            alt="Home"
          />
        </a>

        <a
          href="#Projects"
          className={`${linkBase} ${activeSection === "Projects" ? activeStyle : ""}`}
        >
          Projects
        </a>


        <a
          href="#Services"
          className={`${linkBase} ${activeSection === "Services" ? activeStyle : ""}`}
        >
          Services
        </a>

        <a
          href="#Contact"
          className={`${linkBase} ${activeSection === "Contact" ? activeStyle : ""}`}
        >
          Contact
        </a>

      </ul>
    </div>
  );
};

export default Navbar;
