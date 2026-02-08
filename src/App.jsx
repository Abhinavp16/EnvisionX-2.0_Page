import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Innovation from './components/Innovation';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';
import Rules from './components/Rules';
import Prizes from './components/Prizes';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Innovation />
        <Roadmap />
        <Rules />
        <Prizes />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
