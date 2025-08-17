
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Solutions from './components/Solutions';
import ConsultorSection from './components/ConsultorSection';
import TargetAudience from './components/TargetAudience';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SocialProof from './components/SocialProof';
import ConsultantsPage from './components/ConsultantsPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <Solutions />
      <ConsultorSection />
      <TargetAudience />
      <Benefits />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

function App() {
  return (
    <div className="overflow-x-hidden bg-background">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consultor" element={<ConsultantsPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <SocialProof />
    </div>
  );
}

export default App;
