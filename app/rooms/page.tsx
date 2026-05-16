import { ChartCard } from "@/components/ChartCard";
import { DataTable } from "@/components/DataTable";
import { KpiCard } from "@/components/KpiCard";
import { Badge } from "@/components/ui/badge";
import { getRoomsData } from "@/lib/api";
import type { Room, RoomStatus } from "@/lib/types";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const statusVariant: Record<RoomStatus, "success" | "secondary" | "warning" | "destructive"> = {
  Occupied: "success",
  Vacant: "secondary",
  Cleaning: "warning",
  Maintenance: "destructive"
};

export default async function RoomsPage() {
  const data = await getRoomsData();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {data.kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </section>

      <ChartCard
        title="Room occupancy"
        description="Occupancy and rate by day"
        type="area"
        data={data.occupancyTrend}
        yKey="occupancy"
      />

      <DataTable<Room>
        title="Room board"
        description="Live room status with assigned guest and nightly rate"
        data={data.rooms}
        getRowKey={(room) => room.room}
        columns={[
          { header: "Room", accessor: "room" },
          { header: "Type", accessor: "type" },
          { header: "Floor", accessor: "floor" },
          {
            header: "Status",
            accessor: (room) => <Badge variant={statusVariant[room.status]}>{room.status}</Badge>
          },
          { header: "Guest", accessor: "guest" },
          { header: "Rate", accessor: (room) => currency.format(room.rate), className: "text-right" }
        ]}
      />
    </div>
  );
}
