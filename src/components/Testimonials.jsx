import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/testimonials";
import "./Testimonials.css";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container testimonials-inner">
        <span className="section-label">Client Words</span>
        <h2>Trusted By Brands I've Helped Grow.</h2>

        <div className="testimonials-carousel">
          <FaQuoteLeft className="testimonials-quote-icon" />
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              className="testimonial-slide"
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="testimonial-review">{current.review}</p>

              <div className="testimonial-author">
                <div className="testimonial-photo-placeholder">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <p className="testimonial-name">{current.name}</p>
                  <p className="testimonial-company">{current.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials-controls">
            <button onClick={prev} aria-label="Previous testimonial">
              <HiChevronLeft size={22} />
            </button>

            <div className="testimonials-dots">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  className={`testimonials-dot ${
                    i === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={next} aria-label="Next testimonial">
              <HiChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;