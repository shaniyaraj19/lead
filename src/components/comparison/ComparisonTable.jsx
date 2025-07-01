import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlowingCard } from '../ui/glowing-card';

const platforms = ['LeadAccel', 'Salesforce', 'HubSpot', 'Zoho CRM'];

const features = [
  { name: 'Starting Price', support: [true, true, true, true] },
  { name: 'Setup Cost', support: [true, true, false, false] },
  { name: 'Training Required', support: [true, true, false, true] },
  { name: 'WhatsApp Integration', support: [true, false, false, true] },
  { name: 'Indian Payment Gateways', support: [true, false, true, false] },
  { name: 'Mobile App', support: [true, true, false, true] },
  { name: 'Customization', support: [true, true, false, true] },
  { name: 'Reporting', support: [true, true, false, true] },
  { name: 'User Interface', support: [true, true, false, true] },
  { name: 'Free Plan', support: [true, false, true, false] },
  { name: 'Email', support: [true, false, true, false] },
  { name: 'Sales Automation', support: [true, false, true, true] },
  { name: 'Lead Scoring', support: [true, false, true, false] },
  { name: 'Third-party Integration', support: [true, false, true, false] },
  { name: 'Customer Onboarding', support: [true, false, false, true] }
];

const ComparisonTable = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            LeadAccel vs Other CRMs
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A feature-by-feature breakdown across top platforms.
          </p>
        </motion.div>

        <GlowingCard className="card-gradient rounded-2xl overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700">
                <tr>
                  <th className="text-white font-semibold py-6 px-6 rounded-l-lg bg-slate-900/95 backdrop-blur-lg">
                    Features
                  </th>
                  {platforms.map((platform, i) => (
                    <th
                      key={i}
                      className={`text-center text-white font-semibold py-6 px-6 bg-slate-900/95 backdrop-blur-lg ${
                        i === platforms.length - 1 ? 'rounded-r-lg' : ''
                      } ${
                        platform === 'LeadAccel' ? 'text-primary-400' : ''
                      }`}
                    >
                      {platform}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="bg-slate-800/50 hover:bg-slate-700/40 transition-colors"
                  >
                    <td className="py-4 px-6 text-white font-medium">
                      <div className="flex items-center gap-2">{feature.name}</div>
                    </td>
                    {feature.support.map((hasFeature, colIndex) => (
                      <td key={colIndex} className="text-center py-4 px-6">
                        {hasFeature ? (
                          <Check className={`w-5 h-5 mx-auto ${
                            colIndex === 0 ? 'text-primary-400' : 'text-green-400'
                          }`} />
                        ) : (
                          <X className="text-red-400 w-5 h-5 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
};

export default ComparisonTable;