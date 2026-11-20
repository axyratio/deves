// component/app/Card/DetailCard.tsx
import type { ReactNode } from "react";
import type { Policy } from "../../../mockData/policyData";

type DetailRow = {
    id: string;
    label: string;
    value: (data: Policy) => ReactNode;
    alwaysShow?: boolean;             // true = แสดงเสมอ แม้ไม่มีค่า
};

const DETAIL_ROWS: DetailRow[] = [
    { id: "policyNumber", label: "หมายเลขกรมธรรม์", value: (d) => d.policyNumber, alwaysShow: true },
    { id: "licensePlate", label: "ทะเบียนรถ", value: (d) => d.licensePlate },
    {
        id: "insuranceType",
        label: "ประเภทประกัน",
        value: (d) => d.insuranceType && `ประกันภัยรถยนต์ ชั้น ${d.insuranceType}`,
    },
    {
        id: "policyStatus",
        label: "สถานะ",
        value: (d) =>
            d.policyStatus && (
                <span className="rounded-full bg-success/20 px-2 py-0.5 text-[13px] font-medium text-success">
                    {d.policyStatus}
                </span>
            ),
    },
];

function isEmpty(value: ReactNode): boolean {
    return value === null || value === undefined || value === "" || value === false;
}

type DetailCardProps = {
    title: string;
    data: Policy;
    showEmpty?: string[] | boolean;   // รายการ id ที่ให้แสดงแม้ว่าง หรือ true = ทุกแถว
};

export function DetailCard({ title, data, showEmpty = false }: DetailCardProps) {
    const shouldShowWhenEmpty = (row: DetailRow): boolean =>
        row.alwaysShow ||
        showEmpty === true ||
        (Array.isArray(showEmpty) && showEmpty.includes(row.id));

    const rows = DETAIL_ROWS
        .map((row) => ({ ...row, content: row.value(data) }))
        .filter((row) => !isEmpty(row.content) || shouldShowWhenEmpty(row));

    return (
        <div className="rounded-lg border border-border bg-surface p-4">
            <p className="mb-2 text-[16px] font-bold text-primary">{title}</p>

            <div>
                {rows.map((row) => (
                    <div
                        key={row.id}
                        className="flex items-center justify-between gap-3 border-b border-border py-2 last:border-b-0"
                    >
                        <span className="text-[14px] font-medium text-content-secondary">{row.label}</span>
                        <span className="text-right text-[14px] font-medium text-primary">
                            {isEmpty(row.content) ? "-" : row.content}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}