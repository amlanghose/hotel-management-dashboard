import { ChartCard } from "@/components/ChartCard";
import { KpiGrid } from "@/components/KpiGrid";
import { getRevenueData } from "@/lib/api";

export default async function RevenuePage() {
  const data = await getRevenueData();

  return (
    <div className="space-y-6">
      <KpiGrid kpis={data.kpis} className="md:grid-cols-3 xl:grid-cols-3" />

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
