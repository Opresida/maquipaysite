import Header from './components/Header';
    import Hero from './components/Hero';
    import Logos from './components/Logos';
    import Solutions from './components/Solutions';
    import TargetAudience from './components/TargetAudience';
    import Benefits from './components/Benefits';
    import Testimonials from './components/Testimonials';
    import FinalCTA from './components/FinalCTA';
    import Footer from './components/Footer';
    import FloatingWhatsApp from './components/FloatingWhatsApp';
    import SocialProof from './components/SocialProof';

    function App() {
      return (
        <div className="overflow-x-hidden bg-background">
          <Header />
          <main>
            <Hero />
            <Logos />
            <Solutions />
            <TargetAudience />
            <Benefits />
            <Testimonials />
            <FinalCTA />
          </main>
          <Footer />
          <FloatingWhatsApp />
          <SocialProof />
        </div>
      );
    }

    export default App;
