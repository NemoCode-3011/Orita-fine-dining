import { motion } from "motion/react"
import { RiDoubleQuotesL } from "react-icons/ri";
const testimonials = [
  {
    id: 1,
    name: "Adaeze O.",
    location: "Victoria Island, Lagos",
    quote: "Oríta is unlike anything I've experienced in Lagos. The Jollof Risotto alone is worth the trip — it's familiar yet completely unexpected. The ambiance, the service, the food — everything is flawless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chidi E.",
    location: "Ikoyi, Lagos",
    quote: "I brought my international clients here and they were blown away. The Suya Rack of Lamb had them asking questions all night. Oríta represents Nigeria at its finest — I couldn't be prouder.",
    rating: 5,
  },
  {
    id: 3,
    name: "Funmi A.",
    location: "Lekki, Lagos",
    quote: "The Egusi Velouté brought tears to my eyes — it tasted exactly like my grandmother's recipe but presented in a way I've never seen before. This is what Nigerian fine dining should look like.",
    rating: 5,
  },
]

const Testimonials = () => {
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
          <p className="text-accent text-xs uppercase tracking-widest">Guest Experiences</p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-accent" />
            <div className="w-2 h-2 border border-accent rotate-45" />
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-text-dark">
            What Our Guests Say
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-8 bg-primary border border-border hover:border-accent transition-colors duration-300"
            >
              {/* Quote mark */}
              <span><RiDoubleQuotesL className="text-accent"/></span>

              {/* Quote */}
              <p className="text-text-muted text-sm leading-relaxed flex-1">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-accent" />
                <div className="w-1.5 h-1.5 border border-accent rotate-45" />
              </div>

              {/* Name and location */}
              <div className="flex flex-col gap-1">
                <h3 className="text-text-primary font-semibold text-sm">
                  {testimonial.name}
                </h3>
                <p className="text-text-muted text-xs">{testimonial.location}</p>
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-sm">★</span>
                ))}
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials