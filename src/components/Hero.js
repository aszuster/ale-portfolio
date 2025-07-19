"use client";
import Image from "next/image";
import Starfield from "@/components/Starfield";
import { motion } from "motion/react";

export default function Hero() {
  const marqueeVariants = {
    animate: {
      x: [0, -1920],
      transition: {
        duration: 100,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    },
  };
  const fastMovement = {
    animate: {
      x: [0, -2000],
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    },
  };
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#2C1C5A] overflow-hidden">
      <motion.div
        className="absolute w-[5760px] h-[700px] bottom-[-100px] z-20 flex"
        variants={marqueeVariants}
        animate="animate"
        style={{ x: 0 }}
      >
        {/* First image */}
        <div className="relative w-[1920px] h-[700px] flex-shrink-0">
          <Image
            src="/img/clouds-2.png"
            alt="clouds"
            fill
            className="object-cover object-bottom opacity-20 brightness-50"
          />
        </div>
        {/* Second image (duplicate for seamless loop) */}
        <div className="relative w-[1920px] h-[700px] flex-shrink-0">
          <Image
            src="/img/clouds-1.png"
            alt="clouds"
            fill
            className="object-cover object-bottom opacity-20 brightness-50"
          />
        </div>
        {/* Third image to ensure no gap */}
        <div className="relative w-[1920px] h-[700px] flex-shrink-0">
          <Image
            src="/img/clouds-2.png"
            alt="clouds"
            fill
            className="object-cover object-bottom opacity-20 brightness-50"
          />
        </div>
      </motion.div>
      <motion.div
        className="absolute w-[5760px] h-[383px] bottom-[100px] left-[700px] z-20 flex"
        variants={fastMovement}
        animate="animate"
        style={{ x: 0 }}
      >
        {/* First image */}
        <div className="relative w-[1920px] h-[383px] flex-shrink-0">
          <Image
            src="/img/cloud-3.png"
            alt="clouds"
            fill
            className="object-cover object-bottom opacity-20 brightness-40"
          />
        </div>
      </motion.div>
      <Starfield />
      <div className="flex flex-col items-start justify-start z-20">
        {/* h1 doble capa */}
        <div className="relative ">
          <h1 className="text-[128px] leading-[128px] tracking-[0.02em] font-bold uppercase font-bebas-neue text-foreground select-none ">
            Alejandra Sz
          </h1>
          <h1
            className="pointer-events-none absolute top-0 left-0 w-full h-full text-[128px] leading-[128px] tracking-[0.02em] font-bold uppercase font-bebas-neue"
            style={{
              backgroundImage: "url('/img/filter-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 1,
            }}
          >
            Alejandra Sz
          </h1>
        </div>
        {/* h2 doble capa */}
        <div className="relative inline-block mt-2">
          <h2 className="text-[100px] leading-[100px] tracking-[0.02em] font-bold uppercase text-secondary font-bebas-neue ">
            Creative Developer
          </h2>
          <h2
            className="pointer-events-none absolute top-0 left-0 w-full h-full text-[100px] leading-[100px] tracking-[0.02em] font-bold uppercase font-bebas-neue"
            style={{
              backgroundImage: "url('/img/filter-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: "1",
            }}
          >
            Creative Developer
          </h2>
        </div>
      </div>
    </section>
  );
}
