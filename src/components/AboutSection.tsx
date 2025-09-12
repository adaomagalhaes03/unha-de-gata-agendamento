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
              O Unha de Gata é mais que um salão de beleza - é um espaço dedicado ao cuidado 
              e bem-estar das suas unhas. Com profissionais especializadas e produtos de 
              alta qualidade, oferecemos uma experiência única de relaxamento e embelezamento.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é realçar a beleza natural de cada cliente, proporcionando 
              tratamentos personalizados em um ambiente acolhedor e sofisticado.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Cuidado Personalizado</h3>
                <p className="text-sm text-muted-foreground">
                  Atendimento exclusivo para cada cliente
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Produtos Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Apenas as melhores marcas do mercado
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-primary" size={24} />
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
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-elegant animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Anos de</div>
                <div className="text-sm text-muted-foreground">Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;