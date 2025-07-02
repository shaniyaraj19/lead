// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
      
//       {/* Animated Grid Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>
      
//       {/* Dynamic Gradient Orbs */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.3, 0.7, 0.3],
//             x: [0, 50, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.6, 0.3, 0.6],
//             x: [0, -40, 0],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.4, 1],
//             opacity: [0.4, 0.8, 0.4],
//             x: [0, 30, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="container-custom relative z-10">
//         <div className="text-center max-w-5xl mx-auto">
//           {/* Main Headline */}
//           <motion.h1
//             className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             Close More Deals.{' '}
//             <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//               Grow Faster.
//             </span>{' '}
//             Stay Organized.
//           </motion.h1>
          

//         {/* Sub-headline */}
//           <motion.p
//             className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           >
//             LeadAccel helps sales teams capture, manage, and convert leads with ease—on one smart, clutter-free CRM platform.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//           >
//             <Link to="/start-trial">
//               <motion.button
//                 className="btn-primary text-base px-8 py-4 w-full sm:w-auto shadow-2xl shadow-purple-500/25"
//                 whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)" }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Start Free Trial
//               </motion.button>
//             </Link>
//             <Link to ="/book-demo">
//             <motion.button
//               className="btn-secondary text-base px-8 py-4 w-full sm:w-auto"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Book a Demo
//             </motion.button>
//             </Link>
//           </motion.div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-56 md:w-64 h-56 md:h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Close More Deals.{' '}
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Grow Faster.
            </span>{' '}
            Stay Organized.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            LeadAccel helps sales teams capture, manage, and convert leads with
            ease—on one smart, clutter-free CRM platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Link to="/start-trial">
              <motion.button
                className="btn-primary text-base px-8 py-4 w-full sm:w-auto shadow-2xl shadow-purple-500/25"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    '0 25px 50px -12px rgba(168, 85, 247, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
            </Link>
            <Link to="/book-demo">
              <motion.button
                className="btn-secondary text-base px-8 py-4 w-full sm:w-auto"
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
  );
};

export default Hero;






// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
      
//       {/* Animated Grid Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
//           backgroundSize: '30px 30px sm:40px sm:40px lg:50px lg:50px'
//         }}></div>
//       </div>
      
//       {/* Dynamic Gradient Orbs - Responsive positioning */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-1/4 left-1/6 sm:left-1/5 lg:left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl"
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.3, 0.7, 0.3],
//             x: [0, 30, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute top-2/3 sm:top-3/4 right-1/6 sm:right-1/5 lg:right-1/4 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl sm:blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.6, 0.3, 0.6],
//             x: [0, -25, 0],
//             y: [0, 15, 0],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute top-1/2 right-1/4 sm:right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-xl sm:blur-2xl lg:blur-3xl"
//           animate={{
//             scale: [1, 1.4, 1],
//             opacity: [0.4, 0.8, 0.4],
//             x: [0, 20, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto">
//         <div className="text-center">
//           {/* Main Headline */}
//           <motion.h1
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             Close More Deals.{' '}
//             <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block sm:inline">
//               Grow Faster.
//             </span>{' '}
//             <span className="block sm:inline">Stay Organized.</span>
//           </motion.h1>
          
//           {/* Sub-headline */}
//           <motion.p
//             className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           >
//             LeadAccel helps sales teams capture, manage, and convert leads with ease—on one smart, clutter-free CRM platform.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-8 sm:mb-12 px-4"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//           >
//             <Link to="/start-trial" className="w-full sm:w-auto">
//               <motion.button
//                 className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full shadow-2xl shadow-purple-500/25"
//                 whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)" }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Start Free Trial
//               </motion.button>
//             </Link>
//             <Link to="/book-demo" className="w-full sm:w-auto">
//               <motion.button
//                 className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Book a Demo
//               </motion.button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
