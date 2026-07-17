import { ModifierKey, useEffect } from "react"

type Hotkey = {
    keys: string[]
    callback: () => void
}

const editableElementTags = ["INPUT", "TEXTAREA", "SELECT"]
const modifierKeys: Record<string, (event: KeyboardEvent) => boolean> = {
    alt: (e) => e.altKey,
    ctrl: (e) => e.ctrlKey,
    meta: (e) => e.metaKey,
    shift: (e) => e.shiftKey,
}

const isTypingTarget = (target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) {
        return false
    }

    return target.isContentEditable || editableElementTags.includes(target.tagName)
}

export function useHotKeys(hotkeys: Hotkey[]) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement

            if (isTypingTarget(target)) return

            const sortedHotkeys = [...hotkeys].sort(
                (a, b) => b.keys.length - a.keys.length
            )

            for (const { keys, callback } of sortedHotkeys) {
                const hasModifier = keys.some(
                    (key) => modifierKeys[key as ModifierKey] !== undefined
                )

                const match = keys.every((key) => {
                    const modifier = modifierKeys[key as ModifierKey]

                    if (modifier) {
                        return modifier(e)
                    }

                    return e.key.toLowerCase() === key.toLowerCase()
                })

                if (
                    !hasModifier &&
                    (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
                ) {
                    return false
                }

                if (match) {
                    e.preventDefault()
                    callback()
                    return
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [hotkeys])
}