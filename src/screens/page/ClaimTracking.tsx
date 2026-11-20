import { Navigate, useParams } from "react-router-dom";
import { DetailCard } from "../../component/app/Card/DetailCard";
import { findPolicy } from "../../mockData/policyData";
import { useClaimTracking } from "../../component/hooks/useClaimTracking";
import { ClaimTrackingCard } from "../../component/app/Tracking/ClaimTrackingCard";
import { ClaimReceiptHeader } from "../../component/app/Tracking/ClaimHeader";

export function ClaimTracking() {
    const { claimId } = useParams();
    const { data, error, isLoading } = useClaimTracking(claimId ?? "");

    if (isLoading) return <p className="text-sm text-content-secondary">กำลังโหลด...</p>;
    if (error || !data) return <Navigate to="/claims" replace />;

    const policy = findPolicy(data.policyNumber);

    return (
        <div className="flex flex-col gap-3">
            <ClaimReceiptHeader
                referenceNo={data.referenceNo}
                receiptNo={data.receiptNo}
                reportedAt={data.reportedAt}
            />
            {policy && <DetailCard title="ข้อมูลกรมธรรม์" data={policy} />}
            <ClaimTrackingCard steps={data.steps} />
        </div>
    );
}