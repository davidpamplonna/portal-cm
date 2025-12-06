'use client';

import Image from "next/image";
import Link from "next/link";

import dynamic from "next/dynamic";

import { SocialLink } from "../types/socialLink";
import { Logo } from "../components/Header/Logo";
const Map = dynamic(() => import("../components/Map"), {
  ssr: false, 
});


const socialLinks: SocialLink[] = [
  { name: "facebook", url: "/facebook", icon: "/icons/facebook.svg" },
  { name: "instagram", url: "/instagram", icon: "/icons/instagram.svg" },
  { name: "youtube", url: "/youtube" , icon: "/icons/youtube.svg" },
]

export function Footer() {
  return (
    <footer className="w-full py-10 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0 items-start">
          {/* logo e redes sociais */}
          <section className="flex flex-col justify-center gap-3 items-center text-center">
            <Image
              src="/assets/logo-rodape.png"
              width={250}
              height={250}
              alt="Logo da Câmara Municipal de Libertália"
            />
            
            <div className="flex justify-center gap-4 mt-4">
             {socialLinks.map((social) => (
              <Link 
              key={social.name} 
              href={social.url} 
              aria-label={`Visite nossa página no ${social.name}`}
              className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={32}
                  height={32}
                />
              </Link>
             ))}
            </div>
          </section>

          {/* informações da câmara */}
          <section className="text-light">
            <h3 className="uppercase text-md font-bold mb-1">
              Câmara Municipal de Libertália
            </h3>
            <div className="border-b-2 border-secondary max-w-20" />

            <div className="mt-4 flex flex-col gap-3 text-sm font-light">
              <p>Atendimento de segunda a sexta de 08:00 às 13:00</p>

              <dl className="flex flex-col gap-3">
                <div>
                  <dt className="font-semibold">Telefone:</dt>
                  <dd>(83) 98706-6196</dd>
                </div>

                <div>
                  <dt className="font-semibold">E-mail:</dt>
                  <dd>cmlibertalia@gmail.com</dd>
                </div>

                <div>
                  <dt className="font-semibold">Presencial:</dt>
                  <dd>
                    Rua Doutor José Olímpio Franco, Parque Industrial
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">Eletrônico:</dt>
                  <dd>
                    <Link href="/ouvidoria" className="hover:underline">
                      Ouvidoria
                    </Link>
                    {" / "}
                    <Link href="/sic" className="hover:underline">
                      e-SIC
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Como chegar */}
          <section className="text-light">
            <h3 className="uppercase text-md font-bold mb-1">
              Como Chegar à Câmara
            </h3>
            <div className="border-b-2 border-secondary max-w-20" />
           <div className="mt-4 w-full max-w-sm h-60 overflow-hidden rounded-md">
             <Map />
           </div>
          </section>

          {/* Acesso rápido */}
          <section className="text-light">
            <h3 className="uppercase text-md font-bold mb-1">Links Úteis</h3>
            <div className="border-b-2 border-secondary max-w-20" />
            <div className="mt-4">
              <Link href="/">
                <Image
                  src="/assets/cm-radio.png"
                  alt="radio logo"
                  width={210}
                  height={210}
                />
              </Link>
            </div>
          </section>
        </div>
        <div className="border-t border-gray-100/40 mt-10 py-3 flex justify-between items-center text-gray-300 text-sm flex-col md:flex-row gap-4 px-3 md:px-0 text-center">
          <span>
            Todos os direitos reservados à Câmara Municipal de Libertália
          </span>
          <ul className="flex gap-4 items-center">
            <li>
              <Link href="/mapa-do-site" className="hover:underline">
                Mapa do Site
              </Link>
            </li>
            <li>
              <Link href="/area-administrativa" className="hover:underline">
                Área Administrativa
              </Link>
            </li>
            <li>
              <Link href="/webmail" className="hover:underline">
                Webmail
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
