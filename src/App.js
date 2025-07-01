import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PianoPage from './Pages/PianoPage';
import MannequinatPage from './Pages/MannequinatPage';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/piano" element={<PianoPage />} />
          <Route path="/mannequinat" element={<MannequinatPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
