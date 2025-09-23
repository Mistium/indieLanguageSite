import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ same as LanguagePage

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const codeStyle: React.CSSProperties = {
  background: "#1e1e1e",
  color: "#00ff88",
  padding: "1rem",
  borderRadius: "6px",
  overflowX: "auto",
  margin: "0.5rem 0",
  fontSize: "0.9rem",
  lineHeight: "1.4",
};

const Submit: React.FC = () => {
  return (
    <>
      {/* ✅ Navbar always outside of motion.main for consistency */}
      <Navbar />

      <motion.main
        className="container submit-card" // container + card styling
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h1 variants={itemVariants}>
          🌐 Add Your Language to{" "}
          <a
            href="https://indielangs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            indielangs.org
          </a>
        </motion.h1>

        <motion.p variants={itemVariants}>
          Hey there, indie language creator! 👋 <br />
          Thanks for choosing to showcase your language on{" "}
          <strong>indielangs.org</strong> — the community hub for experimental,
          chaotic, powerful, and fun programming languages.
        </motion.p>

        <motion.p variants={itemVariants}>
          Follow this quick guide to get your language listed! 💻🚀
        </motion.p>

        {/* Step 1 */}
<motion.h2 variants={itemVariants}>🛠️ Step 1: Fork the Repository</motion.h2>
<motion.p variants={itemVariants}>
  Go to{" "}
  <a
    href="https://github.com/IndieLangsAssociation/indieLanguageSite"
    target="_blank"
    rel="noopener noreferrer"
  >
    the official indieLanguageSite repository on GitHub
  </a>{" "}
  and click the <code>Fork</code> button in the top-right corner to create your
  own copy.
</motion.p>
<motion.p variants={itemVariants}>
  Once forked, clone your copy locally:
</motion.p>
<motion.pre style={codeStyle} variants={itemVariants}>
  {`git clone https://github.com/<your-username>/indieLanguageSite
cd indieLanguageSite`}
</motion.pre>


        {/* Step 2 */}
        <motion.h2 variants={itemVariants}>📥 Step 2: Install Dependencies</motion.h2>
        <motion.pre style={codeStyle} variants={itemVariants}>
          {`npm ci`}
        </motion.pre>

        {/* Step 3 */}
        <motion.h2 variants={itemVariants}>📦 Step 3: Add Your Language Metadata</motion.h2>
        <motion.p variants={itemVariants}>Open the file:</motion.p>
        <motion.pre style={codeStyle} variants={itemVariants}>
          {`src/data/languagesData.ts`}
        </motion.pre>
        <motion.p variants={itemVariants}>Then add a new object like this:</motion.p>
        <motion.pre style={codeStyle} variants={itemVariants}>
          {`{
  name: "ExampleLang", // Display name (required)
  slug: "examplelang", // URL-friendly identifier (required)
  tagline: "this is an example", // Short and catchy (required)
  logo: "/logos/examplelang.png", // Path to logo file (required)
  description: "this is an example to show how to add a language", // Required
  website: "https://example.com", // Optional but recommended
  discord: "https://discord.gg/example", // Optional
  github: "https://github.com/example/examplelang", // Optional
},`}
        </motion.pre>

        <motion.p variants={itemVariants}>
          ✅ <strong>Required Fields:</strong> <code>name</code>, <code>slug</code>,{" "}
          <code>tagline</code>, <code>logo</code>, <code>description</code> <br />
          ℹ️ <em>Optional Fields:</em> <code>website</code>, <code>discord</code>,{" "}
          <code>github</code>
        </motion.p>

        {/* Step 4 */}
        <motion.h2 variants={itemVariants}>🖼️ Step 4: Add Your Logo</motion.h2>
        <motion.pre style={codeStyle} variants={itemVariants}>
          {`public/logos/`}
        </motion.pre>
        <motion.p variants={itemVariants}>
          Supported formats: <code>.webp</code> (preferred), <code>.png</code>,{" "}
          <code>.jpg</code>, etc. <br /> 🖼️ <strong>Tip:</strong> Use{" "}
          <code>.webp</code> for smaller file size and better SEO!
        </motion.p>

        {/* Step 5 */}
        <motion.h2 variants={itemVariants}>🧪 Step 5: Test</motion.h2>
        <motion.pre style={codeStyle} variants={itemVariants}>
          {`npm run dev`}
        </motion.pre>

        {/* Step 6 */}
        <motion.h2 variants={itemVariants}>📤 Step 6: Submit a Pull Request</motion.h2>
        <motion.p variants={itemVariants}>
          Once you've added your language, create a Pull Request (PR).  
          We’ll review it and either approve ✅ or request changes 🔁 with helpful feedback.
        </motion.p>

{/* Ultra Dummy Guide (Collapsible) */}
<motion.div variants={itemVariants}>
  <details className="dummy-guide">
    <summary style={{ cursor: "pointer", fontWeight: "bold", fontSize: "1.2rem" }}>
      🍼 Ultra Dummy Guide (for beginners to GitHub)
    </summary>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ marginTop: "1rem" }}
    >
      <p>
        Hello! 👋 If you’re just starting out with Git and GitHub, don’t worry —
        here are the baby steps to get your language onto{" "}
        <strong>indielangs.org</strong>.
      </p>

      <ol style={{ lineHeight: "1.8" }}>
        <li>
          Go to the official repo:{" "}
          <a
            href="https://github.com/IndieLangsAssociation/indieLanguageSite"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/IndieLangsAssociation/indieLanguageSite
          </a>{" "}
          <br />
          👉 If you don’t have a GitHub account yet, watch this quick tutorial:{" "}
          <a
            href="https://www.youtube.com/watch?v=Gn3w1UvTx0A"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to sign up for GitHub
          </a>.
        </li>

        <li>
          Click the <strong>Fork</strong> button in the top-right corner. This
          creates your personal copy of the project.
        </li>

        <li>
          In your fork, open the folders: <code>src</code> → <code>data</code> →
          and then click on <code>languagesData.ts</code>.
        </li>

        <li>
          Click the ✏️ <strong>pencil button</strong> in the top-right to edit
          the file directly on GitHub.
        </li>

        <li>
          Scroll to the bottom of the <code>languages</code> array.  
          Add a comma <code>,</code> and then paste your entry, for example:
          <pre style={codeStyle}>
{`{
  name: "ScratchLang",
  slug: "scratchlang",
  tagline: "A language built in Scratch 🐱",
  logo: "/logos/scratchlang.png",
  description: "Yes, this language was made in Scratch. Deal with it."
},`}
          </pre>
          You can also add optional fields like <code>website</code>,{" "}
          <code>github</code>, and <code>discord</code> if you have them.
        </li>

        <li>
          Scroll down and click the green{" "}
          <strong>Commit changes</strong> button to save.
        </li>

        <li>
          Back in the main repo, go to the{" "}
          <strong>Pull Requests</strong> tab → click{" "}
          <strong>New Pull Request</strong>.  
          Select your fork and submit it.
        </li>

        <li>
          Wait for approval ✅ or feedback 🔁. That’s it! 🎉
        </li>
      </ol>

      <p>
        Congratulations — you’ve just contributed to{" "}
        <strong>indielangs.org</strong> without using the terminal! 🚀
      </p>
    </motion.div>
  </details>
</motion.div>



        {/* Questions */}
        <motion.h2 variants={itemVariants}>💬 Questions?</motion.h2>
        <motion.p variants={itemVariants}>
          Feel free to{" "}
          <a
            href="https://github.com/IndieLangsAssociation/indieLanguageSite/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            open an issue
          </a>{" "}
          or join our{" "}
          <a href="https://discord.gg/UvMZrQaMZ2" target="_blank" rel="noopener noreferrer">
            Discord
          </a>{" "}
          if you’re unsure about anything!
        </motion.p>

        <motion.div style={{ marginTop: "2rem" }} variants={itemVariants}>
          <Link to="/">← Back to Home</Link>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Submit;
