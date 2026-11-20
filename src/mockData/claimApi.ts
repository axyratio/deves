// mockData/claimApi.ts
import type { ClaimTracking } from "../type/claimTracking";
import { claimTrackingMock } from "./claimTrackingData";

type CreateClaimInput = {
    policyNumber: string;
    location: { lat: number; lng: number };
    phone: string;
};

const claims = new Map<string, ClaimTracking>();
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// mockData/claimApi.ts: ปรับ createClaim ให้ออกเลขใหม่ทุกครั้ง
export async function createClaim(input: CreateClaimInput): Promise<{ claimId: string }> {
    await delay(500);
    const seq = claims.size + 1;
    const claimId = `CL-2026-${String(seq).padStart(6, "0")}`;
    claims.set(claimId, {
        ...claimTrackingMock,
        claimId,
        policyNumber: input.policyNumber,
        referenceNo: `EM-${new Date().getFullYear() + 543}-${String(seq).padStart(6, "0")}`,  // ปี พ.ศ.
        receiptNo: `CR${String(seq).padStart(4, "0")}`,
        reportedAt: new Date().toISOString(),
    });
    return { claimId };
}

export async function fetchClaimTracking(claimId: string): Promise<ClaimTracking> {
    await delay(300);
    // mock เท่านั้น: Map ใน memory หายตอนรีเฟรช จึง fallback ไว้ให้ dev ต่อเนื่อง
    // ของจริงเรียก GET /claims/:claimId และถ้าไม่พบให้ throw
    return claims.get(claimId) ?? { ...claimTrackingMock, claimId };
}