import Link from "next/link";

const navLinks = [
  { href: "/", label: "Página Inicial" },
  { href: "/a-camara", label: "A Câmara" },
  { href: "/atividades-legislativas", label: "Atividades Legislativas" },
  { href: "/sessoes", label: "Sessões" },
  { href: "/publicacoes-oficiais", label: "Publicações Oficiais" },
  { href: "/transparencia", label: "Transparência" },
];

export function Menu({className}: {className?:string}) {


  return (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          className={className}
        >
          {label}
        </Link>
      ))}
      
    </>
  );
}

