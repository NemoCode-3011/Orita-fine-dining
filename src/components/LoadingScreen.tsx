import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import bgImage from "../assets/hero4.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" as const },
  },
};

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar — 5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    // Hide after 5.5s
    const hide = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background image */}
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />

          {/* Solid dark overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#0D1B2A" }}
          />

          {/* Main content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center justify-center gap-5"
          >
            {/* Crossroads SVG */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-24 h-24 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Horizontal line */}
                <motion.line
                  x1="0"
                  y1="50"
                  x2="100"
                  y2="50"
                  stroke="#B87333"
                  strokeWidth="0.8"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />
                {/* Vertical line */}
                <motion.line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="100"
                  stroke="#B87333"
                  strokeWidth="0.8"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                />
                {/* Center dot */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="3"
                  fill="#B87333"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                />
                {/* 4 end dots */}
                {[
                  { cx: 50, cy: 5 },
                  { cx: 50, cy: 95 },
                  { cx: 5, cy: 50 },
                  { cx: 95, cy: 50 },
                ].map((dot, i) => (
                  <motion.circle
                    key={i}
                    cx={dot.cx}
                    cy={dot.cy}
                    r="2"
                    fill="#B87333"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.3 + i * 0.1 }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Oríta */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-8xl md:text-[120px] text-accent leading-none tracking-wide"
            >
              Oríta
            </motion.h1>

            {/* Fine Dining */}
            <motion.p
              variants={itemVariants}
              className="text-text-muted text-xs uppercase tracking-[0.6em] -mt-2"
            >
              Fine Dining
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-px bg-accent/50" />
              <div className="w-1.5 h-1.5 border border-accent/50 rotate-45" />
              <div className="w-10 h-px bg-accent/50" />
            </motion.div>

            {/* Yoruba */}
            <motion.p
              variants={itemVariants}
              className="font-heading text-lg text-accent/50 italic"
            >
              "Oríta meta ni'bi ipade awon ona"
            </motion.p>

            {/* Translation */}
            <motion.p
              variants={itemVariants}
              className="text-text-muted/60 text-xs uppercase tracking-widest"
            >
              The crossroads is where paths meet
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/10">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
