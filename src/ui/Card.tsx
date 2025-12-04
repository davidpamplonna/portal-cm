// ...existing code...
import  { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "./Icon";

type CardVariant = "primary" | "secondary";

export interface CardProps {
  variant?: CardVariant;
  title: string;
  description?: string;
  link?: string;
  label?: string;
  icon?: IconName;
  className?: string;
}

const variantConfig = {
  primary: {
    container:
      "bg-secondary text-white hover:bg-secondary/95 hover:-translate-y-1 p-5 md:p-4 overflow-hidden focus-visible:ring-2 focus-visible:ring-primary/40",
    iconWrapper: "bg-transparent p-3 rounded-full",
    iconColor: "brightness-0 invert",
    title: "text-md font-semibold text-light",
    description: "hidden",
    link: "hidden",
  },
  secondary: {
    container:
      "bg-light/90 flex flex-col justify-center items-center text-center rounded-xl py-6 px-1 md:px-4 hover:bg-light focus:ring-2 focus:ring-primary/50 focus:outline-none hover:-translate-y-1",
    iconWrapper: "bg-primary/10 rounded-full p-3 mb-3",
    iconColor: "text-primary",
    title: "text-primary font-bold text-base md:text-lg ",
    description: "mt-2 text-gray-800 text-sm md:text-base",
    link: "flex gap-2 mt-2 text-gray-700 text-xs md:text-sm hover:text-secondary transition-all duration-300",
  },
};

function CardComponent({
  variant = "primary",
  title,
  description,
  link,
  label = "Consultar",
  icon,
  className = "",
}: CardProps) {
  const baseStyles =
    "rounded-md flex flex-col justify-center items-center text-center transition-transform duration-300";

  const v = variantConfig[variant];

  const isExternal = typeof link === "string" && /^https?:\/\//.test(link);

  const cardContent = (
    <>
      {icon && (
        <div className={v.iconWrapper}>
          <Icon
            icon={icon}
            width={40}
            height={40}
            className={`w-8 h-8 md:w-9 md:h-9 ${v.iconColor}`}
            aria-hidden="true"
          />
        </div>
      )}

      <h3 className={v.title}>{title}</h3>

      {description && <p className={v.description}>{description}</p>}

      {variant === "secondary" && link && (
        <Link
          href={link}
          className={v.link}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          aria-label={label ? `${label} — ${title}` : title}
        >
          <span>{label}</span>
          <Image
            src="/icons/arrow-right-top.svg"
            alt=""
            aria-hidden="true"
            width={14}
            height={14}
          />
        </Link>
      )}
    </>
  );

  if (variant === "primary" && link) {
    return (
      <Link
        href={link}
        className={`${baseStyles} ${v.container} ${className}`}
        aria-label={title}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={`${baseStyles} ${v.container} ${className}`} role="group" aria-label={title}>
      {cardContent}
    </div>
  );
}

export const Card = memo(CardComponent);