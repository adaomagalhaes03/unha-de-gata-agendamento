import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AppointmentForm from '@/components/AppointmentForm';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BookingSection from '@/components/BookingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AppointmentForm />
        <AboutSection />
        <ServicesSection />
        <BookingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;