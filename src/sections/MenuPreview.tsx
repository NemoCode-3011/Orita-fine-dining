import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Globe, Sparkles, Wine } from "lucide-react";

const categories = [
  {
    id: 1,
    icon: UtensilsCrossed,
    name: "Nigerian",
    description:
      "Authentic soups, grills, rice dishes and small chops rooted in Nigerian culinary tradition.",
    dishes: ["Egusi Soup", "Party Jollof", "Suya", "Nkwobi", "Peppered Snail"],
    href: "/menu#nigerian",
  },
  {
    id: 2,
    icon: Globe,
    name: "Continental",
    description:
      "Classic European favourites from starters to mains, prepared with precision and care.",
    dishes: [
      "Fish & Chips",
      "Ribeye Steak",
      "Grilled Salmon",
      "Pasta",
      "Lamb Chops",
    ],
    href: "/menu#continental",
  },
  {
    id: 3,
    icon: Sparkles,
    name: "Fusion",
    description:
      "Where our two worlds collide — chef's crossroads creations you won't find anywhere else.",
    dishes: [
      "Jollof Risotto",
      "Suya Rack of Lamb",
      "Egusi Velouté",
      "Asun Tacos",
    ],
    href: "/menu#fusion",
  },
  {
    id: 4,
    icon: Wine,
    name: "Drinks & Desserts",
    description:
      "From zobo sorbet to crème brûlée, Chapman to cocktails — the perfect finish to your experience.",
    dishes: [
      "Zobo Sorbet",
      "Crème Brûlée",
      "Chapman",
      "Palm Wine",
      "Cocktails",
    ],
    href: "/menu#drinks",
  },
];

const MenuPreview = () => {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <p className="text-accent text-xs uppercase tracking-widest">
            What We Serve
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-accent" />
            <div className="w-2 h-2 border border-accent rotate-45" />
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-text-dark">
            Explore Our Menu
          </h2>
          <p className="text-text-dark/60 max-w-lg leading-relaxed">
            Two culinary worlds, one extraordinary menu. Something for every
            palate, every occasion.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                to={category.href}
                className="group flex flex-col gap-5 p-8 border border-border bg-primary hover:border-accent transition-all duration-300 h-full"
              >
                {/* Icon */}
                <category.icon className="text-accent w-8 h-8" />

                {/* Name */}
                <h3 className="font-heading text-2xl text-text-primary group-hover:text-accent transition-colors duration-300">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {category.description}
                </p>

                {/* Sample dishes */}
                <ul className="flex flex-col gap-1">
                  {category.dishes.map((dish) => (
                    <li
                      key={dish}
                      className="text-text-muted text-xs flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full inline-block" />
                      {dish}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <span className="text-accent text-sm uppercase tracking-widest group-hover:gap-3 flex items-center gap-2 transition-all duration-300">
                  View Menu <span>→</span>
                </span>
              </Link>
            </motion.div>
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
            className="bg-accent text-primary px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent-light transition-colors duration-300"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
