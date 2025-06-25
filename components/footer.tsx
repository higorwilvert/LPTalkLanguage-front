
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/talk-logo.png" 
                alt="Talk Language" 
                className="h-8 w-auto mr-3"
              />
              <span className="text-2xl font-bold">Talk Language</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A nova forma de aprender idiomas através de jogos, desafios, 
              metas diárias e recompensas! Transforme seu aprendizado em uma 
              experiência divertida e eficiente.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#beneficios" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a 
                  href="#idiomas" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Idiomas
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">contato@talklanguage.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">(11) 9999-9999</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Idiomas Disponíveis</h5>
              <div className="flex space-x-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  🇺🇸 Inglês
                </span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs">
                  🇪🇸 Espanhol
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Talk Language. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;