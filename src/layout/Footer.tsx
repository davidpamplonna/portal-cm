import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-10 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0 items-start">
          {/* logo e redes sociais */}
          <section className="flex flex-col gap-3">
            <Image
              src="/assets/footer-logo.png"
              width={250}
              height={250}
              alt="Logo da Câmara Municipal de Libertália"
            />

            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="bg-gray-300 p-6 rounded-md text-center"
                >
                  Icone
                </span>
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
                  <dd>(91) 99165-1391</dd>
                </div>

                <div>
                  <dt className="font-semibold">E-mail:</dt>
                  <dd>cmlibertalia@gmail.com</dd>
                </div>

                <div>
                  <dt className="font-semibold">Presencial:</dt>
                  <dd>
                    Travessa Curuzú, 1755. Marco, Belém, Pará – CEP: 66093-802
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
            <div className="bg-gray-300 w-[300px] h-[220px] mt-4 flex items-center justify-center text-black">
              Map
            </div>
          </section>

          {/* Acesso rápido */}
          <section className="text-light">
            <h3 className="uppercase text-md font-bold mb-1">Acesso rápido</h3>
            <div className="border-b-2 border-secondary max-w-20" />
          </section>
        </div>
        <div className="border-t border-gray-100/40 mt-10 py-3 flex justify-between items-center text-gray-300 text-sm flex-col md:flex-row gap-2 px-3 md:px-0 text-center">
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
