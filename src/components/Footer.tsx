import React from 'react';
import { Heart, Instagram, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Unha de Gata
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Na, UNHAS DE GATA, acreditamos que as suas unhas são uma forma de expressão pessoal e queremos ajudá-la a realçar a sua beleza única. Venha visitar-nos e desfrute de uma experiência de cuidados com as unhas excepcional, em um ambiente acolhedor e relaxante.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle size={18} className="text-black" />
              </a>
              <a 
                href="https://instagram.com/unhagata" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={18} className="text-black" />
              </a>
              <a 
                href="tel:+5511999999999"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone size={18} className="text-black" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  Manicure
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  Pedicure
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  Nail Art
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  Unhas em Gel
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-primary transition-colors">
                  Agendamento
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center mb-4 md:mb-0">
              <span>© 2025 Unha de Gata. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              Feito com <Heart className="text-black" size={16} fill="currentColor" /> para cuidar da sua beleza
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;