import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    text: 'Simplesmente apaixonada pelo trabalho das meninas! Sempre saio de lá me sentindo renovada e com as unhas perfeitas.',
    rating: 5,
    service: 'Manicure e Nail Art'
  },
  {
    name: 'Ana Costa',
    text: 'O atendimento é excepcional e o ambiente é super aconchegante. Virei cliente fiel!',
    rating: 5,
    service: 'Pedicure Completa'
  },
  {
    name: 'Juliana Oliveira',
    text: 'Melhor salão da região! As profissionais são super cuidadosas e o resultado sempre supera minhas expectativas.',
    rating: 5,
    service: 'Unhas em Gel'
  },
  {
    name: 'Carla Santos',
    text: 'Adoro vir aqui! É o meu momento de relaxar e me cuidar. Recomendo para todas as amigas.',
    rating: 5,
    service: 'Manicure e Pedicure'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            O que nossas clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação das nossas clientes é nossa maior conquista. 
            Veja o que elas têm a dizer sobre nossa experiência.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="service-card relative">
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="text-primary-foreground" size={16} />
              </div>
              
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Clientes Satisfeitas</div>
          </div>
          
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">5★</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Produtos Premium</div>
          </div>
          
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;