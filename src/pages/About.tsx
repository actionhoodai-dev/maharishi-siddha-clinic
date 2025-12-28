import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Sparkles, Building2, Leaf } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import FloatingShapes from '@/components/ui/FloatingShapes';

const values = [
  {
    icon: Leaf,
    title: 'Authentic Siddha Roots',
    description: 'We strictly adhere to the classical literature of Siddha Medicine, ensuring every treatment is rooted in time-tested wisdom.'
  },
  {
    icon: ShieldCheck,
    title: 'Ethical & Transparent',
    description: 'No miracle cures, no false promises. We provide honest prognosis and transparent treatment plans based on realistic outcomes.'
  },
  {
    icon: HeartPulse,
    title: 'Root Cause Therapy',
    description: 'We don’t just manage symptoms. Our goal is to identify and treat the underlying imbalance in the Three Doshas (Vatha, Pitha, Kapha).'
  },
  {
    icon: Sparkles,
    title: 'Hygiene & Standards',
    description: 'A clean, modern clinical environment that respects patient dignity and ensures the highest standards of safety and hygiene.'
  }
];

const About = () => {
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Our Legacy
              </span>
              <span className="w-8 h-px bg-gold" />
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6">
              Maharishi Siddha Clinic &<br /> Sakthi Varma Clinic
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              A sanctuary of traditional healing where ancient science meets modern care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clinic History & Purpose */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Restoring Health, <br /><span className="text-accent">Naturally.</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  Established with a vision to provide authentic Siddha healthcare, <strong>Maharishi Siddha Clinic</strong> stands as a beacon of hope for those seeking natural and lasting solutions to their health problems. Along with our sister concern, <strong>Sakthi Varma Clinic</strong>, we offer a comprehensive healing ecosystem.
                </p>
                <p>
                  Our institution is built on the belief that true health is not merely the absence of disease, but a state of harmonious balance. We follow the holistic principles of the Siddha system, which views the human body as a microcosm of the universe.
                </p>
                <p>
                  For decades, we have served the community by addressing chronic ailments, skin disorders, and musculoskeletal issues without the use of harsh chemicals or invasive procedures.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Image Placeholder for Clinic Interior */}
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden shadow-elevated relative">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-primary/20">
                  <Building2 className="w-24 h-24" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <p className="font-medium">A serene healing environment</p>
                </div>
              </div>
              {/* Deco */}
              <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values / Philosophy */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading
            badge="Our Philosophy"
            title="The Siddha Way of Life"
            subtitle="We treat the person, not just the disease. Our approach is patient-centric, holistic, and deeply rooted in ethics."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics or Trust Badges can go here */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-3xl font-semibold mb-8">Committed to Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-gold mb-2">100%</p>
              <p className="opacity-80">Natural Therapies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold mb-2">ISO</p>
              <p className="opacity-80">Standard Care</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold mb-2">Ethics</p>
              <p className="opacity-80">First Approach</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold mb-2">Safe</p>
              <p className="opacity-80">Formulations</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
