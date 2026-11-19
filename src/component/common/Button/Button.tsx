import type { ReactNode } from "react";

const VARIANTS = {
    primary: "bg-primary text-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border bg-surface/20 text-surface-foreground ",
    danger: "bg-danger text-danger-foreground ",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

type ButtonProps = {
    variant?: ButtonVariant;
    style?: React.CSSProperties;
    icon?: ReactNode;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    ariaLabel?: string;
    className?: string;   // ไว้เพิ่ม class เฉพาะจุด เช่น "w-full"
};

export function Button({
    variant = "primary",
    icon,
    style,
    children,
    onClick,
    disabled,
    ariaLabel,
    className = "",
}: ButtonProps) {
    return (
        <button
            type="button"
            style={style}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg w-full text-body2 transition-colors
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring
                        disabled:pointer-events-none disabled:opacity-50
                        ${VARIANTS[variant]} ${className}`}
        >
            {icon}
            {children}
        </button>
    );
}