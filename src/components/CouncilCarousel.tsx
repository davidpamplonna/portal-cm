"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "../ui/Icon";
import { Autoplay, Navigation } from "swiper/modules";

import { council } from "@/src/types/council";

import Image from "next/image";

interface CouncilCarouselProps {
  council: council[];
}

export default function CouncilCarousel({ council }: CouncilCarouselProps) {
  return (
    <div className="max-w-[1400px] mx-auto py-10">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* esquerda texto */}
        <div className="flex-1 md:w-1/3 mt-8">
          <span className="text-sm text-gray-800 mb-4">Vereadores da</span>
          <h2 className="font-bold uppercase text-2xl md:text-3xl text-primary">
            Câmara de Libertália
          </h2>
          <p className="text-descriprion max-w-md">
            Lista de vereadores eleitos para o mandato de 2025 a 2026
          </p>

          {/* botoes de navegação */}
          <div className="mt-8 flex space-x-4">
            <button className="swiper-prev w-11 h-11 rounded-full border-2 border-primary flex items-center justify-center">
              <Icon icon={"Arrow-Left"} width={24} height={24} />
            </button>
            <button className="swiper-next w-11 h-11 rounded-full border-2 border-primary flex items-center justify-center">
              <Icon icon={"Arrow-Rigth2"} width={24} height={24} />
            </button>
          </div>
        </div>
        {/* carousel */}
        <div className="flex-1 md:w-2/3 w-full">
          <Swiper
            className="pl-4"
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000 }}
            spaceBetween={16}
            slidesPerView={1.55}
            centeredSlides={false}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            breakpoints={{
              480: { slidesPerView: 1.4, spaceBetween: 16 },
              640: { slidesPerView: 1.7, spaceBetween: 18 },
              768: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {council.map((card) => (
              <SwiperSlide
                key={card.id}
                className={`transition-transform duration-300 py-6 ${
                  card.id % 2 === 0 ? "-translate-y-4" : "translate-y-2"
                }`}
              >
                <div className="relative rounded-xl overflow-hidden w-full h-80">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/90" />
                  <div className="absolute bottom-2 left-4 right-4 text-light py-2">
                    <h4 className="text-md font-semibold uppercase">
                      {card.name}
                    </h4>
                    <span className="text-sm text-gray-200/90 ">
                      {card.cargo}
                    </span>
                    <div className="border-t border-light/60 mt-1" />
                    <div className=" flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-300">
                        Matérias: {card.materias}
                      </span>
                      <span className="text-xs text-gray-300">
                        Mandato: {card.mandato}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
