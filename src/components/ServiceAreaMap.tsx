import { MapPin, Phone, AlertCircle } from "lucide-react";

/**
 * Service Area Map - Mapa interativo com área de atendimento
 * Design: Industrial Minimalista com visualização de cobertura
 */
export default function ServiceAreaMap() {
  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">NOSSA COBERTURA</p>
          <h2
            className="text-4xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Atendemos Brasília, Goiás e Entorno
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cobertura completa do Distrito Federal e região do entorno com atendimento rápido e eficiente
          </p>
        </div>

        {/* Map Container with SVG */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-8 bg-gradient-to-br from-blue-50 to-blue-100">
          <svg
            viewBox="0 0 800 500"
            className="w-full h-auto"
            style={{ minHeight: "400px" }}
          >
            {/* Background */}
            <rect width="800" height="500" fill="#f0f9ff" />

            {/* Goiás State outline (simplified) */}
            <path
              d="M 250 150 L 450 120 L 500 250 L 450 380 L 250 400 L 200 280 Z"
              fill="#e8f4f8"
              stroke="#1E3A5F"
              strokeWidth="2"
            />

            {/* Brasília coverage circle */}
            <circle cx="350" cy="250" r="120" fill="#E67E22" opacity="0.2" stroke="#E67E22" strokeWidth="2" />

            {/* Brasília marker */}
            <circle cx="350" cy="250" r="12" fill="#E67E22" stroke="white" strokeWidth="2" />
            <text x="350" y="310" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1E3A5F">
              Brasília - Sede
            </text>

            {/* Goiânia marker */}
            <circle cx="280" cy="350" r="8" fill="#1E3A5F" stroke="white" strokeWidth="2" />
            <text x="280" y="390" textAnchor="middle" fontSize="14" fill="#1E3A5F">
              Goiânia
            </text>

            {/* Coverage area label */}
            <text x="350" y="100" textAnchor="middle" fontSize="12" fill="#666" fontStyle="italic">
              Raio de Cobertura: 200km
            </text>

            {/* Legend */}
            <g>
              <rect x="50" y="420" width="700" height="60" fill="white" stroke="#ddd" strokeWidth="1" rx="4" />
              <circle cx="70" cy="440" r="6" fill="#E67E22" />
              <text x="85" y="445" fontSize="12" fill="#333">
                Área de Cobertura Prioritária
              </text>
              <circle cx="70" cy="465" r="6" fill="#1E3A5F" />
              <text x="85" y="470" fontSize="12" fill="#333">
                Cidades Principais
              </text>
            </g>
          </svg>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 card-hover">
            <div className="flex items-start gap-3">
              <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Brasília, DF
                </h3>
                <p className="text-sm text-gray-600">
                  Sede principal com equipe técnica disponível para atendimento imediato
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 card-hover">
            <div className="flex items-start gap-3">
              <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Goiás e Entorno
                </h3>
                <p className="text-sm text-gray-600">
                  Atendimento em toda a região com deslocamento rápido e eficiente
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border border-red-200 card-hover">
            <div className="flex items-start gap-3">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-600 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Emergencial 24/7
                </h3>
                <p className="text-sm text-gray-600">
                  Atendimento de emergência disponível 24 horas para situações críticas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-blue-700 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Precisa de atendimento urgente?
          </h3>
          <p className="mb-4 text-blue-100">
            Entre em contato conosco imediatamente via WhatsApp
          </p>
          <button
            onClick={() => window.open('https://wa.me/5561999544090?text=Ol%C3%A1%20Capital%20Bombas!%20Preciso%20de%20atendimento%20emergencial.', '_blank')}
            className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 active:scale-95"
          >
            <Phone size={20} />
            Chamar via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
