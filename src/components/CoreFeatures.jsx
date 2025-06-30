import { motion } from 'framer-motion';
import { GlowingCard } from './ui/glowing-card';
import { Target, Settings, BarChart3, Phone } from 'lucide-react';

const CoreFeatures = () => {
  const features = [
    {
      icon: Target,
      title: 'Smart Lead Management',
      description: 'Capture leads from all your sources—web forms, email, WhatsApp, LinkedIn—and route them instantly to your sales team.',
      gradient: 'from-purple-500 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Powerful Automation',
      description: 'Create workflows to assign leads, send follow-ups, and trigger alerts—so nothing gets missed.',
      gradient: 'from-pink-500 to-red-600'
    },
    {
      icon: BarChart3,
      title: 'Visual Sales Pipeline',
      description: 'Drag-and-drop deal stages, assign owners, and forecast revenue in real time.',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Built-in Communication Tools',
      description: 'Connect with leads via email, phone, or WhatsApp from within the CRM. No switching tabs.',
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Everything you need to <span className="text-gradient">win deals</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From lead capture to deal closure, LeadAccel provides all the tools your sales team needs to succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <GlowingCard className="card-gradient rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;