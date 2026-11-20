import { useLang } from "../../../context/LangContext";
import devesLogo from "../../../assets/deves-logo.png"
import { IconBagde } from "../../common/IconBagde/IconBagde";
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
import { Bell } from "lucide-react";
import { themeColor } from "../../../assets/ThemeColors";

type AppHeaderProps = {
    variant: "home" | "sub";
    title?: string;          // ใช้กับ variant "sub"
    username?: string;       // ใช้กับ variant "home"
    countBadge?: number;
};

export function AppHeader({ variant, title, username, countBadge = 0 }: AppHeaderProps) {
    const { lang, setLang } = useLang();

    return (
        <div className="flex gap-3 items-center justify-between px-[18px]  pt-4">
            {variant === "home" ? (
                <div className="flex-row flex justify-between w-full " >
                    <div className="flex items-center gap-3 justify-between">
                        <img src={devesLogo} alt="Deves Logo" className="w-10 h-10" />
                        <div>
                            <p className="text-xs">สวัสดี</p>
                            <h1 className="text-base font-bold">{username ?? "Guest ผู้ใช้งานใหม่"}</h1>
                        </div>
                    </div>
                    <div>
                        <IconBagde style={{ border: "solid 1px ", borderColor: themeColor("border") }} cardColor="surface" icon={<Bell size={22} />} countBadge={countBadge} isTextBagde={false} badgeColor="danger" />
                    </div>
                </div>

            ) : (
                <h1 className="text-base font-bold">{title}</h1>
            )}
            
            <div className="flex items-center gap-2 ">
                <ChangeLanguage isChecked={lang === "en"} onChange={setLang} />
            </div>
        </div>
    );
}