// // import React from 'react';
// import { motion } from 'framer-motion';

// const Use = () => {
//   const checklist = [
//     {
//       title: "1. Your current tools feel like a patchwork",
//       points: [
//         "Are your teams wasting hours each week exporting, importing, or manually copying data?",
//         "Do you face errors because two systems don’t “talk” to each other?",
//         "A unified custom platform could consolidate workflows, reduce errors, and save time."
//       ],
//     },
//     {
//       title: "2. You’re losing opportunities due to rigid processes",
//       points: [
//         "Have you ever dropped a business idea because your software couldn’t support it?",
//         "Are your teams using spreadsheets or manual methods due to software limitations?",
//         "Custom software enables innovation by aligning with your processes."
//       ],
//     },
//     {
//       title: "3. Data-driven decisions are harder than they should be",
//       points: [
//         "Do you lack a single source of truth for your operations?",
//         "Are managers spending time cleaning and merging data for basic dashboards?",
//         "Custom dashboards let you track exactly what matters — in real time."
//       ],
//     },
//     {
//       title: "4. Customer experience is starting to suffer",
//       points: [
//         "Are customers chasing updates on orders or support requests?",
//         "Have mistakes from manual data handling led to customer dissatisfaction?",
//         "Custom software keeps your backend streamlined and customers happy."
//       ],
//     },
//     {
//       title: "5. You’re planning to scale aggressively",
//       points: [
//         "Are you expanding to multiple locations, teams, or service lines?",
//         "Do you anticipate workflows your current tools can’t support?",
//         "Custom platforms grow with you without licensing restrictions."
//       ],
//     },
//   ];

//   return (
//     <section className="bg-black text-white min-h-screen pt-28 px-4 md:px-8 lg:px-16">
//       <div className="max-w-5xl mx-auto">
//         <motion.h1 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold mb-6 text-purple-400"
//         >
//           Is Your Business Ready for Custom Software?
//         </motion.h1>

//         <motion.p 
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           transition={{ delay: 0.2 }}
//           className="text-gray-300 text-lg mb-8"
//         >
//           A Practical Checklist for CTOs & CEOs to determine readiness for custom software solutions.
//         </motion.p>

//         <div className="space-y-12">
//           {checklist.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//             >
//               <h2 className="text-xl md:text-2xl font-semibold text-purple-300 mb-4">{item.title}</h2>
//               <ul className="list-disc list-inside space-y-2 text-gray-300">
//                 {item.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <p className="text-gray-300 text-lg mb-4">
//             🚦 If you ticked 3 or more, it’s time to explore custom software.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
//           >
//             Talk to Our Team
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Use;
import { motion } from 'framer-motion';
import { GlowingCard } from '../components/ui/glowing-card';

const checklistItems = [
  {
    title: "Your current tools feel like a patchwork",
    description: "Are your teams wasting hours each week exporting, importing, or manually copying data? Do you face errors because two systems don't “talk” to each other?",
    solution: "A unified custom platform could consolidate these workflows, cut down errors, and save serious time."
  },
  {
    title: "You're losing opportunities due to rigid processes",
    description: "Have you ever dropped a business idea because your software couldn't support it? Are your teams working around software limitations by using spreadsheets or manual methods?",
    solution: "Custom software is literally built around your processes, enabling innovation instead of blocking it."
  },
  {
    title: "Data-driven decisions are harder than they should be",
    description: "Do you lack a single source of truth for your operations? Are managers spending time cleaning and merging data to get basic dashboards?",
    solution: "With a custom solution, you can design dashboards that track exactly what matters to your business, in real-time."
  },
  {
    title: "Customer experience is starting to suffer",
    description: "Are customers chasing updates on orders or support requests? Have mistakes from manual data handling led to customer dissatisfaction?",
    solution: "Custom software can automate critical customer interactions and keep everything streamlined behind the scenes."
  },
  {
    title: "You're planning to scale aggressively",
    description: "Are you expanding to multiple locations, teams, or service lines? Do you anticipate unique workflows that your current tools can't support?",
    solution: "Custom software is an investment that grows with you, without forcing you into expensive licensing tiers."
  }
];

const Use = () => {
  return (
    <section className="bg-black text-white min-h-screen pt-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-purple-400"
        >
          ✅ A Practical Checklist for CTOs & CEOs
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg mb-8"
        >
          Here's a simple way to assess your readiness. Tick the points that resonate. By the end, you'll have a clear sense of whether it's time to explore a custom solution.
        </motion.p>

        <div className="space-y-12">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowingCard className="card-gradient rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <p className="text-purple-300 text-sm leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-300 text-lg mb-4">
            🚦 If you ticked 3 or more, it’s time to explore custom software.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Talk to Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Use;
