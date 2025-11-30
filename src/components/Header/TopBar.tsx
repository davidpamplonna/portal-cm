'use client'

import { Icon } from "@/src/ui/Icon";
import Link from "next/link";
import { news } from '@/src/data/news.json';
import { useEffect, useState } from "react";

const topLinks = [
  { href: "/ouvidoria", icon: "HeadPhone" as const, label: "Ouvidoria" },
  { href: "/transparencia", icon: "Info" as const, label: "Transparência" },
  { href: "/webmail", icon: "Envelope" as const, label: "Webmail" },
  { href: "/mapa-do-site", icon: "Sitemap" as const, label: "Mapa do Site" },
];

export function TopBar() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false); // fade-out + slide-up
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % news.length);
        setShow(true); // fade-in + slide-down
      }, 350); // metade da duração da animação para ficar natural
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const tituloAtual = news[index].title;

  return (
    <div className="hidden lg:block bg-secondary/95 py-2 text-light text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 min-w-0">
          <span className="uppercase">Últimas atualizações:</span>

          <Link href="/" className="text-gray-300 hover:underline min-w-0">
            <span
              key={tituloAtual}
              className={`transition-all duration-700 ease-in-out transform ${
                show
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-1"
              }`}
            >
              {tituloAtual}
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap justify-end gap-3">
          {topLinks.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 hover:underline transition-all"
            >
              <Icon icon={icon} width={18} height={18} />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
