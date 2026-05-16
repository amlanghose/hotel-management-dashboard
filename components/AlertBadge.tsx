import type { AlertSeverity } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

type AlertBadgeProps = {
  severity: AlertSeverity;
};

const severityVariant = {
  high: "destructive",
  medium: "warning",
  low: "secondary"
} as const;

export function AlertBadge({ severity }: AlertBadgeProps) {
  return <Badge variant={severityVariant[severity]}>{severity}</Badge>;
}
