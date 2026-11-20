import type { ReactNode } from "react";
import { themeColor, themeForeground, type ThemeColorName } from "../../../assets/ThemeColors";

export type IconBagdeProps = {
    style?: React.CSSProperties;
    isTextBagde: boolean;
    cardColor?: ThemeColorName;   // สีพื้น card เช่น "card", "muted", "brand-50"
    badgeColor?: ThemeColorName;  // สี badge เช่น "danger", "success", "alert-600"
    countBadge?: number;
    textBadge?: string;
    maxCount?: number;            // เกินค่านี้แสดงเป็น "99+"
    icon?: ReactNode;
    disabled?: boolean;
    ariaLabel?: string;
    onClick?: () => void;
};

export function IconBagde({
    style,
    isTextBagde,
    cardColor = "card",
    badgeColor = "danger",
    countBadge = 0,
    textBadge = "",
    maxCount = 99,
    icon,
    disabled = false,
    ariaLabel,
    onClick,
}: IconBagdeProps) {
    const showBadge = isTextBagde ? textBadge !== "" : countBadge > 0;
    const badgeContent = isTextBagde
        ? textBadge
        : countBadge > maxCount
            ? `${maxCount}+`
            : countBadge;

    return (
        <div className="relative inline-flex">
            <button
                
                type="button"
                onClick={onClick}
                disabled={disabled}
                aria-label={ariaLabel}
                style={{ backgroundColor: themeColor(cardColor), ...style }}
                className="inline-flex size-10 shrink-0 items-center rounded-lg justify-center bg-surface/20 text-surface-foreground
           transition-[filter]  text-body1
           
           disabled:pointer-events-none "
            >
                {icon}
            </button>

            {showBadge && (
                <span
                    style={{
                        backgroundColor: themeColor(badgeColor),
                        color: themeForeground(badgeColor),
                    }}
                    className="pointer-events-none absolute right-0 top-0 grid min-h-5 min-w-5 translate-x-1/2 -translate-y-1/2
                   place-items-center rounded-full px-1 text-[10px] font-medium leading-none"
                >
                    {badgeContent}
                </span>
            )}
        </div>
    );
}