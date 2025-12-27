import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, BookOpen } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import doctorImage from '@/assets/doctor-portrait.jpg';

const timeline = [
  {
    year: 'BSMS',
    title: 'Bachelor of Siddha Medicine',
    icon: GraduationCap,
  },
  {
    year: 'Director',
    title: 'IMPCOPS',
    icon: Award,
  },
  {
    year: '25+ Years',
    title: 'Clinical Experience',
    icon: BookOpen,
  },
];

const DoctorPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={doctorImage}
                alt="Dr. M. Vivekanandan - Siddha Medicine Expert"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:right-8 bg-card p-6 rounded-xl shadow-elevated max-w-xs border border-border/50"
            >
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Healing is not just about treating symptoms, but restoring balance to body, mind, and spirit."
              </p>
              <p className="text-accent font-medium text-sm mt-3">— Dr. M. Vivekanandan</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              badge="Meet Your Healer"
              title="Dr. M. Vivekanandan"
              subtitle=""
              centered={false}
            />

            <p className="text-muted-foreground leading-relaxed mb-8">
              Dr. M. Vivekanandan is a distinguished Siddha medicine practitioner with over 
              25 years of experience in traditional healing. As the Director of IMPCOPS 
              (Indian Medical Practitioners' Co-operative Pharmacy and Stores), he combines 
              ancient wisdom with modern understanding to provide effective natural treatments.
            </p>

            {/* Timeline */}
            <div className="space-y-6 mb-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.year}</p>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-premium inline-flex items-center gap-2 text-sm"
            >
              <span>Read Full Bio</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorPreview;
