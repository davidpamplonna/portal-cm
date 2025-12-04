"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu } from "../components/Header/menu";
import { Logo } from "../components/Header/Logo";
import { TopBar } from "../components/Header/TopBar";
import { Overlay } from "../components/Header/Overlay";
import { MobileMenu } from "../components/Header/MenuMobile";
import { SearchModal } from "../components/Header/SearchModal";
import { Icon } from "../ui/Icon";

interface HeaderState {
  menuOpen: boolean;
  searchOpen: boolean;
}

export function Header() {
  const [state, setState] = useState<HeaderState>({
    menuOpen: false,
    searchOpen: false,
  });

  // Funções memoizadas para evitar recreação
  const closeAll = useCallback(() => {
    setState({ menuOpen: false, searchOpen: false });
  }, []);

  const toggleMenu = useCallback(() => {
    setState((prev) => ({ ...prev, menuOpen: !prev.menuOpen }));
  }, []);

  const openSearch = useCallback(() => {
    setState((prev) => ({ ...prev, searchOpen: true }));
  }, []);

  // ESC fecha tudo
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAll();
      }
    };

    // Apenas adiciona listener se algo está aberto
    if (state.menuOpen || state.searchOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [state.menuOpen, state.searchOpen, closeAll]);

  // Bloqueia scroll quando menu está aberto
  useEffect(() => {
    document.body.classList.toggle("body-no-scroll", state.menuOpen);
    return () => document.body.classList.remove("body-no-scroll");
  }, [state.menuOpen]);

  return (
    <header className="w-full bg-primary border-b-4 border-secondary relative z-50">
      <TopBar />

      <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-4 md:px-6">
        {/* Botão Mobile Menu */}
        <button
          type="button"
          id="menu-button"
          aria-label={state.menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={state.menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="lg:hidden focus-visible:ring-2 focus-visible:ring-secondary rounded p-1 transition-colors hover:opacity-80"
        >
          <Icon 
            icon={state.menuOpen ? "Close" : "Menu"} 
            width={26} 
            height={26} 
            aria-hidden="true"
          />
        </button>

        <Logo />

        {/* Botão Busca Mobile */}
        <button
          type="button"
          aria-label="Abrir pesquisa"
          onClick={openSearch}
          className="lg:hidden focus-visible:ring-2 focus-visible:ring-secondary rounded p-1 transition-colors hover:opacity-80"
        >
          <Icon 
            icon="Search" 
            width={22} 
            height={22} 
            aria-hidden="true"
          />
        </button>

        {/* Navegação Desktop */}
        <nav
          className="hidden lg:flex gap-6 flex-wrap text-light uppercase font-semibold tracking-wide"
          aria-label="Menu principal"
        >
          <Menu variant="desktop" />
        </nav>
      </div>

      {/* Componentes Modais */}
      <Overlay isOpen={state.menuOpen} onClose={closeAll} />
      <MobileMenu 
        open={state.menuOpen} 
        onClose={closeAll} 
      />
      <SearchModal 
        open={state.searchOpen} 
        onClose={() => setState((prev) => ({ ...prev, searchOpen: false }))} 
      />
    </header>
  );
}