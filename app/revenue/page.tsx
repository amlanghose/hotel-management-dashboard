import { ChartCard } from "@/components/ChartCard";
import { KpiCard } from "@/components/KpiCard";
import { getRevenueData } from "@/lib/api";

export default async function RevenuePage() {
  const data = await getRevenueData();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {data.kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <ChartCard
          title="Monthly revenue"
          description="Total revenue trend with operating margin"
          type="bar"
          data={data.revenueTrend}
          yKey="revenue"
          secondaryKey="margin"
        />
        <ChartCard
          title="Revenue segments"
          description="Rooms, F&B, events, and ancillary mix"
          type="pie"
          data={data.revenueSegments}
        />
      </section>
    </div>
  );
}
