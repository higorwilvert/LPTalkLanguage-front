"use client";

import { useEffect, useState } from "react";
import { Trash2, Pencil, PlusCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Contato = {
  id: number;
  nome: string;
  email: string;
  telefone: string | null;
  mensagem: string | null;
  criadoEm: string;
};

export default function AdminPage() {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [loading, setLoading] = useState(true);

  const [openDialog, setOpenDialog] = useState(false);
  const [editContato, setEditContato] = useState<Contato | null>(null);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchContatos = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contatos");
      const data = await res.json();
      setContatos(data);
    } catch (error) {
      console.error("Erro ao buscar contatos", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/contatos/${id}`, {
        method: "DELETE",
      });
      setContatos(contatos.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Erro ao deletar", error);
      alert("Erro ao deletar contato");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editContato) {
        const res = await fetch(
          `http://localhost:5000/api/contatos/${editContato.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          }
        );
        const data = await res.json();
        setContatos(
          contatos.map((c) => (c.id === editContato.id ? data : c))
        );
      } else {
        const res = await fetch("http://localhost:5000/api/contatos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        setContatos([data, ...contatos]);
      }

      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      setEditContato(null);
      setOpenDialog(false);
    } catch (error) {
      console.error("Erro ao salvar contato", error);
      alert("Erro ao salvar contato");
    }
  };

  const handleEdit = (contato: Contato) => {
    setEditContato(contato);
    setForm({
      nome: contato.nome,
      email: contato.email,
      telefone: contato.telefone || "",
      mensagem: contato.mensagem || "",
    });
    setOpenDialog(true);
  };

  useEffect(() => {
    fetchContatos();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Painel Administrativo
            </h1>
            <p className="text-gray-500 mt-2">
              Gerencie os contatos recebidos pelo Talk Language.
            </p>
          </div>

          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                onClick={() => {
                  setEditContato(null);
                  setForm({
                    nome: "",
                    email: "",
                    telefone: "",
                    mensagem: "",
                  });
                }}
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                Novo Contato
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editContato ? "Editar Contato" : "Criar Contato"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Nome</label>
                  <Input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Telefone</label>
                  <Input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Mensagem</label>
                  <Textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  {editContato ? "Salvar Alterações" : "Criar Contato"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">📬 Lista de Contatos</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-gray-600">🔄 Carregando contatos...</p>
            ) : contatos.length === 0 ? (
              <p className="text-gray-600">Nenhum contato encontrado.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                      <th className="px-6 py-3 text-left">ID</th>
                      <th className="px-6 py-3 text-left">Nome</th>
                      <th className="px-6 py-3 text-left">Email</th>
                      <th className="px-6 py-3 text-left">Telefone</th>
                      <th className="px-6 py-3 text-left">Mensagem</th>
                      <th className="px-6 py-3 text-left">Criado em</th>
                      <th className="px-6 py-3 text-center">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contatos.map((contato, index) => (
                      <tr
                        key={contato.id}
                        className={
                          index % 2 === 0
                            ? "bg-white hover:bg-gray-50"
                            : "bg-gray-50 hover:bg-gray-100"
                        }
                      >
                        <td className="px-6 py-4">{contato.id}</td>
                        <td className="px-6 py-4">{contato.nome}</td>
                        <td className="px-6 py-4">{contato.email}</td>
                        <td className="px-6 py-4">
                          {contato.telefone ? (
                            contato.telefone
                          ) : (
                            <Badge variant="outline">Não informado</Badge>
                          )}
                        </td>
                        <td className="px-6 py-4 max-w-[250px] truncate">
                          {contato.mensagem ? (
                            contato.mensagem
                          ) : (
                            <Badge variant="outline">Sem mensagem</Badge>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(contato.criadoEm).toLocaleString("pt-BR")}
                        </td>
                        <td className="px-6 py-4 text-center space-x-2">
                          <Button
                            size="icon"
                            onClick={() => handleEdit(contato)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            onClick={() => handleDelete(contato.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
