import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { partners } from "@/utils/partners";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
    // Map the partners from service.ts into the logo grid
    // We show up to 10 logos in a 2-col mobile / 5-col desktop grid
    const logos: Logo[] = partners.map((p) => ({
        src: p.src,
        alt: p.alt,
    }));
    return (
        <div
            className={cn(
                "relative grid grid-cols-2 md:grid-cols-5",
                className
            )}
            style={{ borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}
            {...props}
        >
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen" style={{ borderTop: "1px solid var(--border)" }} />

            {logos.map((logo, index) => {
                // Determine styling for alternating pattern
                const isEvenRow = Math.floor(index / 5) % 2 === 0;
                const isEvenInRow = index % 2 === 0;
                const hasSecondaryBg = isEvenRow ? isEvenInRow : !isEvenInRow;

                // Show plus icons at strategic positions
                const showPlusBottomRight = index === 0 || index === 4 || index === 5;
                const showPlusBottomLeft = index === 2 || index === 7;

                return (
                    <LogoCard
                        key={index}
                        className={cn(
                            "relative",
                            hasSecondaryBg && "bg-[#0a1a10]"
                        )}
                        style={{
                            borderRight: "1px solid var(--border)",
                            borderBottom: "1px solid var(--border)",
                        }}
                        logo={logo}
                    >
                        {showPlusBottomRight && (
                            <PlusIcon
                                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 hidden md:block"
                                strokeWidth={1}
                                style={{ color: "var(--muted-foreground)" }}
                            />
                        )}
                        {showPlusBottomLeft && (
                            <PlusIcon
                                className="-left-[12.5px] -bottom-[12.5px] absolute z-10 size-6 hidden md:block"
                                strokeWidth={1}
                                style={{ color: "#ffffffff"}}
                            />
                        )}
                    </LogoCard>
                );
            })}

            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen" style={{ borderBottom: "1px solid var(--border)" }} />
        </div>
    );
}

type LogoCardProps = React.ComponentProps<"div"> & {
    logo: Logo;
};

function LogoCard({ logo, className, children, style, ...props }: LogoCardProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center px-4 py-8 md:p-8",
                className
            )}
            style={{
                background: "var(--background)",
                ...style,
            }}
            {...props}
        >
            <img
                alt={logo.alt}
                className="pointer-events-none h-6 select-none md:h-7 brightness-0 invert opacity-80"
                height={logo.height || "auto"}
                src={logo.src}
                width={logo.width || "auto"}
            />
            {children}
        </div>
    );
}
