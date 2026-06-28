import { MapPin, Truck, Users } from "lucide-react";

/**
 * Service Regions Section - Industrial Minimalista
 * Design: Similar aos Segmentos de Atuação
 * Destaque para regiões atendidas
 */
export default function ServiceRegionsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2
              className="text-4xl font-bold text-primary mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Regiões que Atendemos
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-4" />
            <p className="text-lg text-gray-600">
              Cobertura completa em Brasília, Goiás e Entorno com equipe especializada
            </p>
          </div>

          {/* Region Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Brasília */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                <MapPin size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Brasília, DF</h3>
              <p className="text-gray-600 leading-relaxed">
                Cobertura completa em toda a região de Brasília com atendimento rápido e eficiente
              </p>
            </div>

            {/* Card 2: Goiás */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-lg mb-4">
                <Truck size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Goiás</h3>
              <p className="text-gray-600 leading-relaxed">
                Atendimento em principais cidades de Goiás com logística otimizada para resposta rápida
              </p>
            </div>

            {/* Card 3: Entorno */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-lg mb-4">
                <Users size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Entorno</h3>
              <p className="text-gray-600 leading-relaxed">
                Cobertura em cidades do entorno com suporte técnico especializado
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-primary text-white rounded-xl p-8">
            <div className="flex items-start gap-4">
              <MapPin size={32} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Não encontrou sua região?</h3>
                <p className="text-blue-100 mb-4">
                  Entre em contato conosco para consultar possibilidades de atendimento em outras localidades.
                </p>
                <p className="text-sm text-blue-200">
                  Telefone: (61) 9.9954-4090 | Email: contato@capitalbombas.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
