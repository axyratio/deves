import { matchPath, Outlet, useLocation } from "react-router-dom";
import { MobileLayout } from "../MobileLayout/MobileLayout";
import { BottomNav } from "../../component/app/BottomNav/BottomNav";
import { AppHeader } from "../../component/app/HeaderNav/AppHeader";

type PageConfig = {
    path: string;            // pattern เหมือนที่ใช้ใน <Route path=...>
    title?: string;
    showBottomNav: boolean;
};

const PAGES: PageConfig[] = [
    // 4 หน้าหลัก: แสดงเมนูล่าง (ปรับ path ให้ตรงของจริง)
    { path: "/", showBottomNav: true },
    // { path: "/claims", title: "ติดตามเคลม", showBottomNav: true },
    { path: "/claims/:claimId", title: "สถานะการเคลม", showBottomNav: false },
    // ...อีก 2 หน้าหลัก

    // หน้าย่อยใน flow: ไม่แสดงเมนูล่าง
    { path: "/accident", title: "แจ้งอุบัติเหตุ", showBottomNav: false },
    { path: "/accident/:policyNumber/term", title: "ข้อกำหนดและเงื่อนไข", showBottomNav: false },
    { path: "/accident/:policyNumber/form", title: "แจ้งอุบัติเหตุฉุกเฉิน", showBottomNav: false },
];

export function AppLayout() {
    const { pathname } = useLocation();

    const page = PAGES.find((p) => matchPath({ path: p.path, end: true }, pathname));
    const isHome = pathname === "/";

    return (
        <MobileLayout
            header={
                <AppHeader
                    variant={isHome ? "home" : "sub"}
                    title={page?.title}
                    username="Kittiphong"
                    countBadge={9}
                />
            }
            footer={page?.showBottomNav ? <BottomNav /> : undefined}
        >
            <Outlet />
        </MobileLayout>
    );
}