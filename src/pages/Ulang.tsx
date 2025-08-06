import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { languages } from "../data/languagesData";
import "./Ulang.css";

export default function UlangPage() {
  const supported = ["wpp", "x3", "ros"];
  const supportedLangs = languages.filter((l) => supported.includes(l.slug));

  return (
    <>
      <Navbar />
      <motion.main
        className="ulang-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h1>📦 Ulang – The Indie Language Package Manager</h1>

        <p>
          <strong>Ulang</strong> (short for <em>United Languages</em>) is a modern, cross-language package manager
          developed by the Indie Language Association. It provides a unified way to discover, install,
          and share packages across multiple indie programming languages.
        </p>

        <h2>🌍 Supported Languages</h2>
        <ul>
          {supportedLangs.map((lang) => (
            <li key={lang.slug}>
              <strong>{lang.name}</strong> – {lang.description}
            </li>
          ))}
        </ul>

        <p>
          The project is still under active development, with ongoing work on improving language compatibility,
          dependency resolution, and publishing workflows.
        </p>

        <div className="ulang-highlight-box">
          <h2>🔧 Why Ulang?</h2>
          <ul>
            <li>Unified interface across multiple languages</li>
            <li>CLI-first design with developer productivity in mind</li>
            <li>Lightweight and easily embeddable</li>
            <li>Built by and for language creators</li>
          </ul>
        </div>

        <p>
          Stay tuned as we continue expanding support and documentation. If you're building an indie language
          and want to integrate with Ulang, we’d love to hear from you!
        </p>
      </motion.main>
    </>
  );
}
