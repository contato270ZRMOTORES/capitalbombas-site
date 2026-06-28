import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header Component - Industrial Minimalista
 * Design: Azul-aço (#1E3A5F) com tipografia Poppins Bold
 * Navegação limpa, sem elementos decorativos excessivos
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Marcas", href: "#marcas" },
    { label: "Segmentos", href: "#segmentos" },
    { label: "Sobre", href: "#sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">CB</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Capital Bombas
            </h1>
            <p className="text-xs text-muted-foreground">Manutenção Especializada</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5561999544090?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20manuten%C3%A7%C3%A3o%20de%20bombas"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg btn-hover specialist-button text-sm"
          >
            Fale com Especialista
          </a>
          <Button
            className="bg-accent hover:bg-accent/90 text-white font-semibold btn-hover"
            size="sm"
            onClick={() => window.open('https://wa.me/5561999544090?text=Ol%C3%A1%20Capital%20Bombas!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.', '_blank')}
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5561999544090?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20manuten%C3%A7%C3%A3o%20de%20bombas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg btn-hover specialist-button text-center block"
            >
              Fale com Especialista
            </a>
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold mt-2 btn-hover"
              onClick={() => window.open('https://wa.me/5561999544090?text=Ol%C3%A1%20Capital%20Bombas!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.', '_blank')}
            >
              Solicitar Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
