// import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
// import CTA from '../components/CTA';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container-custom max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight text-center">Terms of Service</h1>
            <p className="text-gray-400 text-center mb-2">Last updated: 01/07/2025</p>
            <div className="space-y-10 mt-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-300">By accessing or using the LeadAccel CRM platform, any of our websites, or related services (“Services”), you agree to these Terms of Service (“Terms”). If you&apos;re using our Services on behalf of a company, you confirm that you have authority to bind them to these Terms. If you dont agree, please do not use our Services.</p>
              </div>
              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">2. Services Provided</h2>
                <p className="text-gray-300">V-Accel (the &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;) provides software tools to help businesses capture, manage, and close leads more effectively. Features may include, but are not limited to, CRM dashboards, automation workflows, integrations, communication tools, and analytics. We may update or improve these Services from time to time. We'll do our best to give notice if there are major changes.</p>
              </div>
              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">3. User Accounts & Responsibilities</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>You must provide accurate information when creating an account.</li>
                  <li>You&apos;re responsible for safeguarding your login credentials and for all activities under your account.</li>
                  <li>You agree not to misuse our platform — including trying to hack, overload, or reverse engineer our systems.</li>
                </ul>
              </div>
              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">4. Payments & Subscriptions</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Paid plans are billed in advance on a monthly or annual basis (depending on your selection).</li>
                  <li>All fees are non-refundable except as required by law.</li>
                  <li>You can cancel anytime from your dashboard, and your plan will end at the close of the current billing cycle.</li>
                  <li>If payment fails or is not made on time, we may suspend or terminate your access.</li>
                </ul>
              </div>
              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">5. Data & Privacy</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>We respect your data.</li>
                  <li>Our use of your data is governed by our Privacy Policy.</li>
                  <li>You retain all rights to your data, except as needed for us to provide and improve the Services.</li>
                </ul>
              </div>
              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">6. Acceptable Use</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>You agree not to use our Services for any illegal activities.</li>
                  <li>Do not send spam or unsolicited bulk messages.</li>
                  <li>Do not upload viruses, malicious code, or try to breach other users&apos; data.</li>
                  <li>Do not attempt to bypass any security features.</li>
                </ul>
                <p className="text-gray-300">We reserve the right to suspend or terminate accounts that violate these rules.</p>
              </div>
              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">7. Intellectual Property</h2>
                <p className="text-gray-300">All content and software related to LeadAccel (logos, code, designs, trademarks) belong to V-Accel. You may not copy, modify, or create derivative works based on our Services without written consent.</p>
              </div>
              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">8. Warranties & Disclaimers</h2>
                <p className="text-gray-300">We provide the Services &quot;as is.&quot While we aim for top reliability and uptime, we do not guarantee that our Services will always be uninterrupted or error-free. To the fullest extent permitted by law, we disclaim all warranties, express or implied.</p>
              </div>
              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">9. Liability Limits</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>To the maximum extent allowed by law, V-Accel shall not be liable for any indirect, incidental, special, or consequential damages, including lost profits or data, arising out of your use of the Services.</li>
                  <li>Our total liability for any claim under these Terms is limited to the amount you paid us in the last 12 months.</li>
                </ul>
              </div>
              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">10. Termination</h2>
                <p className="text-gray-300">You may stop using our Services at any time. We reserve the right to suspend or terminate your access if you violate these Terms. Upon termination, your right to use the Services stops immediately. However, certain sections (like Liability, Intellectual Property, and Governing Law) will continue to apply.</p>
              </div>
              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">11. Governing Law</h2>
                <p className="text-gray-300">These Terms are governed by the laws of India, without regard to conflict of law principles. Any disputes will be handled in the courts of your city/state jurisdiction.</p>
              </div>
              {/* Section 12 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">12. Changes to These Terms</h2>
                <p className="text-gray-300">We may update these Terms from time to time. We&apos;ll notify you of significant changes by email or through a notice on our site. Continued use after updates means you accept the new Terms.</p>
              </div>
              {/* Section 13 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">13. Contact Us</h2>
                <ul className="list-none pl-0 text-gray-400">
                  <li><span className="font-semibold text-white">Email:</span> <a href="mailto:support@v-accel.ai" className="text-purple-400 underline">support@v-accel.ai</a></li>
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

export default Terms; 