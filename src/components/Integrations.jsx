// import { motion } from 'framer-motion';
// import { GlowingCard } from './ui/glowing-card';

// const Integrations = () => {
//   const integrations = [
//     { name: 'Gmail', category: 'Email' },
//     { name: 'Outlook', category: 'Email' },
//     { name: 'Zoom', category: 'Communication' },
//     { name: 'Slack', category: 'Communication' },
//     { name: 'WhatsApp', category: 'Messaging' },
//     { name: 'Zapier', category: 'Automation' },
//     { name: 'Google Sheets', category: 'Productivity' },
//     { name: 'LinkedIn', category: 'Social' }
//   ];

//   return (
//     <section className="section-padding bg-slate-800/30">
//       <div className="container-custom">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl  font-bold text-white mb-6">
//             Connect LeadAccel with your <span className="text-gradient">favorite tools</span>
//           </h2>
//           <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//             No CRM exists in a silo. LeadAccel integrates with the platforms you already use—and makes them more powerful.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//           {integrations.map((integration, index) => (
//             <motion.div
//               key={integration.name}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05, y: -5 }}
//             >
//               <GlowingCard className="card-gradient rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
//                 <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
//                   <span className="text-white font-bold text-lg">{integration.name[0]}</span>
//                 </div>
//                 <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
//                 <p className="text-slate-400 text-sm">{integration.category}</p>
//               </GlowingCard>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-slate-300 mb-6">And many more integrations available...</p>
//           <motion.button
//             className="btn-secondary"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             View All Integrations
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Integrations;

import { motion } from 'framer-motion';
import { GlowingCard } from './ui/glowing-card';

const Integrations = () => {
  const integrations = [
    { name: 'Gmail', category: 'Email' },
    { name: 'Outlook', category: 'Email' },
    { name: 'Zoom', category: 'Communication' },
    { name: 'Slack', category: 'Communication' },
    { name: 'WhatsApp', category: 'Messaging' },
    { name: 'Zapier', category: 'Automation' },
    { name: 'Google Sheets', category: 'Productivity' },
    { name: 'LinkedIn', category: 'Social' }
  ];

  return (
    <section className="section-padding bg-slate-800/30">
      <div className="container-custom">
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 lg:px-8">
            Connect LeadAccel with your <span className="text-gradient">favorite tools</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            No CRM exists in a silo. LeadAccel integrates with the platforms you already use—and makes them more powerful.
          </p>
        </motion.div> */}
        <motion.div
  className="text-center mb-16"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className=" text-4xl md:text-5xl  font-bold text-white mb-6 lg:px-8">
    Connect LeadAccel with your <br /> <span className="text-gradient">favorite tools</span>
  </h2>
  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
    No CRM exists in a silo. LeadAccel integrates with the platforms you already use—and makes them more powerful.
  </p>
</motion.div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <GlowingCard className="card-gradient rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{integration.name[0]}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                <p className="text-slate-400 text-sm">{integration.category}</p>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 mb-6">And many more integrations available...</p>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Integrations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
