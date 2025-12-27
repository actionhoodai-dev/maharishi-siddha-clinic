import Hero from '@/components/home/Hero';
import TreatmentsPreview from '@/components/home/TreatmentsPreview';
import DoctorPreview from '@/components/home/DoctorPreview';
import ContactCTA from '@/components/home/ContactCTA';
import Layout from '@/components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TreatmentsPreview />
      <DoctorPreview />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
