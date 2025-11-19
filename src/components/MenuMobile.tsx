'use client'

import { useEffect, useState } from "react";



export function MenuMobile(){

     const [menuOpen, setMenuOpen] = useState(false);
     
 useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

    return (
        <>
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
        </>
    )
}