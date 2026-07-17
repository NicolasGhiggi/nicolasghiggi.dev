const getGreeting = () => {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) {
        return "Good morning"
    }

    if (hour >= 12 && hour < 18) {
        return "Good afternoon"
    }

    if (hour >= 18 && hour < 22) {
        return "Good evening"
    }

    return "Good night"
}

export { getGreeting }