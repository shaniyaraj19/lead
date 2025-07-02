// import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
// import CTA from '../components/CTA';

const Security = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1 ">
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container-custom max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-center">Security & Compliance</h1>
            <div className="space-y-10 mt-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Security at V-Accel</h2>
                <p className="text-gray-300">At V-Accel, the security and privacy of your data is our highest priority. Thousands of businesses trust us with sensitive customer and sales information, and we take that responsibility seriously.</p>
              </div>
              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">How We Keep Your Data Safe</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li><span className="font-semibold text-white">Data Encryption:</span> All data is encrypted in transit (using TLS 1.2+) and at rest using modern encryption standards. This means your data is protected whether its moving between your browser and our servers, or stored in our databases.</li>
                  <li><span className="font-semibold text-white">Secure Data Centers:</span> We host our infrastructure on trusted cloud providers like AWS / Google Cloud / Azure. Their facilities are certified under industry standards such as ISO 27001, SOC 1, SOC 2, and PCI DSS.</li>
                  <li><span className="font-semibold text-white">Regular Backups:</span> We perform automated daily backups to ensure your data can be quickly restored in the rare case of an incident.</li>
                  <li><span className="font-semibold text-white">Network & Application Security:</span> Firewalls, intrusion detection, and DDoS protections safeguard our infrastructure. We regularly patch systems and conduct vulnerability assessments.</li>
                </ul>
              </div>
              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Strict Access Controls</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Only authorized team members have access to production systems, based on least privilege principles.</li>
                  <li>All employee access is logged and monitored.</li>
                </ul>
              </div>
              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Developer & Operational Security</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>Our engineers follow secure coding practices.</li>
                  <li>Code changes are reviewed and tested before deployment.</li>
                  <li>We maintain detailed logs and monitoring to detect unusual activity.</li>
                </ul>
              </div>
              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Compliance & Data Privacy</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>We are fully GDPR-compliant and committed to helping our customers meet their regulatory obligations.</li>
                  <li>We only process data necessary to provide our services and never sell your data to third parties.</li>
                </ul>
                <p className="text-gray-300">For more, see our <a href="/privacy" className="text-purple-400 underline">Privacy Policy</a>.</p>
              </div>
              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Responsible Disclosure</h2>
                <p className="text-gray-300 mb-2">We value the communities help in keeping our systems secure. If you discover a vulnerability or have security concerns, please contact us immediately at <a href="mailto:security@v-accel.ai" className="text-purple-400 underline">security@v-accel.ai</a>.</p>
              </div>
              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Questions?</h2>
                <p className="text-gray-300 mb-2">If you would like to learn more about how we protect your data, our team is happy to answer your questions.</p>
                <ul className="list-none pl-0 text-gray-400">
                  <li><span className="font-semibold text-white">Email:</span> <a href="mailto:security@v-accel.ai" className="text-purple-400 underline">security@v-accel.ai</a></li>
                </ul>
              </div>
              {/* Optional Add-ons */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Additional Information</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-2">
                  <li>If you do annual or regular external penetration tests, we can provide a summary upon request.</li>
                  <li>We offer SLA uptime guarantees for enterprise customers (contact us for details).</li>
                  <li>Data retention: We retain your data only as long as necessary to provide our services or as required by law. Data is deleted securely after account closure, subject to legal obligations.</li>
                  <li>For real-time status and transparency on outages, visit our status page (if available).</li>
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

export default Security; 