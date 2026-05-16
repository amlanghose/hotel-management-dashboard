import { ChartCard } from "@/components/ChartCard";
import { DataTable } from "@/components/DataTable";
import { getFnbData } from "@/lib/api";
import type { FnbOutlet } from "@/lib/types";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

export default async function FnbPage() {
  const data = await getFnbData();

  return (
    <div className="space-y-6">
      <ChartCard
        title="F&B dayparts"
        description="Covers and revenue by service period"
        type="bar"
        data={data.trend}
        yKey="covers"
        secondaryKey="revenue"
      />

      <DataTable<FnbOutlet>
        title="Outlet performance"
        description="Food and beverage revenue by outlet"
        data={data.outlets}
        getRowKey={(outlet) => outlet.outlet}
        columns={[
          { header: "Outlet", accessor: "outlet" },
          { header: "Covers", accessor: "covers", className: "text-right" },
          { header: "Revenue", accessor: (outlet) => currency.format(outlet.revenue), className: "text-right" },
          { header: "Avg check", accessor: (outlet) => currency.format(outlet.avgCheck), className: "text-right" },
          { header: "Satisfaction", accessor: "satisfaction", className: "text-right" }
        ]}
      />
    </div>
  );
}
