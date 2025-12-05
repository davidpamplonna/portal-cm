import Link from "next/link";
import Image from "next/image";



export function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Ir para a página inicial">
      <Image
        src="/logo-oficial.png"
        alt="Logo da Câmara"
        width={230}
        height={90}
        priority
        className=" w-[140px] h-16 sm:w-[180px] sm:h-[70px] md:w-[230px] md:h-[98px] object-contain"
      />
    </Link>
  );
}