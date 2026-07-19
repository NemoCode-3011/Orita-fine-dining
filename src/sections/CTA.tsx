import { motion } from "motion/react"
import { Link } from "react-router-dom"
import ctaImage from "../assets/food3.jpg"

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background image */}
      <img
        src={ctaImage}
        alt="Oríta Fine Dining"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center text-center gap-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-accent text-xs uppercase tracking-widest"
        >
          Reserve Your Table
        </motion.p>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-px bg-accent" />
          <div className="w-2 h-2 border border-accent rotate-45" />
          <div className="w-8 h-px bg-accent" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl text-text-primary max-w-3xl leading-tight"
        >
          An Experience Worth Savouring
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-text-muted max-w-xl leading-relaxed"
        >
          Join us at Oríta and let two worlds come together on your plate. 
          Book your table today and experience dining as it was always meant to be.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/reservations"
            className="bg-accent text-primary px-10 py-4 text-sm uppercase tracking-widest hover:bg-accent-light transition-colors duration-300"
          >
            Reserve a Table
          </Link>
          <Link
            to="/menu"
            className="border border-text-primary text-text-primary px-10 py-4 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-300"
          >
            View Our Menu
          </Link>
        </motion.div>

        {/* Hours */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-text-muted text-xs uppercase tracking-widest"
        >
          Open Daily · 12PM – 11PM · Victoria Island, Lagos
        </motion.p>

      </div>
    </section>
  )
}

export default CTA