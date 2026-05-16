import type { LucideIcon } from "lucide-react";

export type TrendDirection = "up" | "down" | "neutral";

export type Kpi = {
  label: string;
  value: string;
  change: string;
  trend: TrendDirection;
  icon: LucideIcon;
};

export type ChartPoint = {
  name: string;
  occupancy?: number;
  adr?: number;
  revenue?: number;
  covers?: number;
  margin?: number;
  value?: number;
};

export type RoomStatus = "Occupied" | "Vacant" | "Cleaning" | "Maintenance";

export type Room = {
  room: string;
  type: string;
  floor: number;
  status: RoomStatus;
  guest: string;
  rate: number;
};

export type RevenueSegment = {
  name: string;
  value: number;
  fill: string;
};

export type FnbOutlet = {
  outlet: string;
  covers: number;
  revenue: number;
  avgCheck: number;
  satisfaction: string;
};

export type InventoryItem = {
  item: string;
  category: string;
  onHand: number;
  par: number;
  unit: string;
  status: "Healthy" | "Low" | "Critical";
};

export type FinanceRecord = {
  account: string;
  budget: number;
  actual: number;
  variance: number;
  owner: string;
};

export type AlertSeverity = "low" | "medium" | "high";

export type HotelAlert = {
  id: string;
  title: string;
  area: string;
  severity: AlertSeverity;
  createdAt: string;
  owner: string;
};
