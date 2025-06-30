import { motion } from 'framer-motion';
import { GlowingCard } from '../ui/glowing-card';

const IntegrationsShowcase = () => {
  const integrationCategories = [
    {
      title: 'Email & Communication',
      integrations: ['Gmail', 'Outlook', 'WhatsApp', 'Slack']
    },
    {
      title: 'Productivity',
      integrations: ['Google Sheets', 'Zoom', 'Zapier', 'Calendly']
    },
    {
      title: 'Marketing',
      integrations: ['Facebook Ads', 'LinkedIn', 'Mailchimp', 'HubSpot']
    },
    {
      title: 'Developer Tools',
      integrations: ['Webhooks', 'REST API', 'Custom Integrations', 'Zapier']
    }
  ];

  return (
    <section className="section-padding bg-slate-800/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            <span className="text-gradient">Connect LeadAccel</span> with Your Favorite Tools
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            No CRM exists in a silo. LeadAccel integrates with the platforms you already use — and makes them more powerful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <GlowingCard className="card-gradient rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.integrations.map((integration, integrationIndex) => (
                    <motion.div
                      key={integration}
                      className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-600/50 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: integrationIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{integration[0]}</span>
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{integration}</span>
                    </motion.div>
                  ))}
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
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

export default IntegrationsShowcase;