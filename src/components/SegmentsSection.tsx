import { Card } from "@/components/ui/card";
import { Mountain, Leaf, Droplets, Building2 } from "lucide-react";

/**
 * Segments Section - Industrial Minimalista
 * Design: Cards com ícones e imagens, paleta azul-aço e laranja
 */
export default function SegmentsSection() {
  const segments = [
    {
      icon: Mountain,
      title: "Mineração",
      description: "Bombas para drenagem, circulação de fluidos e processos de beneficiamento mineral.",
      color: "text-primary",
    },
    {
      icon: Leaf,
      title: "Agrícola",
      description: "Sistemas de irrigação, bombeamento de água e aplicações em propriedades rurais.",
      color: "text-accent",
    },
    {
      icon: Droplets,
      title: "Saneamento",
      description: "Estações de tratamento de água, esgoto e sistemas de distribuição municipal.",
      color: "text-primary",
    },
    {
      icon: Building2,
      title: "Industrial & Condomínios",
      description: "Bombas para HVAC, água gelada, circulação de fluidos em processos industriais.",
      color: "text-accent",
    },
  ];

  return (
    <section id="segmentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Segmentos de Atuação
          </h2>
          <div className="h-1 w-20 bg-accent mb-6" />
          <p className="text-lg text-foreground/70">
            Atendemos diversos segmentos industriais com soluções personalizadas e expertise comprovada.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card
                key={index}
                className="p-8 border border-border hover:shadow-lg transition-shadow duration-300 bg-card card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`${segment.color} flex-shrink-0`}>
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold text-primary mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {segment.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {segment.description}
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
