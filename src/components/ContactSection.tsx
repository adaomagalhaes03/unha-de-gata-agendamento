import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para cuidar de você! Entre em contato conosco e agende seu horário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Localização</h3>
                <p className="text-muted-foreground">
                  Rua das Flores, 123 - Centro<br />
                  São Paulo - SP, 01234-567
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+5511999999999" className="hover:text-primary transition-colors">
                    (11) 99999-9999
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Horário de Funcionamento</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Segunda à Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 16h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:contato@unhagata.com" className="hover:text-primary transition-colors">
                    contato@unhagata.com
                  </a>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="font-semibold mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex space-x-4">
                <Button 
                  variant="outline"
                  size="sm"
                  className="hover:bg-green-500 hover:text-white hover:border-green-500"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  size="sm"
                  className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent"
                  onClick={() => window.open('https://instagram.com/unhagata', '_blank')}
                >
                  <Instagram size={16} className="mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="service-card p-0 overflow-hidden h-96 lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.196478207839!2d-46.63442908502069!3d-23.561414084686447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sR.%20das%20Flores%20-%20Vila%20Buarque%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1634567890123!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Unha de Gata"
                className="rounded-2xl"
              />
            </div>
            
            {/* Overlay with quick contact */}
            <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold mb-2">Unha de Gata</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rua das Flores, 123 - Centro
              </p>
              <Button 
                size="sm" 
                className="btn-primary"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Vi vocês no mapa e gostaria de agendar um horário.', '_blank')}
              >
                Agendar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;