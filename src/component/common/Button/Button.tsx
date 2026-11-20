import type { ReactNode } from "react";


// อย่าลืมแก้ไขสีใน variant ให้เป็นตัวแปรในไฟล์ Colors.tsx
const VARIANTS = {
    primary: "bg-primary text-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border bg-surface/20 text-surface-foreground ",
    danger: "bg-danger text-danger-foreground ",

    // ---- เพิ่มใหม่ ----
    yellow:
        "rounded-full! bg-secondary text-primary font-medium shadow-[0_2px_0_#c9962a] " +
        "disabled:bg-secondary/30 disabled:shadow-none disabled:opacity-50",

    outlineBeige:
        "rounded-full! border border-border bg-transparent text-primary font-medium " +
        "disabled:border-border/30 disabled:opacity-50",

    outlineNavy:
        "rounded-full! border border-border bg-transparent text-primary font-medium " +
        "disabled:border-border/30 disabled:opacity-50",
} as const;

// ---- เพิ่มใหม่ ---- ใช้เมื่อส่ง size เข้ามาเท่านั้น
const SIZES = {
    lg: "w-full! py-3 text-base",
    sm: "w-auto! px-6 py-2 text-sm",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;
export type ButtonSize = keyof typeof SIZES;

type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;               // เพิ่มใหม่
    style?: React.CSSProperties;
    icon?: ReactNode;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    ariaLabel?: string;
    className?: string;
};

export function Button({
    variant = "primary",
    size,                            // เพิ่มใหม่
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
                        ${VARIANTS[variant]} ${size ? SIZES[size] : ""} ${className}`}
        >
            {icon}
            {children}
        </button>
    );
}