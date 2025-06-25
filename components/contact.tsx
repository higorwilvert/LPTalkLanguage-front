"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contatos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Mensagem enviada com sucesso!");
        setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      } else {
        alert("Erro ao enviar mensagem!");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro no servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
              Entre em Contato
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fale com nossa <span className="text-blue-600">equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas ou solicite mais informações. Preencha o formulário e te responderemos rapidamente!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-0 shadow-2xl rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-extrabold text-gray-900">
                    Envie sua mensagem
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Preencha os campos e nossa equipe entrará em contato o mais rápido possível.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome <span className="text-red-500">*</span>
                        </label>
                        <Input
                          placeholder="Seu nome completo"
                          value={form.nome}
                          onChange={(e) => setForm({ ...form, nome: e.target.value })}
                          required
                          className="rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone
                        </label>
                        <Input
                          placeholder="(11) 99999-9999"
                          value={form.telefone}
                          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                          className="rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        placeholder="Conte-nos como podemos ajudar você..."
                        value={form.mensagem}
                        onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                        className="rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[140px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-semibold rounded-full transition-transform hover:scale-105"
                    >
                      {loading ? "Enviando..." : (
                        <>
                          <Mail className="mr-2 h-5 w-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Outras formas de contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">E-mail</h4>
                      <p className="text-gray-600">contato@talklanguage.com</p>
                      <p className="text-sm text-gray-500">Respondemos em até 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefone</h4>
                      <p className="text-gray-600">(11) 3000-0000</p>
                      <p className="text-sm text-gray-500">Seg-Sex: 9h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Endereço</h4>
                      <p className="text-gray-600">São Paulo, SP - Brasil</p>
                      <p className="text-sm text-gray-500">Atendimento online</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">💡 Dica Especial</h4>
                <p className="text-gray-600 text-sm">
                  Quer começar ainda hoje? Clique no botão "Comece Agora Gratuitamente" e tenha acesso imediato à nossa plataforma!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
