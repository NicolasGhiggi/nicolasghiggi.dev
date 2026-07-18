"use client"

import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"
import { type FC, ReactElement, useState } from "react"

import { Kbd } from "@/components/ui/kbd"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Dialog , DialogTrigger, DialogContent, DialogHeader , DialogFooter} from "@/components/ui/dialog"

import { useIsMobile } from "@/hooks/use-mobile"
import { useHotKeys } from "@/hooks/use-hot-keys"

import { Source } from "@/types/source"

interface SearchDialogProps {
    render: ReactElement
}

const SearchDialog: FC<SearchDialogProps> = ({ render }) => {
    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const [source, setSource] = useState<Source | null>(null)
    const [section, setSection] = useState<string | null>(null)
    const [search, setSearch] = useState<string>("")

    const sources: Source[] = [
        {
            slug: "projects",
            label: "Projects",
            section: "Menu",
            secondaryLabel: "View my projects",
            icon: SearchIcon,
            action: () => router.push("/projects"),
        },
    ]

    const executeSource = () => {
        if (source) {
            source.action()
        }
    }

    useHotKeys([
        {
            keys: ["ctrl", "k"],
            callback: () => setOpen(!open),
        },
        {
            keys: ["enter"],
            callback: executeSource,
        }
    ])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={render} />
            <DialogContent showCloseButton={false}>
                <DialogHeader>
                    <InputGroup>
                        <InputGroupInput 
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 scroll-fade">
                    {sources.map((s) => (
                        <SourceItem 
                            key={s.slug} 
                            source={s} 
                            setSource={setSource} 
                            selected={s === source}
                        />
                    ))}
                </div>
                <DialogFooter>
                    Go to: {section || "None"} <Kbd>Enter</Kbd>
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

const SourceItem: FC<SourceItemProps> = ({ source, selected, setSource }) => {
    return (
        <div
            onClick={source.action}
            onMouseEnter={() => setSource(source)}
            className={`flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm transition-colors ${selected ? "bg-accent" : "hover:bg-accent"}`}
        >
            <source.icon />
            <span>{source.label}</span>
        </div>
    )
}

export { SearchDialog, SourceItem }