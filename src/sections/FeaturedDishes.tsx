import { motion } from "motion/react"
import { Link } from "react-router-dom"
import food1 from "../assets/food13.jpg"
import food2 from "../assets/food36.jpg"
import food3 from "../assets/food18.jpg"

const dishes = [
  {
    id: 1,
    image: food1,
    category: "Signature Nigerian",
    name: "Oríta Jollof Risotto",
    description: "Slow-cooked jollof rice reimagined with Italian risotto technique, finished with truffle oil and parmesan.",
    price: "₦18,500",
  },
  {
    id: 2,
    image: food2,
    category: "Continental Fusion",
    name: "Suya Rack of Lamb",
    description: "French-trimmed rack of lamb marinated in traditional suya spice, served with caramelised plantain purée.",
    price: "₦32,000",
  },
  {
    id: 3,
    image: food3,
    category: "Chef's Special",
    name: "Egusi Velouté",
    description: "Our egusi soup, rich, earthy, deeply spiced, finished with a touch of cream and served with freshly baked artisan bread for dipping.",
    price: "₦24,500",
  },
]

const FeaturedDishes = () => {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <p className="text-accent text-xs uppercase tracking-widest">Our Kitchen</p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-accent" />
            <div className="w-2 h-2 border border-accent rotate-45" />
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-text-primary">
            Signature Dishes
          </h2>
          <p className="text-text-muted max-w-lg leading-relaxed">
            Each dish tells a story of two worlds — crafted with Nigerian soul and continental precision.
          </p>
        </motion.div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-112.5 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-text-primary text-sm uppercase tracking-widest border border-text-primary px-6 py-3 hover:border-accent hover:text-accent transition-colors">
                    View Dish
                  </span>
                </div>
                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-accent/30 px-3 py-1">
                  <p className="text-accent text-xs uppercase tracking-widest">{dish.category}</p>
                </div>
              </div>

              {/* Info */}
              <div className="bg-secondary p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl text-text-primary">{dish.name}</h3>
                  <span className="text-accent font-semibold">{dish.price}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{dish.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/menu"
            className="border border-accent text-accent px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent hover:text-primary transition-colors duration-300"
          >
            Explore Full Menu
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default FeaturedDishes