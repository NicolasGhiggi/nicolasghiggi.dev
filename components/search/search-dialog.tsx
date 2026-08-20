"use client"

import {
    type FC,
    type ReactElement,
    useEffect,
    useMemo,
    useState,
} from "react"
import { SearchIcon } from "lucide-react"

import { Kbd } from "@/components/ui/kbd"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Source } from "@/types/source"
import { SearchList } from "@/components/search/search-list"

interface SearchDialogProps {
    children: ReactElement
}

const SearchDialog: FC<SearchDialogProps> = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [source, setSource] = useState<Source | null>(null)
    const [search, setSearch] = useState("")
    const sections = SearchList()

    const sources = useMemo(
        () => sections.flatMap((section) => section.commands),
        [sections]
    )

    const filteredSections = useMemo(() => {
        const value = search.trim().toLowerCase()

        if (!value) {
            return sections
        }

        return sections
            .map((section) => ({
                ...section,
                commands: section.commands.filter((command) =>
                    command.label.toLowerCase().includes(value)
                ),
            }))
            .filter((section) => section.commands.length > 0)
    }, [search, sections])

    const filteredSources = useMemo(
        () => filteredSections.flatMap((section) => section.commands),
        [filteredSections]
    )

    useEffect(() => {
        if (!open) {
            return
        }

        const executeSource = () => {
            if (!open || !source) {
                return
            }

            setOpen(false)
            source.action()
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                event.preventDefault()
                executeSource()
                return
            }

            if (event.key === "ArrowDown") {
                event.preventDefault()

                if (!filteredSources.length) {
                    return
                }

                const currentIndex = source
                    ? filteredSources.findIndex(
                        (item) => item.slug === source.slug
                    )
                    : -1

                const nextIndex =
                    currentIndex >= filteredSources.length - 1
                        ? 0
                        : currentIndex + 1

                setSource(filteredSources[nextIndex])
                return
            }

            if (event.key === "ArrowUp") {
                event.preventDefault()

                if (!filteredSources.length) {
                    return
                }

                const currentIndex = source
                    ? filteredSources.findIndex(
                        (item) => item.slug === source.slug
                    )
                    : 0

                const previousIndex =
                    currentIndex <= 0
                        ? filteredSources.length - 1
                        : currentIndex - 1

                setSource(filteredSources[previousIndex])
                return
            }

            if (event.key === "Escape") {
                event.preventDefault()
                setOpen(false)
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [open, source, filteredSources])

    useEffect(() => {
        const handleShortcut = (event: KeyboardEvent) => {
            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {
                event.preventDefault()
                setOpen((previous) => !previous)
            }
        }

        window.addEventListener("keydown", handleShortcut)

        return () => {
            window.removeEventListener("keydown", handleShortcut)
        }
    }, [])

    return (
        <Dialog
            open={open}
            onOpenChange={(value) => {
                setOpen(value)

                if (value) {
                    setSearch("")
                    setSource(sources[0] ?? null)
                }
            }}
        >
            <DialogTrigger render={children} />

            <DialogContent
                showCloseButton={false}
                className="gap-0 overflow-hidden rounded-2xl border-border/60 bg-muted p-2 sm:max-w-xl max-h-full"
            >
                <DialogHeader className="p-0">
                    <InputGroup className="h-11 border-0 bg-transparent shadow-none has-[[data-slot=input-group-control]:focus-visible]:border-transparent has-[[data-slot=input-group-control]:focus-visible]:ring-0">
                        <InputGroupAddon>
                            <SearchIcon className="size-4 text-muted-foreground" />
                        </InputGroupAddon>

                        <InputGroupInput
                            autoFocus
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            placeholder="Type a command or search..."
                            className="h-11 border-0 bg-transparent shadow-none focus-visible:ring-0"
                        />
                    </InputGroup>
                </DialogHeader>

                <div className="mt-1 rounded-xl border border-border/60 bg-background h-full max-h-72 overflow-y-auto scrollbar-none">
                    {filteredSections.length > 0 ? (
                        filteredSections.map((section) => (
                            <div key={section.slug}>
                                <div className="px-3 pb-2 pt-3">
                                    <span className="text-xs font-medium text-muted-foreground">
                                        {section.label}
                                    </span>
                                </div>

                                <div className="no-scrollbar overflow-y-auto px-1 pb-1">
                                    {section.commands.map((item) => (
                                        <SourceItem
                                            key={item.slug}
                                            source={item}
                                            selected={
                                                item.slug === source?.slug
                                            }
                                            setSource={setSource}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="px-3 py-8 text-center text-sm text-muted-foreground">
                            No results found.
                        </div>
                    )}
                </div>

                <DialogFooter className="flex-row items-center justify-between px-2 pb-0 pt-2">
                    <div className="flex items-center gap-1.5 text-sm">
                        <span>Go to page</span>
                        <Kbd className="rounded-sm bg-background">↵</Kbd>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

interface SourceItemProps {
    source: Source
    selected: boolean
    setSource: (source: Source) => void
}

const SourceItem: FC<SourceItemProps> = ({
                                             source,
                                             selected,
                                             setSource,
                                         }) => {
    const Icon = source.icon

    return (
        <div
            role="option"
            aria-selected={selected}
            onMouseEnter={() => setSource(source)}
            onClick={source.action}
            className={`
                group flex cursor-pointer items-center gap-1
                rounded-lg px-1.5 py-1
                text-sm
                transition-colors
                ${selected ? "bg-muted" : "hover:bg-muted/70"}
            `}
        >
            <div
                className={`
                    flex size-7 shrink-0 items-center justify-center
                    rounded-md
                    ${
                    selected
                        ? "text-foreground"
                        : "text-muted-foreground"
                }
                `}
            >
                <Icon className="size-4" />
            </div>

            <span
                className={
                    selected
                        ? "font-medium text-foreground"
                        : "text-foreground/90"
                }
            >
                {source.label}
            </span>

            <span className="ml-auto text-xs text-muted-foreground">
                {source.secondaryLabel}
            </span>
        </div>
    )
}

export { SearchDialog, SourceItem }