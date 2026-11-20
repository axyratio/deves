// types/claimTracking.ts
export type ClaimStepStatus = "done" | "current" | "pending";

export type Surveyor = {
    name: string;
    role: string;            // "ผู้สำรวจภัยเทเวศ"
    code: string;            // "SV-1024"
    rating?: number;
    photoUrl?: string;
    phone?: string;
    distanceKm?: number;
    etaMinutes?: number;
    etaAt?: string;          // ISO 8601 เช่น "2026-10-09T14:46:00+07:00"
};

export type ClaimStep = {
    id: string;
    title: string;
    status: ClaimStepStatus;
    timestamp?: string;      // ISO 8601
    description?: string;
    surveyor?: Surveyor;     // มีเฉพาะตอนมอบหมายผู้สำรวจแล้ว
};

// types/claimTracking.ts  เพิ่มฟิลด์
// type/claimTracking.ts
export type ClaimTracking = {
    claimId: string;
    policyNumber: string;
    referenceNo: string;     // เลขอ้างอิงรับแจ้งเหตุ เช่น "EM-2569-000731"
    receiptNo: string;       // เลขรับแจ้ง เช่น "CR9999"
    reportedAt: string;      // ISO 8601 เวลาที่รับแจ้ง
    steps: ClaimStep[];
};