import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const FeaturesHero = () => {
  return (
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
            Everything You Need to{' '}
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Capture, Nurture, and Close
            </span>{' '}
            Leads
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            From first contact to final conversion, LeadAccel helps your team work faster, sell smarter, and stay in complete control of your pipeline.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
             <Link to="/start-trial">
            <motion.button
              className="btn-primary text-base px-8 py-4 w-full sm:w-auto shadow-2xl shadow-purple-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
            </Link> 
            <Link to ="/pricing">
            <motion.button
              className="btn-secondary text-base px-8 py-4 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.button>
             </Link >
          </motion.div>
         
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;