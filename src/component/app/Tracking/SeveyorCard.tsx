// component/app/ClaimTracking/SurveyorCard.tsx
import { Clock, Navigation, Phone, User } from "lucide-react";
import type { Surveyor } from "../../../type/claimTracking";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Bangkok",
});

export function SurveyorCard({ surveyor }: { surveyor: Surveyor }) {
    const { name, role, code, rating, photoUrl, phone, distanceKm, etaMinutes, etaAt } = surveyor;

    return (
        <div className="mt-3 flex flex-col gap-3 rounded-xl border border-border bg-surface p-3">
            <div className="flex items-center gap-3">
                {photoUrl ? (
                    <img src={photoUrl} alt={name} className="h-12 w-12 rounded-full object-cover" />
                ) : (
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-300 text-primary">
                        <User size={24} />
                    </span>
                )}
                <div className="leading-snug">
                    <p className="text-[15px] font-bold text-primary">{name}</p>
                    <p className="text-[12px] text-content-secondary">
                        {role} · {code}
                        {rating !== undefined && ` · ★ ${rating.toFixed(1)}`}
                    </p>
                </div>
            </div>

            {(distanceKm !== undefined || etaMinutes !== undefined) && (
                <div className="grid grid-cols-2 gap-2">
                    {distanceKm !== undefined && (
                        <div className="rounded-lg bg-[#fffbf3] p-2">
                            <p className="flex items-center gap-1 text-[12px] text-content-secondary">
                                <Navigation size={12} /> ระยะทาง (โดยประมาณ)
                            </p>
                            <p className="text-[14px] font-bold text-primary">{distanceKm} กม.</p>
                        </div>
                    )}
                    {etaMinutes !== undefined && (
                        <div className="rounded-lg bg-[#fffbf3] p-2">
                            <p className="flex items-center gap-1 text-[12px] text-content-secondary">
                                <Clock size={12} /> ระยะเวลา (โดยประมาณ)
                            </p>
                            <p className="text-[14px] font-bold text-primary">
                                {etaMinutes} นาที
                                {etaAt && ` (${timeFormatter.format(new Date(etaAt))} น.)`}
                            </p>
                        </div>
                    )}
                </div>
            )}

            {phone && (
                <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary py-2 text-sm font-medium text-primary"
                >
                    <Phone size={16} /> โทรติดต่อผู้สำรวจภัย
                </a>
            )}
        </div>
    );
}