// component/hooks/useClaimTracking.ts
import { useEffect, useState } from "react";
import type { ClaimTracking } from "../../type/claimTracking";
import { fetchClaimTracking } from "../../mockData/claimApi";   // ต้องเป็น claimApi

export function useClaimTracking(claimId: string, pollMs = 15000) {
    const [data, setData] = useState<ClaimTracking | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        setData(null);          // เคลมเปลี่ยน: ล้างของเก่า
        setError(null);

        const load = async () => {
            try {
                const result = await fetchClaimTracking(claimId);
                if (cancelled) return;
                setData(result);
                setError(null);  // สำเร็จแล้วล้าง error เก่า
            } catch (e) {
                if (!cancelled) setError(e as Error);
            }
        };

        load();
        const timer = setInterval(load, pollMs);
        return () => {
            cancelled = true;
            clearInterval(timer);
        };
    }, [claimId, pollMs]);

    return { data, error, isLoading: data === null && error === null };
}