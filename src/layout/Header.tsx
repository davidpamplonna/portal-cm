"use client";

import { Icon } from "../ui/Icon";
import { useEffect, useState } from "react";
import { Menu } from "../components/menu";
import { Logo } from "../components/Logo";
import { TopBar } from "../components/TopBar";



export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="w-full bg-primary border-b-4 border-secondary relative z-50">
      {/* top-bar */}
        <TopBar />
      {/* main navigation */}
      <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-[clamp(1rem,4vw,1rem)]">
        {/* mobile menu */}
        <button
          type="button"
          aria-label="abri menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
        >
          <Icon icon={menuOpen ? "Close" : "Menu"} width={26} height={26} />
        </button>
            <Logo />
        {/* search */}
        <button
          type="button"
          aria-label="pesquisar"
          className="lg:hidden focus-visible:ring-2 focus-visible:ring-secondary rounded"
          onClick={() => setSearchOpen(true)}
        >
          <Icon icon={"Search"} width={22} height={22} />
        </button>
        {/* desktop navigation */}
        <nav
          role="navigation"
          className="hidden lg:flex gap-6 flex-wrap text-light uppercase font-semibold tracking-wide"
        >
         <Menu className="hover:text-secondary transition-colors duration-200"/>
        </nav>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      {/* mobile sider bar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-secondary/95 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <div className="flex flex-col items-center justify-between border-b border-white/10 pb-3">
            <Logo />
            <button
              type="button"
              aria-label="fechar menu"
              onClick={() => setMenuOpen(false)}
              className="focus-visible:ring-2 focus-visible:ring-primary rounded fixed right-3"
            >
              <Icon icon="Close" width={18} height={18} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 mt-4 text-light">
            <Menu
            className="text-light uppercase text-sm font-semibold hover:text-primary transition-colors"
            />
          </nav>
        </div>
      </aside>
      {/* seach modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
          <button
          type="button"
          aria-label="fechar busca"
          className="absolute right-4 top-4 p-2 bg-secondary/70 rounded-full hover:bg-secondary/80 transition-colors"
          onClick={() => setSearchOpen(false)}
          >
            <Icon icon={"Close"} width={16} height={16} />
          </button>
          <div className="bg-light/95 rounded-xl shadow-2xl p-6 w-11/12 max-w-md">
            <div className="flex items-center gap-3 border-b border-gray-400 py-1">
              <input 
              type="text"
              placeholder="Buscar no site..."
              className="w-full bg-transparent text-dark text-lg placeholder-gray-600 focus:outline-none"
              />
              <button className="bg-primary rounded-full p-2 cursor-pointer hover:opacity-80"
              type="button"
              onClick={() => setSearchOpen(false)}
              >
                <Icon icon={"Search"} width={24} height={24}
              />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
