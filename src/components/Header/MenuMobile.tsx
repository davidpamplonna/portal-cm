"use client";

import { Icon } from "@/src/ui/Icon";
import { Logo } from "./Logo";
import { Menu } from "./menu";
import { useEffect } from "react";



export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {


    useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);


  return (
    <aside
      id="mobile-menu"
      className={`fixed top-0 left-0 h-full w-72 bg-secondary/95 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-hidden={!open}
    >
      <div className="flex flex-col p-6 gap-6">
       <div className="flex flex-col items-center border-b border-white/10 pb-2 relative">
          <button
            type="button"
            aria-label="fechar menu"
            onClick={onClose}
            className="focus-visible:ring-2 focus-visible:ring-primary rounded absolute right-0"
          >
            <Icon icon="Close" width={18} height={18} aria-hidden="true" />
          </button>
          <Logo />
        </div>

        <nav
          className="flex flex-col gap-6 mt-4 text-light"
          aria-label="Menu mobile"
        >
          <Menu variant="mobile" />
        </nav>
      </div>
    </aside>
  );
}
