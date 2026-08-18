import { formatDuration } from "@/lib/utils"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import Grid from "@/components/charts/grid"
import { Skeleton } from "@/components/ui/skeleton"
import { ChartTooltip } from "@/components/charts/tooltip"
import LineChart, { Line } from "@/components/charts/line-chart"
import { Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card"
import { Metric, MetricChange, MetricLabel, MetricValue } from "@/components/ui/matric"

import { getInsights } from "@/data/insights"

const InsightsSection = async () => {
    const data = await getInsights()

    if (data === null) {
        return null
    }

    return (
        <Card className="w-full max-w-3xl">
            <CardHeader>
                <CardDescription>
                    ({format(new Date(data.startDate), "dd.MM")} –{" "}
                    {format(new Date(data.endDate), "dd.MM")})
                </CardDescription>
            </CardHeader>
            <CardContent className="relative">
                <dl className="grid grid-cols-2 md:grid-cols-4 divide-x">
                    <Metric>
                        <MetricLabel>
                            Unique visitors
                            <MetricChange value={data.changes.unique_visitors} />
                        </MetricLabel>
                        <MetricValue>
                            {data.summary.unique_visitors.toLocaleString()}
                        </MetricValue>
                    </Metric>

                    <Metric>
                        <MetricLabel>
                            Sessions
                            <MetricChange value={data.changes.total_sessions} />
                        </MetricLabel>
                        <MetricValue>
                            {data.summary.total_sessions.toLocaleString()}
                        </MetricValue>
                    </Metric>

                    <Metric>
                        <MetricLabel>
                            Views
                            <MetricChange value={data.changes.total_screen_views} />
                        </MetricLabel>
                        <MetricValue>
                            {data.summary.total_screen_views.toLocaleString()}
                        </MetricValue>
                    </Metric>

                    <Metric>
                        <MetricLabel>
                            Session duration
                            <MetricChange value={data.changes.avg_session_duration} />
                        </MetricLabel>
                        <MetricValue>
                            {formatDuration(data.summary.avg_session_duration)}
                        </MetricValue>
                    </Metric>
                </dl>

                <figure>
                    {data.series.length > 0 ? (
                        <LineChart
                            className={cn(
                                "sm:aspect-3/1!",
                                "[--chart-1:var(--color-chart-1)] [--chart-2:var(--color-chart-2)] [--chart-3:var(--color-chart-3)] [--chart-4:var(--color-chart-4)] [--chart-5:var(--color-chart-5)]",
                            )}
                            data={data.series}
                            margin={{ top: 16, right: 16, bottom: 40, left: 16 }}
                        >
                            <Grid horizontal />
                            <Line
                                dataKey="total_sessions"
                                stroke="var(--chart-2)"
                                strokeWidth={2}
                            />
                            <Line
                                dataKey="unique_visitors"
                                stroke="var(--chart-1)"
                                strokeWidth={2}
                            />
                            <ChartTooltip
                                rowLabels={{
                                    total_sessions: "Sessions",
                                    unique_visitors: "Unique Visitors",
                                }}
                            />
                        </LineChart>
                    ) : (
                        <div className="grid aspect-2/1 w-full place-content-center sm:aspect-3/1">
                            <p className="text-muted-foreground">No insights available.</p>
                        </div>
                    )}

                    <figcaption className="screen-line-top px-4 py-3 text-center text-sm text-balance">
                        Daily unique visitors and sessions. Source:{" "}
                        <a
                            href="https://openpanel.dev"
                            className="link-underline"
                            target="_blank"
                            rel="noopener"
                        >
                            OpenPanel
                        </a>
                        .
                    </figcaption>
                </figure>
            </CardContent>
        </Card>
    )
}

export { InsightsSection }