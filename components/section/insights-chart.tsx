"use client"

import { curveMonotoneX } from "@visx/curve";
import Grid from "@/components/charts/grid"
import XAxis from "@/components/charts/x-axis"
import { ChartTooltip } from "@/components/charts/tooltip"
import LineChart, { Line } from "@/components/charts/line-chart"

type ISODateString = string
type InsightsChartProps = {
    data: {
        date: ISODateString
        unique_visitors: number
        total_sessions: number
    }[]
}

const InsightsChart = ({ data }: InsightsChartProps) => {
    const primaryColor = "var(--chart-line-primary, #2563eb)"
    const secondaryColor = "var(--chart-line-secondary, #93c5fd)"

    if (data && data.length === 0) {
        return (
            <div className="grid aspect-2/1 w-full place-content-center sm:aspect-3/1">
                <p className="text-xs text-muted-foreground">
                    No insights available for this period.
                </p>
            </div>
        )
    }

    return (
        <figure className="m-0">
            <LineChart data={data}>
                <Grid horizontal />

                <Line
                    dataKey="total_screen_views"
                    fadeEdges
                    strokeWidth={2}
                    stroke={primaryColor}
                    curve={curveMonotoneX}
                />

                <Line
                    dataKey="unique_visitors"
                    fadeEdges
                    strokeWidth={1.5}
                    stroke={secondaryColor}
                    curve={curveMonotoneX}
                />

                <XAxis />

                <ChartTooltip
                    rows={(point) => [
                        {
                            label: "Views",
                            value: Number(point.total_screen_views),
                            color: primaryColor,
                        },
                        {
                            label: "Unique visitors",
                            value: Number(point.unique_visitors),
                            color: secondaryColor,
                        },
                    ]}
                />
            </LineChart>
        </figure>
    )
}

export default InsightsChart