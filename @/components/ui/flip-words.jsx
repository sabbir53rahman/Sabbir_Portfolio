"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FlipWords = ({ 
  words = [], 
  duration = 3000, 
  className 
}) => {
  const [currentWord, setCurrentWord] = useState(words[0] || "");
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    if (words.length > 0) {
      const currentIndex = words.indexOf(currentWord);
      const nextWord = words[currentIndex + 1] || words[0]; // Loop back to the first word
      setCurrentWord(nextWord);
      setIsAnimating(true);
    }
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating && words.length > 0) {
      const timeout = setTimeout(() => {
        startAnimation();
      }, duration);

      return () => clearTimeout(timeout); // Clean up timeout on unmount
    }
  }, [isAnimating, duration, startAnimation, words]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={`z-10 inline-block relative text-left px-2 ${className}`}
        key={currentWord}
      >
        {currentWord}
      </motion.div>
    </AnimatePresence>
  );
};

// Usage Example
export const SabbirFlipWords = () => {
  

  return (
    <div className="relative">
      <FlipWords words={words} duration={4000} className="text-xl md:text-4xl font-bold" />
    </div>
  );
};
