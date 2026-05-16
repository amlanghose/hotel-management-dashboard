import type { Kpi } from "@/lib/types";
import { cn } from "@/lib/utils";
import { KpiCard } from "@/components/KpiCard";

type KpiGridProps = {
  kpis: Kpi[];
  className?: string;
};

export function KpiGrid({ kpis, className }: KpiGridProps) {
  return (
    <section className={cn("grid gap-4 md:grid-cols-2 xl:grid-cols-4", className)}>
      {kpis.map((kpi) => (
        <KpiCard key={kpi.label} kpi={kpi} />
      ))}
    </section>
  );
}
