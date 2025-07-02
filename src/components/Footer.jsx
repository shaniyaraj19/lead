import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Use Cases', href: '/usecases' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/casestudies' },
        { name: 'Help Center', href: '#help-center' },
        { name: 'API Docs', href: '#api-docs' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Carrers', href: '#carrers' },
        { name: 'Patners', href: '#patners' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Security', href: '/security' }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-white">LeadAccel</span>
            </motion.div>
            
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              The smart CRM platform that helps sales teams capture, manage, and convert leads faster. Grow your business with LeadAccel.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <div className="w-5 h-5 mr-3 flex items-center justify-center">
                  <span className="text-purple-400">✉</span>
                </div>
                <span>info@leadaccel.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-5 h-5 mr-3 flex items-center justify-center">
                  <span className="text-purple-400">📞</span>
                </div>
                <span>+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-5 h-5 mr-3 flex items-center justify-center">
                  <span className="text-purple-400">📍</span>
                </div>
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-white font-semibold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
            <div className="max-w-md">
              <h3 className="text-white font-semibold text-xl mb-3">Stay Updated</h3>
              <p className="text-gray-400 leading-relaxed">
                Get the latest CRM tips and product updates.
              </p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-r-xl transition-colors duration-300 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 LeadAccel. All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-6">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;