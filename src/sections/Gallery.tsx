import { useState, useRef } from "react";
import { motion } from "motion/react";
import gallery1 from "../assets/gal10.jpg";
import gallery2 from "../assets/food7.jpg";
import gallery3 from "../assets/about1.jpg";
import gallery4 from "../assets/chef1.jpg";
import gallery5 from "../assets/sp2.jpg";
import gallery6 from "../assets/food8.jpg";
import gallery7 from "../assets/Gal3.jpg";
import gallery8 from "../assets/bar1.jpg";
import gallery9 from "../assets/food26.jpg";
import gallery10 from "../assets/people2.jpg";
import gallery11 from "../assets/food5.jpg";
import gallery12 from "../assets/food6.jpg";
import gallery13 from "../assets/food25.jpg";
import gallery14 from "../assets/food2.jpg";
import gallery15 from "../assets/food40.jpg";
import gallery16 from "../assets/food41.jpg";
import gallery17 from "../assets/food42.jpg";
import gallery18 from "../assets/drink1.jpg";
import gallery19 from "../assets/drinks10.jpg";
import gallery20 from "../assets/food45.jpg";

const images = [
  { id: 1, src: gallery1, alt: "Oríta dining experience" },
  { id: 2, src: gallery2, alt: "Signature dish" },
  { id: 3, src: gallery3, alt: "Restaurant interior" },
  { id: 4, src: gallery4, alt: "Chef at work" },
  { id: 5, src: gallery5, alt: "Table setting" },
  { id: 6, src: gallery6, alt: "Nigerian cuisine" },
  { id: 7, src: gallery7, alt: "Fine dining" },
  { id: 8, src: gallery8, alt: "Candlelit ambiance" },
  { id: 9, src: gallery9, alt: "Continental dish" },
  { id: 10, src: gallery10, alt: "Oríta experience" },
  { id: 11, src: gallery11, alt: "Oríta experience" },
  { id: 12, src: gallery12, alt: "Oríta experience" },
  { id: 13, src: gallery13, alt: "Oríta experience" },
  { id: 14, src: gallery14, alt: "Oríta experience" },
  { id: 15, src: gallery15, alt: "Oríta experience" },
  { id: 16, src: gallery16, alt: "Oríta experience" },
  { id: 17, src: gallery17, alt: "Oríta experience" },
  { id: 18, src: gallery18, alt: "Oríta experience" },
  { id: 19, src: gallery19, alt: "Oríta experience" },
  { id: 20, src: gallery20, alt: "Oríta experience" },
];

const Gallery = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  return (
    <section className="bg-primary py-24 overflow-hidden">
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
            The Experience
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-accent" />
            <div className="w-2 h-2 border border-accent rotate-45" />
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-text-primary">
            A Glimpse of Oríta
          </h2>
          <p className="text-text-muted max-w-lg leading-relaxed">
            Every corner of Oríta is designed to transport you — from the warmth
            of the lighting to the artistry on your plate.
          </p>
        </motion.div>
      </div>

      {/* Full width gallery — outside container for edge to edge */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 px-6 md:px-8 cursor-grab active:cursor-grabbing scrollbar-none"
        style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
        onMouseDown={(e) => {
          setIsDragging(true);
          setStartX(e.pageX - sliderRef.current!.offsetLeft);
          setScrollLeft(sliderRef.current!.scrollLeft);
        }}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (!isDragging) return;
          e.preventDefault();
          const x = e.pageX - sliderRef.current!.offsetLeft;
          const walk = (x - startX) * 2;
          sliderRef.current!.scrollLeft = scrollLeft - walk;
        }}
      >
        {images.map((image, index) => (
          <motion.article
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="min-w-[320px] md:min-w-100 h-125 shrink-0 overflow-hidden group relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              draggable={false}
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.article>
        ))}
      </div>

      {/* Arrows */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => {
              if (sliderRef.current) sliderRef.current.scrollLeft -= 420;
            }}
            className="w-10 h-10 rounded-full border border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-primary active:bg-accent active:text-primary transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => {
              if (sliderRef.current) sliderRef.current.scrollLeft += 420;
            }}
            className="w-10 h-10 rounded-full border border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-primary active:bg-accent active:text-primary transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
