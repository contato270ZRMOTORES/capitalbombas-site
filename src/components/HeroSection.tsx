import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section - Industrial Minimalista
 * Design: Imagem de fundo com overlay azul-aço, tipografia Poppins Bold
 * CTA principal com laranja industrial (#E67E22)
 */
export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663230150106/K5Yf8aZrvUbLKzbaMxePaL/hero-bombas-UDtiJxbU2EhBzh7fcisMdC.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <div className="text-center text-white space-y-6">
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Manutenção Especializada de Bombas Industriais
          </h1>
          <p className="text-lg md:text-xl text-gray-100 font-light">
            Soluções em manutenção corretiva, preventiva e preditiva para bombas de todas as marcas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
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
              className="border-white text-white hover:bg-white/10 font-bold text-base"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
    </section>
  );
}
