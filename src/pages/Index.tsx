import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AppointmentForm from '@/components/AppointmentForm';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AppointmentForm />
        <AboutSection />
        <ServicesSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;