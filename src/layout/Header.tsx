"use client";

import { useEffect, useState } from "react";
import { Icon } from "../ui/Icon";
import { Menu } from "../components/menu";
import { Logo } from "../components/Logo";
import { TopBar } from "../components/TopBar";
import { Overlay } from "../components/Overlay";
import { MobileMenu } from "../components/MenuMobile";
import { SearchModal } from "../components/SearchModal";



export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // ESC fecha tudo
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Bloqueia scroll quando menu está aberto
  useEffect(() => {
    document.body.classList.toggle("body-no-scroll", menuOpen);
  }, [menuOpen]);

  return (
    <header className="w-full bg-primary border-b-4 border-secondary relative z-50">
      <TopBar />

      <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-[clamp(1rem,4vw,0rem)]">
        {/* Botão Mobile */}
        <button
          type="button"
          aria-label="abrir menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus-visible:ring-2 focus-visible:ring-secondary rounded"
        >
          <Icon icon={menuOpen ? "Close" : "Menu"} width={26} height={26} />
        </button>

        <Logo />

        {/* Botão Busca Mobile */}
        <button
          type="button"
          aria-label="pesquisar"
          onClick={() => setSearchOpen(true)}
          className="lg:hidden focus-visible:ring-2 focus-visible:ring-secondary rounded"
        >
          <Icon icon="Search" width={22} height={22} />
        </button>

        {/* Navegação Desktop */}
        <nav
          className="hidden lg:flex gap-6 flex-wrap text-light uppercase font-semibold tracking-wide"
          aria-label="Menu principal"
        >
          <Menu variant="desktop" />
        </nav>
      </div>

      {/* Componentes externos */}
      <Overlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
