// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { GlowingCard } from '../ui/glowing-card';

// const ComparisonTable = () => {
//   const [activeComparison, setActiveComparison] = useState(0);

//   const comparisons = [
//     {
//       title: 'LeadAccel vs Salesforce',
//       competitor: 'Salesforce',
//       competitorLogo: 'SF',
//       summary: 'While Salesforce is powerful, it\'s complex and expensive. LeadAccel offers the same core functionality with better usability and pricing.',
//       features: [
//         {
//           category: 'Ease of Use',
//           leadaccel: { score: '9/10', description: 'Intuitive interface, quick setup' },
//           competitor: { score: '6/10', description: 'Complex, requires training' }
//         },
//         {
//           category: 'Pricing',
//           leadaccel: { score: '9/10', description: 'Starting at ₹1,499/month' },
//           competitor: { score: '5/10', description: 'Starting at $25/user/month' }
//         },
//         {
//           category: 'Setup Time',
//           leadaccel: { score: '10/10', description: '15 minutes to get started' },
//           competitor: { score: '4/10', description: 'Weeks to months for full setup' }
//         },
//         {
//           category: 'WhatsApp Integration',
//           leadaccel: { score: '10/10', description: 'Native WhatsApp integration' },
//           competitor: { score: '3/10', description: 'Third-party apps required' }
//         },
//         {
//           category: 'Indian Market Focus',
//           leadaccel: { score: '10/10', description: 'Built for Indian businesses' },
//           competitor: { score: '6/10', description: 'Global platform, less local focus' }
//         },
//         {
//           category: 'Customer Support',
//           leadaccel: { score: '9/10', description: 'Local support in Indian timezone' },
//           competitor: { score: '7/10', description: 'Global support, time zone issues' }
//         }
//       ]
//     },
//     {
//       title: 'LeadAccel vs HubSpot',
//       competitor: 'HubSpot',
//       competitorLogo: 'HS',
//       summary: 'HubSpot is great for marketing but expensive for sales teams. LeadAccel focuses purely on sales with better pricing.',
//       features: [
//         {
//           category: 'Sales Focus',
//           leadaccel: { score: '10/10', description: 'Built specifically for sales teams' },
//           competitor: { score: '7/10', description: 'Marketing-first, sales secondary' }
//         },
//         {
//           category: 'Pricing',
//           leadaccel: { score: '9/10', description: 'Transparent, affordable pricing' },
//           competitor: { score: '6/10', description: 'Expensive paid plans' }
//         },
//         {
//           category: 'Lead Management',
//           leadaccel: { score: '9/10', description: 'Advanced lead scoring & routing' },
//           competitor: { score: '8/10', description: 'Good lead management' }
//         },
//         {
//           category: 'WhatsApp Integration',
//           leadaccel: { score: '10/10', description: 'Native WhatsApp support' },
//           competitor: { score: '4/10', description: 'Limited messaging options' }
//         },
//         {
//           category: 'Automation',
//           leadaccel: { score: '9/10', description: 'Sales-focused automation' },
//           competitor: { score: '8/10', description: 'Marketing automation focus' }
//         },
//         {
//           category: 'Learning Curve',
//           leadaccel: { score: '9/10', description: 'Quick to learn and implement' },
//           competitor: { score: '6/10', description: 'Complex feature set' }
//         }
//       ]
//     },
//     {
//       title: 'LeadAccel vs Pipedrive',
//       competitor: 'Pipedrive',
//       competitorLogo: 'PD',
//       summary: 'Pipedrive is simple but lacks advanced features. LeadAccel offers simplicity with powerful automation and integrations.',
//       features: [
//         {
//           category: 'Feature Richness',
//           leadaccel: { score: '9/10', description: 'Comprehensive feature set' },
//           competitor: { score: '7/10', description: 'Basic features, limited advanced options' }
//         },
//         {
//           category: 'Automation',
//           leadaccel: { score: '9/10', description: 'Advanced workflow automation' },
//           competitor: { score: '6/10', description: 'Basic automation features' }
//         },
//         {
//           category: 'Integrations',
//           leadaccel: { score: '9/10', description: 'WhatsApp, Indian payment gateways' },
//           competitor: { score: '7/10', description: 'Standard integrations only' }
//         },
//         {
//           category: 'Reporting',
//           leadaccel: { score: '8/10', description: 'Detailed sales analytics' },
//           competitor: { score: '7/10', description: 'Basic reporting features' }
//         },
//         {
//           category: 'Mobile App',
//           leadaccel: { score: '9/10', description: 'Full-featured mobile experience' },
//           competitor: { score: '8/10', description: 'Good mobile app' }
//         },
//         {
//           category: 'Value for Money',
//           leadaccel: { score: '10/10', description: 'More features at better price' },
//           competitor: { score: '7/10', description: 'Fair pricing for basic features' }
//         }
//       ]
//     },
//     {
//       title: 'LeadAccel vs Zoho CRM',
//       competitor: 'Zoho CRM',
//       competitorLogo: 'ZC',
//       summary: 'Zoho CRM is feature-rich but can be overwhelming. LeadAccel provides better user experience with focused sales features.',
//       features: [
//         {
//           category: 'User Experience',
//           leadaccel: { score: '9/10', description: 'Clean, intuitive interface' },
//           competitor: { score: '6/10', description: 'Cluttered, overwhelming UI' }
//         },
//         {
//           category: 'Setup Complexity',
//           leadaccel: { score: '9/10', description: 'Quick 15-minute setup' },
//           competitor: { score: '5/10', description: 'Complex configuration required' }
//         },
//         {
//           category: 'WhatsApp Integration',
//           leadaccel: { score: '10/10', description: 'Native WhatsApp messaging' },
//           competitor: { score: '7/10', description: 'Basic WhatsApp support' }
//         },
//         {
//           category: 'Customer Support',
//           leadaccel: { score: '9/10', description: 'Responsive local support' },
//           competitor: { score: '6/10', description: 'Slow support response' }
//         },
//         {
//           category: 'Performance',
//           leadaccel: { score: '9/10', description: 'Fast, reliable platform' },
//           competitor: { score: '7/10', description: 'Can be slow with large datasets' }
//         },
//         {
//           category: 'Focus',
//           leadaccel: { score: '10/10', description: 'Sales-focused features' },
//           competitor: { score: '6/10', description: 'Too many features, less focus' }
//         }
//       ]
//     }
//   ];

//   return (
//     <section className="section-padding">
//       <div className="container-custom">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
//             Detailed <span className="text-gradient">Feature Comparison</span>
//           </h2>
//           <p className="text-lg text-slate-300 max-w-3xl mx-auto">
//             See how LeadAccel compares against major CRM platforms across key features that matter to your sales team.
//           </p>
//         </motion.div>

//         {/* Comparison Selector */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
//           {comparisons.map((comparison, index) => (
//             <motion.button
//               key={index}
//               className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
//                 activeComparison === index
//                   ? 'border-primary-500 bg-primary-500/10'
//                   : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
//               }`}
//               onClick={() => setActiveComparison(index)}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center space-x-3 mb-2">
//                 <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-sm">L</span>
//                 </div>
//                 <span className="text-slate-400">vs</span>
//                 <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-xs">{comparison.competitorLogo}</span>
//                 </div>
//               </div>
//               <h3 className="text-white font-semibold text-sm">{comparison.title}</h3>
//             </motion.button>
//           ))}
//         </div>

//         {/* Active Comparison */}
//         <motion.div
//           key={activeComparison}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <GlowingCard className="card-gradient rounded-2xl p-8">
//             <div className="text-center mb-8">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                 {comparisons[activeComparison].title}
//               </h3>
//               <p className="text-slate-300 text-lg max-w-3xl mx-auto">
//                 {comparisons[activeComparison].summary}
//               </p>
//             </div>

//             {/* Comparison Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-slate-700">
//                     <th className="text-left py-4 px-4 text-slate-300 font-semibold">Feature</th>
//                     <th className="text-center py-4 px-4 text-primary-400 font-semibold">LeadAccel</th>
//                     <th className="text-center py-4 px-4 text-slate-400 font-semibold">
//                       {comparisons[activeComparison].competitor}
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {comparisons[activeComparison].features.map((feature, index) => (
//                     <motion.tr
//                       key={index}
//                       className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors duration-200"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                     >
//                       <td className="py-6 px-4">
//                         <div className="font-semibold text-white mb-1">{feature.category}</div>
//                       </td>
//                       <td className="py-6 px-4 text-center">
//                         <div className="bg-primary-500/20 rounded-lg p-4">
//                           <div className="text-primary-400 font-bold text-lg mb-2">
//                             {feature.leadaccel.score}
//                           </div>
//                           <div className="text-slate-300 text-sm">
//                             {feature.leadaccel.description}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-6 px-4 text-center">
//                         <div className="bg-slate-700/50 rounded-lg p-4">
//                           <div className="text-slate-400 font-bold text-lg mb-2">
//                             {feature.competitor.score}
//                           </div>
//                           <div className="text-slate-400 text-sm">
//                             {feature.competitor.description}
//                           </div>
//                         </div>
//                       </td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Winner Badge */}
//             <motion.div
//               className="text-center mt-8"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full px-6 py-3">
//                 <span className="text-white font-bold mr-2">🏆</span>
//                 <span className="text-white font-semibold">LeadAccel Wins Overall</span>
//               </div>
//             </motion.div>
//           </GlowingCard>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ComparisonTable;

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
              <thead className="sticky top-0 z-10 bg-black/80 backdrop-blur-lg">
                <tr>
                  <th className="text-white font-semibold py-4 px-4 rounded-l-lg">Features</th>
                  {platforms.map((platform, i) => (
                    <th
                      key={i}
                      className={`text-center text-white font-semibold py-4 px-4 ${
                        i === platforms.length - 1 ? 'rounded-r-lg' : ''
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
                    <td className="py-4 px-4 text-white font-medium">
                      <div className="flex items-center gap-2">{feature.name}</div>
                    </td>
                    {feature.support.map((hasFeature, colIndex) => (
                      <td key={colIndex} className="text-center py-4 px-4">
                        {hasFeature ? (
                          <Check className="text-green-400 w-5 h-5 mx-auto" />
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
