'use client'

import { H2 } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import SKILLS from "@/data/skills"
import { Card, CardContent } from "../ui/card"

const StackSection = () => {
    return (
        <section className="w-full max-w-3xl flex flex-col mx-auto gap-4">
            <H2 className="sr-only">Stack</H2>
            <Card>
                <CardContent>
                    <Table>
                        <TableBody>
                            {SKILLS.stack.map((stack, index) => (
                                <TableRow
                                    key={stack.name}
                                    className="block hover:bg-transparent md:table-row"
                                >
                                    <TableCell className="block w-full font-heading align-top md:table-cell md:w-40">
                                        <div className="flex gap-3 py-2">
                                            <span className="font-mono text-sm text-muted-foreground">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="font-medium">
                                                {stack.name}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell className="block w-full md:table-cell">
                                        <div className="flex flex-wrap gap-2">
                                            {stack.items.map((item) => (
                                                <Badge
                                                    key={item.name}
                                                    variant="outline"
                                                    className="h-7 gap-1.5 px-3 transition-colors hover:bg-accent cursor-pointer"
                                                >
                                                    <item.icon
                                                        size={14}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </section>
    )
}

export { StackSection }