import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import LanguagePage from "./pages/LanguagePage";
import About from "./pages/About"; 
import UlangPage from "./pages/Ulang"; 
import Submit from "./pages/Submit"; // 🆕 import the Submit page
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/language/:slug" element={<LanguagePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ulang" element={<UlangPage />} />
        <Route path="/submit" element={<Submit />} /> {/* 🆕 Submit route */}
      </Routes>
    </AnimatePresence>
  );
}
