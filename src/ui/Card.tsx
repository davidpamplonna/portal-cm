// ...existing code...
import { memo } from "react";
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
      "bg-light/90 flex flex-col justify-center items-center text-center rounded-xl  hover:bg-light focus:ring-2 focus:ring-primary/50 focus:outline-none hover:-translate-y-1 py-4 sm:py-6 sm:px-2 md:px-4",
    iconWrapper: "bg-primary/10 rounded-full p-3 mb-3",
    iconColor: "text-primary",
    title: "text-primary font-bold text-base md:text-lg ",
    description: "mt-2 text-gray-800 text-[12px] md:text-base ",
    link: "flex gap-1 mt-3 text-gray-700 text-xs md:text-sm hover:text-secondary transition-all duration-300 ",
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
      {variant === "secondary" && icon && (
        <div className={v.iconWrapper}>
          <Icon
            icon={icon}
            width={40}
            height={40}
            className={`w-6 h-6 md:w-8 md:h-8 ${v.iconColor}`}
            aria-hidden="true"
          />
        </div>
      )}

      {variant === "primary" && icon && (
        <div className={v.iconWrapper}>
          <Icon
            icon={icon}
            width={40}
            height={40}
            className={`w-9 h-9 md:w-8 md:h-8 ${v.iconColor}`}
            aria-hidden="true"
          />
        </div>
      )}

      {/* {icon && (
        <div className={v.iconWrapper}>
          <Icon
            icon={icon}
            width={40}
            height={40}
            className={`w-6 h-6 md:w-8 md:h-8 ${v.iconColor}`}
            aria-hidden="true"
          />
        </div>
      )} */}

      <h2 className={v.title}>{title}</h2>

      {description && <p className={v.description}>{description}</p>}

      {variant === "secondary" && link && (
        <Link
          href={link}
          className={`${v.link} group`}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          aria-label={label ? `${label} — ${title}` : title}
        >
          <span>{label}</span>
          <Icon
            icon="Arrow-Rigth-Top"
            width={18}
            height={18}
            className="w-4 h-4  md:w-5 md:h-5 md:mt-[0.2px] transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
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
    <div
      className={`${baseStyles} ${v.container} ${className}`}
      role="group"
      aria-label={title}
    >
      {cardContent}
    </div>
  );
}

export const Card = memo(CardComponent);
