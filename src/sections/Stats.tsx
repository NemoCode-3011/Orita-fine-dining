import { motion } from "motion/react"

const stats = [
  { value: "500+", label: "Tables Served" },
  { value: "4.9", label: "Guest Rating" },
  { value: "12", label: "Expert Chefs" },
  { value: "3", label: "Awards Won" },
]

const Stats = () => {
  return (
    <section className="bg-surface border-y border-accent/20 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center py-8 px-4 border-r border-accent/20 last:border-r-0 gap-2"
            >
              <span className="font-heading text-4xl md:text-5xl text-accent">
                {stat.value}
              </span>
              <span className="text-text-dark text-xs uppercase tracking-widest text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats