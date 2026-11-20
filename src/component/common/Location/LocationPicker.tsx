// component/app/LocationPicker/LocationPicker.tsx
export type LatLng = { lat: number; lng: number };

type LocationPickerProps = {
    value?: LatLng | null;
    onChange?: (value: LatLng) => void;
};

// พิกัดจำลอง (แถวสุขุมวิท) ไว้ทดสอบ flow ก่อนต่อแผนที่จริง
const MOCK_LOCATION: LatLng = { lat: 13.6953, lng: 100.6008 };

export function LocationPicker({ value, onChange }: LocationPickerProps) {
    return (
        <button
            type="button"
            onClick={() => onChange?.(MOCK_LOCATION)}
            aria-label="เลือกตำแหน่งบนแผนที่"
            className="relative block h-[220px] w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-muted"
        >
            {/* พื้นหลังจำลองแผนที่: เส้นถนน */}
            <svg
                className="absolute inset-0 h-full w-full text-border"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    <pattern id="mock-map-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mock-map-grid)" />
                <path d="M0 120H400" stroke="currentColor" strokeWidth="10" opacity="0.6" />
                <path d="M170 0V260" stroke="currentColor" strokeWidth="10" opacity="0.6" />
            </svg>

            {/* ป้ายคำแนะนำมุมซ้ายบน */}
            <span className="absolute left-3 top-3 rounded-lg bg-white px-3 py-1 text-[13px] text-content-secondary shadow">
                ลากแผนที่ หรือแตะเพื่อเลือกตำแหน่ง
            </span>

            {/* หมุดกลางแผนที่ */}
            <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
                width="40"
                height="52"
                viewBox="0 0 40 52"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M20 0C9 0 0 9 0 20c0 15 20 32 20 32s20-17 20-32C40 9 31 0 20 0z"
                    fill="#de2f26"
                />
                <circle cx="20" cy="20" r="7" fill="#7a1410" />
            </svg>

            {/* สถานะ: เลือกตำแหน่งแล้วหรือยัง */}
            {value && (
                <span className="absolute bottom-3 left-3 rounded-full bg-success/20 px-2 py-0.5 text-[12px] font-medium text-success">
                    เลือกตำแหน่งแล้ว
                </span>
            )}
        </button>
    );
}