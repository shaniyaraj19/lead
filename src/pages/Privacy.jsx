// // import React from 'react';
// // import Header from '../components/Header';
// // import Footer from '../components/Footer';
// // import CTA from '../components/CTA';

// const Privacy = () => {
//   return (
//     <div className="min-h-screen bg-black flex flex-col">
//       {/* <Header /> */}
//       <main className="flex-1">
//         <section className="section-padding bg-gradient-to-br from-gray-900 via-black  min-h-screen to-gray-800">
//           <div className="container-custom max-w-3xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight text-center">Privacy Policy</h1>
//             <p className="text-gray-400 text-center mb-2">Last updated: 01.07.2025</p>
//             <p className="text-lg text-gray-300 mb-8 text-center">At V-Accel, we take your privacy seriously. Whether you&apos;re browsing our website, signing up for a free trial of LeadAccel, or partnering with us for your software needs, we are committed to protecting your personal data.</p>
//             <div className="space-y-10">
//               {/* Section 1 */}
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-3">1. Your Privacy Matters</h2>
//                 <p className="text-gray-300 mb-2">This Privacy Policy explains:</p>
//                 <ul className="list-disc pl-6 text-gray-400 space-y-1">
//                   <li>What information we collect</li>
//                   <li>How we use it</li>
//                   <li>How we keep it secure</li>
//                   <li>Your rights and choices</li>
//                 </ul>
//               </div>
//               {/* Section 2 */}
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-3">2. What Information We Collect</h2>
//                 <p className="text-gray-300 mb-2">Depending on how you interact with us, we may collect:</p>
//                 <ul className="list-disc pl-6 text-gray-400 mb-2">
//                   <li><span className="font-semibold text-white">Information you provide directly:</span> Name, email address, phone number, company details, payment details (handled securely by our payment processors), any data you submit via forms, emails, or support chats.</li>
//                   <li><span className="font-semibold text-white">Information we collect automatically:</span> Usage data (like pages visited, buttons clicked, time on site), device info (IP address, browser type, operating system), cookies & similar technologies (for analytics, preferences, and security).</li>
//                   <li><span className="font-semibold text-white">Information from third parties:</span> Integrations you connect (e.g., Gmail, WhatsApp API, LinkedIn), publicly available business data or references.</li>
//                 </ul>
//               </div>
//               {/* Section 3 */}
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Data</h2>
//                 <ul className="list-disc pl-6 text-gray-400 mb-2">
//                   <li>Provide, maintain, and improve our products & services</li>
//                   <li>Set up and manage your account</li>
//                   <li>Process transactions and send billing notices</li>
//                   <li>Send product updates, offers, or helpful resources</li>
//                   <li>Respond to your support requests</li>
//                   <li>Ensure platform security and prevent fraud</li>
//                 </ul>
//                 <p className="text-gray-300">We never sell your data to third parties.</p>
//               </div>
//               {/* Section 4 */}
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-3">4. How We Share Information</h2>
//                 <ul className="list-disc pl-6 text-gray-400 mb-2">
//                   <li>Trusted service providers who help us run our business (like payment gateways, email delivery tools, analytics services), under strict confidentiality.</li>
//                   <li>Legal authorities if required by law or to protect our rights.</li>
//                   <li>Integration partners, but only with your explicit authorization.</li>
//                 </ul>
//               </div>
//               {/* Section 5 */}
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-3">5. How We Keep Your Data Safe</h2>
//                 <ul className="list-disc pl-6 text-gray-400 mb-2">
//                   <li>Data encryption (in transit & at rest)</li>
//                   <li>Secure data centers with controlled access</li>
//                   <li>Regular security audits & monitoring</li>
//                 </ul>
//                 <p className="text-gray-300">However, no online platform is 100% secure. We encourage you to use strong passwords and keep your credentials confidential.</p>
//               </div>
//               {/* Section 6 */}
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-3">6. Your Rights & Choices</h2>
//                 <ul className="list-disc pl-6 text-gray-400 mb-2">
//                   <li>Access the personal data we hold about you</li>
//                   <li>Correct or update your information</li>
//                   <li>Delete your account and associated data (subject to legal obligations)</li>
//                   <li>Opt out of marketing emails by clicking &quot;Unsubscribe&quot; in any email</li>
//                 </ul>
//                 <p className="text-gray-300">To exercise these rights, just email us at <a href="mailto:privacy@v-accel.ai" className="text-purple-400 underline">privacy@v-accel.ai</a>.</p>
//               </div>
//               {/* Section 7 */}
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-3">7. Cookies & Tracking</h2>
//                 <ul className="list-disc pl-6 text-gray-400 mb-2">
//                   <li>Keep you logged in</li>
//                   <li>Remember your preferences</li>
//                   <li>Analyze how visitors use our site to improve user experience</li>
//                 </ul>
//                 <p className="text-gray-300">You can adjust your browser settings to block cookies, but some parts of our site may not function properly without them.</p>
//               </div>
//               {/* Section 8 */}
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-3">8. Changes to This Policy</h2>
//                 <p className="text-gray-300">We may update this Privacy Policy from time to time. If we make significant changes, we&apos;ll notify you by email or through a prominent notice on our website.</p>
//               </div>
//               {/* Section 9 */}
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-3">9. Contact Us</h2>
//                 <p className="text-gray-300 mb-2">Have questions about this policy or how we handle your data? Reach out anytime at:</p>
//                 <ul className="list-none pl-0 text-gray-400">
//                   <li><span className="font-semibold text-white">Email:</span> <a href="mailto:privacy@v-accel.ai" className="text-purple-400 underline">privacy@v-accel.ai</a></li>
//                   <li><span className="font-semibold text-white">Phone:</span> +91-XXXXXXXXXX</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* <CTA /> */}
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Privacy; 

import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
// import CTA from '../components/CTA';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
          <div className="container-custom max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight tracking-tight mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-center mb-2">Last updated: 01.07.2025</p>
            <p className="text-lg text-gray-300 mb-8 text-center">
              At V-Accel, we take your privacy seriously. Whether you're browsing our website,
              signing up for a free trial of LeadAccel, or partnering with us for your software needs,
              we are committed to protecting your personal data.
            </p>

            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">1. Your Privacy Matters</h2>
                <p className="text-gray-300 mb-2">This Privacy Policy explains:</p>
                <ul className="list-disc pl-6 text-gray-400 space-y-1">
                  <li>What information we collect</li>
                  <li>How we use it</li>
                  <li>How we keep it secure</li>
                  <li>Your rights and choices</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">2. What Information We Collect</h2>
                <p className="text-gray-300 mb-2">Depending on how you interact with us, we may collect:</p>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>
                    <span className="font-semibold text-white">Information you provide directly:</span> Name, email address, phone number, company details, payment details (handled securely by our payment processors), any data you submit via forms, emails, or support chats.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Information we collect automatically:</span> Usage data (like pages visited, buttons clicked, time on site), device info (IP address, browser type, operating system), cookies & similar technologies (for analytics, preferences, and security).
                  </li>
                  <li>
                    <span className="font-semibold text-white">Information from third parties:</span> Integrations you connect (e.g., Gmail, WhatsApp API, LinkedIn), publicly available business data or references.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Data</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Provide, maintain, and improve our products & services</li>
                  <li>Set up and manage your account</li>
                  <li>Process transactions and send billing notices</li>
                  <li>Send product updates, offers, or helpful resources</li>
                  <li>Respond to your support requests</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
                <p className="text-gray-300">We never sell your data to third parties.</p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">4. How We Share Information</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Trusted service providers who help us run our business (like payment gateways, email delivery tools, analytics services), under strict confidentiality.</li>
                  <li>Legal authorities if required by law or to protect our rights.</li>
                  <li>Integration partners, but only with your explicit authorization.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">5. How We Keep Your Data Safe</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Data encryption (in transit & at rest)</li>
                  <li>Secure data centers with controlled access</li>
                  <li>Regular security audits & monitoring</li>
                </ul>
                <p className="text-gray-300">
                  However, no online platform is 100% secure. We encourage you to use strong passwords and keep your credentials confidential.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">6. Your Rights & Choices</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Correct or update your information</li>
                  <li>Delete your account and associated data (subject to legal obligations)</li>
                  <li>Opt out of marketing emails by clicking "Unsubscribe" in any email</li>
                </ul>
                <p className="text-gray-300">
                  To exercise these rights, just email us at{' '}
                  <a href="mailto:privacy@v-accel.ai" className="text-purple-400 underline">privacy@v-accel.ai</a>.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">7. Cookies & Tracking</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Keep you logged in</li>
                  <li>Remember your preferences</li>
                  <li>Analyze how visitors use our site to improve user experience</li>
                </ul>
                <p className="text-gray-300">
                  You can adjust your browser settings to block cookies, but some parts of our site may not function properly without them.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">8. Changes to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. If we make significant changes, we'll notify you by email or through a prominent notice on our website.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">9. Contact Us</h2>
                <p className="text-gray-300 mb-2">
                  Have questions about this policy or how we handle your data? Reach out anytime at:
                </p>
                <ul className="list-none pl-0 text-gray-400">
                  <li>
                    <span className="font-semibold text-white">Email:</span>{' '}
                    <a href="mailto:privacy@v-accel.ai" className="text-purple-400 underline">privacy@v-accel.ai</a>
                  </li>
                  <li><span className="font-semibold text-white">Phone:</span> +91-XXXXXXXXXX</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <CTA /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Privacy;
