import { IconBagde } from "../../common/IconBagde/IconBagde";
import { themeColor, themeForeground } from "../../../assets/ThemeColors";
import { Button } from "../../common/Button/Button";
import carInsurance from "../../../assets/icon/unionIcon.svg";

type ClaimInsuranceCardProps = {
    category?: "car" | "travel" | "health" | "accident" | "fire";
    type: "1" | "2" | "3";
    title: string;
    status: string;
    licensePlate: string;
}

export function ClaimInsuranceCard({ type, title, status, licensePlate, category = "accident" }: ClaimInsuranceCardProps) {
    const colorType = `insurance-${category}`; // ใช้สีพื้นของการ์ดประกันภัยรถยนต์

    return (
        <div
            style={{
                padding: "18px 16px",
                minWidth: "273px",
                minHeight: "199px",
                backgroundImage: `linear-gradient(135deg,
            color-mix(in srgb, var(--insurance-${category}) 55%, #3a1a12),
            color-mix(in srgb, var(--insurance-${category}) 38%, #3a1a12))`,
                color: themeForeground(colorType),
                
            }}
            className=" claim-insurance-card relative isolate flex flex-col h-full gap-8 overflow-hidden rounded-2xl p-4"
        >
            {/* วงกลมตกแต่งมุมขวาบน */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-[45%] -top-[45%] -z-10 aspect-square w-[85%] rounded-full bg-white/10"
            />
            <div className="header flex items-center gap-2 justify-between">
                <div className="icon "><IconBagde icon={<img src={carInsurance} alt="" className="size-5" />} style={{width: "30px", height: "30px"}} disabled={true}  isTextBagde={false} /> </div>
                <div style={{ fontSize: "13.5px" }} className="whitespace-nowrap title font-bold">{title} ชั้น {type}</div>
                <span style={{ height: "12.85px" , padding: "8px 4px", fontWeight: "bold" }} className=" status bg-white text-success whitespace-nowrap inline-flex items-center bg-success-soft text-[10.5px] font-medium px-1.5 py-0.5 rounded-full">
                    {/* correct icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6.75 6.75 9-13.5" />
                    </svg>
                    {status}
                </span>
            </div>
            <div className="context">
                <div style={{ fontSize: "24px", fontWeight: "bold" }} className="licensePlate">{licensePlate}</div>
            </div>
            <div className="footer flex flex-row gap-2 justify-center ">
                <Button onClick={() => { }} style={{fontSize: "13px", color: "var(--color-insurance-" + category + "-foreground)" }} ariaLabel="View Details" variant="outline" className="font-semibold">รายละเอียด</Button>
                <Button
                    onClick={() => { }}
                    style={{
                        padding: "6px 0px",
                        fontSize: "13px",
                        backgroundColor: themeColor("accent-500"),
                        color: themeColor(`foreground`),
                    }}
                    ariaLabel="แจ้งเคลม"
                    className="font-semibold"
                >
                    แจ้งเคลม
                </Button>
            </div>
        </div>
    )
}