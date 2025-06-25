
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Empresário",
      image: "👨‍💼",
      rating: 5,
      text: "Com o Talk Language consegui finalmente destravar meu inglês para viagens! A gamificação torna tudo muito mais divertido.",
      language: "Inglês"
    },
    {
      name: "Maria Santos", 
      role: "Estudante",
      image: "👩‍🎓",
      rating: 5,
      text: "Estava há anos tentando aprender espanhol e só consegui com essa plataforma. Os exercícios práticos fazem toda diferença!",
      language: "Espanhol"
    },
    {
      name: "Carlos Oliveira",
      role: "Desenvolvedor",
      image: "👨‍💻", 
      rating: 5,
      text: "A personalização do aprendizado é incrível! A IA se adapta ao meu ritmo e me mantém sempre motivado com as recompensas.",
      language: "Inglês"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alunos Dizem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas aprendendo um novo idioma conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>

              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="text-3xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                  <div className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {testimonial.language}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;