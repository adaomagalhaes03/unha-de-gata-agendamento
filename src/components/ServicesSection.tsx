import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, Scissors, Heart } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Manicure Completa',
    description: 'Cuidado completo para suas unhas das mãos, incluindo cutícula, formato e esmaltação.',
    price: 'A partir de 15.000 Kz',
  },
  {
    icon: Heart,
    title: 'Pedicure Relaxante', 
    description: 'Tratamento completo para os pés com hidratação, esfoliação e massagem relaxante.',
    price: 'A partir de 20.000 Kz',
  },
  {
    icon: Palette,
    title: 'Nail Art Exclusiva',
    description: 'Designs únicos e personalizados para deixar suas unhas ainda mais especiais.',
    price: 'A partir de 12.000 Kz',
  },
  {
    icon: Scissors,
    title: 'Unhas em Gel',
    description: 'Alongamento e fortalecimento com gel de alta qualidade e durabilidade.',
    price: 'A partir de 35.000 Kz',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa gama completa de tratamentos para unhas, 
            todos realizados com técnicas modernas e produtos de qualidade premium.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card group">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-primary" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-center">
                  <div className="text-primary font-semibold text-lg mb-4">
                    {service.price}
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => {
              const element = document.getElementById('agendamento');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Agende Seu Horário
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;