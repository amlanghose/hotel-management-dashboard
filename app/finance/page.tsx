import { ChartCard } from "@/components/ChartCard";
import { DataTable } from "@/components/DataTable";
import { Badge } from "@/components/ui/badge";
import { getFinanceData } from "@/lib/api";
import { formatCurrency } from "@/lib/formatters";
import { financeVarianceVariant } from "@/lib/status";
import type { FinanceRecord } from "@/lib/types";

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
          { header: "Budget", accessor: (record) => formatCurrency(record.budget), className: "text-right" },
          { header: "Actual", accessor: (record) => formatCurrency(record.actual), className: "text-right" },
          {
            header: "Variance",
            accessor: (record) => (
              <Badge variant={financeVarianceVariant(record.variance)}>
                {formatCurrency(record.variance)}
              </Badge>
            ),
            className: "text-right"
          }
        ]}
      />
    </div>
  );
}
