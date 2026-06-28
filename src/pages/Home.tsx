import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import EmergencyServiceSection from "@/components/EmergencyServiceSection";
import ServiceRegionsSection from "@/components/ServiceRegionsSection";
import SegmentsSection from "@/components/SegmentsSection";
import SegmentsPumpsGallery from "@/components/SegmentsPumpsGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Home Page - Capital Bombas
 * Design: Industrial Minimalista
 * Otimizado para conversão com Google Ads
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-8 px-4">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-blue-900">Precisa de uma solução rápida?</h3>
              <p className="text-sm text-blue-700">Nossos especialistas estão prontos para ajudar</p>
            </div>
            <a
              href="https://wa.me/5561999544090?text=Olá%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20manutenção%20de%20bombas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg btn-hover whitespace-nowrap specialist-button"
            >
              Fale com Especialista
            </a>
          </div>
        </div>
        <BrandsSection />
        <EmergencyServiceSection />
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-8 px-4">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-orange-900">Dúvidas sobre qual serviço escolher?</h3>
              <p className="text-sm text-orange-700">Converse com nosso time especializado</p>
            </div>
            <a
              href="https://wa.me/5561999544090?text=Olá%2C%20gostaria%20de%20esclarecer%20dúvidas%20sobre%20os%20serviços%20de%20manutenção"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg btn-hover whitespace-nowrap specialist-button"
            >
              Fale com Especialista
            </a>
          </div>
        </div>
        <ServiceRegionsSection />
        <SegmentsSection />
        <SegmentsPumpsGallery />
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-8 px-4">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Viu uma bomba similar à sua?</h3>
              <p className="text-sm text-blue-100">Fale com nosso especialista para uma análise completa</p>
            </div>
            <a
              href="https://wa.me/5561999544090?text=Olá%2C%20gostaria%20de%20falar%20sobre%20manutenção%20para%20uma%20bomba%20similar%20às%20mostradas%20no%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg btn-hover whitespace-nowrap specialist-button"
            >
              Fale com Especialista
            </a>
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
