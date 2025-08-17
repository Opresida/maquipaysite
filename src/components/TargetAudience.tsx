"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// 'BarChart' e 'DollarSign' foram removidos da linha abaixo
import { Users, CheckCircle, Zap, TrendingUp, ShoppingBag, UserPlus } from "lucide-react";

const UserData = [
  {
    name: "Café do Bairro",
    value: "R$ 1.250,40",
    time: "Agora",
    icon: <ShoppingBag className="w-5 h-5 text-text-secondary" />,
  },
  {
    name: "Loja da Maria",
    value: "R$ 899,00",
    time: "2 min atrás",
    icon: <ShoppingBag className="w-5 h-5 text-text-secondary" />,
  },
  {
    name: "Cliente Online",
    value: "R$ 350,00",
    time: "5 min atrás",
    icon: <UserPlus className="w-5 h-5 text-text-secondary" />,
  },
    {
    name: "Padaria Pão Quente",
    value: "R$ 55,90",
    time: "10 min atrás",
    icon: <ShoppingBag className="w-5 h-5 text-text-secondary" />,
  },
];

const TargetAudience = () => {
  return (
    <section className="bg-background overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Feita para o seu negócio, <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-primary text-transparent bg-clip-text">
                seja ele qual for.
              </span>
            </h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Veja como a MaquiPAY impulsiona resultados, desde o autônomo até o grande varejista. Seus dados, seu crescimento, em um só lugar.
            </p>
          </>
        }
      >
        <div className="w-full h-full bg-surface rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col text-text-primary">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Painel de Resultados</h3>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span>Dados em tempo real</span>
            </div>
          </div>

          {/* Grid de Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
            <MetricCard icon={<TrendingUp className="text-primary" />} title="Aumento de Vendas" value="+35%" />
            <MetricCard icon={<Users className="text-primary" />} title="Novos Clientes" value="+120" />
            <MetricCard icon={<CheckCircle className="text-success" />} title="Taxa de Aprovação" value="99.7%" />
            <MetricCard icon={<Zap className="text-secondary" />} title="Velocidade" value="< 2s" />
          </div>

          {/* Gráfico e Transações */}
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-background rounded-lg p-4 flex flex-col">
              <h4 className="text-lg font-semibold mb-4">Crescimento de Receita (Últimos 30 dias)</h4>
              <div className="flex-grow flex items-center justify-center">
                  <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gráfico de crescimento de receita" className="w-full h-full object-cover rounded-md opacity-75" />
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 flex flex-col">
              <h4 className="text-lg font-semibold mb-4">Últimas Transações</h4>
              <div className="flex-grow space-y-4 overflow-y-auto">
                {UserData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-surface rounded-full">{item.icon}</div>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-text-secondary">{item.time}</p>
                      </div>
                    </div>
                    <p className="font-bold text-success">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

const MetricCard = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
  <div className="bg-background p-4 rounded-lg flex flex-col justify-between">
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <h5 className="text-sm text-text-secondary font-medium">{title}</h5>
    </div>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default TargetAudience;
