/**
 * Segments Pumps Gallery - Industrial Minimalista
 * Design: Galeria de imagens de bombas para cada segmento de atuação
 * Imagens reais de bombas industriais em uso
 */
export default function SegmentsPumpsGallery() {
  const segments = [
    {
      title: "Mineração",
      description: "Bombas para drenagem e circulação de fluidos em operações de mineração",
      image: "/manus-storage/pump-mining_5a1fd4dc.jpg",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Agrícola",
      description: "Bombas mancalizadas robustas para sistemas de pivô e irrigação",
      image: "/manus-storage/pump-agricultural-irrigation-field_e9f9c613.png",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Saneamento",
      description: "Estações de tratamento de água e esgoto com bombas de grande porte",
      image: "/manus-storage/pump-wastewater-treatment-station_277a8319.png",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Industrial & Condomínios",
      description: "Bombas centrífugas de grande porte para circulação de fluidos industriais",
      image: "/manus-storage/pump-centrifugal-large_ee93237a.jpg",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2
              className="text-4xl font-bold text-primary mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Bombas Industriais por Segmento
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-4" />
            <p className="text-lg text-gray-600">
              Conheça as bombas que atendemos em cada segmento de atuação
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 card-hover"
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${segment.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-primary mb-2">{segment.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{segment.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-gray-50 border-l-4 border-accent rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-primary">Expertise Comprovada:</span> Cada segmento recebe atenção especializada com equipes treinadas nas melhores práticas de manutenção preventiva, corretiva e preditiva. Contamos com peças originais e ferramentas de diagnóstico avançadas para garantir máxima eficiência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
