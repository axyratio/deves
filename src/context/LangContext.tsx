// context/LangContext.tsx
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang } from "../models/common/language";


type LangContextValue = {
    lang: Lang;
    setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(
        () => (localStorage.getItem("lang") as Lang | null) ?? "th"
    );

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const value = useMemo(() => ({ lang, setLang }), [lang]);

    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useLang must be used inside LangProvider");
    return ctx;
}