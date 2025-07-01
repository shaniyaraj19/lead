import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProblemPromise from './components/ProblemPromise';
import CoreFeatures from './components/CoreFeatures';
import SocialProof from './components/SocialProof';
import UseCases from './components/UseCases';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Comparison from './pages/Comparison';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import StartTrial from './pages/StartTrial';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
           <Route path="/start-trial" element={<StartTrial />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ProblemPromise />
      <CoreFeatures />
      <SocialProof />
      <UseCases />
      <Integrations />
      <CTA />
    </main>
  );
};

export default App;