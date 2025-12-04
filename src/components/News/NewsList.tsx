import { ActionNews } from "@/src/types/news";

import Image from "next/image";
import Link from "next/link";

import {memo} from "react"

import { slugify } from "@/src/types/slugify";

interface NewsListProps {
  newsList: ActionNews[];
}

export function NewsListComponent({ newsList }: NewsListProps) {
  if (!newsList || newsList.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 bg-gray-50 rounded-md">
        <p>Nenhuma ação de vereador registrada no momento.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 md:gap-7 mt-5">
      {newsList.map((news) => (
        <article key={news.id} className="flex gap-4" aria-label={`${news.title}, ${news.date}`}>
          <div className="relative w-35 h-30 sm:w-32 sm:h-24 md:w-[200px] md:h-32 shrink-0 rounded-md">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
              sizes="(max-width: 640px) 140px, 200px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-primary hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary rounded px-1 font-semibold line-clamp-2 text-md md:text-lg">
                <Link
              href={`/vereadores-em-acao/${slugify(news.title)}`}
              
            >
              {news.title}
            </Link>
            </h3>
            <span className="text-xs text-gray-600">{news.date}</span>
            <p className="line-clamp-2 text-sm text-description">
              {news.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}


export const NewsList = memo(NewsListComponent);