import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * WhatsApp Floating Button Component
 * Design: Botão flutuante verde com ícone do WhatsApp
 * Posição: Canto inferior direito, fixo na tela
 * Animação: Pulse suave e hover effect
 * Tooltip: Mensagem de boas-vindas com opção de fechar
 */
export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [hideTooltip, setHideTooltip] = useState(false);

  const whatsappLink = "https://wa.me/5561999544090?text=Olá%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20manutenção%20de%20bombas";

  // Auto-hide tooltip after 8 seconds
  useEffect(() => {
    if (showTooltip && !hideTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip, hideTooltip]);

  const handleCloseTooltip = () => {
    setShowTooltip(false);
    setHideTooltip(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="whatsapp-tooltip bg-white text-gray-800 px-4 py-3 rounded-lg shadow-xl max-w-xs animate-slideIn">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-sm mb-1">Olá! 👋</p>
              <p className="text-xs text-gray-600">Fale com nossos especialistas agora mesmo. Estamos prontos para ajudar!</p>
            </div>
            <button
              onClick={handleCloseTooltip}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar mensagem"
            >
              <X size={16} />
            </button>
          </div>
          {/* Arrow pointing to button */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-white transform rotate-45 translate-x-1 translate-y-1.5"></div>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-pulse-subtle whatsapp-button flex-shrink-0"
        title="Fale com a gente no WhatsApp"
        aria-label="Abrir WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
