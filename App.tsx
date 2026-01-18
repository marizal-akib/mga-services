import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-dark-900 font-sans selection:bg-gold-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;