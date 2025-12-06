import { Metadata } from "next";
import { HeroSearch } from "../components/HeroSection/HeroSearch";
import { HeroTitle } from "../components/HeroSection/HeroTitle";
import { Card } from "../ui/Card";
import { Title } from "../ui/Title";
import { News } from "../components/News/News";
import { NewsList } from "../components/News/NewsList";
import { Icon } from "../ui/Icon";
import CouncilCarousel from "../components/CouncilCarousel";

import dataNews from "@/src/data/news.json";
import { quickAccessCards } from "@/src/types/quickAccessCards";
import { atividadesLegislativas, publicacoesOficiais } from "@/src/types/card";
import dataCouncil from "@/src/data/council.json";

// Metadados SEO
export const metadata: Metadata = {
  title: "Câmara Municipal de Libertália",
  description: "Portal da Câmara Municipal com notícias, vereadores, atividades legislativas e publicações oficiais",
  keywords: "câmara, vereadores, legislação, Libertália",
  openGraph: {
    type: "website",
    url: "https://cmlibertalia.gov.br",
    title: "Câmara Municipal de Libertália",
    description: "Portal da Câmara Municipal com notícias, vereadores e informações oficiais",
  },
};

// Constantes
const MAIN_NEWS_COUNT = 3;
const SECONDARY_NEWS_START = 4;
const SECONDARY_NEWS_COUNT = 3;
const COUNCILOR_NEWS_COUNT = 4;


// Função auxiliar para extrair dados com segurança
function getSafeNewsData(data: typeof dataNews) {
  return {
    main: data.news?.slice(0, MAIN_NEWS_COUNT) ?? [],
    secondary: data.news?.slice(
      SECONDARY_NEWS_START, 
      SECONDARY_NEWS_START + SECONDARY_NEWS_COUNT
    ) ?? [],
    councilor: data.actionNews?.slice(0, COUNCILOR_NEWS_COUNT) ?? [],
  };
}

export default function Home() {
  const { main, secondary, councilor } = getSafeNewsData(dataNews);
  const councilSlider = dataCouncil.council ?? [];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full bg-[url('/assets/bannerv2.png')] bg-cover bg-no-repeat 
                      min-h-[540px] sm:min-h-[600px] md:min-h-[400px] 
                      bg-rigth md:bg-center">
        <section className="py-8 md:py-10 px-4">
          <HeroTitle />
          <HeroSearch />

          {/* Quick Access Cards */}
          <div className="mt-10 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-[1000px] mx-auto">
              {quickAccessCards.map((card) => (
                <Card 
                  key={card.title}
                  icon={card.icon}
                  variant="secondary"
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  label="Consultar"
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* News Section */}
      <div className="max-w-7xl mx-auto py-10 w-full px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-start">
          {/* Main News */}
          <section>
            <Title title="Últimas notícias" showLink={true} href="/noticias" />
            {main.length > 0 ? (
              <News mainNews={main} secondaryNews={secondary} />
            ) : (
              <p className="text-gray-500 py-8">Nenhuma notícia disponível no momento.</p>
            )}
          </section>

          {/* Sidebar */}
          <aside>
            <Title
              title="Vereadores em ação"
              showLink={true}
              href="/vereadores-em-ação"
            />
            {councilor.length > 0 ? (
              <NewsList newsList={councilor} />
            ) : (
              <p className="text-gray-500 py-8">Nenhuma ação registrada.</p>
            )}
          </aside>
        </div>
      </div>

      {/* section de publicações oficiais e legislativas'*/}
      <div className="bg-primary w-full py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 py-3">
            {/* Legislative Activities */}
            <section>
              <div className="flex gap-3 items-center mb-3">
                <Icon icon="Balance" width={28} height={28} />
                <Title
                  title="Atividades Legislativas"
                  showBorder={false}
                  showLink={false}
                  variant="secondary"
                />
              </div>
              <p className="text-light/70">Nesta seção estão reunidas todas as proposições dos vereadores, que são ferramentas formais para sugerir, debater e aprovar ações que impactam a população.

</p>
              <article className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {atividadesLegislativas.map((item) => (
                  <Card
                    title={item.title}
                    icon="File"
                    key={item.title}
                    link={item.link}
                  />
                ))}
              </article>
            </section>

            {/* Official Publications */}
            <section className="px-0 md:px-4 md:border-l md:border-gray-100/20">
              <div className="flex gap-3 items-center mb-3">
                <Icon icon="File" width={28} height={28} />
                <Title
                  title="Publicações Oficiais"
                  showBorder={false}
                  showLink={false}
                  variant="secondary"
                />
              </div>
              <p className="text-light/70">
             Reúne atos, comunicados e documentos oficiais da Câmara, incluindo legislações, portarias, editais, resoluções, licitações e outros registros atualizados.
              </p>
              <article className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {publicacoesOficiais.map((item) => (
                  <Card
                    title={item.title}
                    icon="File"
                    key={item.title}
                    link={item.link}
                  />
                ))}
              </article>
            </section>
          </div>
        </div>
      </div>
      {/* Council Carousel */}
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <CouncilCarousel council={councilSlider} />
      </div>
     
    </div>
  );
}