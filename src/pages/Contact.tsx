import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import FloatingShapes from '@/components/ui/FloatingShapes';
import { toast } from 'sonner';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Thank you! We will contact you soon.');
    
    // Reset after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', phone: '', email: '', treatment: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <FloatingShapes />
        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Contact Us
              </span>
              <span className="w-8 h-px bg-gold" />
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6">
              Book Your Appointment
            </h1>
            <p className="text-ivory/80 text-lg">
              Take the first step towards natural healing. 
              Reach out to us for a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Get in Touch"
                title="We're Here to Help"
                subtitle="Choose your preferred way to connect with us. We respond to all inquiries within 24 hours."
                centered={false}
              />

              <div className="space-y-6 mt-8">
                {/* Phone */}
                <motion.a
                  href="tel:+919443084418"
                  className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border/50 shadow-card transition-all duration-300 hover:shadow-elevated hover:border-accent/30 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-accent font-medium text-lg">94430 84418</p>
                    <p className="text-muted-foreground text-sm mt-1">Available Mon-Sat, 9AM-7PM</p>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/919443084418?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border/50 shadow-card transition-all duration-300 hover:shadow-elevated hover:border-accent/30 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-accent font-medium text-lg">Instant Booking</p>
                    <p className="text-muted-foreground text-sm mt-1">Quick response, easy scheduling</p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border/50 shadow-card"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Our Clinic</h3>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
                    <p className="text-muted-foreground text-sm">India</p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border/50 shadow-card"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Clinic Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="text-accent font-medium">9:00 AM - 7:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-elevated"
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                Request an Appointment
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you shortly.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h4>
                  <p className="text-muted-foreground">
                    We've received your request and will contact you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="treatment" className="block text-sm font-medium text-foreground mb-2">
                      Treatment Interest
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      value={formState.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    >
                      <option value="">Select a treatment</option>
                      <option value="skin">Skin Problems</option>
                      <option value="varma">Varma Therapy</option>
                      <option value="joint">Joint Pain</option>
                      <option value="spine">Spine & Nerve Disorders</option>
                      <option value="chronic">Chronic Pain Management</option>
                      <option value="wellness">Preventive Care & Wellness</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                      placeholder="Tell us about your health concerns..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-premium bg-primary text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.06892!3d13.0474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent opacity-30" />
      </section>
    </Layout>
  );
};

export default Contact;
