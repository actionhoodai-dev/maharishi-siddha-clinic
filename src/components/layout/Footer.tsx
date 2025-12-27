import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Gold Divider */}
      <div className="h-1 bg-gradient-gold" />

      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-serif text-2xl font-semibold mb-2">
              Maharishi Siddha
            </h3>
            <p className="text-gold text-sm tracking-widest uppercase mb-6">
              & Sakthi Varma Clinic
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Trusted Siddha & Varma Healing since generations. Experience the 
              timeless wisdom of natural medicine.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-medium mb-6 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Treatments', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Treatments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-medium mb-6 text-gold">
              Treatments
            </h4>
            <ul className="space-y-3">
              {['Skin Problems', 'Varma Therapy', 'Joint Pain', 'Spine Disorders', 'Chronic Pain'].map((item) => (
                <li key={item}>
                  <Link
                    to="/treatments"
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-serif text-lg font-medium mb-6 text-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919443084418" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm block">
                    94430 84418
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Chennai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Maharishi Siddha & Sakthi Varma Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <span className="text-primary-foreground/50 text-sm">
                Crafted with
              </span>
              <span className="text-gold">♦</span>
              <span className="text-primary-foreground/50 text-sm">
                for natural healing
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
