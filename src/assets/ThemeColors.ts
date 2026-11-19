/**
 * แปลง "ชื่อสีในธีม" เป็นค่า CSS ที่อ้างตัวแปรใน colors.css
 * ไม่มีค่าสีอยู่ในไฟล์นี้ — แก้สีที่ colors.css ที่เดียว
 *
 *   themeColor("brand-50")  -> var(--color-brand-50)   (palette มีเฉด)
 *   themeColor("primary")   -> var(--primary)          (semantic, ตามโหมดสว่าง/มืด)
 */
export type ThemeColorName = string;

export function themeColor(name: ThemeColorName): string {
    const isPaletteShade = /-\d+$/.test(name);
    return isPaletteShade ? `var(--color-${name})` : `var(--${name})`;
}

/** สีตัวอักษรคู่กับพื้น: semantic มี --xxx-foreground, palette ใช้ค่า fallback */
export function themeForeground(name: ThemeColorName, fallback = "#ffffff"): string {
    const isPaletteShade = /-\d+$/.test(name);
    return isPaletteShade ? fallback : `var(--${name}-foreground, ${fallback})`;
}