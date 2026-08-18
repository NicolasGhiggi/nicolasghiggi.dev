import {
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table"
import { CERTIFICATIONS } from "@/data/certifications"
import { IconContainer } from "@/components/ui/icon-container"
import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"
import { ArrowUpRight } from "lucide-react"

const CertificationsSection = () => {
    return (
        <section className="w-full max-w-3xl">
            <h2 className="sr-only">Certifications</h2>

            <Card className="overflow-hidden py-0">
                <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            {CERTIFICATIONS.map((certification, idx) => (
                                <TableRow
                                    key={idx}
                                    className="group border-b last:border-b-0 cursor-pointer"
                                >
                                    {/* Icon */}
                                    <TableCell className="w-16 py-5 pl-5 pr-2">
                                        <IconContainer
                                            icon={certification.icon}
                                            className="size-10"
                                            iconClassName="size-5"
                                        />
                                    </TableCell>

                                    {/* Content */}
                                    <TableCell className="py-5 px-3">
                                        <div className="flex flex-col gap-1">
                                            <p className="font-medium leading-snug">
                                                {certification.name}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                                                <span>
                                                    {certification.issuer}
                                                </span>

                                                <span className="text-muted-foreground/40">
                                                    •
                                                </span>

                                                <span>
                                                    {format(
                                                        certification.date,
                                                        "MMM yyyy"
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    {/* Arrow */}
                                    <TableCell className="w-12 py-5 pl-2 pr-5 text-right">
                                        <ArrowUpRight
                                            className="ml-auto size-4 text-muted-foreground transition-transform duration-200 group-hover:text-foreground"
                                        />
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

export { CertificationsSection }