import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Página Inicial" },
  { href: "/a-camara", label: "A Câmara" },
  { href: "/atividades-legislativas", label: "Atividades Legislativas" },
  { href: "/sessoes", label: "Sessões" },
  { href: "/publicacoes-oficiais", label: "Publicações Oficiais" },
  { href: "/transparencia", label: "Transparência" },
];


type MenuVariante = "desktop" | "mobile"


export function Menu({
  variant = 'desktop',
  className,
}: {
  variant?: MenuVariante;
  className?: string;
}){

    const pathname = usePathname();


  const styles = {
      desktop:
      "hover:text-secondary transition-colors duration-200 uppercase font-semibold",
    mobile:
      "text-light uppercase text-sm font-semibold hover:text-primary transition-colors",
  }


  return(
  <>
      {navLinks.map(({ href, label }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`${styles[variant]} ${
              active ? "text-gray-200 font-bold" : ""
            }`}
          >
            {label}
          </Link>
        );
      })}
    </>
  )
}
