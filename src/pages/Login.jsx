// import React, { useState } from 'react';
import { GlowingCard } from '../components/ui/glowing-card';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle,
  Mail,
  Lock,
} from 'lucide-react';

const Login = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
        <GlowingCard className="max-w-md w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 text-center border border-gray-700">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-4">Welcome Back!</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Login successful! Welcome back to LeadAccel. Your sales pipeline
            awaits.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors transform hover:scale-105">
              Go to Dashboard
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="w-full text-purple-400 py-2 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </GlowingCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <main className="flex-1">
        <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-[calc(100vh-4rem)] flex items-center py-12 pt-28">
          <div className="max-w-md mx-auto w-full px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlowingCard className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-center mb-8"
                >
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Welcome Back
                  </h1>
                  <p className="text-gray-300">
                    Sign in to access your LeadAccel dashboard and accelerate
                    your sales
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <label className="block text-gray-300 mb-2 font-medium">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors placeholder-gray-400"
                      autoComplete="username"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <label className="block text-gray-300 mb-2 font-medium">
                      <Lock className="w-4 h-4 inline mr-2" />
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors placeholder-gray-400 pr-12"
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-300"
                        onClick={() =>
                          setIsPasswordVisible(!isPasswordVisible)
                        }
                      >
                        {isPasswordVisible ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                    whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing In...
                      </div>
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="w-5 h-5 ml-2 inline" />
                      </>
                    )}
                  </motion.button>

                  <motion.div
                    className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <a
                      href="#"
                      className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                    >
                      Forgot Password?
                    </a>
                    <div className="text-gray-400 text-sm">
                      New to LeadAccel?{' '}
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Start Free Trial
                      </a>
                    </div>
                  </motion.div>
                </form>
              </GlowingCard>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
