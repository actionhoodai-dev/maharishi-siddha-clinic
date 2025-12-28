import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationPreview = () => {
    return (
        <section className="section-padding bg-secondary/30">
            <div className="container-luxury">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-medium tracking-widest uppercase mb-4 block">
                            Our Location
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Visit Maharishi Siddha Clinic
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            We are conveniently located in Chennai, providing a calm and hygienic environment for your healing journey.
                            Our clinic is designed to reflect the serenity and purity of nature.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-accent mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-lg font-semibold text-primary mb-1">Address</h4>
                                    <p className="text-muted-foreground">
                                        [Full Street Address to be added], <br />
                                        Chennai, Tamil Nadu - [Pin Code]
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-accent mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-lg font-semibold text-primary mb-1">Working Hours</h4>
                                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 1:00 PM, 5:00 PM - 8:00 PM</p>
                                    <p className="text-muted-foreground text-sm">Sunday: Appointment Only</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[400px] bg-card rounded-2xl overflow-hidden shadow-elevated border border-border/50 relative group"
                    >
                        {/* Placeholder for Map - In production, use Google Maps Embed */}
                        <div className="w-full h-full bg-neutral-200 flex items-center justify-center relative">
                            {/* Map Image Placeholder or Iframe */}
                            <iframe
                                title="Clinic Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.69874837568!2d80.20!3d13.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzM2LjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) opacity(0.8)' }}
                                allowFullScreen
                                loading="lazy"
                                className="group-hover:filter-none transition-all duration-500"
                            />
                            <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationPreview;
