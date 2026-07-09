import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#fcfaf7] text-[#2c2c2c] antialiased min-h-screen">
      <Navbar />
      <Hero />
      <Historia />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}
