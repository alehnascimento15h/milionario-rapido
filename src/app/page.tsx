"use client";

import { useState } from "react";
import { TrendingUp, Mail, Lock, User, Phone, ArrowRight, Gift, Users, DollarSign, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin) {
      // Validação de cadastro
      if (!formData.name || !formData.email || !formData.phone || !formData.password) {
        toast.error("Preencha todos os campos");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("As senhas não coincidem");
        return;
      }
      if (formData.password.length < 6) {
        toast.error("A senha deve ter no mínimo 6 caracteres");
        return;
      }
      toast.success("Cadastro realizado com sucesso! Bem-vindo ao Milionário Rápido!");
    } else {
      // Validação de login
      if (!formData.email || !formData.password) {
        toast.error("Preencha email e senha");
        return;
      }
      toast.success("Login realizado com sucesso!");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
          
          {/* Logo & Header */}
          <div className="text-center mb-8 space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-orange-500/50 animate-pulse">
                <TrendingUp className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Milionário Rápido
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <p className="text-xl text-yellow-400 font-semibold">Indicou, Ganhou!</p>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-4 text-center">
              <Gift className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-white font-bold text-lg">50%</p>
              <p className="text-white/70 text-xs">Comissão</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-bold text-lg">∞</p>
              <p className="text-white/70 text-xs">Indicações</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-4 text-center">
              <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-bold text-lg">R$200</p>
              <p className="text-white/70 text-xs">Saque Min</p>
            </div>
          </div>

          {/* Form Card */}
          <Card className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {isLogin ? "Entrar na Conta" : "Criar Conta Grátis"}
                </h2>
                <p className="text-white/70 text-sm">
                  {isLogin 
                    ? "Acesse seu painel de ganhos" 
                    : "Comece a ganhar em 2 minutos"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-medium">Nome Completo</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-white/50" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Digite seu nome"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus:bg-white/20 focus:border-white/40"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-white/50" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus:bg-white/20 focus:border-white/40"
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white font-medium">Telefone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-white/50" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus:bg-white/20 focus:border-white/40"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white font-medium">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 w-5 h-5 text-white/50" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus:bg-white/20 focus:border-white/40"
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white font-medium">Confirmar Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-5 h-5 text-white/50" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Repita sua senha"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus:bg-white/20 focus:border-white/40"
                      />
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 text-white font-bold py-6 text-lg shadow-2xl shadow-orange-500/50 border-0 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  {isLogin ? "Entrar Agora" : "Começar a Ganhar"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                  >
                    {isLogin ? "Não tem conta? Criar agora" : "Já tem conta? Fazer login"}
                  </button>
                </div>

                {!isLogin && (
                  <p className="text-xs text-center text-white/50 pt-2">
                    Ao criar uma conta, você concorda com nossos{" "}
                    <a href="#" className="text-yellow-400 hover:underline">Termos</a>
                    {" "}e{" "}
                    <a href="#" className="text-yellow-400 hover:underline">Política</a>
                  </p>
                )}
              </form>
            </div>
          </Card>

          {/* Footer Info */}
          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              🔒 Seus dados estão seguros e criptografados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
