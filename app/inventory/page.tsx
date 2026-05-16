import { DataTable } from "@/components/DataTable";
import { Badge } from "@/components/ui/badge";
import { getInventoryData } from "@/lib/api";
import type { InventoryItem } from "@/lib/types";

const statusVariant: Record<InventoryItem["status"], "success" | "warning" | "destructive"> = {
  Healthy: "success",
  Low: "warning",
  Critical: "destructive"
};

export default async function InventoryPage() {
  const data = await getInventoryData();

  return (
    <div className="space-y-6">
      <DataTable<InventoryItem>
        title="Inventory par levels"
        description="Stock position across housekeeping, F&B, minibar, and engineering"
        data={data.items}
        getRowKey={(item) => item.item}
        columns={[
          { header: "Item", accessor: "item" },
          { header: "Category", accessor: "category" },
          { header: "On hand", accessor: (item) => `${item.onHand.toLocaleString()} ${item.unit}`, className: "text-right" },
          { header: "Par", accessor: (item) => `${item.par.toLocaleString()} ${item.unit}`, className: "text-right" },
          {
            header: "Status",
            accessor: (item) => <Badge variant={statusVariant[item.status]}>{item.status}</Badge>
          }
        ]}
      />
    </div>
  );
}
