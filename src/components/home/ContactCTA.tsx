import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const ContactCTA = () => {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground">
      <div className="container-luxury">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Get Started
              </span>
              <span className="w-8 h-px bg-gold" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-ivory">
              Begin Your Healing Journey
            </h2>
            <p className="text-ivory/80 text-lg mb-10">
              Take the first step towards natural wellness. Book a consultation 
              with Dr. Vivekanandan and discover the power of Siddha medicine.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* Phone */}
            <a
              href="tel:+919443084418"
              className="group p-6 rounded-2xl bg-ivory/10 backdrop-blur-sm border border-ivory/20 transition-all duration-300 hover:bg-ivory/20 hover:border-gold/30"
            >
              <Phone className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-serif text-xl font-semibold text-ivory mb-1">Call Us</p>
              <p className="text-ivory/70 text-sm">94430 84418</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919443084418?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-ivory/10 backdrop-blur-sm border border-ivory/20 transition-all duration-300 hover:bg-ivory/20 hover:border-gold/30"
            >
              <MessageCircle className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-serif text-xl font-semibold text-ivory mb-1">WhatsApp</p>
              <p className="text-ivory/70 text-sm">Instant Booking</p>
            </a>

            {/* Visit */}
            <Link
              to="/contact"
              className="group p-6 rounded-2xl bg-ivory/10 backdrop-blur-sm border border-ivory/20 transition-all duration-300 hover:bg-ivory/20 hover:border-gold/30"
            >
              <MapPin className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-serif text-xl font-semibold text-ivory mb-1">Visit Clinic</p>
              <p className="text-ivory/70 text-sm">Chennai, Tamil Nadu</p>
            </Link>
          </motion.div>

          {/* Clinic Hours */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 text-ivory/70 text-sm"
          >
            <Clock className="w-4 h-4 text-gold" />
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
