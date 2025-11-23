import Link from "next/link";


interface TitleProps {
    title: string;
    href?: string;
    showBorder?: boolean;
    showLink: boolean;
    variant?: 'primary' | 'secondary'
}



export function Title({

    title,
    href = '#',
    showBorder = true,
    showLink = true,
    variant = 'primary'
}: TitleProps){

    const variantStyles = {
        primary:
        "font-bold text-primary text-xl md:text-2xl uppercase",
        secondary:
        "text-light text-xl md:text-2xl font-bold uppercase"
    }




    return (
       <div className={`flex justify-between items-center ${
        showBorder ? "border-b-2 border-secondary pb-2" : ""
       }`}>
           <h2 className={variantStyles[variant]}>{title}</h2>
           {
            showLink && href && (
                <Link href={href} className="font-medium text-gray-600 text-xs md:text-sm hover:text-secondary tracking-wide transition-colors">
                    Veja mais
                </Link>
            )
           }
       </div>
    )
}