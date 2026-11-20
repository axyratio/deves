import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { CarTaxiFront } from "lucide-react";
import { findPolicy } from "../../mockData/policyData";
import { HorizontalCard } from "../../component/app/Card/HorizontalCard";
import { TextField } from "../../component/common/Form/TextField";
import { LocationPicker, type LatLng } from "../../component/common/Location/LocationPicker";
import { Button } from "../../component/common/Button/Button";
import { createClaim } from "../../mockData/claimApi";

type FormErrors = { phone?: string; location?: string; submit?: string };

export function EmergencyForm() {
    const { policyNumber } = useParams();
    const navigate = useNavigate();
    const policy = findPolicy(policyNumber);

    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState<LatLng | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!policy) return <Navigate to="/accident" replace />;

    const validate = (): FormErrors => {
        const result: FormErrors = {};
        if (!location) result.location = "กรุณาเลือกตำแหน่งที่เกิดเหตุ";
        const digits = phone.replace(/\D/g, "");
        if (!digits) result.phone = "กรุณากรอกเบอร์โทรศัพท์";
        else if (!/^0\d{9}$/.test(digits)) result.phone = "เบอร์โทรศัพท์ไม่ถูกต้อง";
        return result;
    };

    const handleSubmit = async () => {
    console.log("1 กดแล้ว", { isSubmitting, location, phone });
    if (isSubmitting) return;

    const nextErrors = validate();
    console.log("2 ผลตรวจ", nextErrors);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || !location) return;

    setIsSubmitting(true);
    try {
        const { claimId } = await createClaim({
            policyNumber: policy.policyNumber,
            location,
            phone: phone.replace(/\D/g, ""),
        });
        console.log("3 สร้างเคลมแล้ว", claimId);
        navigate(`/claims/${claimId}`, { replace: true });
    } catch (e) {
        console.error("4 พัง", e);
        setErrors({ submit: "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง" });
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-col gap-4">
                <HorizontalCard
                    icon={<CarTaxiFront size={22} />}
                    title={policy.policyNumber}
                    subtitle={policy.licensePlate}
                />

                <div className="flex flex-col gap-2">
                    <LocationPicker value={location} onChange={setLocation} />
                    {errors.location && (
                        <p role="alert" className="text-[13px] text-danger">{errors.location}</p>
                    )}
                </div>

                <div className="rounded-2xl border border-border bg-surface p-4">
                    <TextField
                        label="เบอร์โทรศัพท์มือถือ"
                        type="tel"
                        required
                        placeholder="08x-xxx-xxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        error={errors.phone}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {errors.submit && (
                    <p role="alert" className="text-center text-[13px] text-danger">{errors.submit}</p>
                )}
                <Button
                    className="py-3"
                    variant="yellow"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                >
                    {isSubmitting ? "กำลังส่งข้อมูล..." : "ยืนยันการเคลม"}
                </Button>
            </div>
        </div>
    );
}