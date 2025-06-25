import { Button } from "@/components/ui/button";
import { Play, Star, Users, Trophy, Zap } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Plataforma #1
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              Aprenda{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Inglês e Espanhol
              </span>{" "}
              de Forma Divertida, Rápida e Personalizada!
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A nova forma de aprender idiomas através de jogos, desafios, metas diárias e recompensas! 
              Transforme seu aprendizado em uma experiência única e conquistadora.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-gray-700">+10.000 Alunos</span>
              </div>
              <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md">
                <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-gray-700">98% Satisfação</span>
              </div>
              <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md">
                <Zap className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm font-semibold text-gray-700">Resultados em 30 dias</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Quero Começar Gratuitamente
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('como-funciona')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-white"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Como Funciona
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      EN
                    </div>
                    <span className="font-semibold text-gray-800">Lesson 24</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                  <p className="text-gray-700 font-medium">Complete the sentence:</p>
                  <p className="text-lg font-bold text-gray-900 mt-2">"I ___ to the store yesterday."</p>
                  <div className="flex gap-2 mt-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">went</button>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">go</button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-600">Level 12</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    +50 XP
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-bounce">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Star className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
