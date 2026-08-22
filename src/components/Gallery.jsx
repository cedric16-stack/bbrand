import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { galleryItems, categories } from "../data/gallery";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Portfolio</span>
          <h2>Explore the Full Collection.</h2>
        </div>

        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div className="gallery-grid" layout>
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
              >
                <img
  src={item.image}
  alt={item.title}
  className="gallery-item-placeholder"
/>
                <div className="gallery-item-overlay">
                  <span className="gallery-item-category">
                    {item.category}
                  </span>
                  <span className="gallery-item-title">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen preview */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="gallery-lightbox-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close preview"
            >
              <HiX size={28} />
            </button>
            <motion.div
              className="gallery-lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
  src={selectedItem.image}
  alt={selectedItem.title}
  className="gallery-lightbox-placeholder"
/>
              <div className="gallery-lightbox-info">
                <span className="gallery-item-category">
                  {selectedItem.category}
                </span>
                <h3>{selectedItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;