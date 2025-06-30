import { motion } from 'framer-motion';

const ProblemPromise = () => {
  return (
    <section className="section-padding bg-slate-800/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Sales shouldn't slip through the cracks.
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Messy spreadsheets, missed follow-ups, and disconnected tools cost you time—and revenue.
          </motion.p>
          
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-semibold text-white">
              With LeadAccel, you track every lead, automate your workflow, and finally focus on what matters: <span className="text-yellow-300">closing.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemPromise;