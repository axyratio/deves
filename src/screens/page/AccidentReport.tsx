import { Car } from "lucide-react";
import { themeColor } from "../../assets/ThemeColors";
import { IconBagde } from "../../component/common/IconBagde/IconBagde";
import { policyData } from "../../mockData/policyData";
import { Button } from "../../component/common/Button/Button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AccidentReport() {
    
    const policies = policyData.policyData;

    const navigate = useNavigate();

    return (
        <div className="claim-policy flex flex-col gap-3">
            <p style={{ color: themeColor("content-secondary"), fontSize: "14px" }}>
                รถยนต์ {policies.length} ฉบับ
            </p>

            {policies.map((policy) => (
                <div
                    key={policy.policyNumber}
                    className="border border-border bg-surface rounded-lg py-[14px] px-[15px]"
                >
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row justify-between">
                            <div className="flex gap-2">
                                <IconBagde isTextBagde={false} icon={<Car size={22} />} cardColor="accent-300" />
                                <div>
                                    <div>
                                        <p className="text-[15px]">ประกันภัยรถยนต์ ชั้น {policy.insuranceType}</p>
                                    </div>
                                    <div className="leading-snug">
                                        <p className="text-[13px] text-content-secondary">{policy.policyNumber}</p>
                                        <p className="text-[13px] text-content-secondary">{policy.licensePlate}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 self-start rounded-full bg-success/20 px-2 text-[13px] font-medium text-success">
                                <Check size={15} />
                                <span>{policy.policyStatus}</span>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2">
                            <Button className="py-2" variant="outlineBeige">ดูรายละเอียด</Button>
                            <Button
                                variant="yellow"
                            >
                                แจ้งเคลม
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}