import {ActionNews} from "@/src/types/news"

import Image from "next/image";
import Link from "next/link";


interface CouncilorList {
    newsList: ActionNews[];
}



export function CouncilorList({newsList}: CouncilorList){
    return (
        <div className="flex flex-col gap-7 mt-5">
            {newsList.map((news) =>(
               <article key={news.id} className="flex gap-4">
                <div className="relative w-[140px] h-[120px] md:w-[200px] md:h-32 shrink-0 rounded-md overflow-hidden">
                    <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Link href={`/vereadores-em-acao/${news.title}`}
                    className="text-primary font-semibold uppercase line-clamp-2 hover:text-secondary transition-colors duration-300 text-md"
                    >
                        {news.title}
                    </Link>
                    <span className="text-xs text-gray-600" >{news.date}</span>
                    <p className="line-clamp-2 text-sm text-descriprion">{news.description}</p>
                </div>

               </article> 
            ))}
        </div>
    )
}