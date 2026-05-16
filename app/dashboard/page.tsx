import { AlertBadge } from "@/components/AlertBadge";
import { ChartCard } from "@/components/ChartCard";
import { DataTable } from "@/components/DataTable";
import { KpiCard } from "@/components/KpiCard";
import { Badge } from "@/components/ui/badge";
import { getDashboardData } from "@/lib/api";
import type { HotelAlert, Room } from "@/lib/types";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ChartCard
          title="Occupancy and ADR"
          description="Seven-day operating pulse"
          type="line"
          data={data.occupancyTrend}
          yKey="occupancy"
          secondaryKey="adr"
        />
        <ChartCard
          title="Revenue mix"
          description="Share of total property revenue"
          type="pie"
          data={data.revenueSegments}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <DataTable<Room>
          title="Priority rooms"
          description="Rooms requiring front office attention"
          data={data.rooms}
          getRowKey={(room) => room.room}
          columns={[
            { header: "Room", accessor: "room" },
            { header: "Type", accessor: "type" },
            {
              header: "Status",
              accessor: (room) => (
                <Badge variant={room.status === "Occupied" ? "success" : "secondary"}>
                  {room.status}
                </Badge>
              )
            },
            { header: "Guest", accessor: "guest" },
            { header: "Rate", accessor: (room) => currency.format(room.rate), className: "text-right" }
          ]}
        />
        <DataTable<HotelAlert>
          title="Active alerts"
          description="Highest-impact tasks across departments"
          data={data.alerts}
          getRowKey={(alert) => alert.id}
          columns={[
            { header: "ID", accessor: "id" },
            { header: "Alert", accessor: "title" },
            { header: "Area", accessor: "area" },
            { header: "Severity", accessor: (alert) => <AlertBadge severity={alert.severity} /> }
          ]}
        />
      </section>
    </div>
  );
}
