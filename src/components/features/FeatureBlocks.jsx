import { motion } from 'framer-motion';
import { GlowingCard } from '../ui/glowing-card';
import { Target, BarChart3, Settings, Phone, TrendingUp, Users } from 'lucide-react';

const FeatureBlocks = () => {
  const features = [
    {
      icon: Target,
      title: 'Capture Leads From Every Source',
      description: 'Automatically pull in leads from web forms, landing pages, emails, WhatsApp, LinkedIn, and more. No more copy-paste or missing prospects.',
      highlights: [
        'Web form to CRM sync',
        'WhatsApp, Email & LinkedIn integrations',
        'Lead duplication detection',
        'Auto-tagging based on source'
      ],
      gradient: 'from-primary-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Drag-and-Drop Pipeline That Reflects Your Sales Reality',
      description: 'Track deals across customizable stages. Assign owners, set priorities, and update statuses with simple drag-and-drop movement.',
      highlights: [
        'Multiple pipelines for different teams',
        'Stage-wise performance tracking',
        'Deal value forecasting',
        'Activity logs for accountability'
      ],
      gradient: 'from-secondary-500 to-green-600'
    },
    {
      icon: Settings,
      title: 'Automate Tasks, Emails, and Alerts',
      description: 'Build workflows to auto-assign leads, schedule follow-ups, and trigger reminders so your team never misses a beat.',
      highlights: [
        'No-code workflow builder',
        'Automated email replies & task creation',
        'Lead scoring triggers',
        'Notifications via email or WhatsApp'
      ],
      gradient: 'from-accent-500 to-orange-600'
    },
    {
      icon: Phone,
      title: 'Call, Email, or WhatsApp — Without Leaving the CRM',
      description: 'No tab-hopping. Use LeadAccel\'s built-in communication tools to engage with leads directly from the dashboard.',
      highlights: [
        'WhatsApp message templates',
        'Email sequences with open tracking',
        'Call logs with timestamps',
        'Reply-to-Lead from timeline view'
      ],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Know What\'s Working. Fix What\'s Not.',
      description: 'Get real-time visibility into lead sources, pipeline health, sales team performance, and conversion rates.',
      highlights: [
        'Lead conversion reports',
        'Sales rep performance dashboards',
        'Deal velocity tracking',
        'Exportable CSV/PDF reports'
      ],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Work as a Team. Close as a Team.',
      description: 'Assign leads, share notes, mention teammates, and keep everyone aligned with team-based access control.',
      highlights: [
        'Internal tagging and notes',
        'Activity timeline per lead',
        'Team-based permissions',
        'Comment threads for collaboration'
      ],
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Feature Content */}
              <div className="flex-1 space-y-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlightIndex}
                      className="flex items-center text-slate-300 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mr-4"></div>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Feature Visual */}
              <motion.div
                className="flex-1 max-w-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GlowingCard className="card-gradient rounded-2xl p-8 h-72 flex items-center justify-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center opacity-80`}>
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                </GlowingCard>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;