"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Brain,
  Rocket,
  Trophy,
  Flame,
  Globe,
} from "lucide-react"

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Por que escolher o Talk Language?</Badge>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Benefícios que fazem a <span className="text-blue-600">diferença</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubra como nossa plataforma revoluciona o aprendizado de idiomas
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">🎯 Aprendizado 100% Personalizado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Algoritmo inteligente que se adapta ao seu ritmo, estilo de aprendizado e objetivos específicos.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-purple-600" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">🧠 Exercícios Interativos e Práticos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Atividades dinâmicas que simulam situações reais para fixar o aprendizado de forma natural.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">
              🚀 Metas Diárias e Sistema de Recompensas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Mantenha-se motivado com desafios diários e conquiste medalhas conforme avança.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-yellow-50 to-white">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-yellow-600" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">🏅 Evolução Monitorada em Tempo Real</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Acompanhe seu progresso com relatórios detalhados e estatísticas de desempenho.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-red-50 to-white">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flame className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">
              🔥 Gamificação para Turbinar seu Progresso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Transforme o aprendizado em um jogo viciante com níveis, conquistas e rankings.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-white">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-indigo-600" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">
              🌐 Acesse de qualquer lugar, quando quiser
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Plataforma responsiva que funciona perfeitamente em todos os dispositivos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}
