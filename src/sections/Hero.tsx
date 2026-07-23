import { motion } from "motion/react";
import heroImage from "../assets/about1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Oríta Fine Dining"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 gap-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-accent text-xs uppercase tracking-widest"
        >
          Est. 2024 · Lagos, Nigeria
        </motion.p>

        {/* Copper divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-accent"
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-text-primary leading-tight max-w-4xl"
        >
          Two Worlds.
          <br />
          One Table.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed italic"
        >
          Where authentic Nigerian flavors meet globally inspired cuisine,
          creating an experience that's both familiar and extraordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <Link
            to="/reservations"
            className="bg-accent text-primary px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent-light transition-colors duration-300"
          >
            Reserve a Table
          </Link>
          <Link
            to="/menu"
            className="border border-text-primary text-text-primary px-8 py-3 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Explore Our Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
