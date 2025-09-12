import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-nail-salon.jpg';

const HeroSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl text-white  mb-6 animate-fade-in-up">
          Beleza nas suas mãos com o Unha de Gata
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
          Agende online e descubra nossos serviços exclusivos de manicure, pedicure e nail art
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Button 
            onClick={scrollToBooking}
            className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
          >
            Agendar Agora
            <ArrowRight size={20} />
          </Button>
          
          <Button 
            variant="outline"
            className="text-lg px-8 py-4 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
            onClick={() => {
              const element = document.getElementById('servicos');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Serviços
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;