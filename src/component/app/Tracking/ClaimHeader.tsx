// component/app/ClaimTracking/ClaimReceiptHeader.tsx
import { formatDateTime } from "../../../utils/formatDateTime";

const DEFAULT_MESSAGE =
    "บริษัทฯ ได้รับการแจ้งเคลมเรียบร้อยแล้ว ทั้งนี้อยู่ระหว่างการตรวจสอบของเจ้าหน้าที่ " +
    "กรณีพบปัญหา จะติดต่อกลับเพื่อขอข้อมูลและเอกสารหลักฐานเพิ่มเติม " +
    "กรณีไม่พบปัญหา จะส่งใบเคลมให้ท่านต่อไป";

type ClaimReceiptHeaderProps = {
    referenceNo: string;
    receiptNo: string;
    reportedAt: string;
    message?: string;          // ไม่ส่ง = ใช้ข้อความมาตรฐาน
};

export function ClaimReceiptHeader({
    referenceNo,
    receiptNo,
    reportedAt,
    message = DEFAULT_MESSAGE,
}: ClaimReceiptHeaderProps) {
    return (
        <section className="flex flex-col items-center gap-3 text-center">
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-[18px] font-bold text-primary">รับแจ้งเคลมเรียบร้อย</h1>
                <p className="text-[13px] text-content-secondary">เลขอ้างอิงรับแจ้งเหตุ</p>
                <p className="text-[26px] font-bold leading-tight text-primary">{referenceNo}</p>
            </div>

            <p className="rounded-full bg-[#f3f0e8] px-4 py-1 text-[13px] text-content-secondary">
                เลขรับแจ้ง <span className="font-bold text-primary">{receiptNo}</span>
            </p>

            <p className="text-[12px] text-content-secondary">{formatDateTime(reportedAt)}</p>

            <p className="rounded-xl bg-[#e9f7ee] p-3 text-left text-[13px] leading-relaxed text-[#16542f]">
                {message}
            </p>
        </section>
    );
}