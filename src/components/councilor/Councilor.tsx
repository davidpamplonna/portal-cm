"use client";

import type { News } from "@/src/types/news";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CouncilorProps {
  mainNews: News[];
  secondaryNews: News[];
}

export function Councilor({ mainNews, secondaryNews }: CouncilorProps) {
  return (
    <div className="mt-5">
      <div className="relative w-full overflow-hidden rounded-md aspect-video sm:min-h-[300px] lg:h-[420px]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {mainNews.map((news) => (
            <SwiperSlide key={news.id}>
              <div className="relative w-full h-full">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  priority
                  className="object-cover"
                />
                {news.category && (
                  <span className="absolute text-light bg-secondary top-3 left-5 md:left-7 text-xs px-3 py-1 rounded-full tracking-wide font-semibold">
                    {news.category}
                  </span>
                )}
                <div className="absolute inset-0 flex items-end px-6 md:px-8 md:py-8 bg-linear-to-t from-black/80 via-black/10 to-transparent">
                  <div className="flex flex-col gap-2 mb-3 md:mb-0">
                    <h2 className="text-light uppercase font-bold text-sm md:text-2xl leading-snug line-clamp-2">
                      {news.title}
                    </h2>
                    <p className="text-gray-300 text-md line-clamp-2">
                      {news.description}
                    </p>
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
      {/* noticias segundarias */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        {secondaryNews.map((news) => (
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
              />
              {news.category && (
                <span className="absolute text-light top-3 left-3 text-xs px-3 py-1 rounded-full bg-secondary tracking-wide font-semibold">
                  {news.category}
                </span>
              )}
            </div>
            <div className="absolute inset-0 flex  items-end p-3 bg-linear-to-t from-black/90 via-transparent">
              <div className="flex flex-col gap-1">
                <h3 className="text-light text-md md:text-sm font-semibold line-clamp-2">
                  {news.title}
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
