import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary">

      {/* Top copper line */}
      <div className="w-full h-px bg-accent/30" />

      {/* Big Oríta */}
      <div className="flex flex-col items-center py-16 gap-4">
        <h2 className="font-heading text-[120px] md:text-[180px] leading-none text-accent/20 tracking-widest select-none">
          Oríta
        </h2>
        <div className="flex items-center gap-4 -mt-8">
          <div className="w-12 h-px bg-accent/50" />
          <span className="text-text-muted text-xs uppercase tracking-[0.4em]">Fine Dining</span>
          <div className="w-12 h-px bg-accent/50" />
        </div>
        {/* Yoruba quote */}
        <p className="text-accent/40 text-sm italic font-heading mt-2">
          "Oríta meta ni'bi ipade awon ona."
        </p>
      </div>

      {/* Middle copper line */}
      <div className="w-full h-px bg-accent/30" />

      {/* 4 columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — About */}
          <div className="flex flex-col gap-5">
            <h3 className="text-text-primary font-heading text-xl">About Oríta</h3>
            <div className="w-8 h-px bg-accent" />
            <p className="text-text-muted text-sm leading-relaxed">
              Where Nigerian heritage meets continental refinement. An experience crafted for those who appreciate the art of dining.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-text-muted hover:text-accent transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div className="flex flex-col gap-5">
            <h3 className="text-text-primary font-heading text-xl">Navigate</h3>
            <div className="w-8 h-px bg-accent" />
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Reservations", path: "/reservations" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-muted text-sm hover:text-accent transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-text-primary font-heading text-xl">Contact</h3>
            <div className="w-8 h-px bg-accent" />
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-text-muted text-sm">12 Adeola Odeku Street, Victoria Island, Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent w-4 h-4 shrink-0" />
                <span className="text-text-muted text-sm">+234 801 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent w-4 h-4 shrink-0" />
                <span className="text-text-muted text-sm">hello@orita.ng</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-accent w-4 h-4 shrink-0" />
                <span className="text-text-muted text-sm">Open Daily: 12PM – 11PM</span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Reserve */}
          <div className="flex flex-col gap-5">
            <h3 className="text-text-primary font-heading text-xl">Reserve a Table</h3>
            <div className="w-8 h-px bg-accent" />
            <p className="text-text-muted text-sm leading-relaxed">
              Ready for an extraordinary dining experience? Book your table today.
            </p>
            <Link
              to="/reservations"
              className="bg-accent text-primary px-6 py-3 text-sm uppercase tracking-widest hover:bg-accent-light transition-colors duration-300 text-center"
            >
              Book Now
            </Link>
            
              < a href="https://maps.google.com/?q=Victoria+Island+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/70 text-xs uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-2"
            >
              <MapPin className="w-3 h-3" />
              View on Google Maps →
            </a>
          </div>

        </div>
      </div>

      {/* Bottom copper line */}
      <div className="w-full h-px bg-accent/30" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Oríta Fine Dining. All rights reserved.
        </p>
        <p className="text-accent/50 text-xs uppercase tracking-[0.3em] font-heading italic">
          Two Worlds. One Table.
        </p>
      </div>

    </footer>
  )
}

export default Footer