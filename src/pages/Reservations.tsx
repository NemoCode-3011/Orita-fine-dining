import { useState } from "react"
import { motion } from "motion/react"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import reservationHero from "../assets/Gal1.jpg"

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
    "10:00 PM", "10:30 PM",
  ]

  const inputClass = "w-full bg-secondary border border-border text-text-primary placeholder:text-text-muted px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300"

  return (
    <div className="bg-primary">

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={reservationHero}
          alt="Reserve a Table"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-xs uppercase tracking-widest"
          >
            Book Your Experience
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
            className="font-heading text-5xl md:text-7xl text-text-primary"
          >
            Reserve a Table
          </motion.h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-accent text-xs uppercase tracking-widest mb-4">Make a Booking</p>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-accent" />
                <div className="w-2 h-2 border border-accent rotate-45" />
                <div className="w-8 h-px bg-accent" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-8">
                Your Table Awaits
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center text-center gap-6 py-16 border border-accent/30 px-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-accent" />
                    <div className="w-2 h-2 border border-accent rotate-45" />
                    <div className="w-8 h-px bg-accent" />
                  </div>
                  <h3 className="font-heading text-3xl text-accent">Reservation Received</h3>
                  <p className="text-text-muted leading-relaxed max-w-sm">
                    Thank you, {formData.name}. We have received your reservation request and will confirm your booking via email within 2 hours.
                  </p>
                  <p className="text-accent/60 text-xs uppercase tracking-widest italic font-heading">
                    "Oríta meta ni'bi ipade awon ona"
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "", requests: "" }) }}
                    className="border border-accent text-accent px-6 py-3 text-sm uppercase tracking-widest hover:bg-accent hover:text-primary transition-colors duration-300"
                  >
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-text-muted text-xs uppercase tracking-widest">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-text-muted text-xs uppercase tracking-widest">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-text-muted text-xs uppercase tracking-widest">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Date, Time, Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-text-muted text-xs uppercase tracking-widest">Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-text-muted text-xs uppercase tracking-widest">Time *</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-text-muted text-xs uppercase tracking-widest">Guests *</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">No. of guests</option>
                        {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                        ))}
                        <option value="10+">10+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Special requests */}
                  <div className="flex flex-col gap-2">
                    <label className="text-text-muted text-xs uppercase tracking-widest">Special Requests</label>
                    <textarea
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder="Dietary requirements, allergies, special occasions..."
                      rows={4}
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-accent text-primary px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent-light transition-colors duration-300 mt-2"
                  >
                    Request Reservation
                  </button>

                  <p className="text-text-muted text-xs text-center">
                    We will confirm your booking via email within 2 hours. For immediate assistance, call us on +234 801 234 5678.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Right — Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div>
                <p className="text-accent text-xs uppercase tracking-widest mb-4">Find Us</p>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-accent" />
                  <div className="w-2 h-2 border border-accent rotate-45" />
                  <div className="w-8 h-px bg-accent" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-8">
                  Contact & Location
                </h2>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-text-primary text-sm font-semibold mb-1">Address</p>
                    <p className="text-text-muted text-sm">12 Adeola Odeku Street, Victoria Island, Lagos, Nigeria</p>
                    
                      < a href="https://maps.google.com/?q=Victoria+Island+Lagos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-xs uppercase tracking-widest hover:text-accent-light transition-colors mt-2 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-accent w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-text-primary text-sm font-semibold mb-1">Opening Hours</p>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between gap-8">
                        <span className="text-text-muted text-sm">Monday – Friday</span>
                        <span className="text-text-muted text-sm">12PM – 11PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-text-muted text-sm">Saturday</span>
                        <span className="text-text-muted text-sm">11AM – 11PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-text-muted text-sm">Sunday</span>
                        <span className="text-text-muted text-sm">11AM – 10PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-accent w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-text-primary text-sm font-semibold mb-1">Phone</p>
                    <p className="text-text-muted text-sm">+234 801 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-accent w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-text-primary text-sm font-semibold mb-1">Email</p>
                    <p className="text-text-muted text-sm">hello@orita.ng</p>
                  </div>
                </div>
              </div>

              {/* Google Maps iframe */}
              <div className="w-full h-75 border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286165413!2d3.4213!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzE2LjciRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Yoruba quote */}
              <div className="border-l-2 border-accent pl-6 py-2">
                <p className="font-heading text-lg text-accent italic">
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

    </div>
  )
}

export default Reservations