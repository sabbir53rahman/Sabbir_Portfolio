import React from "react";
import { FlipWords } from "../../../@/components/ui/flip-words";
import { SparklesCore } from "../../../@/components/ui/sparkles";
import { motion } from "framer-motion";
import { LampContainer } from "../../../@/components/ui/lamp";
import { Link } from "react-router-dom";
import { Hero } from "../Hero/Hero";

export function Banner() {
  const words = [
    "MERN Developer.",
    "I build modern websites.",
    "Skilled in React and Node.js.",
    "I create clean, fast code.",
    "Focused on user-friendly designs.",
    "Passionate about web development.",
    "Always learning and improving.",
  ];

  return (
    <div className="h-[90vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col items-center justify-center">
      {/* Radial Gradient Effect */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 text-center text-4xl font-medium tracking-tight text-slate-500 md:text-7xl pb-[30px]"
        >
          Build your website <br /> the way you want it
        </motion.h1>
      </LampContainer>

      {/* Main Banner Content */}
      <div className="text-4xl text-center mx-auto font-normal text-white dark:text-white">
        Hi! I'm Sabbir Hossain {' '}
        <FlipWords className={`text-center`} words={words} /> <br />
        from Bangladesh.
      </div>
      {/* Decorative Gradient Lines and Sparkles */}
      <div className="w-full flex justify-center mt-8"></div>
      <div className="w-[40rem] mb-[40px] h-40 relative flex justify-center items-center">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component for sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      {/* button */}
      <Link to={"#hero"}>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex px-[20px] py-[10px] h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950  text-sm font-medium text-white backdrop-blur-3xl">
          See my work
        </span>
      </button>
      </Link>
      
    </div>
  );
}
