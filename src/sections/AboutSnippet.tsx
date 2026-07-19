import { motion } from "motion/react"
import { Link } from "react-router-dom"
import aboutImage from "../assets/about1.jpg"

const AboutSnippet = () => {
  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Oríta Fine Dining Interior"
              className="w-full h-[600px] object-cover"
            />
            {/* Copper accent box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-accent/40 z-0" />
            {/* Small label on image */}
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm border border-accent/30 px-4 py-2">
              <p className="text-accent text-xs uppercase tracking-widest">Est. 2024</p>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <p className="text-accent text-xs uppercase tracking-widest">Our Story</p>

            {/* Ornamental divider */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-accent" />
              <div className="w-2 h-2 border border-accent rotate-45" />
              <div className="w-8 h-px bg-accent" />
            </div>

            {/* Heading */}
            <h2 className="font-heading text-4xl md:text-5xl text-text-primary leading-tight">
              Where Paths Meet,<br />Magic Happens
            </h2>

            {/* Story */}
            <p className="text-text-muted leading-relaxed">
              In Yoruba tradition, Oríta is no ordinary crossroads. It is a sacred space — 
              where paths converge, where the ancestors speak, where destinies are shaped. 
              Travelers would pause at Oríta to reflect, to offer prayers, to choose their direction.
            </p>

            <p className="text-text-muted leading-relaxed">
              We built this restaurant on that idea. Our chefs trained across Europe and came home 
              to Lagos with something to say. Every dish we serve is that conversation — Nigerian 
              spices meeting French technique, egusi meeting truffle, jollof meeting risotto. 
              This is not fusion for the sake of it. This is a meeting of worlds that was always meant to happen.
            </p>

            {/* Yoruba quote */}
            <div className="border-l-2 border-accent pl-6 py-2">
              <p className="font-heading text-xl text-accent italic">
                "Oríta meta ni'bi ipade awon ona."
              </p>
              <p className="text-text-muted text-sm mt-1">
                "The crossroads is where paths meet." — Yoruba proverb
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="text-accent text-sm uppercase tracking-widest hover:text-accent-light transition-colors flex items-center gap-2 w-fit"
            >
              Discover Our Story
              <span>→</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutSnippet