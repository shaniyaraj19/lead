import FeaturesHero from '../components/features/FeaturesHero';
import FeatureBlocks from '../components/features/FeatureBlocks';
import IntegrationsShowcase from '../components/features/IntegrationsShowcase';
import CTA from '../components/CTA';

const Features = () => {
  return (
    <div className="min-h-screen bg-black">
      <FeaturesHero />
      <FeatureBlocks />
      <IntegrationsShowcase />
      <CTA />
    </div>
  );
};

export default Features;