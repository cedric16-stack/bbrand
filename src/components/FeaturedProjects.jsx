import { motion } from "framer-motion";
import { projects } from "../data/projects";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  return (
    <section className="featured-projects section" id="projects">
      <div className="container">
        <div className="fp-header">
          <span className="section-label">Featured Work</span>
          <h2>Case Studies in Brand Building.</h2>
        </div>

        <div className="fp-list">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.div
                className={`fp-item ${reversed ? "fp-item-reversed" : ""}`}
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <div className="fp-visual">
  <img
    src={project.image}
    alt={project.title}
    className="fp-image"
  />
</div>
                <div className="fp-text">
                  <span className="fp-category">
                    {project.category} — {project.year}
                  </span>
                  <h3 className="fp-title">{project.title}</h3>

                  <div className="fp-block">
                    <h4>Brand Story</h4>
                    <p>{project.story}</p>
                  </div>

                  <div className="fp-block">
                    <h4>Design Challenge</h4>
                    <p>{project.challenge}</p>
                  </div>

                  <div className="fp-block">
                    <h4>Creative Solution</h4>
                    <p>{project.solution}</p>
                  </div>

                  <div className="fp-block">
                    <h4>Outcome</h4>
                    <p>{project.outcome}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;