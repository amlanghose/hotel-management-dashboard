import { DataTable } from "@/components/DataTable";
import { Badge } from "@/components/ui/badge";
import { getInventoryData } from "@/lib/api";
import { formatQuantity } from "@/lib/formatters";
import { inventoryStatusVariant } from "@/lib/status";
import type { InventoryItem } from "@/lib/types";

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
          { header: "On hand", accessor: (item) => formatQuantity(item.onHand, item.unit), className: "text-right" },
          { header: "Par", accessor: (item) => formatQuantity(item.par, item.unit), className: "text-right" },
          {
            header: "Status",
            accessor: (item) => <Badge variant={inventoryStatusVariant[item.status]}>{item.status}</Badge>
          }
        ]}
      />
    </div>
  );
}
