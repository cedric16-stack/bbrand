import { motion } from "framer-motion";
import bbrandLogoFull from "../assets/images/bbrand-logo-full.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated background shapes */}
      <div className="hero-bg">
        <motion.div
          className="hero-glow hero-glow-1"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-glow hero-glow-2"
          animate={{
            x: [0, -50, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
       <motion.img
  src={bbrandLogoFull}
  alt="BBRAND - Go Far With Branding"
  className="hero-logo-img"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
/>

        <motion.span
          className="section-label hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Brand Identity &amp; Graphic Design
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          BBRAND
        </motion.h1>

        <motion.p
          className="hero-statement"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        >
          GO FAR WITH BRANDING
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <a href="#projects" className="btn btn-primary">
            View Portfolio
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;