import { AlertBadge } from "@/components/AlertBadge";
import { DataTable } from "@/components/DataTable";
import { getAlertsData } from "@/lib/api";
import type { HotelAlert } from "@/lib/types";

export default async function AlertsPage() {
  const data = await getAlertsData();

  return (
    <div className="space-y-6">
      <DataTable<HotelAlert>
        title="Alert center"
        description="Operational exceptions routed to department owners"
        data={data.alerts}
        getRowKey={(alert) => alert.id}
        columns={[
          { header: "ID", accessor: "id" },
          { header: "Title", accessor: "title" },
          { header: "Area", accessor: "area" },
          { header: "Owner", accessor: "owner" },
          { header: "Created", accessor: "createdAt" },
          { header: "Severity", accessor: (alert) => <AlertBadge severity={alert.severity} /> }
        ]}
      />
    </div>
  );
}
