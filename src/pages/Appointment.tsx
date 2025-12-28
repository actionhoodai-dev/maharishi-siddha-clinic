import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Appointment = () => {
    return (
        <Layout>
            <div className="pt-24 pb-16 min-h-screen">
                <div className="container-luxury">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Book Your Consultation
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Begin your journey to better health. Schedule an appointment with Dr. M. Vivekanandan.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Left Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-card p-8 rounded-2xl shadow-elevated border border-border/50"
                        >
                            <div className="mb-8">
                                <h2 className="text-2xl font-serif font-semibold text-primary mb-2">Email Inquiry</h2>
                                <p className="text-muted-foreground text-sm">Fill out the form below and we will get back to you shortly.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="Enter your name" className="bg-background" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" placeholder="Enter your number" className="bg-background" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="bg-background" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="type">Consultation Type</Label>
                                    <select id="type" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                                        <option>In-Clinic Consultation</option>
                                        <option>Follow-up Visit</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message / Symptoms</Label>
                                    <Textarea id="message" placeholder="Briefly describe your health concern..." className="min-h-[120px] bg-background" />
                                </div>

                                <Button className="w-full bg-primary text-primary-foreground hover:bg-emerald-medium py-6 text-lg">
                                    Send Appointment Request
                                </Button>
                            </form>

                            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground/80">
                                <div className="h-px bg-border flex-1" />
                                <span>OR</span>
                                <div className="h-px bg-border flex-1" />
                            </div>

                            <div className="mt-8">
                                <a
                                    href="https://wa.me/919443084418?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl hover:bg-[#128C7E] transition-colors duration-300 font-medium"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Book via WhatsApp
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Column: Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-12"
                        >
                            {/* Process */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-6">Patient Process</h3>
                                <div className="space-y-6">
                                    {[
                                        "Submit appointment request via Email or WhatsApp.",
                                        "Receive confirmation with date and time.",
                                        "Initial consultation with Dr. M. Vivekanandan (Pulse diagnosis & history).",
                                        "Personalized treatment plan & medicine prescription."
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shrink-0">
                                                {i + 1}
                                            </div>
                                            <p className="text-muted-foreground pt-1">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Timings */}
                            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                <div className="flex items-start gap-4 mb-4">
                                    <Clock className="w-5 h-5 text-accent mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Clinic Timings</h4>
                                        <p className="text-sm text-muted-foreground">Monday - Saturday: 10:00 AM - 1:00 PM <br />Evening: 5:00 PM - 8:00 PM</p>
                                        <p className="text-sm text-muted-foreground mt-2">Sunday: By Appointment Only</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-accent mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Locate Us</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Maharishi Siddha Clinic<br />
                                            [Full Address Here - To be updated based on Contact Page]
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Expectations */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-6">What to Expect</h3>
                                <ul className="space-y-3">
                                    {[
                                        "A detailed evaluation of your medical history.",
                                        "Traditional Nadi Pariksha (Pulse Diagnosis).",
                                        "Dietary and lifestyle recommendations.",
                                        "Ethical and transparent treatment approach."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Appointment;
