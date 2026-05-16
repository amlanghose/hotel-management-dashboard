import { ChartCard } from "@/components/ChartCard";
import { DataTable } from "@/components/DataTable";
import { Badge } from "@/components/ui/badge";
import { getFinanceData } from "@/lib/api";
import type { FinanceRecord } from "@/lib/types";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

export default async function FinancePage() {
  const data = await getFinanceData();

  return (
    <div className="space-y-6">
      <ChartCard
        title="Financial trend"
        description="Monthly property revenue and margin"
        type="line"
        data={data.revenueTrend}
        yKey="revenue"
        secondaryKey="margin"
      />

      <DataTable<FinanceRecord>
        title="Budget variance"
        description="Operating budget against month-to-date actuals"
        data={data.records}
        getRowKey={(record) => record.account}
        columns={[
          { header: "Account", accessor: "account" },
          { header: "Owner", accessor: "owner" },
          { header: "Budget", accessor: (record) => currency.format(record.budget), className: "text-right" },
          { header: "Actual", accessor: (record) => currency.format(record.actual), className: "text-right" },
          {
            header: "Variance",
            accessor: (record) => (
              <Badge variant={record.variance >= 0 ? "success" : "destructive"}>
                {currency.format(record.variance)}
              </Badge>
            ),
            className: "text-right"
          }
        ]}
      />
    </div>
  );
}
