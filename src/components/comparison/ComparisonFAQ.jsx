import { motion } from 'framer-motion';
import { GlowingCard } from '../ui/glowing-card';
import {Link} from 'react-router-dom'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const ComparisonFAQ = () => {
  const faqs = [
    {
      question: 'Why should I choose LeadAccel over Salesforce?',
      answer: 'LeadAccel offers the same core CRM functionality as Salesforce but with a much simpler setup, better pricing, and features specifically designed for Indian businesses. While Salesforce can take weeks to implement, you can be up and running with LeadAccel in 15 minutes. Plus, our WhatsApp integration and local support make it perfect for Indian sales teams.'
    },
    {
      question: 'How does LeadAccel compare to HubSpot for sales teams?',
      answer: 'While HubSpot is excellent for marketing, LeadAccel is built specifically for sales teams. We offer better lead management, more affordable pricing, and sales-focused automation. HubSpot\'s free plan is limited, and their paid plans can get expensive quickly. LeadAccel provides more value for sales-focused businesses.'
    },
    {
      question: 'Is LeadAccel easier to use than Zoho CRM?',
      answer: 'Absolutely! Zoho CRM has many features but can be overwhelming and slow. LeadAccel focuses on the features sales teams actually need with a clean, intuitive interface. Our users report being productive within hours, not weeks. We also offer better WhatsApp integration and faster customer support.'
    },
    {
      question: 'What makes LeadAccel better than Pipedrive?',
      answer: 'While Pipedrive is simple, it lacks many advanced features that growing businesses need. LeadAccel provides the same ease of use but with powerful automation, better integrations (especially WhatsApp), advanced reporting, and features like lead scoring. You get more functionality at a better price point.'
    },
    {
      question: 'Can I migrate my data from other CRMs to LeadAccel?',
      answer: 'Yes! We provide free data migration assistance for all major CRMs including Salesforce, HubSpot, Pipedrive, and Zoho. Our team will help you export your contacts, deals, and activities, then import them into LeadAccel with proper mapping. The migration typically takes 1-2 business days.'
    },
    {
      question: 'Do you offer a trial period to test against my current CRM?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. You can run LeadAccel alongside your current CRM to compare functionality, ease of use, and results. Many customers find they can make the switch within the trial period. No credit card required to start.'
    },
    {
      question: 'How does pricing compare across different CRM platforms?',
      answer: 'LeadAccel offers the best value in the market. While Salesforce starts at $25/user/month, HubSpot paid plans start at $45/month, and Pipedrive at $15/user/month, LeadAccel starts at just ₹1,499/month for your entire team. You get more features, better support, and significant cost savings.'
    },
    {
      question: 'What if LeadAccel doesn\'t work for my business?',
      answer: 'We\'re confident LeadAccel will exceed your expectations, but if it doesn\'t work for your business within the first 30 days, we\'ll help you migrate back to your previous CRM at no cost. We also provide personalized onboarding and training to ensure success. Your satisfaction is our priority.'
    }
  ];

  return (
    <section className="section-padding bg-slate-800/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Common Questions About <span className="text-gradient">Switching to LeadAccel</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Thinking about making the switch? Here are answers to the most common questions we get from businesses comparing CRM platforms.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlowingCard className="card-gradient rounded-2xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-white text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlowingCard>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <GlowingCard className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl p-8 border border-primary-500/30">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to Make the Switch?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join thousands of sales teams who have already made the switch to LeadAccel. Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to ="/start-trail">
              <motion.button
                className="btn-primary text-base px-6 py-3 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              </Link>
              <motion.button
                className="btn-secondary text-base px-6 py-3 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Migration Call
              </motion.button>
            </div>
          </GlowingCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonFAQ;