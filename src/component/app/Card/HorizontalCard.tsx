import React from "react";
import { IconBagde } from "../../common/IconBagde/IconBagde";

const VARIANTS = {
    default: {
        card: "bg-surface border-border",
        iconColor: "accent-300",
    },
    yellow: {
        card: "bg-accent-300/35 border-accent-400",
        iconColor: "accent-500",
    },
    danger: {
        card: "bg-danger/10 border-danger",
        iconColor: "alert-500",
    },
} as const;

export type HorizontalCardVariant = keyof typeof VARIANTS;

export interface HorizontalCardProps {
    variant?: HorizontalCardVariant;
    children?: React.ReactNode;
    title?: string;
    subtitle?: string;
    icon: React.ReactNode;
    rightElement?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const HorizontalCard: React.FC<HorizontalCardProps> = ({
    variant = "default",
    children,
    title,
    subtitle,
    icon,
    rightElement,
    className,
    onClick,
}) => {
    const theme = VARIANTS[variant];
    const hasText = Boolean(title || subtitle);

    return (
        <div
            onClick={onClick}
            className={`flex w-full cursor-pointer items-center justify-between rounded-2xl border p-4 text-left
                        transition-transform active:scale-[0.98] ${theme.card} ${className}`}
        >
            <div className="flex items-center gap-3.5">
                <IconBagde icon={icon} isTextBagde={false} cardColor={theme.iconColor} />

                {hasText ? (
                    <div className="flex flex-col gap-0.5">
                        {title && (
                            <p className="text-[15.5px] font-bold leading-[1.35] text-primary">{title}</p>
                        )}
                        {subtitle && (
                            <p className="text-[12.5px] font-normal leading-[1.35] text-content-secondary">{subtitle}</p>
                        )}
                    </div>
                ) : (
                    children
                )}
            </div>

            {rightElement && <div className="shrink-0">{rightElement}</div>}
        </div>
    );
};