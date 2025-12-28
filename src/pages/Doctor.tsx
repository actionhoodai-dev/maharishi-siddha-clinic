import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { BadgeCheck, ScrollText, Stethoscope, Heart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Doctor = () => {
    return (
        <Layout>
            <div className="pt-24 pb-16 min-h-screen">
                <div className="container-luxury">
                    {/* Hero Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-elevated"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10" />
                            {/* Using a placeholder or potentially reusing an existing doctor image if available. 
                  For now, using a solid color/gradient or the doctor placeholder if I find one. 
                  I'll use a placeholder div. */}
                            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                {/* Placeholder for Doctor Image */}
                                <Stethoscope className="w-24 h-24 opacity-20" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-20 text-ivory">
                                <h1 className="text-3xl font-serif font-bold mb-1">Dr. M. Vivekanandan</h1>
                                <p className="text-gold font-medium">BSMS (Bachelor of Siddha Medicine and Surgery)</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                                <BadgeCheck className="w-4 h-4 text-accent" />
                                <span className="text-accent text-sm font-medium">Chief Siddha Physician</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                                Dedicated to <span className="text-accent">Holistic Healing</span>
                            </h2>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Dr. M. Vivekanandan is a distinguished Siddha physician with extensive experience in treating chronic ailments through the ancient wisdom of Siddha medicine. His approach integrates traditional diagnostic methods (Pulse reading - Nadi) with modern clinical understanding to address the root cause of diseases.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Specializing in dermatology and chronic autoimmune conditions, Dr. Vivekanandan has helped numerous patients achieve long-term remission and improved quality of life without reliance on harsh chemicals or suppressive treatments.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <Button className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-emerald-medium transition-all duration-300">
                                        Book Consultation
                                    </Button>
                                </Link>
                                <Link to="/about">
                                    <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-primary/5 transition-all duration-300">
                                        About Clinic
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Core Focus Areas */}
                    <div className="mb-24">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h3 className="text-3xl font-serif font-bold text-primary mb-4">Areas of Expertise</h3>
                            <p className="text-muted-foreground">
                                Dr. Vivekanandan focuses on challenging conditions where Siddha medicine offers unique and effective solutions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Leaf,
                                    title: "Skin Disorders",
                                    description: "Specialized care for Psoriasis, Eczema, Vitiligo, and fungal infections using herbal formulations and external therapies."
                                },
                                {
                                    icon: Heart,
                                    title: "Chronic Conditions",
                                    description: "Management of Arthritis, Diabetes, Hypertension, and other lifestyle disorders through diet and internal medicine."
                                },
                                {
                                    icon: ScrollText,
                                    title: "Preventive Care",
                                    description: "Guidance on Kayakalpa (rejuvenation) and immunity boosting to prevent disease recurrence."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card hover:bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-card transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <h4 className="text-xl font-serif font-semibold text-primary mb-3">{item.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Doctor's Message */}
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-16 -mb-16" />

                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">"My Philosophy of Care"</h3>
                            <blockquote className="text-xl md:text-2xl text-primary/80 italic leading-relaxed mb-8">
                                "True healing comes not just from medicine, but from understanding the body's innate intelligence. As a physician, my role is to guide the patient back to balance using the gentle yet powerful tools of nature provided by the Siddha system."
                            </blockquote>
                            <cite className="not-italic font-medium text-lg text-accent">— Dr. M. Vivekanandan, BSMS</cite>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Doctor;
