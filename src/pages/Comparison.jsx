import ComparisonHero from '../components/comparison/ComparisonHero';
import ComparisonTable from '../components/comparison/ComparisonTable';
import ComparisonFAQ from '../components/comparison/ComparisonFAQ';
import CTA from '../components/CTA';

const Comparison = () => {
  return (
    <div className="min-h-screen bg-black">
      <ComparisonHero />
      <ComparisonTable />
      <ComparisonFAQ />
      <CTA />
    </div>
  );
};

export default Comparison;