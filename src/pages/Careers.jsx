import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const openRoles = [
    {
      title: 'Sales Development Representative',
      location: 'Remote / Chennai',
      type: 'Full-time',
      description: "Drive new business by qualifying leads and setting up demos for our sales team. Great for energetic communicators who love helping businesses grow."
    },
    {
      title: 'Frontend React Developer',
      location: 'Remote / Chennai',
      type: 'Full-time',
      description: 'Build beautiful, high-performance UIs for our CRM platform. Experience with React and Tailwind CSS required.'
    },
    {
      title: 'Business Deveolpment',
      location: 'Remote / Chennai',
      type: 'Full-time',
      description: 'Help our customers get the most out of LeadAccel. You\'ll onboard new users, answer questions, and turn feedback into product improvements.'
    },
    {
      title: 'FullStack Developer',
      location: 'Remote / Chennai',
      type: 'Full-time',
      description: 'Help our customers get the most out of LeadAccel. You\'ll onboard new users, answer questions, and turn feedback into product improvements.'
    }
  ];
  

const benefits = [
  'Flexible remote work options',
  'Competitive salary & performance bonuses',
  'Learning budget for courses & certifications',
  'Collaborative, growth-focused team culture',
  'Opportunity to make a real impact for thousands of businesses',
  'Modern tech stack & tools',
  'Health insurance (India-based employees)'
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero / Mission Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container-custom max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join the LeadAccel Team
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At V-Accel, we're on a mission to help ambitious businesses close more deals, build better relationships, and grow without chaos. We believe in simplicity, customer-first thinking, and constant improvement. Want to be part of our story?
            </motion.p>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="section-padding bg-black">
          <div className="container-custom max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Why Work With Us?</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 text-base">
                <li>Build products that make a real difference for thousands of businesses</li>
                <li>Work with a passionate, supportive, and growth-focused team</li>
                <li>Flexible work options—remote or from our Chennai HQ</li>
                <li>Opportunities to learn, grow, and take ownership</li>
                <li>We celebrate wins, learn from losses, and always put customers first</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 shadow-xl flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 text-base">
                <li><span className="font-semibold text-purple-400">Simplicity Wins:</span> Tech should solve problems, not create new ones.</li>
                <li><span className="font-semibold text-pink-400">Customer First, Always:</span> We grow when our customers grow.</li>
                <li><span className="font-semibold text-blue-400">Constant Improvement:</span> We keep learning, adapting, and refining.</li>
                <li><span className="font-semibold text-emerald-400">Trust & Transparency:</span> We believe in long-term partnerships built on openness and care.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container-custom max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Open Roles
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {openRoles.map((role, idx) => (
                <motion.div
                  key={role.title}
                  className="bg-black/70 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                  <div className="flex items-center text-sm text-gray-400 mb-2 gap-4">
                    <span>{role.location}</span>
                    <span className="px-2 py-1 bg-purple-900/30 rounded-full text-purple-300 font-semibold">{role.type}</span>
                  </div>
                  <p className="text-gray-300 mb-4 flex-1">{role.description}</p>
                  <a
                    href="mailto:careers@v-accel.ai?subject=Application for "
                    className="mt-auto inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-base"
                  >
                    Apply Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-black">
          <div className="container-custom max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Benefits & Perks
            </motion.h2>
            <ul className="grid gap-4 md:grid-cols-2 text-gray-300 text-base mb-8">
              {benefits.map((benefit, idx) => (
                <motion.li
                  key={benefit}
                  className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg py-4 px-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  {benefit}
                </motion.li>
              ))}
            </ul>
            <a
              href="mailto:careers@v-accel.ai?subject=General%20Application"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-base"
            >
              Don't see your role? Send us your profile
            </a>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Careers; 