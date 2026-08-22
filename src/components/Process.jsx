import { motion } from "framer-motion";
import { processSteps } from "../data/process";
import "./Process.css";

function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="process-header">
          <span className="section-label">How I Work</span>
          <h2>A Process Built on Clarity.</h2>
        </div>

        <div className="process-timeline">
          <motion.div
            className="process-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <motion.div
                className="process-step"
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;