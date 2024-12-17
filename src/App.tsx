import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './lib/theme-context';
import { Navbar } from './components/layout/navbar';
import { Footer } from './components/layout/footer';
import { BackgroundAnimation } from './components/layout/background-animation';
import { Home } from './pages/home';
import { Services } from './pages/services';
import { About } from './pages/about';
import { Team } from './pages/team';
import { Contact } from './pages/contact';
import { Gallery } from './pages/gallery';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <BackgroundAnimation />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;