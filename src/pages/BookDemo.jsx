import { useState } from 'react';
// import { GlowingCard } from './ui/glowing-card';
import { GlowingCard } from '../components/ui/glowing-card';
import {  
  ArrowRight, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Users, 
  Zap,
  Target,
  BarChart3
} from 'lucide-react';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    teamSize: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Demo",
      description: "See LeadAccel configured for your specific industry and use case"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Live Q&A Session",
      description: "Get all your questions answered by our CRM experts"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "ROI Analysis",
      description: "Discover how much time and revenue LeadAccel can save your team"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Implementation Plan",
      description: "Get a custom roadmap for rolling out LeadAccel to your team"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
        <GlowingCard className="max-w-lg w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 text-center border border-gray-700">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Demo Scheduled!</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Thanks for your interest! Our team will contact you within 24 hours to schedule your personalized LeadAccel demo.
          </p>
          <div className="space-y-3">
            <button 
              onClick={() => onNavigate('home')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors transform hover:scale-105"
            >
              Back to Home
            </button>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="w-full text-purple-400 py-2 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Schedule Another Demo
            </button>
          </div>
        </GlowingCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-800/30">
                <Calendar className="w-4 h-4 mr-2" />
                Free 30-minute consultation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                See LeadAccel in
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Action</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Get a personalized demo tailored to your business needs. See exactly how LeadAccel can transform your sales process and boost your teams productivity.
              </p>
              
              {/* What You'll Get */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">What you all get in your demo:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{benefit.title}</h4>
                        <p className="text-gray-400 text-xs">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  30 minutes
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  No commitment required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Free consultation
                </div>
              </div>
            </div>

            {/* Demo Request Form */}
            <div className="order-1 lg:order-2">
              <GlowingCard className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Book Your Demo</h3>
                  <p className="text-gray-400">Fill out the form and we all be in touch within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Team Size *
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white"
                    >
                      <option value="">Select team size</option>
                      <option value="1">Just me</option>
                      <option value="2-5">2-5 people</option>
                      <option value="6-20">6-20 people</option>
                      <option value="21-50">21-50 people</option>
                      <option value="50+">50+ people</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us about your business
                    </label>
                    <textarea
                      name="description"
                      placeholder="What industry are you in? What are your main challenges with lead management? Any specific features you're interested in?"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white placeholder-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-colors transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Scheduling Demo...
                      </div>
                    ) : (
                      <>
                        Book My Demo
                        <ArrowRight className="w-5 h-5 ml-2 inline" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our <a href="#" className="text-purple-400 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-400 hover:underline">Privacy Policy</a>
                  </p>
                </form>
              </GlowingCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;
