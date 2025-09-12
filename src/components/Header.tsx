import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/logo-unhas-de-gata.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logoImage} 
            alt="Unhas de Gata - Beleza e Estética" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('inicio')}
            className={`transition-colors ${
              isScrolled ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className={`transition-colors ${
              isScrolled ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'
            }`}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('agendamento')}
            className={`transition-colors ${
              isScrolled ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'
            }`}
          >
            Agendamento
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className={`transition-colors ${
              isScrolled ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'
            }`}
          >
            Contato
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('agendamento')}
            className="btn-primary"
          >
            Agendar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${
            isScrolled ? 'text-white' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-white/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-left text-white hover:text-white/80 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-left text-white hover:text-white/80 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('agendamento')}
              className="text-left text-white hover:text-white/80 transition-colors"
            >
              Agendamento
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left text-white hover:text-white/80 transition-colors"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('agendamento')}
              className="btn-primary w-full"
            >
              Agendar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;