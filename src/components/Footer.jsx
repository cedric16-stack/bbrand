import bbrandIcon from "../assets/images/bbrand-icon.png";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <a href="#hero" className="footer-logo">
            <img src={bbrandIcon} alt="BBRAND logo" className="footer-logo-img" />
            <span className="footer-brand-name">BBRAND</span>
          </a>

          <nav className="footer-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            
            <a
              href="https://www.instagram.com/b_brand_ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} BBRAND. All rights reserved.</p>
          <p className="footer-tagline">Design · Print · Branding — Kigali</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;