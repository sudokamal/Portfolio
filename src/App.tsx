import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SecurityScanner } from './components/SecurityScanner';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isScanning, setIsScanning] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isScanning ? (
          <SecurityScanner key="scanner" onComplete={() => setIsScanning(false)} />
        ) : (
          <motion.div
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Cybersecurity falling matrix drops background */}
            <AnimatedBackground />

            {/* Main Header / Navigation */}
            <Navbar />

            {/* Main Content Sections */}
            <main className="flex-grow z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education /><Achievements />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
