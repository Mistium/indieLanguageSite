import { motion } from "framer-motion";
import { languages } from "../data/languagesData";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1>🌐 Indie Language Showcase</h1>
      <div>
        {languages.map((lang) => (
          <div key={lang.slug} className="language-card">
            <img src={lang.logo} alt={lang.name} className="language-logo" />
            <h2>{lang.name}</h2>
            <p>{lang.tagline}</p>
            <p>{lang.description}</p>
            <Link to={`/language/${lang.slug}`}>View Language →</Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
