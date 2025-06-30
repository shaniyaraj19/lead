import { motion } from 'framer-motion';
import { GlowingCard } from './ui/glowing-card';
import { Target, Megaphone, Headphones } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Target,
      title: 'Sales Teams',
      description: 'Stay on top of every opportunity.',
      features: ['Pipeline Management', 'Deal Tracking', 'Revenue Forecasting'],
      color: 'from-primary-500 to-blue-600'
    },
    {
      icon: Megaphone,
      title: 'Marketing Teams',
      description: 'Track lead sources and campaigns.',
      features: ['Campaign Attribution', 'Lead Scoring', 'ROI Analysis'],
      color: 'from-secondary-500 to-green-600'
    },
    {
      icon: Headphones,
      title: 'Support Teams',
      description: 'Convert inbound queries into deals.',
      features: ['Ticket to Lead', 'Query Resolution', 'Customer Success'],
      color: 'from-accent-500 to-orange-600'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Built for every team that touches <span className="text-gradient">revenue</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Whether you're in sales, marketing, or support, LeadAccel adapts to your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <GlowingCard className="card-gradient rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-400 flex items-center justify-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;