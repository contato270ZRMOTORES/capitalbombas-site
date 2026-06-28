import { Card } from "@/components/ui/card";

/**
 * Brands Section - Industrial Minimalista
 * Design: Grid de marcas com cards simples, sem decoração excessiva
 */
export default function BrandsSection() {
  const brands = [
    { name: "KSB", logo: "KSB" },
    { name: "Sulzer", logo: "SULZER" },
    { name: "Flygt", logo: "FLYGT" },
    { name: "Schneider", logo: "SCHNEIDER" },
    { name: "Thebe", logo: "THEBE" },
    { name: "Imbil", logo: "IMBIL" },
    { name: "Ebara", logo: "EBARA" },
    { name: "Leão", logo: "LEÃO" },
    { name: "Famac", logo: "FAMAC" },
    { name: "Dancor", logo: "DANCOR" },
    { name: "ABS", logo: "ABS" },
  ];

  return (
    <section id="marcas" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Marcas que Atendemos
          </h2>
          <div className="h-1 w-20 bg-accent mb-6" />
          <p className="text-lg text-foreground/70">
            Especialistas em manutenção de bombas das principais marcas do mercado industrial.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="p-6 border border-border flex items-center justify-center bg-white hover:shadow-md transition-shadow duration-300 min-h-[120px] card-hover"
            >
              <div className="text-center">
                <p className="font-bold text-primary text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {brand.logo}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
