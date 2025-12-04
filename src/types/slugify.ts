export function slugify(text: string): string {
  return text
    .normalize("NFD")                       // separa acentos
    .replace(/[\u0300-\u036f]/g, "")        // remove acentos
    .toLowerCase()                          // caixa baixa
    .trim()                                 // tira espaços nas pontas
    .replace(/[^a-z0-9\s-]/g, "")           // remove símbolos
    .replace(/\s+/g, "-")                   // troca espaços por -
    .replace(/-+/g, "-");                   // remove hifens duplos
}
