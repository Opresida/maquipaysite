"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calculator, TrendingUp, Target, Star, ArrowRight, CheckCircle, Phone, Mail, Building, MessageSquare } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "./ui/glowing-effect";
import { ShuffleCards } from "./ui/testimonial-cards";

// --- ESTRUTURA DE DADOS COM TODAS AS TAXAS EXTRAÍDAS DAS SUAS TABELAS ---
const taxasMaquipay = {
  visa: { "Débito": 0.5, "Crédito à vista": 0.75, "Crédito 2X": 1.0, "Crédito 3X": 1.25, "Crédito 4X": 1.5, "Crédito 5X": 1.75, "Crédito 6X": 2.0, "Crédito 7X": 2.25, "Crédito 8X": 2.5, "Crédito 9X": 2.75, "Crédito 10X": 3.0, "Crédito 11X": 3.25, "Crédito 12X": 3.5 },
  mastercard: { "Débito": 0.5, "Crédito à vista": 0.75, "Crédito 2X": 1.0, "Crédito 3X": 1.25, "Crédito 4X": 1.5, "Crédito 5X": 1.75, "Crédito 6X": 2.0, "Crédito 7X": 2.25, "Crédito 8X": 2.5, "Crédito 9X": 2.75, "Crédito 10X": 3.0, "Crédito 11X": 3.25, "Crédito 12X": 3.5 },
  elo: { "Débito": 0.5, "Crédito à vista": 0.75, "Crédito 2X": 1.0, "Crédito 3X": 1.25, "Crédito 4X": 1.5, "Crédito 5X": 1.75, "Crédito 6X": 2.0, "Crédito 7X": 2.25, "Crédito 8X": 2.5, "Crédito 9X": 2.75, "Crédito 10X": 3.0, "Crédito 11X": 3.25, "Crédito 12X": 3.5 },
  amex: { "Crédito à vista": 0.5, "Crédito 2X": 0.75, "Crédito 3X": 1.0, "Crédito 4X": 1.25, "Crédito 5X": 1.5, "Crédito 6X": 1.75, "Crédito 7X": 2.0, "Crédito 8X": 2.25, "Crédito 9X": 2.5, "Crédito 10X": 2.75, "Crédito 11X": 3.0, "Crédito 12X": 3.25 },
  hipercard: { "Crédito à vista": 0.5, "Crédito 2X": 0.75, "Crédito 3X": 1.0, "Crédito 4X": 1.25, "Crédito 5X": 1.5, "Crédito 6X": 1.75, "Crédito 7X": 2.0, "Crédito 8X": 2.25, "Crédito 9X": 2.5, "Crédito 10X": 2.75, "Crédito 11X": 3.0, "Crédito 12X": 3.25 },
  cabal: { "Débito": 0.5, "Crédito à vista": 0.75, "Crédito 2X": 1.0, "Crédito 3X": 1.25, "Crédito 4X": 1.5, "Crédito 5X": 1.75, "Crédito 6X": 2.0, "Crédito 7X": 2.25, "Crédito 8X": 2.5, "Crédito 9X": 2.75, "Crédito 10X": 3.0, "Crédito 11X": 3.25, "Crédito 12X": 3.5 },
  pix: { "Pix": 0.5 }
};

const niveisConsultor = [
  { nome: "Inicial", comissao: 0.30, icon: Star, color: "text-gray-400" },
  { nome: "Prata", comissao: 0.40, icon: Star, color: "text-gray-300" },
  { nome: "Ouro", comissao: 0.50, icon: Star, color: "text-yellow-400" },
  { nome: "Diamante", comissao: 0.60, icon: Star, color: "text-blue-400" }
];

const ConsultantsPage = () => {
  const [faturamento, setFaturamento] = useState(100000);
  const [bandeira, setBandeira] = useState("visa");
  const [tipoPagamento, setTipoPagamento] = useState("Crédito à vista");
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', cnpj: '', mensagem: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const consultantTestimonials = [
    { id: 1, testimonial: "Em 6 meses como consultor MaquiPAY, consegui uma renda extra de R$ 8.000 mensais.", author: "Ricardo Santos - Consultor Diamante", avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 2, testimonial: "Deixei meu emprego CLT e hoje ganho 3x mais como consultora. A MaquiPAY mudou minha vida!", author: "Marina Costa - Consultora Ouro", avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 3, testimonial: "Comecei do zero e hoje tenho uma carteira de 50 clientes ativos. O suporte é excecional.", author: "João Silva - Consultor Prata", avatar: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ];

  const comissaoMaquipayPct = taxasMaquipay[bandeira]?.[tipoPagamento] || 0;
  const lucroMaquipay = faturamento * (comissaoMaquipayPct / 100);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
  };

  const handleBandeiraChange = (value) => {
    setBandeira(value);
    if (!taxasMaquipay[value][tipoPagamento]) {
      setTipoPagamento(Object.keys(taxasMaquipay[value])[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Seção Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.05] via-transparent to-primary/[0.05] blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpVariants} initial="hidden" animate="visible" className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Seja um <span className="bg-gradient-primary text-transparent bg-clip-text">Consultor MaquiPAY</span> e Transforme o Futuro dos Pagamentos
                </h1>
                <p className="text-lg md:text-xl text-text-secondary mt-6 max-w-2xl">
                  Uma parceria lucrativa com comissões agressivas, plano de carreira e o suporte da solução de pagamentos que mais cresce no mercado.
                </p>
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group relative overflow-hidden bg-gradient-primary text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-3" onClick={() => document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' })}>
                <Users className="w-6 h-6" />
                Quero ser Consultor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </motion.button>
            </motion.div>
            <motion.div variants={fadeUpVariants} initial="hidden" animate="visible" className="relative flex items-center justify-center">
              <div className="relative">
                <img src="https://i.imgur.com/U4QLqcn.png" alt="Maquininha MaquiPAY" className="rounded-xl shadow-2xl max-w-full h-auto transform hover:rotate-2 transition-transform duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona a Parceria */}
      <section className="py-20 sm:py-28 bg-surface/50">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Uma Parceria <span className="bg-gradient-primary text-transparent bg-clip-text">Transparente e Vantajosa</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Entenda como funciona nosso modelo de negócio em 3 passos simples
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Target, title: "1. Cadastro", description: "Você se cadastra como revendedor (Pessoa Jurídica)." },
              { icon: Users, title: "2. Indicação", description: "Você indica a MaquiPAY para seus clientes." },
              { icon: TrendingUp, title: "3. Comissão", description: "Você recebe uma comissão sobre o lucro gerado por cada cliente." }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative bg-background p-8 rounded-xl border border-secondary/20 text-center transition-all duration-300">
                <GlowingEffect disabled={false} className="rounded-xl" proximity={80} spread={20} inactiveZone={0.5} borderWidth={1} />
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOVA CALCULADORA DE COMISSÃO --- */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <Calculator className="w-10 h-10 inline-block mr-3 text-primary" />
              Simule Seus <span className="bg-gradient-primary text-transparent bg-clip-text">Ganhos</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Veja na prática o potencial da sua parceria com a MaquiPAY.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 bg-surface p-8 rounded-xl border border-secondary/20 space-y-8">
              <div>
                <label className="block text-sm font-semibold mb-2">Faturamento Mensal</label>
                <p className="text-3xl font-bold text-primary mb-4">R$ {faturamento.toLocaleString('pt-BR')}</p>
                <Slider value={[faturamento]} onValueChange={(value) => setFaturamento(value[0])} min={10000} max={1000000} step={10000} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Bandeira</label>
                <Select value={bandeira} onValueChange={handleBandeiraChange}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.keys(taxasMaquipay).map(b => <SelectItem key={b} value={b}>{b.charAt(0).toUpperCase() + b.slice(1)}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tipo de Pagamento</label>
                <Select value={tipoPagamento} onValueChange={setTipoPagamento}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.keys(taxasMaquipay[bandeira] || {}).map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3 bg-gradient-primary/10 p-8 rounded-xl border border-primary/20 space-y-6">
              <div className="text-center">
                <p className="text-text-secondary">Lucro da MaquiPAY nesta simulação</p>
                <p className="text-3xl font-bold text-secondary mb-6">
                  R$ {lucroMaquipay.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center text-text-primary mb-4">Sua Comissão por Nível de Carreira:</h3>
                {niveisConsultor.map(nivel => {
                  const comissao = lucroMaquipay * nivel.comissao;
                  return (
                    <div key={nivel.nome} className="bg-background/50 p-4 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <nivel.icon className={`w-6 h-6 ${nivel.color}`} />
                        <span className="font-semibold text-lg">{nivel.nome} ({nivel.comissao * 100}%)</span>
                      </div>
                      <span className="font-bold text-xl text-primary">
                        R$ {comissao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos de Consultores */}
      <section className="py-20 sm:py-28 bg-surface/50">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Consultores que Mudaram de <span className="bg-gradient-primary text-transparent bg-clip-text">Vida</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Conheça histórias reais de pessoas que transformaram suas vidas financeiras com a MaquiPAY
            </p>
          </motion.div>
          <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center">
            <ShuffleCards testimonials={consultantTestimonials} />
          </motion.div>
        </div>
      </section>

      {/* Plano de Carreira */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cresça com a <span className="bg-gradient-primary text-transparent bg-clip-text">MaquiPAY</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Nosso plano de carreira oferece crescimento real baseado em performance
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { level: "Inicial", commission: "30%", target: "Início", color: "from-gray-500 to-gray-600", icon: Star },
              { level: "Prata", commission: "40%", target: "R$ 400k", color: "from-gray-300 to-gray-500", icon: Star },
              { level: "Ouro", commission: "50%", target: "R$ 700k", color: "from-yellow-400 to-yellow-600", icon: Star },
              { level: "Diamante", commission: "60%", target: "R$ 3M", color: "from-blue-400 to-purple-600", icon: Star }
            ].map((tier, index) => (
              <motion.div key={index} variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative bg-background p-6 rounded-xl border border-secondary/20 text-center transition-all duration-300 transform hover:-translate-y-2">
                <GlowingEffect disabled={false} className="rounded-xl" proximity={80} spread={20} inactiveZone={0.5} borderWidth={1} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Consultor {tier.level}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{tier.commission}</p>
                  <p className="text-sm text-text-secondary">Faturamento: {tier.target}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section id="cadastro" className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Faça Parte do Nosso <span className="bg-gradient-primary text-transparent bg-clip-text">Time</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
            </p>
          </motion.div>
          <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto">
            {formSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-6 rounded-xl text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Cadastro enviado com sucesso!</h3>
                <p className="mt-2">Obrigado! A nossa equipa entrará em contacto consigo em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-xl border border-secondary/20 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                     <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="Email *" className="w-full pl-10 pr-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors" />
                  </div>
                   <div className="relative">
                     <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                     <Input name="telefone" type="tel" value={formData.telefone} onChange={handleInputChange} required placeholder="Telefone *" className="w-full pl-10 pr-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors" />
                  </div>
                   <div className="relative">
                     <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                     <Input name="nome" value={formData.nome} onChange={handleInputChange} required placeholder="Nome Completo *" className="w-full pl-10 pr-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors" />
                  </div>
                   <div className="relative">
                     <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                     <Input name="cnpj" value={formData.cnpj} onChange={handleInputChange} required placeholder="CNPJ *" className="w-full pl-10 pr-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors" />
                  </div>
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-5 w-5 h-5 text-text-secondary" />
                  <Textarea name="mensagem" value={formData.mensagem} onChange={handleInputChange} placeholder="Mensagem (opcional)" className="w-full pl-10 pr-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none" />
                </div>
                <Button type="submit" className="w-full text-lg">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Enviar Cadastro
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConsultantsPage;
