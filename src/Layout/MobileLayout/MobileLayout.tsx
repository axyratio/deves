import type { ReactNode } from "react";

export type MobileLayoutProps = {
    children: ReactNode;
    header?: ReactNode;      // แถบบน (ติดด้านบนเมื่อเลื่อน)
    footer?: ReactNode;      // แถบล่าง เช่น เมนูนำทาง (ติดด้านล่างเสมอ)
    className?: string;      // เพิ่ม class ให้พื้นที่เนื้อหา เช่น "gap-4"
};

export function MobileLayout({ children, header, footer, className = "" }: MobileLayoutProps) {
    return (
        // พื้นหลังนอกหน้าจอมือถือ (เห็นเฉพาะตอนเปิดบนคอมหรือแท็บเล็ต)
        <div className="min-h-dvh bg-muted">
            {/* กรอบหน้าจอมือถือ กว้างสุด 448px อยู่กึ่งกลาง */}
            <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col bg-background text-foreground shadow-xl">
                {header && (
                    <header className="sticky top-0 z-20 ">
                        {header}
                    </header>
                )}

                
                <main className={`flex flex-1 flex-col p-4 ${className}`}>
                    {children}
                </main>

                {footer && (
                    <footer className="sticky bottom-0 z-20 border-t border-border bg-surface pb-[env(safe-area-inset-bottom)]">
                        {footer}
                    </footer>
                )}
            </div>
        </div>
    );
}