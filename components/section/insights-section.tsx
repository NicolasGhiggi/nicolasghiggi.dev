import { format } from "date-fns"

import { formatDuration } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"

import {
    Metric,
    MetricChange,
    MetricLabel,
    MetricValue,
} from "@/components/ui/metric"

import { getInsights } from "@/data/insights"
import InsightsChart from "./insights-chart"

const InsightsSection = async () => {
    const data = await getInsights()

    if (data === null) {
        return null
    }

    const metrics = [
        {
            label: "Unique visitors",
            change: data.changes.unique_visitors,
            value: data.summary.unique_visitors.toLocaleString(),
        },
        {
            label: "Sessions",
            change: data.changes.total_sessions,
            value: data.summary.total_sessions.toLocaleString(),
        },
        {
            label: "Views",
            change: data.changes.total_screen_views,
            value: data.summary.total_screen_views.toLocaleString(),
        },
        {
            label: "Session duration",
            change: data.changes.avg_session_duration,
            value: formatDuration(data.summary.avg_session_duration),
        },
    ]

    return (
        <Card className="w-full max-w-3xl">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardDescription className="text-xs text-muted-foreground/80">
                    {format(new Date(data.startDate), "MMM d, yyyy")} –{" "}
                    {format(new Date(data.endDate), "MMM d, yyyy")}
                </CardDescription>

                <div className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    <span>Analytics</span>
                </div>
            </CardHeader>

            <CardContent className="p-0">
                <dl className="grid grid-cols-2 divide-x px-2 divide-border/40 md:grid-cols-4">
                    {metrics.map((metric) => (
                        <Metric
                            key={metric.label}
                            className="flex flex-col justify-between"
                        >
                            <MetricLabel className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                                <span>{metric.label}</span>

                                <MetricChange value={metric.change} />
                            </MetricLabel>

                            <MetricValue className="mt-2 font-mono text-2xl font-semibold tracking-tight">
                                {metric.value}
                            </MetricValue>
                        </Metric>
                    ))}
                </dl>

                <InsightsChart data={data.series} />

                <figcaption className="px-6 py-2.5 text-center text-xs text-muted-foreground">
                    Daily unique visitors and sessions. Powered by{" "}
                    <a
                        href="https://openpanel.dev"
                        className="font-medium text-foreground transition-colors hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        OpenPanel
                    </a>
                </figcaption>
            </CardContent>
        </Card>
    )
}

export { InsightsSection }