import { AlertCircle, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Emergency Service Section - Industrial Minimalista
 * Design: Similar aos Segmentos de Atuação
 * Destaque para atendimento emergencial 24/7
 */
export default function EmergencyServiceSection() {
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
              Atendimento Emergencial
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-4" />
            <p className="text-lg text-gray-600">
              Disponível 24/7 para situações urgentes que exigem intervenção imediata
            </p>
          </div>

          {/* Emergency Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Resposta Rápida */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-lg mb-4">
                <Clock size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Resposta Rápida</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipe pronta para atender chamados emergenciais com tempo de resposta reduzido
              </p>
            </div>

            {/* Card 2: Disponibilidade 24/7 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-lg mb-4">
                <AlertCircle size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Disponibilidade 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                Atendimento sem interrupção, inclusive finais de semana e feriados
              </p>
            </div>

            {/* Card 3: Contato Direto */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                <Phone size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Contato Direto</h3>
              <p className="text-gray-600 leading-relaxed">
                Ligue agora para (61) 9.9954-4090 ou envie mensagem via WhatsApp
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-base flex items-center gap-2 mx-auto btn-hover"
              onClick={() => window.open('https://wa.me/5561999544090?text=Ol%C3%A1%20Capital%20Bombas!%20Preciso%20de%20atendimento%20emergencial.', '_blank')}
            >
              <AlertCircle size={20} /> Chamar Emergência Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
