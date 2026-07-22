import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import LoadingScreen from "./components/LoadingScreen";
import Scrolltotop from "./components/Scrolltotop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <Scrolltotop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
