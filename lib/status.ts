import type { BadgeVariant, InventoryItem, RoomStatus } from "@/lib/types";

export const roomStatusVariant: Record<RoomStatus, BadgeVariant> = {
  Occupied: "success",
  Vacant: "secondary",
  Cleaning: "warning",
  Maintenance: "destructive"
};

export const inventoryStatusVariant: Record<InventoryItem["status"], BadgeVariant> = {
  Healthy: "success",
  Low: "warning",
  Critical: "destructive"
};

export function financeVarianceVariant(variance: number): BadgeVariant {
  return variance >= 0 ? "success" : "destructive";
}
