
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Blog from '../components/Blog';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Profile */}
      <Header />
      
      {/* About Section */}
      <About />
      
      {/* Blog Section */}
      <Blog />
      
      {/* Booking Section with Calendly */}
      <Booking />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
