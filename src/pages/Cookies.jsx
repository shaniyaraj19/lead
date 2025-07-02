// import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
// import CTA from '../components/CTA';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1 ">
        <section className="section-padding min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container-custom max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-center">Cookie Policy</h1>
            <p className="text-gray-400 text-center mb-2">Last updated: 01/07/2025</p>
            <div className="space-y-10 mt-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">1. What Are Cookies?</h2>
                <p className="text-gray-300">Cookies are small text files stored on your device  Cookies can be &quot;session cookies&quot; (which expire when you close your browser) or &quot;persistent cookies&quot; (which stay until you delete them)..</p>
              </div>
              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Cookies</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Remember your settings and preferences (e.g., language choice, staying logged in)</li>
                  <li>Analyze site traffic and usage patterns (using tools like Google Analytics to understand how visitors use our site)</li>
                  <li>Support marketing and advertising (so we can show more relevant ads on platforms like Google or LinkedIn)</li>
                  <li>Enhance security (e.g., to detect suspicious logins)</li>
                </ul>
              </div>
              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">3. Types of Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-gray-300 border border-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="py-2 px-4 border-b border-gray-700">Type</th>
                        <th className="py-2 px-4 border-b border-gray-700">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-900">
                        <td className="py-2 px-4 border-b border-gray-800">Essential</td>
                        <td className="py-2 px-4 border-b border-gray-800">Needed to run our website and platform. Example: keeping you logged in.</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="py-2 px-4 border-b border-gray-800">Analytics</td>
                        <td className="py-2 px-4 border-b border-gray-800">Help us see how our website is used and improve it.</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="py-2 px-4 border-b border-gray-800">Functional</td>
                        <td className="py-2 px-4 border-b border-gray-800">Remember your choices (like region or language).</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="py-2 px-4 border-b border-gray-800">Advertising</td>
                        <td className="py-2 px-4 border-b border-gray-800">Show you more relevant ads on other sites.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">4. Your Choices & Controls</h2>
                <p className="text-gray-300 mb-2">You can manage or disable cookies in your browser settings. Here is how for popular browsers:</p>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Chrome</li>
                  <li>Firefox</li>
                  <li>Safari</li>
                  <li>Edge</li>
                </ul>
                <p className="text-gray-300">Please note that blocking cookies might impact how our website functions.</p>
              </div>
              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">5. Changes to This Policy</h2>
                <p className="text-gray-300">We may update this Cookie Policy from time to time. We all post the new version here and update the &quot;Last updated&quot; date at the top.</p>
              </div>
              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">6. Contact Us</h2>
                <p className="text-gray-300 mb-2">If you have any questions about how we use cookies, please reach out:</p>
                <ul className="list-none pl-0 text-gray-400">
                  <li><span className="font-semibold text-white">Email:</span> <a href="mailto:privacy@v-accel.ai" className="text-purple-400 underline">privacy@v-accel.ai</a></li>
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

export default Cookies; 