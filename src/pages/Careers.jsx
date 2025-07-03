import Header from '../components/Header';
import { motion } from 'framer-motion';
import { GlowingEffect } from '../components/ui/glowing-effect';

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
    title: 'Business Development',
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
      <main className="flex-1">
        {/* Hero / Mission Section */}
        <section className="section-padding bg-gradient-to-br min-h-screen from-gray-900 via-black to-gray-800">
          <div className="max-w-3xl mx-auto text-center px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold lg:text-8xl mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join the
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {' '}LeadAccel Team
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At V-Accel, we are on a mission to help ambitious businesses close more deals, build better relationships, and grow without chaos. We believe in simplicity, customer-first thinking, and constant improvement. Want to be part of our story?
            </motion.p>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="max-w-4xl mx-auto px-4">
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
                  className="relative bg-black/70 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                    <div className="flex items-center text-sm text-gray-400 mb-2 gap-4">
                      <span>{role.location}</span>
                      <span className="px-2 py-1 bg-purple-900/30 rounded-full text-purple-300 font-semibold">{role.type}</span>
                    </div>
                    <p className="text-gray-300 mb-4 flex-1">{role.description}</p>
                    <a
                      href={`mailto:careers@v-accel.ai?subject=Application for ${encodeURIComponent(role.title)}`}
                      className="mt-auto inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-base"
                    >
                      Apply Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-black">
          <div className="max-w-3xl mx-auto text-center px-4">
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
                  className={`bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg py-4 px-6 ${
                    idx === benefits.length - 1 && benefits.length % 2 !== 0 ? 'md:col-span-2 mx-auto w-full md:w-1/2' : ''
                  }`}
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
              Dont see your role? Send us your profile
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Careers;
