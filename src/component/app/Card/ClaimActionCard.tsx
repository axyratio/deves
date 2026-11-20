import React from "react";
import { IconBagde } from "../../common/IconBagde/IconBagde";
import { themeColor } from "../../../assets/ThemeColors";

export interface ClaimActionCardProps {
    variant: "emergency" | "self";
    title: string;
    subtitle?: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

export const ClaimActionCard: React.FC<ClaimActionCardProps> = ({
    variant,
    title,
    subtitle,
    icon,
    onClick,
}) => {
    const isEmergency = variant === "emergency";

    return (
        <div
            onClick={onClick}
            style={{
                minHeight: 132,
                padding: 16,
                gap: 12,
                borderRadius: 16,
                borderWidth: 1,
                borderStyle: "solid",
                backgroundColor: isEmergency
                    ? themeColor("danger-soft") // #fde4e4 ตาม colors.css
                    : themeColor("surface"),    // #ffffff ตาม colors.css
                borderColor: isEmergency
                    ? themeColor("alert-100")   // ขอบชมพูอ่อน
                    : themeColor("border"),     // #e8e2d0 ตาม colors.css
            }}
            className="w-full flex flex-col justify-start items-start text-left cursor-pointer transition-transform active:scale-[0.98]"
        >
            {/* ซ้าย: กล่องสี danger (#d32a22) / ขวา: กล่องสี accent-300 (#fde68a) */}
            <IconBagde
                icon={icon}
                isTextBagde={false}
                cardColor={isEmergency ? "danger-medium" : "accent-300"}
            />

            <div style={{ gap: 2 }} className="flex flex-col">
                <p
                    style={{
                        fontSize: 14,
                        lineHeight: 1.35,
                        color: isEmergency
                            ? themeColor("danger-medium") // #d32a22
                            : themeColor("primary"),       // #14204f
                    }}
                    className="font-bold"
                >
                    {title}
                </p>

                {subtitle && (
                    <p
                        style={{
                            fontSize: 12,
                            lineHeight: 1.35,
                            color: themeColor("danger-medium"), // #e5372e
                        }}
                        className="font-medium"
                    >
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};