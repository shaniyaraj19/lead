import { motion } from 'framer-motion';
import { GlowingCard } from '../ui/glowing-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const PricingFAQ = () => {
  const faqs = [
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features and see how LeadAccel fits your workflow before making any commitment.'
    },
    {
      question: 'Can I upgrade or downgrade later?',
      answer: 'Absolutely! You can change your plan anytime from your billing dashboard. Upgrades take effect immediately, and downgrades will take effect at the end of your current billing cycle.'
    },
    {
      question: 'Do you offer annual billing?',
      answer: 'Yes! Get 2 months free when you choose annual billing. This gives you significant savings and ensures uninterrupted service for your growing business.'
    },
    {
      question: 'What if I need more users or leads than included?',
      answer: 'We offer flexible add-ons for extra users (₹499/user/month) and higher lead limits. For enterprise needs, we can create a custom plan that fits your exact requirements. Just contact our sales team.'
    },
    {
      question: 'Is support included in all plans?',
      answer: 'Yes! All users get access to our comprehensive help center and support team. Starter plan includes email support, Growth plan adds chat support, and Enterprise plan includes priority support with a dedicated account manager.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. All payments are processed securely through our encrypted payment gateway.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription anytime. There are no long-term contracts or cancellation fees. Your account will remain active until the end of your current billing period.'
    }
  ];

  return (
    <section className="section-padding bg-slate-800/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about our pricing and plans.
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
      </div>
    </section>
  );
};

export default PricingFAQ;