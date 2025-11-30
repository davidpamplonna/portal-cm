import Image from "next/image";
import Link from "next/link";


const socialLinks = [
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
          <section className="flex flex-col gap-3 ">
            <Image
              src="/assets/footer-logo.png"
              width={250}
              height={250}
              alt="Logo da Câmara Municipal de Libertália"
            />

            <div className="flex justify-center gap-4 mt-4">
             {socialLinks.map((social) => (
              <Link 
              key={social.name} 
              href={social.url} 
              className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={35}
                  height={35}
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
           <div className="mt-4">
              <iframe
      title="Mapa da Câmara Municipal de Libertália"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.2340968935497!2d-35.12345!3d-7.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aaaaaaa%3A0xbbbbbbbbbbbbbbbb!2sRua%20Doutor%20Jos%C3%A9%20Ol%C3%ADmpio%20Franco!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
      width="310"
      height="220"
      loading="lazy"
      className="border-0"
      referrerPolicy="no-referrer-when-downgrade"
    />
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
                  width={240}
                  height={240}
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
