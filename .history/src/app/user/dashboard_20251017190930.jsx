'use client';

import { Button } from "@/components/ui/button";
"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}


export default function Dashboard({setBoard}){
    return(
        <>
            <div onClick={() => { setBoard(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <div className="w-[30rem] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-md backdrop-blur-md p-4 flex flex-col gap-4">
                <h1 className="text-[2rem] text-blue-800 font-bold">DASHBOARD</h1>
                <div className="flex flex-row items-center justify-between w-[100%]">
                    <input
                    className="rounded-full w-[50%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                    required
                    type="text"
                    placeholder="Name"
                />
                <input
                    className="rounded-full w-[50%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                    required
                    type="email"
                    placeholder="Email"
                />
                </div>
                <div className="w-[100%] h-[5rem] border-2 border-blue-800 p-2 rounded-sm">No Analytics yet!</div>
                <Button className="bg-red-800 px-4 py-2" size="icon" variant="outline">Logout</Button>
            </div>
        </>
    )
}