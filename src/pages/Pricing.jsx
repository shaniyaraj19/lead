import PricingHero from '../components/pricing/PricingHero';
import PricingTable from '../components/pricing/PricingTable';
import PricingFAQ from '../components/pricing/PricingFAQ';
import CTA from '../components/CTA';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black">
      <PricingHero />
      <PricingTable />
      <PricingFAQ />
      <CTA />
    </div>
  );
};

export default Pricing;