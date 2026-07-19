import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import AboutSnippet from "../sections/AboutSnippet";
import Stats from "../sections/Stats";
import FeaturedDishes from "../sections/FeaturedDishes";
import MenuPreview from "../sections/MenuPreview";
import Gallery from "../sections/Gallery";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero /> 
      <AboutSnippet />
      <Stats />
      <FeaturedDishes />
      <MenuPreview/>
      <Gallery /> 
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  );
};

export default Home;
