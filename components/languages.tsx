"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { ArrowRight } from "lucide-react"

export default function Languages() {
  return (
    <section id="idiomas" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Idiomas Disponíveis</Badge>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Escolha seu <span className="text-blue-600">próximo idioma</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Cursos completos desenvolvidos por especialistas em linguística
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader className="relative z-10 pb-4">
            <div className="text-6xl mb-4">🇺🇸</div>
            <CardTitle className="text-3xl font-bold">Inglês</CardTitle>
            <CardDescription className="text-blue-100 text-lg">Do básico ao avançado</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-blue-100 mb-6 text-lg">
              Domine o idioma mais falado no mundo dos negócios e da tecnologia. Perfeito para carreira, viagens e
              estudos.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Conversação fluente</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Inglês para negócios</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Preparação para certificações</span>
              </li>
            </ul>
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3">
              Começar Inglês Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 bg-gradient-to-br from-red-600 to-red-800 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader className="relative z-10 pb-4">
            <div className="text-6xl mb-4">🇪🇸</div>
            <CardTitle className="text-3xl font-bold">Espanhol</CardTitle>
            <CardDescription className="text-red-100 text-lg">Para viagens, trabalho ou estudos</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-red-100 mb-6 text-lg">
              Conecte-se com mais de 500 milhões de falantes ao redor do mundo. Abra portas na América Latina e
              Espanha.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Espanhol latino e europeu</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Cultura e expressões locais</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Preparação para viagens</span>
              </li>
            </ul>
            <Button className="w-full bg-white text-red-600 hover:bg-red-50 font-semibold py-3">
              Começar Espanhol Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}
