// import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlowingCard } from '../components/ui/glowing-card';
import CTA from '../components/CTA';
import {
  Target,
  Megaphone,
  Headphones,
  Building2,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

const UseCasePage = () => {
  const useCases = [
    {
      icon: Target,
      title: 'Sales Teams',
      subtitle: 'Turn More Conversations Into Closed Deals',
      description:
        'Never lose track of a hot prospect again. LeadAccel gives your sales team a clear pipeline, automated reminders, and all lead details in one place.',
      features: [
        'See exactly where every deal stands',
        'Get daily tasks auto-generated for your reps',
        'Prioritize leads most likely to close with smart scoring',
      ],
      testimonial: {
        quote: 'We reduced our sales cycle by 28%.',
        author: 'Kavya S., Sales Director',
      },
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      textColor: 'text-purple-400',
    },
    {
      icon: Megaphone,
      title: 'Marketing Teams',
      subtitle: 'Capture, Track, and Nurture Leads at Scale',
      description:
        'Track every form, ad, and campaign through to revenue. Know what works.',
      features: [
        'Auto-capture leads from Facebook, LinkedIn, Google',
        'Segment audiences by campaign source',
        'Run drip emails automatically',
      ],
      testimonial: {
        quote: 'Know your true ROI — and double down on what works.',
        author: 'Marketing Team',
      },
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-900/20 to-teal-900/20',
      textColor: 'text-emerald-400',
    },
    {
      icon: Headphones,
      title: 'Support & Success Teams',
      subtitle: 'Convert Inquiries Into Opportunities',
      description:
        'Your support team can identify upsell moments and keep customer records unified.',
      features: [
        'Convert tickets into deals in one click',
        'Full timeline of customer interactions',
        'Seamless sales + support collaboration',
      ],
      testimonial: {
        quote: 'Better customer experience. More lifetime value.',
        author: 'Customer Success Team',
      },
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-900/20 to-red-900/20',
      textColor: 'text-orange-400',
    },
    {
      icon: Building2,
      title: 'Agencies & B2B Service Providers',
      subtitle: 'Manage Leads for Multiple Clients',
      description:
        'Run multiple pipelines for multiple clients — clean, organized, and trackable.',
      features: [
        'Organize leads by client brand',
        'White-labeled dashboards',
        'Report exactly how many leads closed',
      ],
      testimonial: {
        quote: 'Show clear ROI. Boost client trust. Grow retainers.',
        author: 'Agency Lead',
      },
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      textColor: 'text-blue-400',
    },
  ];

  const industries = [
    {
      title: 'Real Estate',
      description: 'Track listings, buyers, and brokers in one view.',
      icon: Building2,
    },
    {
      title: 'Finance',
      description: 'Manage applications, compliance docs, and follow-ups.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Animation */}
      <section className="bg-gradient-to-br from-gray-900 min-h-screen via-black to-gray-800 py-16 md:py-24">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              How Different Teams Win with{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                LeadAccel
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Built for every team that touches revenue. Whether you&apos;re in
              sales, marketing, or support — LeadAccel adapts to your workflow.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <Link to="/start-trial">
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-colors shadow-lg w-full sm:w-auto"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
              </Link>

              <Link to="/book-demo">
                <motion.button
                  className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 hover:bg-gray-800 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Demo
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div
                    className={`inline-flex items-center bg-gradient-to-r ${useCase.bgColor} ${useCase.textColor} px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gray-700`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {useCase.title}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {useCase.subtitle}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm md:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <GlowingCard
                    className={`bg-gradient-to-r ${useCase.bgColor} p-6 rounded-xl border border-gray-700 mb-8`}
                  >
                    <p className="text-gray-300 italic mb-2">
                      "{useCase.testimonial.quote}"
                    </p>
                    <cite
                      className={`${useCase.textColor} font-semibold not-italic`}
                    >
                      — {useCase.testimonial.author}
                    </cite>
                  </GlowingCard>
                  <button
                    className={`bg-gradient-to-r ${useCase.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-colors transform hover:scale-105`}
                  >
                    {useCase.title === 'Sales Teams'
                      ? 'Start Free Trial'
                      : useCase.title === 'Marketing Teams'
                      ? 'See Marketing Features'
                      : useCase.title === 'Support & Success Teams'
                      ? 'Explore Customer Tools'
                      : 'See How Agencies Use Us'}
                  </button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <GlowingCard
                    className={`bg-gradient-to-br ${useCase.bgColor} rounded-2xl p-8 lg:p-12 border border-gray-700`}
                  >
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {useCase.title}
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {useCase.features.map((feature, i) => (
                          <div
                            key={i}
                            className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                          >
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlowingCard>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tailored Pipelines for Your Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
               We&apos;ll customize stages to fit your business — no tech headaches
              needed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <GlowingCard
                  key={industry.title}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-gray-600 hover:shadow-xl transition-colors"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {industry.description}
                  </p>
                </GlowingCard>
              );
            })}
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-colors transform hover:scale-105 shadow-lg">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default UseCasePage;
