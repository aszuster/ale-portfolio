"use client";
import Image from "next/image";
import Separation from "@/svg/Separation";
import { motion } from "motion/react";

export default function Stack() {
  const marqueeVariants = {
    animate: {
      x: [0, -1920],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#2C1C5A]">
      <Image
        src="/img/filter-bg.png"
        alt="texture"
        fill
        className="object-cover w-full h-full z-0"
      />
      <div className="flex flex-col items-start justify-start z-20 w-[1200px] mb-[100px]">
        <p className="font-bebas-neue text-accent text-[64px] leading-[64px]">
          My stack is usually
        </p>
        <div className="relative w-full overflow-hidden">
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            style={{ x: 0 }}
            className="flex items-center gap-2 font-bebas-neue text-foreground text-[90px] leading-[90px] h-[150px] whitespace-nowrap"
          >
            {/* Primera copia */}
            <p className="pr-[20px]">Next.js </p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Tailwind</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px] whitespace-nowrap">
              Framer Motion (now Motion)
            </p>
            {/* Segunda copia para loop infinito */}
            <p className="pr-[20px]">Next.js </p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Tailwind</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px] whitespace-nowrap">
              Framer Motion (now Motion)
            </p>
          </motion.div>
        </div>
      </div>
      <div className="relative flex flex-col items-start justify-start z-20 w-[1200px]">
        <p className="font-bebas-neue text-accent text-[64px] leading-[64px]">
          Also knowlege in
        </p>
        <div className="relative w-full overflow-hidden">
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            style={{ x: 0 }}
            className="flex items-center gap-2 font-bebas-neue text-foreground text-[90px] leading-[90px] h-[150px] whitespace-nowrap"
          >
            {/* Primera copia */}
            <p className="pr-[20px]">React</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Javascript</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">CSS</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Sass</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">GSAP</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Three.js</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Blender</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Figma</p> 
            <div className="z-30">
              <Separation />
            </div>
            {/* Segunda copia para loop infinito */}
            <p className="pr-[20px]">React</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Javascript</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">CSS</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Sass</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">GSAP</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Three.js</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Blender</p> 
            <div className="z-30">
              <Separation />
            </div>
            <p className="px-[20px]">Figma</p> 
            <div className="z-30">
              <Separation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
