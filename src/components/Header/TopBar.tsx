import { Icon } from "@/src/ui/Icon";
import Link from "next/link";

const topLinks = [
  { href: "/ouvidoria", icon: "HeadPhone" as const, label: "Ouvidoria" },
  { href: "/transparencia", icon: "Info" as const, label: "Transparência" },
  { href: "/webmail", icon: "Envelope" as const, label: "Webmail" },
  { href: "/mapa-do-site", icon: "Sitemap" as const, label: "Mapa do Site" },
];


export function TopBar(){
     return (
        <div className="hidden lg:block bg-secondary/95 py-2 text-light text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 min-w-0">
            <span className="uppercase">Últimas atualizações:</span>
            <Link href="/" className="text-gray-300 hover:underline ">
              DISPENSA DE LICITAÇÃO Nº 010/2025 (AQUISIÇÃO DE GÊNEROS ALIM...)
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
     )
}