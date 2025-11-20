import { HeroSearch } from "../components/HeroSection/HeroSearch";
import { HeroTitle } from "../components/HeroSection/HeroTitle";
import { Card } from "../ui/Card";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-[url('/assets/banner.png')] bg-cover bg-no-repeat min-h-[540px] bg-center md:bg-top">
        <section className="py-8 md:py-16 px-4">
          <HeroTitle />
          <HeroSearch />

          <div className="mt-10 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-[1000px] mx-auto">
             <Card
              variant="secondary"
              title="Projetos de Lei"
              icon="Files"
              description="Acompanhe os projetos em tramitação"
              link="/projetos-de-lei"
              label="Consultar"
            />
            <Card
              variant="secondary"
              title="Leis Municipais"
              icon="Files"
              description="Consulte a legislação municipal"
              link="/leis-municipais"
              label="Consultar"
            />
            <Card
              variant="secondary"
              title="Documentos Oficiais"
              icon="Files"
              description="Atas, relatórios e publicações da Câmara"
              link="/documentos-oficiais"
              label="Consultar"
            />
            <Card
              variant="secondary"
              title="Audiências Públicas"
              icon="Files"
              description="Cronograma das sessões ordinárias/extraordinárias"
              link="/audiencias-publicas"
              label="Consultar"
            />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
