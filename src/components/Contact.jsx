import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend later — for now this just confirms the form works
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact-inner">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label">Get In Touch</span>
          <h2>Let's Build Something Memorable.</h2>
          <p className="contact-subtext">
            Have a brand that needs direction, or an idea that needs shape?
            Reach out — I'd love to hear about it.
          </p>

          <div className="contact-details">
            <a href="mailto:byamolivier@gmail.com" className="contact-detail-item">
              <HiOutlineMail size={20} />
              <span>byamolivier@gmail.com</span>
            </a>
            <a href="tel:+250781406400" className="contact-detail-item">
              <HiOutlinePhone size={20} />
              <span>+250 781 406 400</span>
            </a>
            <div className="contact-detail-item">
              <HiOutlineLocationMarker size={20} />
              <span>
                KN 76 St, Opposite Inkuru Nziza Church, Nyarugenge, Kigali
              </span>
            </div>
          </div>

          <div className="contact-socials">
            
            <a
              href="https://www.instagram.com/b_brand_ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {submitted ? (
            <div className="contact-success">
              <h3>Message Sent.</h3>
              <p>Thanks for reaching out — I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;