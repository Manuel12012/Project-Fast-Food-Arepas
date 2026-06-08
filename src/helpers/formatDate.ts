// src/utils/date.ts

export const formatDate = (
    date: string,
    locale = "es-PE",
    timeZone = "America/Lima"
) => {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone,
    }).format(new Date(date))
}