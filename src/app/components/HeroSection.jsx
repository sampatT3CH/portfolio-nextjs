"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';


   


const HeroSection = () => {

const downloadCV = () => {
  const cvUrl = 'https://sampa-kumar-resume.tiiny.site/';

  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'sampat-kumar-resume.pdf'; 
  link.click();
};
  return (
    <section className="lg:py-16">
    <div className="grid grid-cols-1 sm:grid-cols-12">
    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I am</span>
            <br />
            <TypeAnimation
            sequence={[
            'Sampat Kumar',
            1000,
            'Fullstack Developer',
             1000
            ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '70px', display: 'inline-block' }}
      repeat={Infinity}
    />
             </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        Experienced full-stack developer with a strong track record in designing and implementing scalable web applications, proficient in both front-end and back-end technologies.
        </p>


        <div>
        <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <button
            onClick={downloadCV}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>

          </motion.div>
    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <Image
         src="/images/hero-image.png" 
         alt="hero" 
         className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
         width={300} 
         height={300} 
         />
         </div>
         </motion.div>
    </div>
    </section>
  )
}

export default HeroSection
