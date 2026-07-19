import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/reservations" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="bg-primary border-b border-accent/50 py-2 text-center">
        <p className="text-accent text-xs uppercase tracking-widest">
          Now accepting reservations — Experience Two Worlds, One Table
        </p>
      </div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-primary shadow-lg" : "bg-black/40 backdrop-blur-md"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="font-heading text-3xl text-accent tracking-wide">
              Oríta
            </span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-accent/50" />
              <span className="text-text-muted text-xs uppercase tracking-widest">
                Fine Dining
              </span>
              <div className="w-8 h-px bg-accent/50" />
            </div>
          </Link>
          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="relative text-text-muted hover:text-text-primary transition-colors text-sm uppercase tracking-widest group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              to="/reservations"
              className="hidden md:block bg-accent/10 border border-accent text-accent px-5 py-2 text-sm uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Reserve a Table
            </Link>
            <button
              className="md:hidden text-text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <ul
          className={`${isOpen ? "flex" : "hidden"} flex-col bg-primary border-t border-accent px-8 py-6 gap-6`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-primary transition-colors text-sm uppercase tracking-widest"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/reservations"
              onClick={() => setIsOpen(false)}
              className="border border-accent text-accent px-6 py-3 text-sm uppercase tracking-widest hover:bg-accent hover:text-primary transition-colors block text-center"
            >
              Reserve a Table
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
