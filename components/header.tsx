import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/talk-logo.png" 
              alt="Talk Language" 
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('idiomas')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Idiomas
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contato')}
            className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Comece Agora Gratuitamente
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('idiomas')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Idiomas
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold mt-4 w-full"
              >
                Comece Agora Gratuitamente
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
