import Navbar from "../components/Navbar";
import "./About.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <h1>👋 Hi, Internet!</h1>
        <p>
          We are the <strong>Indie Language Association</strong> — a chaotic collection of indie language devs.
          Some of us are small. Some of us ship 200MB Electron installers for a command-line tool
          (yes, <em>looking at you</em>, W++ 👀). But hey, it works and it’s shiny.
        </p>

        <p>
          So come along! Browse our languages, download <strong>X3</strong>, <strong>W++</strong>,
          <strong> ROS</strong>, or whichever one speaks to your soul, and just enjoy the ride.
        </p>

        <p>
          We built this for fun, for learning, and maybe — just maybe — to overthrow HTML as a concept.
          (Joking... mostly.)
        </p>
      </div>
    </>
  );
}

