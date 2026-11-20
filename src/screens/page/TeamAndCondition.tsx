import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { IconBagde } from "../../component/common/IconBagde/IconBagde";
import { Button } from "../../component/common/Button/Button";
import { useNavigate, useParams } from "react-router-dom";

export function TermAndCondition() {
    const [accepted, setAccepted] = useState(false);
    const { policyNumber } = useParams();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col flex-1 gap-4 justify-between ">
            <div >
                <div className="flex flex-row items-center gap-3">
                    <IconBagde isTextBagde={false} icon={<ShieldCheck size={22} />} />
                    <p className="text-[19px] leading-snug text-primary">
                        ข้อกำหนดและการรับรองข้อมูลการแจ้งเคลม
                    </p>
                </div>

                <div className="rounded-lg border border-border bg-surface p-4">
                    <p className="text-[13.5px] leading-relaxed text-content-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore
                        maxime hic accusantium ratione, vel deserunt laborum cumque aspernatur odio.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio maiores, dolores delectus praesentium velit eos cupiditate sequi similique reiciendis officia veniam? Repudiandae ea, ipsam, non nemo dolore velit aut placeat eligendi eveniet quisquam eius. Reprehenderit esse iure sapiente est labore ab dicta repudiandae? Ad nihil eius vero doloribus molestias dolore in quidem fugiat voluptate harum esse alias numquam vel possimus ea ipsum accusamus, nam ex atque id est? Aspernatur asperiores sunt voluptatibus doloribus labore sed sit suscipit odit voluptatem exercitationem, doloremque at obcaecati quam molestiae quos veniam odio voluptatum soluta expedita neque accusamus fugiat explicabo! Odio et molestias architecto esse!

                    </p>
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-accent-500 bg-accent-300 p-4 ">
                    <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={accepted}
                        onChange={(e) => setAccepted(e.target.checked)}
                    />

                    <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#d1c5b1] bg-white
                               text-transparent transition-colors
                               peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white
                               peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ring"
                    >
                        <Check size={14} strokeWidth={3} />
                    </span>

                    <span className="">
                        <p className="text-[14px] font-bold leading-snug text-primary" >
                            ข้าพเจ้าได้อ่าน และเข้าใจ โดยขอรับรองว่าข้อมูลการแจ้งเคลมเป็นความจริงทุกประการ
                        </p>
                    </span>
                </label>
            </div>
            <div>
                <Button
                    className="py-3"
                    disabled={!accepted}
                    variant="yellow"
                    onClick={() => navigate(`/accident/${encodeURIComponent(policyNumber ?? "")}/form`)}
                >
                    ยอมรับและดำเนินการต่อ
                </Button>
            </div>
        </div>
    );
}