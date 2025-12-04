import Image from "next/image";

export function HeroSearch() {
  return (
    <div role="search" className="hidden md:flex justify-center mt-8">
      <div className="flex items-center gap-2 bg-white max-w-[800px] w-full rounded-full p-2 shadow-md">
        <input
          type="search"
          placeholder="Encontre serviços, notícias e conteúdos informativos..."
          className="flex-1 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 outline-none "
          aria-label="Buscar conteúdo no portal"
        />
        <button
          type="button"
          aria-label="pesquisar"
          className="bg-secondary w-12 h-11 rounded-full flex items-center justify-center hover:opacity-90 transition"
        >
          <Image
            src="/icons/search.svg"
            alt="pesquisar"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
