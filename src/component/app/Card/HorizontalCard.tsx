import React from "react";
import { IconBagde } from "../../common/IconBagde/IconBagde";
import { themeColor } from "../../../assets/ThemeColors";

export interface HorizontalCardProps {
    variant?: "highlight" | "default";
    title: string;
    subtitle?: string;
    icon: React.ReactNode;
    rightElement?: React.ReactNode;
    onClick?: () => void;
}

export const HorizontalCard: React.FC<HorizontalCardProps> = ({
    variant = "default",
    title,
    subtitle,
    icon,
    rightElement,
    onClick,
}) => {
    const isHighlight = variant === "highlight";

    return (
        <div
            onClick={onClick}
            style={{
                padding: 16,
                borderRadius: 16,
                borderWidth: 1,
                borderStyle: "solid",
                backgroundColor: isHighlight
                    ? `color-mix(in srgb, ${themeColor("accent-300")} 35%, ${themeColor("surface")})`
                    : themeColor("surface"),
                borderColor: isHighlight
                    ? themeColor("accent-300")
                    : themeColor("border"),
            }}
            className="w-full flex items-center justify-between text-left cursor-pointer transition-transform active:scale-[0.98]"
        >
            <div style={{ gap: 14 }} className="flex items-center">
                <IconBagde
                    icon={icon}
                    isTextBagde={false}
                    cardColor={isHighlight ? "accent-500" : "accent-300"}
                />

                <div style={{ gap: 2 }} className="flex flex-col">
                    <p
                        style={{
                            fontSize: 15,
                            lineHeight: 1.35,
                            color: themeColor("primary"),
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
                                color: themeColor("primary"),
                            }}
                            className="font-normal"
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {rightElement && (
                <div className="shrink-0">
                    {rightElement}
                </div>
            )}
        </div>
    );
};