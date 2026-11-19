import { useState } from "react";
import { ChangeLanguage } from "../component/app/ChangeLanguage/ChangeLanguage";
import { IconBagde } from "../component/common/IconBagde/IconBagde";
import { Bell, Car, FileCheck2, Home as HomeIcon, Heart, Plane, Shield, Phone, Video, ChevronRight } from "lucide-react";
import unionIcon from "../assets/icon/unionIcon.svg";

import { ClaimInsuranceCard } from "../component/app/Card/ClaimInsuranceCard";
import { policyData } from "../mockData/policyData";
import { DetailCard } from "../component/app/Card/DetailCard";
import devesLogo from "../assets/deves-logo.png";
import { ClaimActionCard } from "../component/app/Card/ClaimActionCard";
import { themeColor } from "../assets/ThemeColors";
import { HorizontalCard } from "../component/app/Card/HorizontalCard";

export function Home() {
    const [language, setLanguage] = useState('th');

    // TODO: ย้ายไปไฟล์ mockData/claimCategories.ts
    const claimCategories = [
        { id: 'car-loss', title: 'รถยนต์\nค่าขาดประโยชน์', icon: <span className="font-bold text-lg">฿</span>, badge: 'คู่กรณี', badgeColor: 'danger' },
        { id: 'prb', title: 'พ.ร.บ.', icon: <FileCheck2 size={22} />, badge: 'เร็วๆ นี้', badgeColor: 'muted' },
        { id: 'property', title: 'ทรัพย์สิน', icon: <HomeIcon size={22} /> },
        { id: 'health', title: 'สุขภาพ\nและอุบัติเหตุ', icon: <Heart size={22} /> },
        { id: 'travel', title: 'การเดินทาง', icon: <Plane size={22} /> },
        { id: 'other', title: 'ประกันภัยอื่นๆ\nและสินไหมทั่วไป', icon: <Shield size={22} /> },
    ];

    return (
        <div className="flex flex-col gap-5">
            {/* 1. Header (TODO: แยกเป็น <HomeHeader /> ไปใส่ใน prop header ของ MobileLayout) */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={devesLogo} alt="Deves Logo" className="w-10 h-10" />
                    <div>
                        <p className="text-xs " style={{ color: themeColor("conte-secondary")}}>สวัสดี</p>
                        <h1 className="text-base font-bold " style={{ color: themeColor("primary")}}>ผู้ใช้งาน Guest</h1>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <IconBagde icon={<Bell size={20} />} isTextBagde={false} cardColor="white" badgeColor="danger" />
                    <ChangeLanguage isChecked={language === 'en'} onChange={(lang) => setLanguage(lang)} />
                </div>
            </div>

            {/* 2. Section เลือกประกันภัยที่ต้องการเคลม */}
            <section className="flex flex-col gap-3">
                <h2 className="text-base font-bold " style={{ color: themeColor("primary")}} >เลือกประกันภัยที่ต้องการเคลม</h2>

                {/* 2.1 การ์ดใหญ่ 2 ช่องบน */}
                <div style={{ gap: 12 }} className="grid grid-cols-2">
                    <ClaimActionCard
                        variant="emergency"
                        title="แจ้งอุบัติเหตุฉุกเฉิน"
                        icon={<Car size={24} style={{ color: themeColor("surface") }} />}
                        onClick={() => { }}
                    />

                    <ClaimActionCard
                        variant="self"
                        title="แจ้งเคลมด้วยตนเอง"
                        subtitle="(แบบไม่มีคู่กรณี)"
                        icon={<Car size={24} style={{ color: themeColor("primary") }} />}
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
                            <span className="text-xs font-bold whitespace-pre-line" style={{ color: themeColor("primary")}} >
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Service Banners ด้านล่าง */}
            <section className="flex flex-col gap-3">
                <HorizontalCard
                    variant="highlight"
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

            {/* Component เดิม */}
            {/* <ClaimInsuranceCard type="1" title="ประกันภัยรถยนต์" status="คุ้มครอง" licensePlate="กข 1234" category="car" /> */}
            {/* <DetailCard data={policyData} /> */}
            {/* <ClaimTrackingCard /> */}
        </div>
    );
}