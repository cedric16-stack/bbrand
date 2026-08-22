import { motion } from "framer-motion";
import aboutPhoto from "../assets/images/about-photo.jpg";
import "./About.css";

const skills = [
  "Brand Strategy",
  "Logo Design",
  "Visual Identity",
  "Typography",
  "Print Design",
  "Packaging",
  "Art Direction",
  "Social Media Design",
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-inner">
        {/* Left: photo placeholder */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
  src={aboutPhoto}
  alt="Designer and founder of BBRAND"
  className="about-photo"
/>
          <div className="about-experience-badge">
            <span className="about-experience-number">5+</span>
            <span className="about-experience-label">
              Years of Experience
            </span>
          </div>
        </motion.div>

        {/* Right: text content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="section-label">About</span>
          <h2>
            A Strategic Creative <br /> Behind Every Brand.
          </h2>

          <p className="about-intro">
            I'm the designer behind BBRAND — a design, print, and branding
            studio based in Kigali. I help businesses translate their vision
            into identities that are clear, confident, and built to last,
            combining strategic thinking with meticulous visual craft.
          </p>

          <p className="about-philosophy">
            <strong>My philosophy:</strong> great design isn't decoration —
            it's decision-making. Every color, shape, and typeface should
            earn its place by serving the brand's story and the business
            behind it.
          </p>

          <div className="about-skills">
            {skills.map((skill) => (
              <span key={skill} className="about-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;