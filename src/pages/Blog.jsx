import { motion } from 'framer-motion';
import { GlowingCard } from '../components/ui/glowing-card';
import { Calendar, Clock, User, ArrowRight, CheckCircle, Download } from 'lucide-react';

const Blog = () => {
  const blogPost = {
    title: "Is Your Business Ready for Custom Software? A Practical Checklist for CTOs & CEOs",
    author: "V-Accel Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Business Strategy",
    excerpt: "A comprehensive guide to help CTOs and CEOs determine if their business is ready to invest in custom software solutions.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
  };

  const checklistItems = [
    {
      title: "Your current tools feel like a patchwork",
      description: "Are your teams wasting hours each week exporting, importing, or manually copying data? Do you face errors because two systems don't \"talk\" to each other?",
      solution: "A unified custom platform could consolidate these workflows, cut down errors, and save serious time."
    },
    {
      title: "You're losing opportunities due to rigid processes",
      description: "Have you ever dropped a business idea because your software couldn't support it? Are your teams working around software limitations by using spreadsheets or manual methods?",
      solution: "Custom software is literally built around your processes, enabling innovation instead of blocking it."
    },
    {
      title: "Data-driven decisions are harder than they should be",
      description: "Do you lack a single source of truth for your operations? Are managers spending time cleaning and merging data to get basic dashboards?",
      solution: "With a custom solution, you can design dashboards that track exactly what matters to your business, in real-time."
    },
    {
      title: "Customer experience is starting to suffer",
      description: "Are customers chasing updates on orders or support requests? Have mistakes from manual data handling led to customer dissatisfaction?",
      solution: "Custom software can automate critical customer interactions and keep everything streamlined behind the scenes."
    },
    {
      title: "You're planning to scale aggressively",
      description: "Are you expanding to multiple locations, teams, or service lines? Do you anticipate unique workflows that your current tools can't support?",
      solution: "Custom software is an investment that grows with you, without forcing you into expensive licensing tiers."
    }
  ];

  const readinessFactors = [
    {
      icon: CheckCircle,
      title: "You have clarity on your goals",
      description: "What processes need to improve? Where are the biggest bottlenecks? The clearer you are, the better a technology partner can help."
    },
    {
      icon: CheckCircle,
      title: "You're prepared to invest",
      description: "Custom software isn't a quick monthly subscription. It's a strategic investment. The ROI is huge when done right, but there's a cost upfront."
    },
    {
      icon: CheckCircle,
      title: "Your team is on board",
      description: "Adoption is everything. If your teams see the benefit and are excited to help shape the tool, implementation succeeds far faster."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.8, 0.4],
              x: [0, 30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Blog Post Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-400 font-medium text-sm">{blogPost.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span className="text-sm">{blogPost.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{blogPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{blogPost.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowingCard className="card-gradient rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Picture this:</h2>
                <div className="prose prose-lg text-slate-300 leading-relaxed space-y-4">
                  <p>
                    You're in a strategy meet, staring at numbers. Sales are steady, operations look fine, but something feels stuck. The software tools your teams rely on daily — the CRM, the spreadsheets, that patchy inventory system — they're all doing their job, yet inefficiencies keep piling up. Small things slip through the cracks. Customers complain about response delays. Your team constantly jumps between tools, or worse, hacks together workarounds.
                  </p>
                  <p className="text-purple-400 font-semibold">Sound familiar?</p>
                  <p>
                    If you're a CTO or CEO wondering whether it's time to invest in custom software, this article is for you.
                  </p>
                </div>
              </GlowingCard>
            </motion.div>

            {/* Why Not Off-the-Shelf */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Why not just stick with <span className="text-gradient">off-the-shelf software?</span>
              </h2>
              <GlowingCard className="card-gradient rounded-2xl p-8">
                <div className="prose prose-lg text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Honestly, off-the-shelf tools are fantastic — up to a point. They're quick to deploy, budget-friendly, and often come loaded with features. But they're also built to cater to the broadest audience possible, not your unique business model.
                  </p>
                  <p>
                    As your business grows, these tools might start holding you back. Processes become rigid, integration feels clunky, and you end up adapting to the software rather than it adapting to you. That's when custom software starts looking more appealing.
                  </p>
                  <p className="text-purple-400 font-semibold">
                    But is your business actually ready for it? Let's find out.
                  </p>
                </div>
              </GlowingCard>
            </motion.div>

            {/* Checklist Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                ✅ A practical checklist for <span className="text-gradient">CTOs & CEOs</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Here's a simple way to assess your readiness. Tick the points that resonate. By the end, you'll have a clear sense of whether it's time to explore a custom solution.
              </p>

              <div className="space-y-8">
                {checklistItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlowingCard className="card-gradient rounded-2xl p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                          <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <p className="text-purple-300 text-sm leading-relaxed">{item.solution}</p>
                          </div>
                        </div>
                      </div>
                    </GlowingCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decision Point */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowingCard className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    🚦 If you ticked 3 or more, it's time to explore custom software
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    Custom software isn't about writing fancy code for the sake of it. It's about aligning technology with your unique business DNA. Done right, it becomes your competitive advantage — helping you serve customers better, operate leaner, and innovate faster.
                  </p>
                </div>
              </GlowingCard>
            </motion.div>

            {/* Readiness Factors */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                So, what does being <span className="text-gradient">"ready"</span> actually mean?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Being ready doesn't just mean you have problems to solve. It also means:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {readinessFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <GlowingCard className="card-gradient rounded-2xl p-6 h-full">
                      <div className="flex items-center mb-4">
                        <factor.icon className="w-6 h-6 text-green-400 mr-3" />
                        <h3 className="text-lg font-bold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{factor.description}</p>
                    </GlowingCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                What happens <span className="text-gradient">next?</span>
              </h2>
              <GlowingCard className="card-gradient rounded-2xl p-8">
                <div className="prose prose-lg text-slate-300 leading-relaxed space-y-6">
                  <p>
                    If you're nodding along to most of this, here's a simple next step:
                  </p>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 flex items-center">
                    <Download className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-blue-300 font-semibold mb-2">📥 Download our free "Custom Software Readiness Checklist."</p>
                      <p className="text-slate-300 text-sm">It's a quick, one-page self-assessment you can take to your next leadership meeting.</p>
                    </div>
                  </div>

                  <p>
                    Or better yet, let's talk. At V-Accel, we specialize in building custom platforms that fit you — not the other way around. Whether it's automating key processes, integrating scattered tools, or building a fully custom ERP, we bring the expertise and partnership mindset that makes the difference.
                  </p>
                </div>
              </GlowingCard>
            </motion.div>

            {/* Conclusion CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowingCard className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    👋 Let's wrap it up
                  </h2>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Custom software isn't for everyone, and that's perfectly okay. But if your business is hitting the ceiling with generic tools, it might be the smartest decision you'll make this year.
                  </p>
                  <p className="text-lg font-semibold text-white mb-8">
                    Ready to explore what's possible?
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.button
                      className="btn-primary text-base px-8 py-4 w-full sm:w-auto shadow-2xl shadow-purple-500/25 flex items-center"
                      whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact V-Accel
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                    <motion.button
                      className="btn-secondary text-base px-8 py-4 w-full sm:w-auto flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Checklist
                    </motion.button>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;