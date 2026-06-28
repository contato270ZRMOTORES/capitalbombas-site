import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

/**
 * CTA Section - Industrial Minimalista
 * Design: Fundo azul-aço com tipografia branca, botão laranja
 * Otimizado para conversão com múltiplas opções de contato
 */
export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Pronto para Otimizar sua Manutenção?
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light">
            Entre em contato conosco para uma avaliação gratuita e descubra como podemos melhorar a eficiência de seus equipamentos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold text-base flex items-center gap-2 btn-hover"
              onClick={() => window.open('https://wa.me/5561999544090?text=Ol%C3%A1%20Capital%20Bombas!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.', '_blank')}
            >
              Solicitar Orçamento <ArrowRight size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold text-base btn-hover"
              onClick={() => window.open('https://wa.me/5561999544090?text=Ol%C3%A1%20Capital%20Bombas!%20Gostaria%20de%20falar%20com%20voc%C3%AAs.', '_blank')}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-3">
              <Phone size={24} className="text-accent" />
              <div className="text-left">
                <p className="text-sm text-white/70">Telefone</p>
                <p className="font-bold text-lg">(61) 9.9954-4090</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail size={24} className="text-accent" />
              <div className="text-left">
                <p className="text-sm text-white/70">Email</p>
                <p className="font-bold text-lg">contato@capitalbombas.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
