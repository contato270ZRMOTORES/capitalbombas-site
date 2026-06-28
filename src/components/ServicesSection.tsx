import { Card } from "@/components/ui/card";
import { CheckCircle2, Wrench, AlertCircle, TrendingUp } from "lucide-react";

/**
 * Services Section - Industrial Minimalista
 * Design: Cards simples com ícones, linhas divisórias, paleta azul-aço e laranja
 */
export default function ServicesSection() {
  const services = [
    {
      icon: Wrench,
      title: "Manutenção Corretiva",
      description: "Reparo e restauração de bombas com falha, utilizando peças originais e técnicas comprovadas.",
      color: "text-primary",
    },
    {
      icon: CheckCircle2,
      title: "Manutenção Preventiva",
      description: "Inspeções periódicas e limpeza para evitar falhas e prolongar a vida útil dos equipamentos.",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: "Manutenção Preditiva",
      description: "Monitoramento avançado com análise de vibração e termografia para detecção precoce de problemas.",
      color: "text-primary",
    },
    {
      icon: AlertCircle,
      title: "Diagnóstico Técnico",
      description: "Análise completa de desempenho e recomendações personalizadas para otimização.",
      color: "text-accent",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Nossos Serviços
          </h2>
          <div className="h-1 w-20 bg-accent mb-6" />
          <p className="text-lg text-foreground/70">
            Oferecemos soluções completas em manutenção de bombas industriais, adaptadas às necessidades específicas de cada cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 border border-border hover:shadow-lg transition-shadow duration-300 bg-card card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`${service.color} flex-shrink-0`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold text-primary mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Divider Line */}
        <div className="mt-16 h-px bg-border" />
      </div>
    </section>
  );
}
