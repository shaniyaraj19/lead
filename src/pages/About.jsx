
// // import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import CTA from '../components/CTA';
// import { GlowingCard } from '../components/ui/glowing-card';
// import SocialProof from '../components/SocialProof';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-black flex flex-col">
//       <Header />

//       <main className="flex-1 ">
//         {/* Mission Section */}
//         <section className="section-padding min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
//           <div className="container-custom text-center max-w-3xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
//               About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">LeadAccel</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
//               At <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">V-Accel</span>, we are on a mission to help ambitious businesses{' '}
//               <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">close more deals</span>,{' '}
//               <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">build better relationships</span>, and{' '}
//               <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">grow without chaos</span>.
//               We believe that every business — whether a small agency, a high-growth startup, or an established brand — deserves a simple, powerful system to manage leads, track pipelines, and drive revenue. No spreadsheets. No scattered notes. Just one place to sell smarter.
//             </p>
//           </div>
//         </section>

//         {/* Why We Built LeadAccel */}
//         <section className="section-padding bg-black">
//           <div className="container-custom max-w-4xl mx-auto">
//             <GlowingCard className="p-8 md:p-12 rounded-2xl mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why We Built LeadAccel</h2>
//               <p className="text-lg text-gray-300 mb-4">We have seen it first-hand:</p>
//               <ul className="text-gray-400 mb-4 list-disc pl-6 space-y-2">
//                 <li>Sales teams buried in Excel sheets that never match reality.</li>
//                 <li>Marketers unsure which campaigns actually drive revenue.</li>
//                 <li>Business owners frustrated by lost leads and zero visibility.</li>
//               </ul>
//               <p className="text-lg text-gray-300">We wanted to change that. So we built LeadAccel — a CRM thats refreshingly simple, deeply customizable, and designed to help your team focus on selling, not fighting software.</p>
//             </GlowingCard>
//           </div>
//         </section>

//         {/* What Makes Us Different */}
//         <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
//           <div className="container-custom max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
//             <GlowingCard className="p-8 rounded-2xl">
//               <h3 className="text-xl font-bold text-white mb-4">What Makes Us Different</h3>
//               <ul className="text-gray-300 space-y-3 text-base">
//                 <li><span className="font-semibold text-purple-400">Intuitive by design:</span> No bloated menus or endless setups. Your team can get started in hours, not weeks.</li>
//                 <li><span className="font-semibold text-pink-400">Built for growing businesses:</span> From freelancers to mid-size sales teams, we scale with you — without forcing you to pay enterprise prices from day one.</li>
//                 <li><span className="font-semibold text-blue-400">Local support that cares:</span> We know your market, your customer habits, and your business pressures. When you reach out, you all talk to real experts who want you to succeed.</li>
//               </ul>
//             </GlowingCard>
//             <GlowingCard className="p-8 rounded-2xl flex flex-col justify-center">
//               <h3 className="text-xl font-bold text-white mb-4">Who We Are</h3>
//               <p className="text-gray-300 mb-2">We are V-Accel, a technology company on a mission to help businesses scale smarter. From our headquarters in Chennai, we build powerful yet easy-to-use software that helps organizations close more deals, automate their operations, and keep growing without getting tangled in tech complexity.</p>
//             </GlowingCard>
//           </div>
//         </section>

//         {/* How We Started */}
//         <section className="section-padding bg-black">
//           <div className="container-custom max-w-4xl mx-auto">
//             <GlowingCard className="p-8 md:p-12 rounded-2xl mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How We Started</h2>
//               <p className="text-lg text-gray-300 mb-4">V-Accel began with a simple realization: most growing businesses are held back not by ambition — but by scattered systems, messy data, and tools that demand more time than they save.</p>
//               <p className="text-lg text-gray-300 mb-4">Our founders, with deep experience in software development and sales strategy, saw firsthand how companies struggled to stay on top of leads, processes, and customer relationships. They believed there had to be a better way. So they assembled a team of passionate technologists and growth-focused marketers to build solutions that are clear, customizable, and genuinely help businesses accelerate.</p>
//               <p className="text-lg text-gray-300">Today, thats exactly what we do — through products like LeadAccel, and tailored digital solutions across industries.</p>
//             </GlowingCard>
//           </div>
//         </section>

//         {/* What We Believe In */}
//         <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
//           <div className="container-custom max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
//             <GlowingCard className="p-8 rounded-2xl">
//               <h3 className="text-xl font-bold text-white mb-4">What We Believe In</h3>
//               <ul className="text-gray-300 space-y-3 text-base">
//                 <li><span className="font-semibold text-purple-400">Simplicity Wins:</span> Tech should solve problems, not create new ones. We design every product to be intuitive from day one.</li>
//                 <li><span className="font-semibold text-pink-400">Customer First, Always:</span> We grow when you grow. Your success stories are our true measure of impact.</li>
//                 <li><span className="font-semibold text-blue-400">Constant Improvement:</span> Markets change fast. So do we. We keep learning, adapting, and refining to help you stay ahead.</li>
//                 <li><span className="font-semibold text-emerald-400">Trust & Transparency:</span> We believe in long-term partnerships built on openness, accountability, and genuine care.</li>
//               </ul>
//             </GlowingCard>
//             <GlowingCard className="p-8 rounded-2xl flex flex-col justify-center">
//               <h3 className="text-xl font-bold text-white mb-4">Who We Serve</h3>
//               <p className="text-gray-300 mb-2">We are proud to partner with companies across India, the Middle East, Southeast Asia, and beyond, delivering solutions to businesses in software, manufacturing, retail, education, real estate, and healthcare.</p>
//               <p className="text-gray-300">Whether you are a lean startup closing your first few clients, or an established enterprise streamlining complex workflows, V-Accel is here to power your growth journey.</p>
//             </GlowingCard>
//           </div>
//         </section>

//         {/* Join Us Section */}
//         <section className="section-padding bg-black">
//           <div className="container-custom max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us on This Journey</h2>
//             <p className="text-lg text-gray-300 mb-8">We are not just building a product. We are helping thousands of teams sell smarter, stay organized, and grow their businesses with confidence.</p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
//               <a href="/careers" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-base">Explore Careers</a>
//               <a href="/start-trial" className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-base">Start Free Trial</a>
//               <a href="/contact" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 text-base">Talk to Sales</a>
//             </div>
//           </div>
//         </section>

//         {/* Happy Customers / Social Proof */}
//         <SocialProof />

//         {/* Culture Section */}
//         <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
//           <div className="container-custom max-w-4xl mx-auto text-center">
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Culture</h3>
//             <p className="text-lg text-gray-300 mb-8">"We believe in human connections first. Whether its inside our office or on a customer support call, we aim to make every interaction thoughtful, helpful, and real."</p>
//             <div className="flex justify-center">
//               <img
//                 src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=600&h=300&fit=crop"
//                 alt="LeadAccel Team"
//                 className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
//                 style={{ maxHeight: 300 }}
//               />
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <CTA />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default About;



// import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { GlowingCard } from '../components/ui/glowing-card';
import SocialProof from '../components/SocialProof';

const About = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Centered Mission Section */}
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">LeadAccel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              At <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">V-Accel</span>, we are on a mission to help ambitious businesses{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">close more deals</span>,{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">build better relationships</span>, and{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">grow without chaos</span>.
              We believe that every business — whether a small agency, a high-growth startup, or an established brand — deserves a simple, powerful system to manage leads, track pipelines, and drive revenue. No spreadsheets. No scattered notes. Just one place to sell smarter.
            </p>
          </div>
        </section>

        {/* Why We Built LeadAccel */}
        <section className="section-padding bg-black">
          <div className="container-custom max-w-4xl mx-auto">
            <GlowingCard className="p-8 md:p-12 rounded-2xl mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why We Built LeadAccel</h2>
              <p className="text-lg text-gray-300 mb-4">We have seen it first-hand:</p>
              <ul className="text-gray-400 mb-4 list-disc pl-6 space-y-2">
                <li>Sales teams buried in Excel sheets that never match reality.</li>
                <li>Marketers unsure which campaigns actually drive revenue.</li>
                <li>Business owners frustrated by lost leads and zero visibility.</li>
              </ul>
              <p className="text-lg text-gray-300">We wanted to change that. So we built LeadAccel — a CRM that’s refreshingly simple, deeply customizable, and designed to help your team focus on selling, not fighting software.</p>
            </GlowingCard>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container-custom max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <GlowingCard className="p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">What Makes Us Different</h3>
              <ul className="text-gray-300 space-y-3 text-base">
                <li><span className="font-semibold text-purple-400">Intuitive by design:</span> No bloated menus or endless setups. Your team can get started in hours, not weeks.</li>
                <li><span className="font-semibold text-pink-400">Built for growing businesses:</span> From freelancers to mid-size sales teams, we scale with you — without forcing you to pay enterprise prices from day one.</li>
                <li><span className="font-semibold text-blue-400">Local support that cares:</span> We know your market, your customer habits, and your business pressures. When you reach out, you talk to real experts who want you to succeed.</li>
              </ul>
            </GlowingCard>
            <GlowingCard className="p-8 rounded-2xl flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">Who We Are</h3>
              <p className="text-gray-300 mb-2">We are V-Accel, a technology company on a mission to help businesses scale smarter. From our headquarters in Chennai, we build powerful yet easy-to-use software that helps organizations close more deals, automate their operations, and keep growing without getting tangled in tech complexity.</p>
            </GlowingCard>
          </div>
        </section>

        {/* How We Started */}
        <section className="section-padding bg-black">
          <div className="container-custom max-w-4xl mx-auto">
            <GlowingCard className="p-8 md:p-12 rounded-2xl mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How We Started</h2>
              <p className="text-lg text-gray-300 mb-4">V-Accel began with a simple realization: most growing businesses are held back not by ambition — but by scattered systems, messy data, and tools that demand more time than they save.</p>
              <p className="text-lg text-gray-300 mb-4">Our founders, with deep experience in software development and sales strategy, saw firsthand how companies struggled to stay on top of leads, processes, and customer relationships. They believed there had to be a better way. So they assembled a team of passionate technologists and growth-focused marketers to build solutions that are clear, customizable, and genuinely help businesses accelerate.</p>
              <p className="text-lg text-gray-300">Today, that’s exactly what we do — through products like LeadAccel, and tailored digital solutions across industries.</p>
            </GlowingCard>
          </div>
        </section>

        {/* What We Believe In */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container-custom max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <GlowingCard className="p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">What We Believe In</h3>
              <ul className="text-gray-300 space-y-3 text-base">
                <li><span className="font-semibold text-purple-400">Simplicity Wins:</span> Tech should solve problems, not create new ones. We design every product to be intuitive from day one.</li>
                <li><span className="font-semibold text-pink-400">Customer First, Always:</span> We grow when you grow. Your success stories are our true measure of impact.</li>
                <li><span className="font-semibold text-blue-400">Constant Improvement:</span> Markets change fast. So do we. We keep learning, adapting, and refining to help you stay ahead.</li>
                <li><span className="font-semibold text-emerald-400">Trust & Transparency:</span> We believe in long-term partnerships built on openness, accountability, and genuine care.</li>
              </ul>
            </GlowingCard>
            <GlowingCard className="p-8 rounded-2xl flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">Who We Serve</h3>
              <p className="text-gray-300 mb-2">We are proud to partner with companies across India, the Middle East, Southeast Asia, and beyond, delivering solutions to businesses in software, manufacturing, retail, education, real estate, and healthcare.</p>
              <p className="text-gray-300">Whether you are a lean startup closing your first few clients, or an established enterprise streamlining complex workflows, V-Accel is here to power your growth journey.</p>
            </GlowingCard>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="section-padding bg-black">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us on This Journey</h2>
            <p className="text-lg text-gray-300 mb-8">We are not just building a product. We are helping thousands of teams sell smarter, stay organized, and grow their businesses with confidence.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a href="/careers" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-base">Explore Careers</a>
              <a href="/start-trial" className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-base">Start Free Trial</a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 text-base">Talk to Sales</a>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <SocialProof />

        {/* Culture Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Culture</h3>
            <p className="text-lg text-gray-300 mb-8">"We believe in human connections first. Whether it’s inside our office or on a customer support call, we aim to make every interaction thoughtful, helpful, and real."</p>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=600&h=300&fit=crop"
                alt="LeadAccel Team"
                className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
                style={{ maxHeight: 300 }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default About;
