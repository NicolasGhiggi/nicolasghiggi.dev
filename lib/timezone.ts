const getTimezoneInfo = (userTimezone: string) => {
    const now = new Date()

    const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: userTimezone,
    })

    const time = formatter.format(now)

    const getOffset = (timeZone: string) => {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone,
            timeZoneName: "shortOffset",
        })
            .formatToParts(now)
            .find((part) => part.type === "timeZoneName")?.value

        const match = parts?.match(/GMT([+-]\d{1,2})(?::(\d{2}))?/)
        if (!match) return 0

        const hours = Number(match[1])
        const minutes = Number(match[2] ?? 0)

        return hours + minutes / 60
    }

    const viewerOffset = getOffset(Intl.DateTimeFormat().resolvedOptions().timeZone)
    const userOffset = getOffset(userTimezone)

    const diff = userOffset - viewerOffset

    let relative = "same time"
    if (diff > 0) relative = `${diff}h ahead`
    else if (diff < 0) relative = `${Math.abs(diff)}h behind`

    return {
        display: `${time} // ${relative}`,
        time: time,
        relative: relative,
    }
}

export { getTimezoneInfo }