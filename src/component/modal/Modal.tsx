import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export type ModalAnimation = "slide" | "fade" | "none";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    animation?: ModalAnimation;
};

// สถานะ "ซ่อน" ของการ์ดในแต่ละแบบ (เขียนเป็นข้อความเต็มเพื่อให้ Tailwind สแกนเจอ)
const HIDDEN_CARD: Record<ModalAnimation, string> = {
    slide: "translate-y-full opacity-0",
    fade: "opacity-0",
    none: "",
};

export function Modal({ isOpen, onClose, title, children, animation = "slide" }: ModalProps) {
    const canAnimate = animation !== "none";

    const [isRendered, setIsRendered] = useState(isOpen);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!canAnimate) return;   // ไม่มีอนิเมชัน ไม่ต้องจัดจังหวะ

        if (isOpen) {
            setIsRendered(true);
            let id2 = 0;
            const id1 = requestAnimationFrame(() => {
                id2 = requestAnimationFrame(() => setIsVisible(true));
            });
            return () => {
                cancelAnimationFrame(id1);
                cancelAnimationFrame(id2);
            };
        }
        setIsVisible(false);
    }, [isOpen, canAnimate]);

    // ไม่มีอนิเมชัน: ตามค่า isOpen ตรงๆ / มีอนิเมชัน: รอเล่นขาออกจบก่อนถอด
    const shouldRender = canAnimate ? isRendered : isOpen;
    if (!shouldRender) return null;

    const hidden = canAnimate && !isVisible;

    return createPortal(
        <div
            className={`fixed inset-0 z-50 flex items-end justify-center bg-black/50
                        ${canAnimate ? "transition-opacity duration-300" : ""}
                        ${hidden ? "opacity-0" : "opacity-100"}`}
            onClick={onClose}
        >
            <div
                className={`flex w-full max-w-md flex-col gap-2 rounded-t-2xl bg-surface px-[18px] py-[16px]
                            ${canAnimate ? "transition-all duration-300 ease-out" : ""}
                            ${hidden ? HIDDEN_CARD[animation] : "translate-y-0 opacity-100"}`}
                onClick={(e) => e.stopPropagation()}
                onTransitionEnd={(e) => {
                    if (e.target === e.currentTarget && !isOpen) setIsRendered(false);
                }}
            >
                <p className="text-primary text-[17px]">{title}</p>
                {children}
            </div>
        </div>,
        document.body
    );
}