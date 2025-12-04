"use client";

import { Icon } from "@/src/ui/Icon";
import { useEffect } from "react";

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {

  useEffect(() => {
    document.body.classList.toggle("modal-open", open);
    return () => document.body.classList.remove("modal-open");
  }, [open]);


  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        type="button"
        aria-label="fechar busca"
        className="absolute right-4 top-4 p-2 bg-secondary/70 rounded-full hover:bg-secondary/80 transition-colors"
        onClick={onClose}
      >
        <Icon icon="Close" width={16} height={16} />
      </button>

      <div className="bg-light/95 rounded-xl shadow-2xl p-6 w-11/12 max-w-md animate-fadeIn">
        <div className="flex items-center gap-3 border-b border-gray-400 py-1">
          <input
            type="text"
            placeholder="Buscar no site..."
            className="w-full bg-transparent text-dark text-lg placeholder-gray-600 focus:outline-none"
          />
          <button
            className="bg-primary rounded-full p-2 cursor-pointer hover:opacity-80"
            type="button"
            onClick={onClose}
          >
            <Icon icon="Search" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
