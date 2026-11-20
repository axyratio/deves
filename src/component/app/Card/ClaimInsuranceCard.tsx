import React, { useRef, useState } from "react";
import { IconBagde } from "../../common/IconBagde/IconBagde";
import { themeColor, themeForeground } from "../../../assets/ThemeColors";
import { Button } from "../../common/Button/Button";
import carInsurance from "../../../assets/icon/unionIcon.svg";

export type ClaimInsuranceCardProps = {
    category?: "car" | "travel" | "health" | "accident" | "fire";
    type: string;
    title: string;
    status: string;
    licensePlate: string;
    onDetail?: () => void;
    onClaim?: () => void;
};

// 1. ตัวการ์ดเดี่ยว (รับ Prop เดิมของคุณ 100%)
export function ClaimInsuranceCard({
    type,
    title,
    status,
    licensePlate,
    onDetail,
    onClaim,
    category = "car",
}: ClaimInsuranceCardProps) {
    const colorType = `insurance-${category}`;

    return (
        <div
            style={{
                padding: "18px 18px",
                width: "100%",
                minHeight: "196px",
                borderRadius: "24px",
                backgroundImage: `linear-gradient(155deg,
                    color-mix(in srgb, var(--insurance-${category}) 88%, #ffffff),
                    color-mix(in srgb, var(--insurance-${category}) 82%, #0f172a))`,
                color: themeForeground(colorType),
            }}
            className="claim-insurance-card relative isolate flex flex-col justify-between h-full overflow-hidden"
        >
            {/* วงกลมตกแต่งมุมขวาบน */}
            <span
                aria-hidden="true"
                style={{ width: "175px", height: "175px", right: "-28px", top: "-32px" }}
                className="pointer-events-none absolute -z-10 rounded-full bg-white/10"
            />

            {/* Header: ซ้าย (ไอคอน + ชื่อประกัน) | ขวา (สถานะคุ้มครอง) */}
            <div className="header flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                    <div className="icon shrink-0">
                        <IconBagde
                            icon={
                                <img
                                    src={carInsurance}
                                    alt=""
                                    className="size-5"
                                    style={{
                                        filter: "brightness(0) saturate(100%) invert(78%) sepia(63%) saturate(1352%) hue-rotate(359deg) brightness(101%) contrast(103%)",
                                    }}
                                />
                            }
                            style={{
                                width: "38px",
                                height: "38px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.16)",
                            }}
                            disabled={true}
                            isTextBagde={false}
                        />
                    </div>
                    <div style={{ fontSize: "14px" }} className="truncate title font-bold">
                        {title}ชั้น {type}
                    </div>
                </div>

                <span
                    style={{
                        padding: "4px 10px",
                        fontSize: "11px",
                        backgroundColor: themeColor("insurance-health-soft"),
                        color: themeColor("content-success"),
                    }}
                    className="status shrink-0 whitespace-nowrap inline-flex items-center gap-1 font-bold rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-3.5 h-3.5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6.75 6.75 9-13.5" />
                    </svg>
                    {status}
                </span>
            </div>

            {/* Context: เลขทะเบียน */}
            <div className="context my-3">
                <div style={{ fontSize: "26px", fontWeight: "bold", letterSpacing: "0.02em" }} className="licensePlate">
                    {licensePlate}
                </div>
            </div>

            {/* Footer: ปุ่มซ้าย-ขวา กว้างเท่ากัน */}
            <div className="footer grid grid-cols-2 gap-2.5">
                <Button
                    onClick={onDetail || onClaim}
                    style={{
                        height: "40px",
                        fontSize: "13px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0.14)",
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        color: themeForeground(colorType),
                    }}
                    ariaLabel="View Details"
                    variant="outline"
                    className="w-full font-bold justify-center"
                >
                    ดูรายละเอียด
                </Button>
                <Button
                    onClick={onClaim}
                    style={{
                        height: "40px",
                        fontSize: "13px",
                        borderRadius: "12px",
                        backgroundColor: themeColor("accent-500"),
                        color: themeColor("brand-900"),
                    }}
                    ariaLabel="แจ้งเคลม"
                    className="w-full font-bold justify-center"
                >
                    แจ้งเคลม
                </Button>
            </div>
        </div>
    );
}

// 2. ตัวครอบสไลด์ (อยู่ในไฟล์เดียวกัน เลือกใช้ได้เลย)
type ClaimInsuranceSliderProps = {
    children: React.ReactNode;
};

export function ClaimInsuranceSlider({ children }: ClaimInsuranceSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const items = React.Children.toArray(children);

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;
        const firstCard = container.firstElementChild as HTMLElement | null;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth + 12;
        const index = Math.round(container.scrollLeft / cardWidth);
        setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
    };

    const scrollToSlide = (index: number) => {
        const container = scrollRef.current;
        if (!container) return;
        const firstCard = container.firstElementChild as HTMLElement | null;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth + 12;
        container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    };

    return (
        <div className="w-full flex flex-col gap-3">
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="no-scrollbar flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full"
            >
                {items.map((child, idx) => (
                    <div
                        key={idx}
                        className={`snap-start shrink-0 ${items.length > 1 ? "w-[86%]" : "w-full"}`}
                    >
                        {child}
                    </div>
                ))}
            </div>

            {items.length > 1 && (
                <div className="flex items-center justify-center gap-1.5">
                    {items.map((_, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <button
                                key={idx}
                                type="button"
                                aria-label={`Slide ${idx + 1}`}
                                onClick={() => scrollToSlide(idx)}
                                style={{
                                    width: isActive ? "22px" : "6px",
                                    height: "6px",
                                    backgroundColor: isActive
                                        ? themeColor("brand-900")
                                        : themeColor("border"),
                                }}
                                className="rounded-full transition-all duration-300 cursor-pointer"
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}