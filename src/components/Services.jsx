import { motion } from "framer-motion";
import { services } from "../data/services";
import "./Services.css";

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">What I Do</span>
          <h2>Services Built for Brands That Mean Business.</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="service-icon">
                  <Icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;