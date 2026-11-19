import type { ReactNode } from "react";
import type { Policy } from "../../../models/common/policy";
import { themeColor } from "../../../assets/ThemeColors";

type DetailRow = {
    id: string;        
                   // ชื่อเรียกแถว ใช้อ้างอิงตอนเลือกแสดง
    label: string;
    value: (data: Policy) => ReactNode;
    alwaysShow?: boolean;             // true = แสดงเสมอ ไม่ว่าจะมีค่าหรือไม่
};

const DETAIL_ROWS: DetailRow[] = [
    { id: "policyNumber", label: "หมายเลขกรมธรรม์", value: (d) => d.policyNumber, alwaysShow: true },
    { id: "licensePlate", label: "ทะเบียนรถ", value: (d) => d.licensePlate },
    { id: "insuranceType", label: "ประเภทประกัน", value: (d) => d.insuranceType },
];

function isEmpty(value: ReactNode): boolean {
    return value === null || value === undefined || value === "";
}

type DetailCardProps = {
    data: Policy;
    showEmpty?: string[] | boolean;   // รายการ id ที่ให้แสดงแม้ว่าง หรือ true = แสดงทุกแถว
};

export function DetailCard({ data, showEmpty = false }: DetailCardProps) {
    const shouldShowWhenEmpty = (row: DetailRow): boolean =>
        row.alwaysShow ||
        showEmpty === true ||
        (Array.isArray(showEmpty) && showEmpty.includes(row.id));

    const rows = DETAIL_ROWS
        .map((row) => ({ ...row, content: row.value(data) }))
        .filter((row) => !isEmpty(row.content) || shouldShowWhenEmpty(row));

    return (
        <div className="rounded-lg border border-border bg-surface/20 p-4 text-surface-foreground">
            <div className="title">{data.title}</div>
            <div className="content">
                {rows.map((row) => (
                    <div
                        key={row.id}
                        className="flex justify-between border-b border-border py-2 last:border-b-0"
                    >
                        <span  className="font-medium" style={{ fontSize: "14px", color: themeColor("content-secondary")}} >{row.label}</span>
                        <span  className="font-medium" style={{ fontSize: "14px"}} >{isEmpty(row.content) ? "-" : row.content}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}