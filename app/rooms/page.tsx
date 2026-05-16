import { ChartCard } from "@/components/ChartCard";
import { DataTable } from "@/components/DataTable";
import { KpiGrid } from "@/components/KpiGrid";
import { Badge } from "@/components/ui/badge";
import { getRoomsData } from "@/lib/api";
import { formatCurrency } from "@/lib/formatters";
import { roomStatusVariant } from "@/lib/status";
import type { Room } from "@/lib/types";

export default async function RoomsPage() {
  const data = await getRoomsData();

  return (
    <div className="space-y-6">
      <KpiGrid kpis={data.kpis} className="md:grid-cols-3 xl:grid-cols-3" />

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
            accessor: (room) => <Badge variant={roomStatusVariant[room.status]}>{room.status}</Badge>
          },
          { header: "Guest", accessor: "guest" },
          { header: "Rate", accessor: (room) => formatCurrency(room.rate), className: "text-right" }
        ]}
      />
    </div>
  );
}
