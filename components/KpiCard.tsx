import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

import type { Kpi } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type KpiCardProps = {
  kpi: Kpi;
};

const trendIcon = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  neutral: ArrowRight
};

export function KpiCard({ kpi }: KpiCardProps) {
  const Icon = kpi.icon;
  const TrendIcon = trendIcon[kpi.trend];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.label}</CardTitle>
        <div className="rounded-lg bg-secondary p-2">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{kpi.value}</div>
        <p
          className={cn(
            "mt-2 flex items-center gap-1 text-xs",
            kpi.trend === "up" && "text-emerald-600",
            kpi.trend === "down" && "text-rose-600",
            kpi.trend === "neutral" && "text-muted-foreground"
          )}
        >
          <TrendIcon className="h-3.5 w-3.5" />
          {kpi.change}
        </p>
      </CardContent>
    </Card>
  );
}
