// mockData/claimTrackingData.ts

import type { ClaimTracking } from "../type/claimTracking";

// mockData/claimTrackingData.ts
export const claimTrackingMock: ClaimTracking = {
    claimId: "CL-2026-000123",
    policyNumber: "V-2559-001103388",
    referenceNo: "EM-2569-000731",
    receiptNo: "CR9999",
    reportedAt: "2026-10-09T14:32:00+07:00",
    steps: [
        {
            id: "inspection",
            title: "รอตรวจสอบความเสียหาย",
            
            status: "current",
            timestamp: "2026-10-09T14:32:00+07:00",
            description: "ผู้สำรวจภัยกำลังเดินทางไปตรวจสอบความเสียหาย ณ ที่เกิดเหตุ",
            surveyor: {
                name: "คุณวิทยา รักงาน",
                role: "ผู้สำรวจภัยเทเวศ",
                code: "SV-1024",
                rating: 4.9,
                phone: "0812345678",
                distanceKm: 4.2,
                etaMinutes: 12,
                etaAt: "2026-10-09T14:46:00+07:00",
            },
        },
        { id: "submitted", title: "ส่งใบเคลมเรียบร้อยแล้ว", status: "pending" },
        { id: "repair", title: "รอนำรถเข้าจัดซ่อม", status: "pending" },
    ],
};

export function fetchClaimTracking(_claimId: string): Promise<ClaimTracking> {
    return new Promise((resolve) => setTimeout(() => resolve(claimTrackingMock), 300));
}