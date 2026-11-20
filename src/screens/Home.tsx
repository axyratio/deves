import { useState } from "react";
import { IconBagde } from "../component/common/IconBagde/IconBagde";
import { Car, FileCheck2, Home as HomeIcon, Heart, Plane, Shield, Phone, Video, ChevronRight, TriangleExclamationPoint, CarTaxiFront } from "lucide-react";

import { ClaimInsuranceCard, ClaimInsuranceSlider } from "../component/app/Card/ClaimInsuranceCard";
import { ClaimActionCard } from "../component/app/Card/ClaimActionCard";
import { themeColor } from "../assets/ThemeColors";
import { HorizontalCard } from "../component/app/Card/HorizontalCard";
import { Modal } from "../component/modal/Modal";
import { policyData } from "../mockData/policyData";
import { useNavigate } from "react-router-dom";

export function Home() {
    const policies = policyData.policyData; //mock data

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    // TODO: ย้ายไปไฟล์ mockData/claimCategories.ts
    const claimCategories = [
        { id: 'car-loss', title: 'รถยนต์\nค่าขาดประโยชน์', icon: <span className="font-bold text-lg">฿</span>, badge: 'คู่กรณี', badgeColor: 'danger' },
        { id: 'prb', title: 'พ.ร.บ.', icon: <FileCheck2 size={23} />, badge: 'เร็วๆ นี้', badgeColor: 'muted' },
        { id: 'property', title: 'ทรัพย์สิน', icon: <HomeIcon size={23} /> },
        { id: 'health', title: 'สุขภาพ\nและอุบัติเหตุ', icon: <Heart size={23} /> },
        { id: 'travel', title: 'การเดินทาง', icon: <Plane size={23} /> },
        { id: 'other', title: 'ประกันภัยอื่นๆ\nและสินไหมทั่วไป', icon: <Shield size={23} /> },
    ];

    return (
        <div className="flex flex-col gap-5">
            {/* modal */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="หัวข้อ" animation="slide" >
                <HorizontalCard variant="danger" icon={<TriangleExclamationPoint size={22} />} rightElement={<ChevronRight size={18} />}>
                    <p className="text-[16px] text-primary">แจ้งอุบัติเหตุฉุกเฉิน</p>
                </HorizontalCard>
                <HorizontalCard icon={<CarTaxiFront size={22} />} rightElement={<ChevronRight size={18} />}>
                    <p className="text-[16px] text-primary">แจ้งเคลมด้วยตนเอง</p>
                    <p className="text-[16px] text-alert-500">(แบบไม่มีคู่กรณี)</p>
                </HorizontalCard>
            </Modal>
            {/* 1. Header (TODO: แยกเป็น <HomeHeader /> ไปใส่ใน prop header ของ MobileLayout) */}
            <div className="flex flex-col gap-3">
                <ClaimInsuranceSlider>
                    {policies.map((policy) => (
                        <ClaimInsuranceCard
                            key={policy.policyNumber}
                            status={policy.policyStatus}
                            title="ประกันรถยนต์"
                            type={policy.insuranceType}
                            licensePlate={policy.licensePlate}
                            category="accident"
                            onClaim={() =>
                                navigate(`/accident/${encodeURIComponent(policy.policyNumber)}/term`)
                            }
                        />
                    ))}
                </ClaimInsuranceSlider>
            </div>

            {/* 2. Section เลือกประกันภัยที่ต้องการเคลม */}
            <section className="flex flex-col gap-3">
                <h2 className="text-base font-bold " style={{ color: themeColor("primary") }} >เลือกประกันภัยที่ต้องการเคลม</h2>

                {/* 2.1 การ์ดใหญ่ 2 ช่องบน */}
                <div style={{ gap: 12 }} className="grid grid-cols-2">
                    <ClaimActionCard
                        onClick={() => setIsOpen(true)}
                        variant="emergency"
                        title="แจ้งอุบัติเหตุฉุกเฉิน"
                        icon={<Car size={23} style={{ color: themeColor("surface") }} />}
                    />

                    <ClaimActionCard
                        variant="self"
                        title="แจ้งเคลมด้วยตนเอง"
                        subtitle="(แบบไม่มีคู่กรณี)"
                        icon={<Car size={23} style={{ color: themeColor("primary") }} />}
                        onClick={() => { }}
                    />
                </div>

                {/* 2.2 Grid 6 ช่องล่าง ใช้ IconBagde ที่มีอยู่แล้ว */}
                <div className="grid grid-cols-3 gap-2.5">
                    {claimCategories.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl p-3 flex flex-col items-center justify-start text-center gap-2 border border-border">
                            <IconBagde
                                icon={item.icon}
                                isTextBagde={Boolean(item.badge)}
                                textBadge={item.badge}
                                cardColor="accent-300"
                                badgeColor={item.badgeColor as any}
                            />
                            <span className="text-[15px] font-bold whitespace-pre-line" style={{ color: themeColor("primary") }} >
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Service Banners ด้านล่าง */}
            <section className="flex flex-col gap-3">
                <HorizontalCard
                    variant="yellow"
                    title="ช่วยเหลือฉุกเฉินบนท้องถนน"
                    subtitle="บริการ 24 ชั่วโมง"
                    icon={<span style={{ fontSize: 20 }}>🛻</span>}
                    rightElement={
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: themeColor("primary"),
                                color: themeColor("content-inverse"),
                            }}
                            className="rounded-full flex items-center justify-center"
                        >
                            <Phone size={18} />
                        </div>
                    }
                    onClick={() => { }}
                />

                <HorizontalCard
                    title="ปรึกษาแพทย์ออนไลน์ (Telemed)"
                    subtitle="ปรึกษาแพทย์ผ่านแอป BeDee"
                    icon={<Video size={22} style={{ color: themeColor("primary") }} />}
                    rightElement={
                        <ChevronRight size={20} style={{ color: themeColor("primary") }} />
                    }
                    onClick={() => { }}
                />
            </section>


        </div>
    );
}