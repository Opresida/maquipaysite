import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { Users, Calculator, TrendingUp, Target, Star, ArrowRight, CheckCircle, Phone, Mail, Building, MessageSquare } from 'lucide-react';
import { GlowingEffect } from "./ui/glowing-effect";
import ShuffleCards from "./ui/shuffle-cards"; // Assuming ShuffleCards is in ui/shuffle-cards.tsx


const ConsultantsPage = () => {

const [faturamento, setFaturamento] = useState(50000);

const [pctDebito, setPctDebito] = useState(30);

const [formData, setFormData] = useState({

nome: '',

email: '',

telefone: '',

cnpj: '',

mensagem: ''

});


// Depoimentos de consultores
const consultantTestimonials = [
{
id: 1,
testimonial: "Em 6 meses como consultor MaquiPAY, consegui uma renda extra de R$ 8.000 mensais. Hoje sustento minha família com essa parceria incrível!",
author: "Ricardo Santos - Consultor Diamante",
avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
id: 2,
testimonial: "Deixei meu emprego CLT e hoje ganho 3x mais como consultora. A MaquiPAY mudou completamente minha vida financeira!",
author: "Marina Costa - Consultora Ouro",
avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
id: 3,
testimonial: "Comecei do zero e hoje tenho uma carteira de 50 clientes ativos. O suporte da MaquiPAY é excepcional, sempre me ajudando a crescer!",
author: "João Silva - Consultor Prata",
avatar: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
id: 4,
testimonial: "A liberdade de trabalhar de onde quiser e ainda ter uma renda recorrente é incrível. Recomendo a todos empreendedores!",
author: "Ana Paula - Consultora Inicial",
avatar: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
id: 5,
testimonial: "Em 1 ano, construí um negócio sólido e hoje ganho mais de R$ 15.000 por mês. A MaquiPAY é uma oportunidade real!",
author: "Carlos Mendes - Consultor Diamante",
avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
id: 6,
testimonial: "Consegui comprar minha casa própria graças às comissões da MaquiPAY. É uma parceria que realmente vale a pena!",
author: "Fernanda Lima - Consultora Ouro",
avatar: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
];


// Cálculo da comissão

const pctCredito = 100 - pctDebito;

const lucroDebito = (faturamento * pctDebito / 100) * 0.0065;

const lucroCredito = (faturamento * pctCredito / 100) * 0.025;

const lucroTotal = lucroDebito + lucroCredito;

const comissaoEstimada = lucroTotal * 0.30;



const fadeUpVariants = {

hidden: { opacity: 0, y: 30 },

visible: {

opacity: 1,

y: 0,

transition: {

duration: 0.8,

ease: [0.25, 0.4, 0.25, 1],

},

},

};



const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

setFormData({

...formData,

[e.target.name]: e.target.value

});

};



const handleSubmit = (e: React.FormEvent) => {

e.preventDefault();

console.log('Formulário enviado:', formData);

alert('Cadastro enviado com sucesso! Entraremos em contato em breve.');

};



return (

<div className="min-h-screen bg-background text-text-primary">

{/* Seção Hero */}

<section className="relative py-20 sm:py-32 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.05] via-transparent to-primary/[0.05] blur-3xl" />



<div className="container mx-auto px-6 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<motion.div

variants={fadeUpVariants}

initial="hidden"

animate="visible"

className="space-y-8"

>

<div>

<h1 className="text-4xl md:text-6xl font-bold leading-tight">

Seja um <span className="bg-gradient-primary text-transparent bg-clip-text">Consultor MaquiPAY</span> e Transforme o Futuro dos Pagamentos

</h1>

<p className="text-lg md:text-xl text-text-secondary mt-6 max-w-2xl">

Uma parceria lucrativa com comissões agressivas, plano de carreira e o suporte da solução de pagamentos que mais cresce no mercado.

</p>

</div>



<motion.button

whileHover={{ scale: 1.05 }}

whileTap={{ scale: 0.95 }}

className="group relative overflow-hidden bg-gradient-primary text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-3"

onClick={() => document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' })}

>

<Users className="w-6 h-6" />

Quero ser Consultor

<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

<div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

</motion.button>

</motion.div>



<motion.div

variants={fadeUpVariants}

initial="hidden"

animate="visible"

className="relative flex items-center justify-center"

>

<div className="relative">

<img

src="https://i.imgur.com/U4QLqcn.png"

alt="Maquininha MaquiPAY"

className="rounded-xl shadow-2xl max-w-full h-auto transform hover:rotate-2 transition-transform duration-500"

/>

</div>

</motion.div>

</div>

</div>

</section>



{/* Como Funciona a Parceria */}

<section className="py-20 sm:py-28 bg-surface/50">

<div className="container mx-auto px-6">

<motion.div

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="text-center mb-16"

>

<h2 className="text-3xl md:text-4xl font-bold mb-6">

Uma Parceria <span className="bg-gradient-primary text-transparent bg-clip-text">Transparente e Vantajosa</span>

</h2>

<p className="text-lg text-text-secondary max-w-2xl mx-auto">

Entenda como funciona nosso modelo de negócio em 3 passos simples

</p>

</motion.div>



<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

{[

{

icon: Target,

title: "1. Cadastro",

description: "Você se cadastra como revendedor (Pessoa Jurídica)."

},

{

icon: Users,

title: "2. Indicação",

description: "Você indica a MaquiPAY para seus clientes."

},

{

icon: TrendingUp,

title: "3. Comissão",

description: "Você recebe uma comissão sobre o lucro gerado por cada cliente."

}

].map((step, index) => (

<motion.div

key={index}

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="relative bg-background p-8 rounded-xl border border-secondary/20 text-center transition-all duration-300"

>

<GlowingEffect

disabled={false}

className="rounded-xl"

proximity={80}

spread={20}

inactiveZone={0.5}

borderWidth={1}

/>

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



{/* Exemplo de Cálculo */}

<motion.div

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="bg-gradient-primary/10 p-8 rounded-xl border border-primary/20"

>

<h3 className="text-2xl font-bold mb-6 text-center">Exemplo de Cálculo</h3>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

<div>

<p className="text-text-secondary mb-2">Seu cliente transacionou:</p>

<p className="text-2xl font-bold text-primary">R$ 100.000</p>

</div>

<div>

<p className="text-text-secondary mb-2">Lucro Bruto MaquiPAY (2%):</p>

<p className="text-2xl font-bold text-secondary">R$ 2.000</p>

</div>

<div>

<p className="text-text-secondary mb-2">Sua Comissão Inicial (30%):</p>

<p className="text-2xl font-bold text-primary">R$ 600</p>

</div>

</div>

<p className="text-xs text-text-secondary text-center mt-4">

* Este é um exemplo simplificado. Os custos operacionais são deduzidos do cálculo real.

</p>

</motion.div>

</div>

</section>



{/* Calculadora de Comissão */}

<section className="py-20 sm:py-28 bg-background">

<div className="container mx-auto px-6">

<motion.div

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="text-center mb-16"

>

<h2 className="text-3xl md:text-4xl font-bold mb-6">

<Calculator className="w-10 h-10 inline-block mr-3 text-primary" />

Simule Seus <span className="bg-gradient-primary text-transparent bg-clip-text">Ganhos</span>

</h2>

<p className="text-lg text-text-secondary max-w-2xl mx-auto">

Use nossa calculadora para estimar sua comissão mensal

</p>

</motion.div>



<div className="max-w-4xl mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

{/* Controles */}

<motion.div

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="bg-surface p-8 rounded-xl border border-secondary/20 space-y-8"

>

<div>

<label className="block text-sm font-semibold mb-4">

Faturamento Mensal do Cliente: R$ {faturamento.toLocaleString('pt-BR')}

</label>

<input

type="range"

min="10000"

max="500000"

step="5000"

value={faturamento}

onChange={(e) => setFaturamento(Number(e.target.value))}

className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"

/>

<div className="flex justify-between text-xs text-text-secondary mt-2">

<span>R$ 10k</span>

<span>R$ 500k</span>

</div>

</div>



<div>

<label className="block text-sm font-semibold mb-4">

Distribuição: {pctDebito}% Débito / {pctCredito}% Crédito

</label>

<input

type="range"

min="0"

max="100"

step="5"

value={pctDebito}

onChange={(e) => setPctDebito(Number(e.target.value))}

className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"

/>

<div className="flex justify-between text-xs text-text-secondary mt-2">

<span>100% Crédito</span>

<span>100% Débito</span>

</div>

</div>

</motion.div>



{/* Resultado */}

<motion.div

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="bg-gradient-primary/10 p-8 rounded-xl border border-primary/20 space-y-6"

>

<div className="text-center">

<h3 className="text-2xl font-bold mb-2">Sua Comissão Estimada</h3>

<p className="text-4xl font-bold text-primary">

R$ {comissaoEstimada.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}

</p>

<p className="text-sm text-text-secondary mt-2">por mês</p>

</div>



<div className="space-y-3">

<div className="flex justify-between">

<span className="text-text-secondary">Lucro Débito:</span>

<span>R$ {lucroDebito.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>

</div>

<div className="flex justify-between">

<span className="text-text-secondary">Lucro Crédito:</span>

<span>R$ {lucroCredito.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>

</div>

<div className="border-t border-secondary/20 pt-3">

<div className="flex justify-between font-semibold">

<span>Total (30% comissão):</span>

<span className="text-primary">R$ {comissaoEstimada.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>

</div>

</div>

</div>

</motion.div>

</div>

</div>

</div>

</section>



{/* Depoimentos de Consultores */}
<section className="py-20 sm:py-28 bg-surface/50">
  <div className="container mx-auto px-6">
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Consultores que Mudaram de <span className="bg-gradient-primary text-transparent bg-clip-text">Vida</span>
      </h2>
      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
        Conheça histórias reais de pessoas que transformaram suas vidas financeiras com a MaquiPAY
      </p>
      <p className="text-sm text-primary mt-4 font-medium">
        👆 Arraste os cards para ver mais depoimentos
      </p>
    </motion.div>

    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <ShuffleCards testimonials={consultantTestimonials} />
    </motion.div>

    {/* Estatísticas dos Consultores */}
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
    >
      <div className="text-center bg-background p-6 rounded-xl border border-primary/20">
        <div className="text-3xl font-bold text-primary mb-2">500+</div>
        <div className="text-text-secondary">Consultores Ativos</div>
      </div>
      <div className="text-center bg-background p-6 rounded-xl border border-primary/20">
        <div className="text-3xl font-bold text-primary mb-2">R$ 12M+</div>
        <div className="text-text-secondary">Pagos em Comissões</div>
      </div>
      <div className="text-center bg-background p-6 rounded-xl border border-primary/20">
        <div className="text-3xl font-bold text-primary mb-2">98%</div>
        <div className="text-text-secondary">Taxa de Satisfação</div>
      </div>
    </motion.div>
  </div>
</section>

  {/* Plano de Carreira */}
  <section className="py-20 sm:py-28 bg-background">

<div className="container mx-auto px-6">

<motion.div

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="text-center mb-16"

>

<h2 className="text-3xl md:text-4xl font-bold mb-6">

Cresça com a <span className="bg-gradient-primary text-transparent bg-clip-text">MaquiPAY</span>

</h2>

<p className="text-lg text-text-secondary max-w-2xl mx-auto">

Nosso plano de carreira oferece crescimento real baseado em performance

</p>

</motion.div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

{[

{

level: "Inicial",

commission: "30%",

target: "Início",

color: "from-gray-500 to-gray-600",

icon: Star

},

{

level: "Prata",

commission: "40%",

target: "R$ 400k",

color: "from-gray-300 to-gray-500",

icon: Star

},

{

level: "Ouro",

commission: "50%",

target: "R$ 700k",

color: "from-yellow-400 to-yellow-600",

icon: Star

},

{

level: "Diamante",

commission: "60%",

target: "R$ 3M",

color: "from-blue-400 to-purple-600",

icon: Star

}

].map((tier, index) => (

<motion.div

key={index}

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="relative bg-background p-6 rounded-xl border border-secondary/20 text-center transition-all duration-300 transform hover:-translate-y-2"

>

<GlowingEffect

disabled={false}

className="rounded-xl"

proximity={80}

spread={20}

inactiveZone={0.5}

borderWidth={1}

/>

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

<motion.div

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="text-center mb-16"

>

<h2 className="text-3xl md:text-4xl font-bold mb-6">

Faça Parte do Nosso <span className="bg-gradient-primary text-transparent bg-clip-text">Time</span>

</h2>

<p className="text-lg text-text-secondary max-w-2xl mx-auto">

Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas

</p>

</motion.div>



<motion.div

variants={fadeUpVariants}

initial="hidden"

whileInView="visible"

viewport={{ once: true }}

className="max-w-2xl mx-auto"

>

<form onSubmit={handleSubmit} className="bg-surface p-8 rounded-xl border border-secondary/20 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>

<label className="block text-sm font-semibold mb-2">

<Users className="w-4 h-4 inline-block mr-2" />

Nome Completo *

</label>

<input

type="text"

name="nome"

value={formData.nome}

onChange={handleInputChange}

required

className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"

placeholder="Seu nome completo"

/>

</div>



<div>

<label className="block text-sm font-semibold mb-2">

<Mail className="w-4 h-4 inline-block mr-2" />

Email *

</label>

<input

type="email"

name="email"

value={formData.email}

onChange={handleInputChange}

required

className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"

placeholder="seu@email.com"

/>

</div>



<div>

<label className="block text-sm font-semibold mb-2">

<Phone className="w-4 h-4 inline-block mr-2" />

Telefone *

</label>

<input

type="tel"

name="telefone"

value={formData.telefone}

onChange={handleInputChange}

required

className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"

placeholder="(11) 99999-9999"

/>

</div>



<div>

<label className="block text-sm font-semibold mb-2">

<Building className="w-4 h-4 inline-block mr-2" />

CNPJ *

</label>

<input

type="text"

name="cnpj"

value={formData.cnpj}

onChange={handleInputChange}

required

className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"

placeholder="00.000.000/0001-00"

/>

</div>

</div>



<div>

<label className="block text-sm font-semibold mb-2">

<MessageSquare className="w-4 h-4 inline-block mr-2" />

Mensagem (opcional)

</label>

<textarea

name="mensagem"

value={formData.mensagem}

onChange={handleInputChange}

rows={4}

className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"

placeholder="Conte-nos mais sobre seu interesse em se tornar um consultor..."

/>

</div>



<motion.button

type="submit"

whileHover={{ scale: 1.02 }}

whileTap={{ scale: 0.98 }}

className="w-full group relative overflow-hidden bg-gradient-primary text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center gap-3"

>

<CheckCircle className="w-6 h-6" />

Enviar Cadastro

<div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

</motion.button>

</form>

</motion.div>

</div>

</section>



</div>

);

};



export default ConsultantsPage;