import IconData from "@/src/data/icons.json";
import Image from "next/image";

type IconName = keyof typeof IconData;

interface IconProps {
  icon: IconName;
  width: number;
  height: number;
  className?: string;

}

export function Icon({ icon, width, height, className }: IconProps) {
    
  const iconInfo = IconData[icon];

  return (
    <Image
      src={iconInfo.src}
      alt={iconInfo.name}
      width={width}
      height={height}
      className={className}
    />
  );
}
