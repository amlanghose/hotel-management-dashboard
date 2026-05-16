"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import type { ChartPoint, RevenueSegment } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ChartCardProps =
  | {
      title: string;
      description: string;
      type: "area" | "bar" | "line";
      data: ChartPoint[];
      xKey?: keyof ChartPoint;
      yKey: keyof ChartPoint;
      secondaryKey?: keyof ChartPoint;
    }
  | {
      title: string;
      description: string;
      type: "pie";
      data: RevenueSegment[];
      xKey?: never;
      yKey?: never;
      secondaryKey?: never;
    };

export function ChartCard(props: ChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          {props.type === "area" ? (
            <AreaChart data={props.data}>
              <defs>
                <linearGradient id={`${String(props.yKey)}Gradient`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0.03} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={props.xKey ?? "name"} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={props.yKey}
                stroke="var(--color-chart-1)"
                fill={`url(#${String(props.yKey)}Gradient)`}
                strokeWidth={2}
              />
            </AreaChart>
          ) : props.type === "bar" ? (
            <BarChart data={props.data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={props.xKey ?? "name"} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Bar dataKey={props.yKey} fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
              {props.secondaryKey ? (
                <Bar dataKey={props.secondaryKey} fill="var(--color-chart-4)" radius={[6, 6, 0, 0]} />
              ) : null}
            </BarChart>
          ) : props.type === "line" ? (
            <LineChart data={props.data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={props.xKey ?? "name"} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={props.yKey}
                stroke="var(--color-chart-3)"
                strokeWidth={3}
                dot={false}
              />
              {props.secondaryKey ? (
                <Line
                  type="monotone"
                  dataKey={props.secondaryKey}
                  stroke="var(--color-chart-5)"
                  strokeWidth={3}
                  dot={false}
                />
              ) : null}
            </LineChart>
          ) : (
            <PieChart>
              <Tooltip />
              <Pie data={props.data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={105} paddingAngle={4}>
                {props.data.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
