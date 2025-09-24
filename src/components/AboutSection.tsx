import React from 'react';
import { Heart, Star, Award } from 'lucide-react';
import salonInterior from '@/assets/salon-interior.jpg';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="heading-secondary">
              Sobre o Unha de Gata
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
             <p>Queridas clientes,</p>

É com imenso prazer que apresentamos a vocês, o portfólio de serviços da UNHAS DE GATA. Estamos dedicadas a oferecer tratamentos de unhas excepcionais, com foco na qualidade, higiene e satisfação das nossas Clientes. 
            </p>
            
          
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-black" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Cuidado Personalizado</h3>
                <p className="text-sm text-muted-foreground">
                  Atendimento exclusivo para cada cliente
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="text-black" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Produtos Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Apenas as melhores marcas do mercado
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-black" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Profissionais Qualificadas</h3>
                <p className="text-sm text-muted-foreground">
                  Equipe experiente e certificada
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={salonInterior} 
                alt="Interior aconchegante do salão Unha de Gata" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;