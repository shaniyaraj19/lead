import { useState } from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { GlowingEffect } from "../components/ui/glowing-effect";

const helpTopics = [
  {
    category: "Getting Started",
    articles: [
      "How do I sign up for LeadAccel?",
      "Setting up your first pipeline",
      "Importing your leads and contacts",
      "Inviting team members",
    ],
  },
  {
    category: "Feature Usage",
    articles: [
      "How to automate follow-ups",
      "Using WhatsApp and email integrations",
      "Customizing your sales stages",
      "Tracking deal progress",
    ],
  },
  {
    category: "Billing & Subscription",
    articles: [
      "How to upgrade or downgrade your plan",
      "Managing billing details",
      "Understanding your invoice",
      "Cancelling your subscription",
    ],
  },
  {
    category: "Troubleshooting",
    articles: [
      "I can't log in to my account",
      "Why aren't my leads syncing?",
      "How to contact support",
      "Resetting your password",
    ],
  },
];

export default function HelpCenter() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center justify-center pt-40 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
          <GlowingEffect
            glow={true}
            disabled={false}
            spread={40}
            proximity={64}
            borderWidth={3}
            className="z-0"
          />
          <div className="relative z-10 max-w-3xl text-center px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Help Center
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find answers to your questions, explore how-to guides, and get the most out of LeadAccel.
            </motion.p>
            <motion.div
              className="mb-4 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search help articles..."
                className="w-full max-w-xl px-6 py-4 bg-gray-900 border border-gray-700 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
              />
              <button className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-r-xl text-base">
                Search
              </button>
            </motion.div>
          </div>
        </section>

        {/* Help Topics */}
        <section className="section-padding bg-black">
          <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 px-4">
            {helpTopics.map((topic, idx) => (
              <motion.div
                key={topic.category}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  {topic.category}
                </h2>
                <ul className="space-y-3">
                  {topic.articles.map((article) => (
                    <li key={article}>
                      <a
                        href="#"
                        className="text-purple-400 hover:underline text-base"
                      >
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
