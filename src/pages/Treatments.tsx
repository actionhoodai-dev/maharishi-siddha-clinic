import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf, Zap, Bone, Brain, Heart, Shield, Sparkles, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import FloatingShapes from '@/components/ui/FloatingShapes';
import { Link } from 'react-router-dom';

const treatments = [
  {
    id: 'skin',
    icon: Leaf,
    title: 'Skin Problems',
    shortDesc: 'Natural Siddha treatments for chronic skin conditions.',
    fullDesc: 'Our comprehensive skin treatment program addresses the root causes of various skin conditions using traditional Siddha medicine. We treat eczema, psoriasis, vitiligo, acne, dermatitis, and other chronic skin issues through internal medicine, external applications, and dietary modifications.',
    benefits: [
      'No steroids or harsh chemicals',
      'Long-lasting results',
      'Addresses root cause',
      'Personalized treatment plan',
    ],
    conditions: ['Psoriasis', 'Eczema', 'Vitiligo', 'Acne', 'Dermatitis', 'Fungal infections'],
    color: 'emerald' as const,
  },
  {
    id: 'varma',
    icon: Zap,
    title: 'Varma Therapy',
    shortDesc: 'Ancient vital point therapy for healing and energy.',
    fullDesc: 'Varma therapy is a specialized form of treatment that focuses on vital energy points in the body. This ancient practice, passed down through generations of Siddha practitioners, can effectively treat various conditions by restoring the flow of vital energy and promoting natural healing.',
    benefits: [
      'Immediate pain relief',
      'Non-invasive treatment',
      'Restores energy flow',
      'Treats acute and chronic conditions',
    ],
    conditions: ['Sports injuries', 'Frozen shoulder', 'Neck pain', 'Paralysis', 'Numbness', 'Energy blocks'],
    color: 'gold' as const,
  },
  {
    id: 'joint',
    icon: Bone,
    title: 'Joint Pain',
    shortDesc: 'Effective remedies for arthritis and joint issues.',
    fullDesc: 'Our joint pain treatment program combines internal Siddha medicines with external therapies like Thokkanam (traditional massage) and Ottradam (fomentation) to provide relief from various joint ailments. We focus on reducing inflammation, restoring mobility, and preventing further degeneration.',
    benefits: [
      'Reduces inflammation naturally',
      'Improves joint mobility',
      'Prevents degeneration',
      'Safe for long-term use',
    ],
    conditions: ['Arthritis', 'Rheumatism', 'Gout', 'Knee pain', 'Hip pain', 'Shoulder pain'],
    color: 'emerald' as const,
  },
  {
    id: 'spine',
    icon: Brain,
    title: 'Spine & Nerve Disorders',
    shortDesc: 'Holistic treatment for neurological conditions.',
    fullDesc: 'We offer specialized treatments for spine and nerve-related disorders using a combination of Varma therapy, Siddha medicines, and therapeutic procedures. Our approach helps patients avoid surgery in many cases while providing significant relief from pain and disability.',
    benefits: [
      'Avoid surgery in many cases',
      'Restore nerve function',
      'Reduce chronic pain',
      'Improve quality of life',
    ],
    conditions: ['Sciatica', 'Disc problems', 'Spondylosis', 'Neuropathy', 'Cervical pain', 'Lower back pain'],
    color: 'gold' as const,
  },
  {
    id: 'chronic',
    icon: Heart,
    title: 'Chronic Pain Management',
    shortDesc: 'Long-term solutions for persistent pain.',
    fullDesc: 'Chronic pain requires a comprehensive approach that addresses not just the symptoms but the underlying causes. Our chronic pain management program uses traditional Siddha principles to identify imbalances and restore health through personalized treatment protocols.',
    benefits: [
      'Reduce dependency on painkillers',
      'Address underlying causes',
      'Sustainable relief',
      'Holistic wellness approach',
    ],
    conditions: ['Fibromyalgia', 'Migraine', 'Chronic fatigue', 'Body aches', 'Post-surgical pain', 'Repetitive strain'],
    color: 'emerald' as const,
  },
  {
    id: 'preventive',
    icon: Shield,
    title: 'Preventive Care & Wellness',
    shortDesc: 'Strengthen immunity and prevent diseases.',
    fullDesc: 'Prevention is better than cure – a principle deeply embedded in Siddha philosophy. Our preventive care programs include seasonal detoxification, immunity-boosting treatments, and personalized lifestyle modifications to help you maintain optimal health and prevent diseases.',
    benefits: [
      'Boost natural immunity',
      'Seasonal detoxification',
      'Personalized diet plans',
      'Lifestyle optimization',
    ],
    conditions: ['Low immunity', 'Digestive issues', 'Respiratory problems', 'Stress management', 'Rejuvenation', 'Anti-aging'],
    color: 'gold' as const,
  },
];

const Treatments = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<typeof treatments[0] | null>(null);

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
                Our Treatments
              </span>
              <span className="w-8 h-px bg-gold" />
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6">
              Healing Through Nature
            </h1>
            <p className="text-ivory/80 text-lg">
              Discover our comprehensive range of traditional treatments, 
              each designed to restore balance and promote natural healing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <motion.button
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedTreatment(treatment)}
                className="group text-left p-8 bg-card rounded-2xl border border-border/50 shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 hover:border-accent/30"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    treatment.color === 'gold'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  <treatment.icon className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {treatment.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {treatment.conditions.slice(0, 3).map((condition) => (
                    <span
                      key={condition}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {condition}
                    </span>
                  ))}
                  {treatment.conditions.length > 3 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                      +{treatment.conditions.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-accent font-medium">
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Siddha Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading
            badge="Why Siddha Medicine"
            title="The Ancient Science of Healing"
            subtitle="Siddha medicine, one of the oldest medical systems in the world, offers time-tested solutions for modern health challenges."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Leaf, title: 'Natural Ingredients', desc: 'Pure herbs and minerals' },
              { icon: Sparkles, title: 'No Side Effects', desc: 'Safe for all ages' },
              { icon: Heart, title: 'Root Cause Treatment', desc: 'Not just symptoms' },
              { icon: Shield, title: 'Lasting Results', desc: 'Sustainable wellness' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a consultation with Dr. Vivekanandan and discover the right 
              treatment plan for your health needs.
            </p>
            <Link
              to="/contact"
              className="btn-premium inline-flex items-center gap-2 bg-primary text-primary-foreground"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Treatment Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setSelectedTreatment(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    selectedTreatment.color === 'gold'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  <selectedTreatment.icon className="w-8 h-8" />
                </div>

                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  {selectedTreatment.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {selectedTreatment.fullDesc}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {selectedTreatment.benefits.map((benefit) => (
                        <li key={benefit} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Conditions Treated</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTreatment.conditions.map((condition) => (
                        <span
                          key={condition}
                          className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn-premium w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground"
                  onClick={() => setSelectedTreatment(null)}
                >
                  Book Consultation for {selectedTreatment.title}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Treatments;
