import Hero from '@/components/home/Hero';
import TreatmentsPreview from '@/components/home/TreatmentsPreview';
import DoctorPreview from '@/components/home/DoctorPreview';
import ContactCTA from '@/components/home/ContactCTA';
import LocationPreview from '@/components/home/LocationPreview';
import Layout from '@/components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TreatmentsPreview />
      <DoctorPreview />
      <LocationPreview />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
