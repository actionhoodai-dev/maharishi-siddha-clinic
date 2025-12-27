import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Zap, Heart, Bone, Brain, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const treatments = [
  {
    icon: Leaf,
    title: 'Skin Problems',
    description: 'Natural Siddha treatments for eczema, psoriasis, acne, and chronic skin conditions.',
    color: 'emerald',
  },
  {
    icon: Zap,
    title: 'Varma Therapy',
    description: 'Ancient vital point therapy for pain relief, energy restoration, and healing.',
    color: 'gold',
  },
  {
    icon: Bone,
    title: 'Joint Pain',
    description: 'Effective natural remedies for arthritis, rheumatism, and joint inflammation.',
    color: 'emerald',
  },
  {
    icon: Brain,
    title: 'Spine & Nerve Disorders',
    description: 'Holistic treatment for sciatica, disc problems, and neurological conditions.',
    color: 'gold',
  },
  {
    icon: Heart,
    title: 'Chronic Pain Management',
    description: 'Long-term relief solutions using traditional Siddha medicine principles.',
    color: 'emerald',
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Strengthen immunity and prevent diseases with personalized wellness programs.',
    color: 'gold',
  },
];

const TreatmentsPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <SectionHeading
          badge="Our Expertise"
          title="Treatments We Offer"
          subtitle="Discover our comprehensive range of traditional Siddha treatments designed to address your health concerns naturally."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/treatments"
                className="group block h-full p-8 bg-card rounded-2xl border border-border/50 shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-1 hover:border-accent/30"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    treatment.color === 'gold'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  <treatment.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {treatment.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/treatments"
            className="btn-premium inline-flex items-center gap-2 bg-primary text-primary-foreground"
          >
            <span>View All Treatments</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentsPreview;
