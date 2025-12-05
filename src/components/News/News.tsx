"use client";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import type { News } from "@/src/types/news";
import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import { slugify } from "@/src/types/slugify";
import { useEffect, useState } from "react";

interface NewsProps {
  mainNews: News[];
  secondaryNews: News[];
}

export function News({ mainNews, secondaryNews }: NewsProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleSecondary = isMobile ? secondaryNews.slice(0, 2) : secondaryNews;

  if (mainNews.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p>Nenhuma notícia disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="mt-5">

      {/* PRINCIPAL */}
      <div className="relative w-full overflow-hidden rounded-md aspect-video sm:min-h-[300px] lg:h-[420px]">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, type: "bullets" }}
          aria-label="Carrosel de notícias principais"
          role="region"
          className="w-full h-full"
        >
          {mainNews.map((news, index) => (
            <SwiperSlide key={news.id}>
              <div className="relative w-full h-full">

                {/* imagem */}
                <Image
                  priority={index === 0}
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* overlay escurecido */}
                <div className="absolute inset-0 bg-black/10" />

                {/* categoria */}
                {news.category && (
                  <span className="absolute text-light bg-secondary top-3 left-5 md:left-7 text-xs px-3 py-1 rounded-full tracking-wide font-semibold">
                    {news.category}
                  </span>
                )}

                {/* conteúdo */}
                <div className="absolute inset-0 flex items-end px-6 md:px-8 md:py-6 bg-gradient-to-t from-black/80 via-black/10 to-transparent">
                  <div className="flex flex-col gap-2 mb-3 md:mb-0">
                    <h2 className="text-light uppercase font-bold text-xl md:text-2xl leading-snug line-clamp-2 hover:underline">
                      <Link href={`/noticia/${slugify(news.title)}`}>
                        {news.title}
                      </Link>
                    </h2>
                    
                    <span className="text-gray-200/80 text-xs md:text-sm">
                      {news.date}
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* SECUNDÁRIAS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        {visibleSecondary.map((news) => (
          <article
            key={news.id}
            className="relative rounded-md overflow-hidden w-full aspect-video min-h-40 group"
          >
            <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">

              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
                loading="lazy"
              />

              {/* overlay escuro */}
              <div className="absolute inset-0 bg-black/26" />

              {news.category && (
                <span className="absolute text-light top-3 left-3 text-xs px-3 py-1 rounded-full bg-secondary tracking-wide font-semibold">
                  {news.category}
                </span>
              )}
            </div>

            <div className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-black/90 via-transparent">
              <div className="flex flex-col gap-1">
                <h3 className="text-light text-lg md:text-base font-semibold line-clamp-2 hover:underline">
                  <Link href={`/noticia/${slugify(news.title)}`}>
                    {news.title}
                  </Link>
                </h3>
                <span className="text-light text-xs">{news.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
