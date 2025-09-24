import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Phone, MessageCircle } from 'lucide-react';

const BookingSection = () => {
  return (
    <section id="agendamento" className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="heading-secondary">
              Agendamento Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reserve seu horário de forma rápida e prática. Escolha o melhor dia e horário para você!
            </p>
          </div>

          {/* Booking Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Booking */}
            <div className="service-card text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-black" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                Agendar via WhatsApp
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Converse diretamente conosco e agende seu horário de forma personalizada.
              </p>
              
              <Button 
                className="btn-primary w-full bg-green-500 hover:bg-green-600"
                onClick={() => window.open('https://wa.me/244923456789?text=Olá! Gostaria de agendar um horário no Unhas de Gata.', '_blank')}
              >
                <MessageCircle size={20} className="mr-2" />
                Agendar no WhatsApp
              </Button>
            </div>

            {/* Phone Booking */}
            <div className="service-card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-black" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                Agendar por Telefone
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Ligue para nós e nossa equipe te ajudará a escolher o melhor horário.
              </p>
              
              <Button 
                variant="outline"
                className="w-full hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('tel:+244923456789', '_self')}
              >
                <Phone size={20} className="mr-2" />
                +244 923 456 789
              </Button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-background/50 rounded-xl">
              <Calendar className="text-black mb-3 mx-auto" size={28} />
              <h4 className="font-semibold mb-2">Horários Flexíveis</h4>
              <p className="text-sm text-muted-foreground">
                Seg à Sáb: 9h às 18h
              </p>
            </div>
            
            <div className="text-center p-6 bg-background/50 rounded-xl">
              <Clock className="text-black mb-3 mx-auto" size={28} />
              <h4 className="font-semibold mb-2">Pontualidade</h4>
              <p className="text-sm text-muted-foreground">
                Respeitamos seu tempo
              </p>
            </div>
            
            <div className="text-center p-6 bg-background/50 rounded-xl">
              <MessageCircle className="text-black mb-3 mx-auto" size={28} />
              <h4 className="font-semibold mb-2">Confirmação</h4>
              <p className="text-sm text-muted-foreground">
                Lembretes por WhatsApp
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Pronta para transformar suas unhas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Não perca tempo! Agende agora mesmo e garante seu horário no Unhas de Gata.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.open('https://wa.me/244923456789?text=Olá! Gostaria de agendar um horário no Unhas de Gata.', '_blank')}
              >
                <MessageCircle size={20} className="mr-2" />
                WhatsApp
              </Button>
              
              <Button 
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('tel:+244923456789', '_self')}
              >
                <Phone size={20} className="mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;