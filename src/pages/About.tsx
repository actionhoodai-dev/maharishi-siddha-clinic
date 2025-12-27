import { motion } from 'framer-motion';
import { Award, GraduationCap, BookOpen, Users, Heart, Star } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import FloatingShapes from '@/components/ui/FloatingShapes';
import doctorImage from '@/assets/doctor-portrait.jpg';

const achievements = [
  { icon: GraduationCap, label: 'BSMS', description: 'Bachelor of Siddha Medicine & Surgery' },
  { icon: Award, label: 'Director', description: 'IMPCOPS (Indian Medical Practitioners\' Co-operative)' },
  { icon: BookOpen, label: '25+ Years', description: 'Clinical Experience in Siddha Medicine' },
  { icon: Users, label: '10,000+', description: 'Patients Successfully Treated' },
];

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Every patient is treated with genuine care, understanding, and respect for their healing journey.',
  },
  {
    icon: Star,
    title: 'Traditional Excellence',
    description: 'We uphold the authentic principles of Siddha medicine passed down through generations.',
  },
  {
    icon: Users,
    title: 'Holistic Approach',
    description: 'Treatment addresses body, mind, and spirit to achieve complete wellness and lasting health.',
  },
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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                About Us
              </span>
              <span className="w-8 h-px bg-gold" />
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6">
              Meet Dr. M. Vivekanandan
            </h1>
            <p className="text-ivory/80 text-lg">
              A distinguished practitioner dedicated to preserving and sharing 
              the ancient wisdom of Siddha medicine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative sticky top-32"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={doctorImage}
                  alt="Dr. M. Vivekanandan - Siddha Medicine Expert"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Dr. M. Vivekanandan, <span className="text-accent">BSMS</span>
                </h2>
                <p className="text-accent font-medium tracking-wide uppercase text-sm">
                  Director – IMPCOPS • Siddha Medicine Specialist
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  With over 25 years of dedicated practice in Siddha medicine, Dr. M. Vivekanandan 
                  has established himself as one of the most respected practitioners in Tamil Nadu. 
                  His journey began with a deep fascination for ancient healing traditions and a 
                  genuine desire to help people overcome their health challenges naturally.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As the Director of IMPCOPS (Indian Medical Practitioners' Co-operative Pharmacy 
                  and Stores), Dr. Vivekanandan has been instrumental in promoting authentic Siddha 
                  medicine while ensuring the highest standards of quality and efficacy in 
                  traditional formulations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His expertise spans Varma therapy, skin disorders, joint ailments, and chronic 
                  pain management. Dr. Vivekanandan believes in treating the root cause of 
                  ailments rather than just suppressing symptoms, following the time-tested 
                  principles established by the ancient Siddhars.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <item.icon className="w-6 h-6 text-accent mb-2" />
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading
            badge="Our Philosophy"
            title="What We Stand For"
            subtitle="Our clinic is built on the foundational principles that have guided Siddha medicine for millennia."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center p-8 bg-card rounded-2xl border border-border/50 shadow-card"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Our Clinics"
              title="Maharishi Siddha & Sakthi Varma Clinic"
              subtitle="Two specialized clinics offering comprehensive traditional healing under one trusted name."
            />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-primary text-primary-foreground rounded-2xl"
              >
                <h3 className="font-serif text-2xl font-semibold mb-4">Maharishi Siddha Clinic</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Specializing in traditional Siddha medicine for skin disorders, chronic diseases, 
                  and holistic wellness treatments.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-accent text-accent-foreground rounded-2xl"
              >
                <h3 className="font-serif text-2xl font-semibold mb-4">Sakthi Varma Clinic</h3>
                <p className="text-accent-foreground/80 text-sm leading-relaxed">
                  Dedicated to Varma therapy for pain management, sports injuries, 
                  and neurological conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
