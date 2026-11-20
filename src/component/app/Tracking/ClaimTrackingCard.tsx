// component/app/ClaimTracking/ClaimTrackingCard.tsx
import { useState } from "react";
import { Check, ChevronUp } from "lucide-react";
import type { ClaimStep } from "../../../type/claimTracking";
import { SurveyorCard } from "./SeveyorCard";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Asia/Bangkok",
});
const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Bangkok",
});

function formatDateTime(iso: string) {
    const d = new Date(iso);
    return `${dateFormatter.format(d)} · ${timeFormatter.format(d)} น.`;
}

function StepDot({ status }: { status: ClaimStep["status"] }) {
    if (status === "done")
        return (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                <Check size={12} strokeWidth={3} />
            </span>
        );
    if (status === "current")
        return (
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-white">
                <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
        );
    return <span className="h-5 w-5 rounded-full border border-border bg-accent-300/40" />;
}

export function ClaimTrackingCard({ steps }: { steps: ClaimStep[] }) {
    const [open, setOpen] = useState(true);

    return (
        <section className="rounded-xl border border-border bg-surface p-4">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="flex w-full items-center justify-between"
            >
                <h2 className="text-[16px] font-bold text-primary">ติดตามสถานะการเคลม</h2>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-primary">
                    <ChevronUp size={18} className={`transition-transform ${open ? "" : "rotate-180"}`} />
                </span>
            </button>

            {open && (
                <ol className="mt-4">
                    {steps.map((step, index) => {
                        const isLast = index === steps.length - 1;
                        const isPending = step.status === "pending";

                        return (
                            <li key={step.id} className="flex gap-3">
                                <div className="flex flex-col items-center">
                                    <StepDot status={step.status} />
                                    {!isLast && <span className="my-1 w-px flex-1 bg-border" />}
                                </div>

                                <div className={`flex-1 ${isLast ? "" : "pb-5"}`}>
                                    <p className={`text-[15px] leading-snug ${
                                        isPending ? "text-content-secondary" : "font-bold text-primary"
                                    }`}>
                                        {step.title}
                                    </p>

                                    {step.timestamp && (
                                        <p className="text-[12px] text-content-secondary">
                                            {formatDateTime(step.timestamp)}
                                        </p>
                                    )}
                                    {step.description && (
                                        <p className="mt-1 text-[13px] leading-snug text-content-secondary">
                                            {step.description}
                                        </p>
                                    )}

                                    {/* แสดงเฉพาะขั้นปัจจุบันที่ API ส่งข้อมูลผู้สำรวจมา */}
                                    {step.status === "current" && step.surveyor && (
                                        <SurveyorCard surveyor={step.surveyor} />
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ol>
            )}
        </section>
    );
}