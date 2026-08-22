import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../hooks/useTheme";
import bbrandIcon from "../assets/images/bbrand-icon.png";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo">
            <img src={bbrandIcon} alt="BBRAND logo" className="navbar-logo-img" />
            <span className="navbar-brand-name">BBRAND</span>
          </a>

          <nav className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
  className="theme-toggle"
  onClick={toggleTheme}
  aria-label="Toggle dark mode"
>
  {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
</button>
          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <HiX size={28} />
              
               <button
  className="theme-toggle theme-toggle-mobile"
  onClick={toggleTheme}
  aria-label="Toggle dark mode"
>
  {theme === "light" ? <HiMoon size={22} /> : <HiSun size={22} />}
</button>
            </button>
            <nav className="mobile-menu-links">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;