"use client"

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Crie sua conta gratuitamente",
      description: "Faça seu cadastro em menos de 2 minutos e desbloqueie sua jornada no idioma escolhido."
    },
    {
      step: "2",
      title: "Escolha seu idioma e objetivos",
      description: "Defina se quer aprender para viagens, trabalho ou conversação e personalize sua experiência."
    },
    {
      step: "3",
      title: "Complete desafios e pratique",
      description: "Aproveite atividades dinâmicas, interativas e missões diárias que tornam o aprendizado leve e divertido."
    },
    {
      step: "4",
      title: "Ganhe recompensas e evolua",
      description: "Suba de nível, conquiste medalhas, acompanhe seu progresso e mantenha-se motivado."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Como Funciona o Talk Language?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Aprender um novo idioma nunca foi tão fácil. Siga esses 4 passos e comece hoje mesmo!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-24 h-1 bg-gradient-to-r from-blue-200 to-purple-200"></div>
                )}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
