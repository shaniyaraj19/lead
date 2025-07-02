import { GlowingCard } from '../components/ui/glowing-card';
import CTA from '../components/CTA';
import { 
  TrendingUp, 
  Clock, 
  BarChart3, 
  Target, 
  Building2, 
  DollarSign,
  Users,
  CheckCircle,
  Star,
  Calendar,
  FileText
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: 'Teknix Systems',
      industry: 'B2B Tech Distribution',
      challenge: 'Struggling to keep up with rising inquiries. Sales team juggled multiple spreadsheets, missed follow-ups, and had no clear way to track deal progress.',
      solution: 'Adopted LeadAccel to unify lead capture, sales workflows, and follow-ups. Customized pipelines by product line and set up automations.',
      results: [
        { metric: '47%', description: 'increase in deals closed per month', icon: TrendingUp },
        { metric: '28%', description: 'sales cycle reduction', icon: Clock },
        { metric: '100%', description: 'pipeline visibility', icon: BarChart3 }
      ],
      testimonial: {
        quote: 'We have total clarity now. From lead capture to deal closing, nothing gets missed. LeadAccel is like adding two extra salespeople to our team — at a fraction of the cost.',
        author: 'Rahul Desai',
        position: 'Head of Sales, Teknix Systems',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      },
      timeline: '3 months',
      teamSize: '8 sales reps',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      id: 2,
      company: 'Vistara Properties',
      industry: 'Real Estate',
      challenge: 'Depended on website forms, WhatsApp chats, and walk-ins. Many inquiries were never logged or followed up. Agents kept separate lists on paper or personal phones.',
      solution: 'Implemented LeadAccel with WhatsApp integration, single CRM dashboard, and tailored pipelines for buyers, sellers, and commercial leases.',
      results: [
        { metric: '83%', description: 'reduction in untracked/lost leads', icon: Target },
        { metric: '3 to 1', description: 'days faster site visit scheduling', icon: Calendar },
        { metric: '2x', description: 'record-high sales months in a row', icon: DollarSign }
      ],
      testimonial: {
        quote: 'We moved from messy diaries to a system where every buyer is tracked, followed up, and converted. I\'d recommend LeadAccel to any agency or broker serious about growth.',
        author: 'Ananya Mehta',
        position: 'Co-founder, Vistara Properties',
        avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      },
      timeline: '2 months',
      teamSize: '5 agents',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-900/20 to-teal-900/20'
    },
    {
      id: 3,
      company: 'FinMatrix Advisory',
      industry: 'Wealth Advisory',
      challenge: 'Strong referrals but slow onboarding was choking growth. Chasing KYC documents & agreements took weeks. Partners couldn\'t see which clients were stuck.',
      solution: 'Used automated email & WhatsApp reminders to collect documents, tagged clients by stage, and gave partners a real-time dashboard.',
      results: [
        { metric: '2x', description: 'faster client onboarding (18 to 9 days)', icon: Clock },
        { metric: '100%', description: 'better reporting for quarterly reviews', icon: FileText },
        { metric: '1 month', description: 'closed flagship corporate account', icon: Building2 }
      ],
      testimonial: {
        quote: 'LeadAccel paid for itself in our first month. We\'re handling more clients with less stress — and everyone knows exactly what needs to happen next.',
        author: 'Pradeep Kumar',
        position: 'Managing Partner, FinMatrix Advisory',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      },
      timeline: '1 month',
      teamSize: '3 partners',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-900/20 to-red-900/20'
    }
  ];

  const stats = [
    { number: '500+', label: 'Growing Businesses', icon: Building2 },
    { number: '47%', label: 'Average Deal Increase', icon: TrendingUp },
    { number: '28%', label: 'Faster Sales Cycles', icon: Clock },
    { number: '4.8★', label: 'Customer Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-black">
     {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black  min-h-screen to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white leading-tight mb-6">
            Customer Success
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            See how growing businesses use LeadAccel to close more deals, reduce sales cycles, and scale their revenue operations.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <GlowingCard key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <GlowingCard key={study.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                {/* Header */}
                <div className={`bg-gradient-to-r ${study.color} p-8 md:p-12 text-white`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{study.company}</h2>
                      <p className="text-xl opacity-90 mb-6">{study.industry}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="bg-white/20 px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {study.timeline} implementation
                        </div>
                        <div className="bg-white/20 px-3 py-1 rounded-full">
                          <Users className="w-4 h-4 inline mr-1" />
                          {study.teamSize}
                        </div>
                      </div>
                    </div>
                    
                    {/* Results Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-white/10 p-4 rounded-lg text-center">
                          <result.icon className="w-8 h-8 mx-auto mb-2" />
                          <div className="text-2xl font-bold">{result.metric}</div>
                          <div className="text-sm opacity-90">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Challenge & Solution */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                          <Target className="w-6 h-6 text-red-400 mr-3" />
                          The Challenge
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                          <CheckCircle className="w-6 h-6 text-emerald-400 mr-3" />
                          The Solution
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results & Testimonial */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                          <BarChart3 className="w-6 h-6 text-purple-400 mr-3" />
                          The Results
                        </h3>
                        <div className="space-y-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                              <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mr-4`}>
                                <result.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-white">{result.metric}</div>
                                <div className="text-gray-400 text-sm">{result.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <GlowingCard className={`bg-gradient-to-r ${study.bgColor} p-6 rounded-xl border border-gray-700`}>
                        <div className="flex items-start space-x-4">
                          <img 
                            src={study.testimonial.avatar} 
                            alt={study.testimonial.author}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <blockquote className="text-gray-300 italic mb-3">
                              {`"${study.testimonial.quote}"`}
                            </blockquote>
                            <div>
                              <div className="font-semibold text-white">{study.testimonial.author}</div>
                              <div className="text-gray-400 text-sm">{study.testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </GlowingCard>
                    </div>
                  </div>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
        <CTA />
      </section>
      </div>
  );
};

export default CaseStudies;