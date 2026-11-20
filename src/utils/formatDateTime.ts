// utils/formatDateTime.ts
const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Asia/Bangkok",
});
const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Bangkok",
});

export function formatDateTime(iso: string, separator = " - "): string {
    const d = new Date(iso);
    return `${dateFormatter.format(d)}${separator}${timeFormatter.format(d)} น.`;
}