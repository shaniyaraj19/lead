import { motion } from 'framer-motion';
import { useState } from 'react';
import { GlowingCard } from '../components/ui/glowing-card';
import { Check, Star, Users, Target,Zap, Shield, Clock } from 'lucide-react';

const StartTrial = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    teamSize: '',
    industry: '',
    currentCRM: '',
    agreeToTerms: false,
    subscribeToUpdates: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Trial signup:', formData);
    setIsSubmitting(false);
    
    // Here you would typically redirect to the dashboard or show success message
    alert('Welcome to LeadAccel! Check your email for login details.');
  };

  const trialBenefits = [
    {
      icon: Clock,
      title: '14 Days Free',
      description: 'Full access to all features with no credit card required',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Unlimited Users',
      description: 'Add your entire team during the trial period',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Target,
      title: '1000 Free Leads',
      description: 'Import and manage up to 1000 leads during trial',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Premium Support',
      description: 'Get priority support and onboarding assistance',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const trialFeatures = [
    'Complete CRM functionality',
    'WhatsApp integration',
    'Email automation',
    'Pipeline management',
    'Lead scoring',
    'Custom workflows',
    'Advanced reporting',
    'Mobile app access',
    'Data import/export',
    'Team collaboration tools',
    'Integration with 50+ apps',
    'Priority customer support'
  ];

  const testimonials = [
    {
      quote: "We saw a 40% increase in lead conversion within the first week of using LeadAccel.",
      author: "Priya Sharma",
      position: "Sales Director, TechFlow Solutions",
      rating: 5
    },
    {
      quote: "The setup was incredibly easy. We were up and running in 10 minutes!",
      author: "Rajesh Kumar",
      position: "CEO, GrowthCorp",
      rating: 5
    },
    {
      quote: "Finally, a CRM that doesn't get in the way of selling. Highly recommended!",
      author: "Anita Desai",
      position: "Sales Manager, InnovateLabs",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.8, 0.4],
              x: [0, 30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Try LeadAccel{' '}
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Risk-Free
              </span>{' '}
              for 14 Days
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              No credit card required. No setup fees. Get full access to all features and see how LeadAccel can transform your sales process.
            </motion.p>

            <motion.div
              className="flex items-center justify-center space-x-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>14 Days Free</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Cancel Anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trial Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What You Get During Your <span className="text-gradient">Free Trial</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experience the full power of LeadAccel with no limitations or restrictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trialBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <GlowingCard className="card-gradient rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form & Features */}
      <section className="section-padding bg-slate-800/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowingCard className="card-gradient rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Start Your Free Trial</h3>
                  <p className="text-slate-300">Join thousands of sales teams already using LeadAccel</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Team Size
                      </label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select team size</option>
                        <option value="1-5">1-5 people</option>
                        <option value="6-20">6-20 people</option>
                        <option value="21-50">21-50 people</option>
                        <option value="51-100">51-100 people</option>
                        <option value="100+">100+ people</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Industry
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="education">Education</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Current CRM (if any)
                    </label>
                    <select
                      name="currentCRM"
                      value={formData.currentCRM}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select current CRM</option>
                      <option value="none">No CRM currently</option>
                      <option value="salesforce">Salesforce</option>
                      <option value="hubspot">HubSpot</option>
                      <option value="pipedrive">Pipedrive</option>
                      <option value="zoho">Zoho CRM</option>
                      <option value="freshworks">Freshworks</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                        className="mt-1 mr-3 w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
                      />
                      <label className="text-gray-300 text-sm">
                        I agree to the{' '}
                        <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                          Privacy Policy
                        </a>
                        *
                      </label>
                    </div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="subscribeToUpdates"
                        checked={formData.subscribeToUpdates}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
                      />
                      <label className="text-gray-300 text-sm">
                        Send me product updates and sales tips (optional)
                      </label>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? 'Creating Your Account...' : 'Start Free Trial'}
                  </motion.button>

                  <p className="text-center text-gray-400 text-sm">
                    Your trial starts immediately. No credit card required.
                  </p>
                </form>
              </GlowingCard>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Everything Included in Your <span className="text-gradient">Free Trial</span>
                </h3>
                <GlowingCard className="card-gradient rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trialFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlowingCard>
              </div>

              {/* Trust Indicators */}
              <GlowingCard className="card-gradient rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4 text-center">
                  Trusted by 500+ Growing Businesses
                </h4>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-slate-300 ml-2">4.8/5 average rating</span>
                </div>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-2 border-purple-500 pl-4">

                      <p className="text-slate-300 text-sm italic mb-2"></p>

                      {/* <p className="text-slate-300 text-sm italic mb-2">"{testimonial.quote}"</p> */}

                      <div className="text-xs text-slate-400">
                        <span className="font-medium">{testimonial.author}</span>
                        <span className="mx-1">•</span>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlowingCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Questions About Your <span className="text-gradient">Free Trial?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Do I need a credit card to start?",
                answer: "No! You can start your 14-day free trial without providing any payment information."
              },
              {
                question: "What happens after my trial ends?",
                answer: "You can choose to upgrade to a paid plan or your account will be paused. Your data is safely stored for 30 days."
              },
              {
                question: "Can I import my existing data?",
                answer: "Yes! We provide free data migration assistance from all major CRMs and spreadsheets."
              },
              {
                question: "Is there any setup required?",
                answer: "LeadAccel is designed for instant setup. You'll be up and running in under 15 minutes."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowingCard className="card-gradient rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default StartTrial;