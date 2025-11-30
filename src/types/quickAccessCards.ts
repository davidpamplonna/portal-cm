
import {type IconName } from "@/src/ui/Icon";


interface quickAccessCardsProps{
    title: string;
    icon: IconName;
    description: string;
    link: string;
}

const quickAccessCards: quickAccessCardsProps[] = [
    {
      title: "Projetos de Lei",
      icon: "PL",
      description: "Acompanhe os projetos em tramitação",
      link: "/projetos-de-lei",
    },
    {
      title: "Leis Municipais",
      icon: "Files",
      description: "Consulte a legislação municipal",
      link: "/leis-municipais",
    },
    {
      title: "Documentos Oficiais",
      icon: "Files",
      description: "Atas, relatórios e publicações da Câmara",
      link: "/documentos-oficiais",
    },
    {
      title: "Audiências Públicas",
      icon: "Files",
      description:
        "Cronograma das sessões ordinárias/extraordinárias",
      link: "/audiencias-publicas",
    },
  ];



  export {quickAccessCards}