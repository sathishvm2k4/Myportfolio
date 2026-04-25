import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <motion.p
        className="hero-tag"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        PORTFOLIO
      </motion.p>

      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        SATISH V M
      </motion.h1>

      <p className="hero-subtitle">
        Java developer  
      </p>
    </section>
  );
}