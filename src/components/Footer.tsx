import { MapPin, Phone, Mail, Clock } from "lucide-react";

/**
 * Footer Component - Industrial Minimalista
 * Design: Fundo cinza escuro, tipografia clara, informações organizadas
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <h3 className="text-lg font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Capital Bombas
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas em manutenção de bombas industriais com mais de uma década de experiência.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#marcas" className="hover:text-accent transition-colors">
                  Marcas
                </a>
              </li>
              <li>
                <a href="#segmentos" className="hover:text-accent transition-colors">
                  Segmentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span>(61) 9.9954-4090</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span>contato@capitalbombas.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span>Brasília, DF</span>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Área de Atendimento
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p><strong>Brasília, DF</strong></p>
                  <p>Goiás e Entorno</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Capital Bombas. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
