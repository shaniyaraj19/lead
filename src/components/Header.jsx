// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     {
//       name: 'Product',
//       items: [
//         { name: 'Features', href: '/features' },
//         { name: 'Use Cases', href: '#use-cases' },
//         { name: 'Integrations', href: '#integrations' }
//       ]
//     },
//     {
//       name: 'Pricing',
//       href: '/pricing'
//     },
//     {
//       name: 'Comparison',
//       href: '/comparison'
//     },
//     {
//       name: 'Resources',
//       items: [
//         { name: 'Blog', href: '/blog' },
//         { name: 'Case Studies', href: '#case-studies' },
//         { name: 'Webinars', href: '#webinars' }
//       ]
//     },
//     {
//       name: 'Support',
//       items: [
//         { name: 'Help Center', href: '#help-center' },
//         { name: 'Contact Us', href: '/contact' },
//         { name: 'Live Chat', href: '#chat' },
//         { name: 'Documentation', href: '#docs' },
//         { name: 'Community', href: '#community' }
//       ]
//     },
//     {
//       name: 'Contact',
//       href: '/contact'
//     },

//   ];

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="container-custom">
//         <div className="flex items-center justify-between h-16 lg:h-18">
//           {/* Logo */}
//           <motion.div 
//             className="flex items-center space-x-2"
//             whileHover={{ scale: 1.05 }}
//           >
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">L</span>
//               </div>
//               <span className="text-xl font-bold text-white">LeadAccel</span>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <div key={item.name} className="relative group">
//                 {item.href ? (
//                   <Link 
//                     to={item.href}
//                     className={`font-medium transition-colors duration-300 py-2 text-sm ${
//                       location.pathname === item.href 
//                         ? 'text-purple-400' 
//                         : 'text-gray-300 hover:text-white'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ) : (
//                   <button className="text-gray-300 hover:text-white font-medium transition-colors duration-300 py-2 text-sm">
//                     {item.name}
//                   </button>
//                 )}
//                 {item.items && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                     <div className="py-2">
//                       {item.items.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           to={subItem.href}
//                           className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 text-sm"
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* CTA Buttons */}
//           <div className="hidden lg:flex items-center space-x-3">
//             <button className="text-gray-300 hover:text-white font-medium transition-colors duration-300 text-sm">
//               Login
//             </button>
//             <motion.button 
//               className="btn-primary-slim"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Start Free Trial
//             </motion.button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-gray-400 hover:text-white"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <div className="w-6 h-6 flex flex-col justify-center items-center">
//               <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
//               <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
//               <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
//             </div>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-gray-900 rounded-lg mt-2 border border-gray-700"
//           >
//             <div className="py-4 space-y-2">
//               {navItems.map((item) => (
//                 <div key={item.name}>
//                   {item.href ? (
//                     <Link
//                       to={item.href}
//                       className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 text-sm"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   ) : (
//                     <div className="px-4 py-2 text-gray-300 font-medium text-sm">
//                       {item.name}
//                     </div>
//                   )}
//                   {item.items && (
//                     <div className="pl-6 space-y-1">
//                       {item.items.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           to={subItem.href}
//                           className="block px-4 py-1 text-xs text-gray-400 hover:text-white transition-colors duration-200"
//                           onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <div className="border-t border-gray-700 pt-4 px-4 space-y-2">
//                 <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm">
//                   Login
//                 </button>
//                 <button className="btn-primary-slim w-full">
//                   Start Free Trial
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.header>
//   );
// };

// export default Header;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Product',
      items: [
        { name: 'Features', href: '/features' },
        { name: 'Use Cases', href: '/usecase' },
        // { name: 'Use Cases', href: '/use' }

        { name: 'Integrations', href: '/integrations' }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing'
    },
    {
      name: 'Comparison',
      href: '/comparison'
    },
    {
      name: 'Resources',
      items: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/casestudies' },
        { name: 'Webinars', href: '/webinars' }
      ]
    },
    {
      name: 'Support',
      items: [
        { name: 'Help Center', href: '/help-center' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Live Chat', href: '#chat' },
        { name: 'Documentation', href: '#docs' },
        { name: 'Community', href: '#community' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact'
    },

  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-white">LeadAccel</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.href ? (
                  <Link 
                    to={item.href}
                    className={`font-medium transition-colors duration-300 py-2 text-sm ${
                      location.pathname === item.href 
                        ? 'text-purple-400' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="text-gray-300 hover:text-white font-medium transition-colors duration-300 py-2 text-sm">
                    {item.name}
                  </button>
                )}
                {item.items && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 text-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to ="/login">
            <button className="text-gray-300 hover:text-white font-medium transition-colors duration-300 text-sm">
              Login
            </button>
            </Link>
            <Link to="/start-trial">
              <motion.button 
                className="btn-primary-slim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 rounded-lg mt-2 border border-gray-700"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="px-4 py-2 text-gray-300 font-medium text-sm">
                      {item.name}
                    </div>
                  )}
                  {item.items && (
                    <div className="pl-6 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-1 text-xs text-gray-400 hover:text-white transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-700 pt-4 px-4 space-y-2">
                <Link to ="/login">
                <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Login
                </button>
                </Link>
                <Link to="/start-trial" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="btn-primary-slim w-full">
                    Start Free Trial
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;