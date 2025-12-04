 
 
 export type itemMenu = {
    title: string;
    link: string;
    label?: string;
}


const atividadesLegislativas: itemMenu[] = [
  { title: "Emendas à Lei Orgânica", link: "/emendas-lei-organica" },
  { title: "Projeto de Ato Legislativo", link: "/projeto-ato-legislativo" },
  { title: "Projeto de Complementares", link: "/pl-complementares-ordinarias" },
  { title: "Projetos de Decreto", link: "/projetos-decreto" },
  { title: "Projetos de Resolução", link: "/projetos-resolucao" },
  { title: "Audiência Pública", link: "/audiencia-publica" },
  { title: "Atas das Sessões", link: "/atas-sessoes" },
  { title: "Pautas das Sessões", link: "/pautas-sessoes" },
];


  const publicacoesOficiais: itemMenu[] = [
  { title: "Diário Oficial da Câmara", link: "/diario-oficial-da-camara" },
  { title: "Mural de Licitações", link: "/mural-de-licitacoes" },
  { title: "Licitações TCM-PA", link: "/licitacoes-tcm-pa" },
  { title: "Leis Legislativos", link: "/leis-legislativos" },
  { title: "Portarias Legislativos", link: "/portarias-legislativos" },
  { title: "Decretos Legislativos", link: "/decretos-legislativos" },
  { title: "Resoluções Legislativos", link: "/resolucoes-legislativos" },
   { title: "Requerimentos Legislativos", link: "/requerimentos-legislativos" }
];



 export {atividadesLegislativas, publicacoesOficiais}


