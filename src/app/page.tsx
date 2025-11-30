import { HeroSearch } from "../components/HeroSection/HeroSearch";
import { HeroTitle } from "../components/HeroSection/HeroTitle";
import { Card } from "../ui/Card";
import { Title } from "../ui/Title";
import { Councilor } from "../components/News/News";

import dataNews from "@/src/data/news.json";
import { CouncilorList } from "../components/News/NewsList";
import { Icon } from "../ui/Icon";

import {quickAccessCards} from "@/src/types/quickAccessCards"

import { atividadesLegislativas, publicacoesOficiais } from "@/src/types/card";
import CouncilCarousel from "../components/CouncilCarousel";



import dataCouncil from '@/src/data/council.json'
import { Footer } from "../layout/Footer";

export default function Home() {
  const main = dataNews.news.slice(0, 3);
  const secundary = dataNews.news.slice(0, 3);
  const councilor = dataNews.actionNews.slice(0, 4);

  const councilSlider =  dataCouncil.council;

  return (
    <div className="w-full">
      <div className="w-full bg-[url('/assets/banner.png')] bg-cover bg-no-repeat min-h-[540px] bg-center md:bg-top">
        <section className="py-8 md:py-16 px-4">
          <HeroTitle />
          <HeroSearch />

          <div className="mt-10 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-[1000px] mx-auto">
              {quickAccessCards.map((card) => (
                <Card 
                key={card.title}
                icon={card.icon}
                variant="secondary"
                title={card.title}
                description={card.description}
                link={card.title}
                label="Consultar"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className=" max-w-7xl mx-auto py-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-7 items-start px-3 md:px-0">
          {/* coluna da esquerda  */}
          <section>
            <Title title="Últimas notícias" showLink={true} href="/noticias" />
            <Councilor mainNews={main} secondaryNews={secundary} />
          </section>
          {/* coluna da direita  */}
          <aside>
            <Title
              title="Vereadores em ação"
              showLink={true}
              href="/vereadores-em-ação"
            />
            <CouncilorList newsList={councilor} />
          </aside>
        </div>
      </div>
      <div className="bg-primary w-full py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 py-3 px-3 md:px-0">
            {/* cols left */}
            <section className="md:border-r md:border-gray-100/20 md:px-3">
              <div className="flex gap-3 items-center mb-3">
                <Icon icon={"Balance"} width={28} height={28} />
                <Title
                  title={"Atividades Legislativas"}
                  showBorder={false}
                  showLink={false}
                  variant="secondary"
                />
              </div>
              <p className="text-light/70">
                Nesta seção estão reunidas todas as proposições dos vereadores,
                que são ferramentas formais para sugerir, debater e aprovar
                ações que impactam a população.
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
            {/* cols rigth */}
            <section>
              <div className="flex gap-3 items-center mb-3">
                <Icon icon={"File"} width={28} height={28} />
                <Title
                  title={"Publicações Oficiais"}
                  showBorder={false}
                  showLink={false}
                  variant="secondary"
                />
              </div>
              <p className="text-light/70">
                Nesta seção estão reunidas todas as proposições dos vereadores,
                que são ferramentas formais para sugerir, debater e aprovar
                ações que impactam a população.
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
        <div className="max-w-7xl mx-auto px-4">
          <CouncilCarousel council={councilSlider} />
        </div>
        <Footer />
    </div>
  );
}
