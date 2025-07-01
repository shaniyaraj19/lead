import { motion } from 'framer-motion';
import { GlowingCard } from './ui/glowing-card';

const SocialProof = () => {
  const testimonials = [
    {
      quote: "We grew our monthly deals by 47% in just 3 months using LeadAccel.",
      author: "Rajeev R.",
      position: "Sales Head, Teknix Systems",
      rating: 5
    },
    {
      quote: "The automation features saved us 15 hours per week. Game changer!",
      author: "Priya S.",
      position: "Marketing Director, GrowthCorp",
      rating: 5
    },
    {
      quote: "Finally, a CRM that doesn't get in the way of selling.",
      author: "Amit K.",
      position: "Sales Manager, TechFlow",
      rating: 5
    }
  ];

  const stats = [
    // { number: '500+', label: 'Growing Businesses' },
    // { number: '47%', label: 'Average Deal Growth' },
    // { number: '4.8/5', label: 'Customer Rating' },
    // { number: '15hrs', label: 'Time Saved Weekly' }
  ];

  return (
    <section className="section-padding bg-slate-800/30">
      <div className="container-custom">
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by sales teams worldwide
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">⭐</span>
            ))}
          </div>
          <p className="text-slate-300">4.8 average rating on G2 | Capterra</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <GlowingCard className="card-gradient rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-4 italic">
                </blockquote>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.position}</div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;