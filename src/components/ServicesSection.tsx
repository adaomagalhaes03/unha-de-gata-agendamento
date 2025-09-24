import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, Scissors, Heart } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Manicure e Pedicure',
   description: (
  <>
    <p>-Manicure Clássica: Cuidados completos para suas mãos, incluindo corte, limpeza e pintura com verniz.</p>
    <p>-Pedicure Relaxante: Uma experiência revigorante para os pés, com cuidados específicos e massagem relaxante.</p>
    <p>-Manicure e Pedicure Spa: Tratamentos luxuosos que incluem esfoliação, hidratação e massagem para uma experiência completa de bem-estar.</p>
  </>
),
  },
  {
    icon: Heart,
    title: 'Unhas de Gel e Acrílico', 
    description: (
      <>
        <p>-Aplicação de Unhas de Gel: Unhas duradouras, com aspecto natural e brilho radiante.</p>
        <p>-Unhas de Acrílico: Extensões de unhas resistentes e personalizadas, com uma variedade de opções de formato e estilo.</p>
      </>
    ),

  },
    {
      icon: Palette,
      title: 'Nail Art Criativo',
      description: (
        <>
          <p>-Decoração de Unhas: Designs exclusivos, incluindo desenhos, strass, adesivos e muito mais.</p>
          <p>-Efeito Ombré: Gradiente suave de cores, criando um visual moderno e elegante.</p>
          <p>-Stamping: Aplicação de estampas temáticas, proporcionando um toque único às suas unhas.</p>
        </>
),
    },
  {
    icon: Scissors,
    title: 'Tratamentos Especiais',
    description:(
      <>
        <p>-Tratamento de Cutículas: Hidratação e cuidados especiais para cutículas saudáveis e bem cuidadas.</p>
        <p>-Fortalecimento de Unhas: Tratamentos específicos para fortalecer unhas fracas e quebradiças.</p>
        <p>- Remoção de Calosidades: Suavização e remoção de calosidades dos pés, proporcionando conforto e maciez.</p>
      </>

    ),

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
           Conheça os nossos serviços e descubra como podemos ajudá-la a alcançar unhas saudáveis, bonitas e deslumbrantes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card group">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-black" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-center">
                  <div className="text-primary font-semibold text-lg mb-4">
                    
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