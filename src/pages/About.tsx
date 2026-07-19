import { motion } from "motion/react"
import { Link } from "react-router-dom"
import aboutHero from "../assets/about1.jpg"
import chefImage from "../assets/chef2.jpg"
import chefImage1 from "../assets/chef6.jpg"
import chefImage2 from "../assets/chef8.jpg"

const chefs = [
  {
    id: 1,
    name: "Chef Kyrian Adeniyi ",
    role: "Executive Chef & Founder",
    bio: "Trained in Paris and Lagos, Chef Emeka brings two decades of culinary mastery to every plate. His philosophy is simple, honour the ingredient, respect the tradition, surprise the palate.",
    image: chefImage,
  },
  {
    id: 2,
    name: "Chef Amara Nwosu",
    role: "Head of Nigerian Cuisine",
    bio: "Born in Enugu, Amara learned to cook from her grandmother. She is the soul of Oríta's Nigerian kitchen, the keeper of the recipes that make guests close their eyes and remember home.",
    image: chefImage1,
  },
  {
    id: 3,
    name: "Chef Pierre Dubois",
    role: "Head of Continental Cuisine",
    bio: "A Michelin-trained chef from Lyon, Pierre fell in love with Nigerian flavours on his first visit to Lagos. At Oríta, he brings continental precision to West African ingredients.",
    image: chefImage2,
  },
]

const values = [
  {
    title: "Heritage",
    description: "We honour the culinary traditions of Nigeria, the soups, the spices, the techniques passed down through generations. Every Nigerian dish on our menu is a tribute to those who came before us."
  },
  {
    title: "Refinement",
    description: "Continental cuisine taught us precision, balance and the art of presentation. We apply those principles to everything we create — Nigerian or continental, every dish is crafted with care."
  },
  {
    title: "Harmony",
    description: "At the crossroads, two paths don't fight, they complement. Our fusion dishes are built on harmony, not contrast. We find the places where Nigerian and continental flavours naturally meet."
  },
]

const About = () => {
  return (
    <div className="bg-primary">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={aboutHero}
          alt="Oríta Fine Dining"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-xs uppercase tracking-widest"
          >
            Our Story
          </motion.p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-accent" />
            <div className="w-2 h-2 border border-accent rotate-45" />
            <div className="w-8 h-px bg-accent" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-5xl md:text-7xl text-text-primary max-w-3xl leading-tight"
          >
            Where Paths Meet, Magic Happens
          </motion.h1>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-visible"
            >
              <img
                src={aboutHero}
                alt="Oríta Interior"
                className="w-full h-150 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-accent/30 " />
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm border border-accent/30 px-4 py-2">
                <p className="text-accent text-xs uppercase tracking-widest">Est. 2024 · Lagos</p>
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
              <p className="text-accent text-xs uppercase tracking-widest">The Oríta Story</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-accent" />
                <div className="w-2 h-2 border border-accent rotate-45" />
                <div className="w-8 h-px bg-accent" />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-text-primary leading-tight">
                Born at the Crossroads
              </h2>
              <p className="text-text-muted leading-relaxed">
                In Yoruba tradition, Oríta is no ordinary crossroads. It is a sacred space,
                where paths converge, where the ancestors speak, where destinies are shaped.
                Travelers would pause at Oríta to reflect, to offer prayers, to choose their direction.
              </p>
              <p className="text-text-muted leading-relaxed">
                We built this restaurant on that idea. Our founders, Nigerian chefs who trained
                across Europe and came home to Lagos with something to say, saw the crossroads
                not as a place of confusion, but as a place of possibility. A place where two
                worlds could meet and create something neither could alone.
              </p>
              <p className="text-text-muted leading-relaxed">
                Every dish we serve is that conversation. Nigerian spices meeting French technique.
                Egusi meeting truffle. Jollof meeting risotto. The ancestors meeting the avant-garde.
                This is not fusion for the sake of it. This is a meeting of worlds that was always meant to happen.
              </p>
              <div className="border-l-2 border-accent pl-6 py-2">
                <p className="font-heading text-xl text-accent italic">
                  "Oríta meta ni'bi ipade awon ona."
                </p>
                <p className="text-text-muted text-sm mt-1">
                  "The crossroads is where paths meet." — Yoruba proverb
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <p className="text-accent text-xs uppercase tracking-widest">How We Think</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-accent" />
              <div className="w-2 h-2 border border-accent rotate-45" />
              <div className="w-8 h-px bg-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-text-dark">
              Our Philosophy
            </h2>
            <p className="text-text-dark/60 max-w-lg leading-relaxed">
              Three values guide everything we do at Oríta — from the ingredients we source to the way we plate every dish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 p-8 bg-primary border border-border hover:border-accent transition-colors duration-300"
              >
                <div className="w-8 h-px bg-accent" />
                <h3 className="font-heading text-2xl text-accent">{value.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <p className="text-accent text-xs uppercase tracking-widest">The People</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-accent" />
              <div className="w-2 h-2 border border-accent rotate-45" />
              <div className="w-8 h-px bg-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-text-primary">
              Meet Our Chefs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.article
                key={chef.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-100 overflow-hidden">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
                </div>

                {/* Info */}
                <div className="bg-secondary p-6 flex flex-col gap-3 border border-border border-t-0 group-hover:border-accent transition-colors duration-300">
                  <div className="w-8 h-px bg-accent" />
                  <h3 className="font-heading text-xl text-text-primary">{chef.name}</h3>
                  <p className="text-accent text-xs uppercase tracking-widest">{chef.role}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{chef.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-accent text-xs uppercase tracking-widest">Come Experience It</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-accent" />
              <div className="w-2 h-2 border border-accent rotate-45" />
              <div className="w-8 h-px bg-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-text-dark max-w-2xl leading-tight">
              The Story is Best Told at the Table
            </h2>
            <p className="text-text-dark/60 max-w-lg leading-relaxed">
              Words can only say so much. Come to Oríta and let the food speak for itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                to="/reservations"
                className="bg-accent text-primary px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent-light transition-colors duration-300"
              >
                Reserve a Table
              </Link>
              <Link
                to="/menu"
                className="border border-text-dark text-text-dark px-8 py-3 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-300"
              >
                View Our Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default About