import { motion } from 'framer-motion';
import { useState } from 'react';
import { Pricing } from '../ui/pricing';

const PricingTable = () => {
  const plans = [
    {
      name: 'STARTER',
      icon: '🟢',
      description: 'Perfect for solo founders and small businesses getting started with lead tracking and pipeline basics.',
      price: '1499',
      yearlyPrice: '1199',
      period: 'month',
      features: [
        '1 user included',
        '500 leads per month',
        '1 pipeline',
        'Basic automation',
        'Email capture',
        'Task management',
        'Lead notes',
        'Basic reporting',
        'Mobile app access',
        'Email support'
      ],
      buttonText: 'Start Free Trial',
      href: '/sign-up',
      isPopular: false,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      name: 'GROWTH',
      icon: '🟡',
      description: 'Designed for growing teams. Automate follow-ups, get deeper reports, and collaborate better with your team.',
      price: '4999',
      yearlyPrice: '3999',
      period: 'month',
      features: [
        'Up to 10 users',
        '5,000 leads per month',
        '3 pipelines',
        'Advanced automation',
        'WhatsApp integration',
        'Multiple pipelines',
        'Campaign tracking',
        'Team collaboration',
        'Custom reports',
        'Email + Chat support',
        'Full integrations (Slack, Zoom, more)'
      ],
      buttonText: 'Get Started',
      href: '/sign-up',
      isPopular: true,
      gradient: 'from-primary-500 to-blue-600'
    },
    {
      name: 'ENTERPRISE',
      icon: '🔵',
      description: 'For sales-heavy organizations with advanced needs. Get dedicated support, custom integrations, and onboarding assistance.',
      price: '12999',
      yearlyPrice: '10399',
      period: 'month',
      features: [
        'Unlimited users',
        'Unlimited leads',
        'Unlimited pipelines',
        'Advanced + Custom automation',
        'Custom integrations',
        'Team-level access control',
        'Onboarding assistance',
        'Advanced security',
        'Custom workflows',
        'Dedicated account manager',
        'Priority support',
        'SLA agreement'
      ],
      buttonText: 'Contact Sales',
      href: '/contact',
      isPopular: false,
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <Pricing 
          plans={plans}
          // title="Simple Pricing That Scales With You"
          // description="Start free. Upgrade when you're ready. All plans include essential CRM tools, automation features, and fast customer support."
        />
      </div>
    </section>
  );
};

export default PricingTable;