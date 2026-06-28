import { Card } from "@/components/ui/card";

/**
 * Brands Logos Section - Industrial Minimalista
 * Design: Grid com logos reais das marcas que atendemos
 */
export default function BrandsLogosSection() {
  const brands = [
    {
      name: "KSB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/KSB_Logo.svg/1200px-KSB_Logo.svg.png",
    },
    {
      name: "Sulzer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sulzer_logo.svg/1200px-Sulzer_logo.svg.png",
    },
    {
      name: "Flygt",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Xylem_Inc._logo.svg/1200px-Xylem_Inc._logo.svg.png",
    },
    {
      name: "Schneider",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Schneider_Electric_logo.svg/1200px-Schneider_Electric_logo.svg.png",
    },
    {
      name: "Ebara",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Ebara_Corporation_logo.svg/1200px-Ebara_Corporation_logo.svg.png",
    },
    {
      name: "ABS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/ABS_Pumps_logo.svg/1200px-ABS_Pumps_logo.svg.png",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8">
          MARCAS LÍDERES QUE ATENDEMOS
        </p>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="p-4 border border-border flex items-center justify-center bg-white hover:shadow-md transition-shadow duration-300 min-h-[100px] card-hover"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-12 object-contain"
                onError={(e) => {
                  // Fallback se a imagem não carregar
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<p className="font-bold text-primary text-sm">${brand.name}</p>`;
                  }
                }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
