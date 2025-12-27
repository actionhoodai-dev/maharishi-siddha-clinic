import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingBookButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Calendar,
      label: 'Book Appointment',
      href: '/contact',
      isLink: true,
    },
    {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:+919443084418',
      isLink: false,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/919443084418?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment',
      isLink: false,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                {action.isLink ? (
                  <Link
                    to={action.href}
                    className="flex items-center gap-3 bg-card shadow-elevated rounded-full pl-4 pr-5 py-3 hover:shadow-gold-glow transition-all duration-300 group"
                  >
                    <action.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {action.label}
                    </span>
                  </Link>
                ) : (
                  <a
                    href={action.href}
                    target={action.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={action.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 bg-card shadow-elevated rounded-full pl-4 pr-5 py-3 hover:shadow-gold-glow transition-all duration-300 group"
                  >
                    <action.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {action.label}
                    </span>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-elevated transition-all duration-300 ${
          isOpen
            ? 'bg-foreground text-background rotate-0'
            : 'bg-accent text-accent-foreground animate-pulse-gold'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Book appointment"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Calendar className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingBookButton;
