import { themeColor } from "../../../assets/ThemeColors";
import type { Lang } from "../../../models/common/language";

type ChangeLanguageProps = {
    isChecked: boolean;
    onChange: (language: Lang) => void;
};

export function ChangeLanguage({ isChecked, onChange }: ChangeLanguageProps) {

    return (
        <>
            <label
                style={{ backgroundColor: themeColor("surface")}}
                htmlFor="Toggle3"
                className="select-none inline-flex cursor-pointer items-center gap-1 rounded-full border-border border p-1 text-sm font-medium"
            >
                <input
                    id="Toggle3"
                    type="checkbox"
                    className="peer sr-only"
                    checked={isChecked}
                    onChange={(e) => onChange(e.target.checked ? "en" : "th")}
                />
                {/* TH: active เมื่อไม่ติ๊ก */}
                <span className="rounded-full bg-primary px-2.5 py-1 text-white transition peer-checked:bg-transparent peer-checked:text-content-secondary dark:peer-checked:text-gray-300">
                    TH
                </span>
                {/* EN: active เมื่อติ๊ก */}
                <span  className="rounded-full bg-transparent px-2.5 py-1 text-content-secondary transition peer-checked:bg-primary peer-checked:text-white dark:text-gray-300">
                    EN
                </span>
            </label>
        </>
    )
}