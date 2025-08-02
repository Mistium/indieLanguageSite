import Navbar from "../components/Navbar";
import "./About.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <h1>Welcome to the Indie Language Association</h1>
        <p>
          The <strong>Indie Language Association</strong> is a collaborative initiative of developers
          passionate about creating unique and innovative programming languages. Our goal is to support
          experimentation, learning, and community-driven language development.
        </p>

        <p>
          Whether you're exploring <strong>X3</strong> for its minimalistic syntax, building projects with
          <strong> W++</strong>, or trying out <strong>ROS</strong>, we're excited to share tools that inspire
          curiosity and creativity in programming.
        </p>

        <p>
          This platform was created to give a spotlight to indie languages — crafted not for market share,
          but for ideas. We welcome you to browse, experiment, contribute, and be part of a growing ecosystem
          of alternative language design.
        </p>

        <p>
          Thank you for visiting, and we hope you find a language that speaks to you.
        </p>
      </div>
    </>
  );
}
