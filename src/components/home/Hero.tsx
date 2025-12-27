import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import FloatingShapes from '@/components/ui/FloatingShapes';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Siddha medicine and natural healing elements"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Floating Organic Shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 container-luxury pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivory/10 backdrop-blur-sm border border-ivory/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-ivory/90 text-sm font-medium">
              Traditional Siddha & Varma Therapy
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-ivory leading-tight mb-6"
          >
            Natural Healing.
            <br />
            <span className="text-gold">Timeless Siddha Wisdom.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Experience the ancient art of Siddha medicine and Varma therapy at 
            Maharishi Siddha Clinic. Discover natural solutions for your health concerns.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group relative overflow-hidden px-8 py-4 rounded-full bg-gold text-primary font-semibold tracking-wide transition-all duration-300 hover:shadow-gold-glow hover:scale-[1.02] flex items-center gap-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-gold-light/30 to-gold-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
            <Link
              to="/treatments"
              className="px-8 py-4 rounded-full border-2 border-ivory/30 text-ivory font-medium tracking-wide transition-all duration-300 hover:bg-ivory/10 hover:border-ivory/50 flex items-center gap-2"
            >
              <span>Explore Treatments</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 pt-8 border-t border-ivory/10"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-gold">25+</p>
                <p className="text-ivory/60 text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-gold">10K+</p>
                <p className="text-ivory/60 text-sm mt-1">Patients Healed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-gold">100%</p>
                <p className="text-ivory/60 text-sm mt-1">Natural Treatments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-ivory/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-ivory/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
