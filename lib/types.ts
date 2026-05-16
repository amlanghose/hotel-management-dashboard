import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type TrendDirection = "up" | "down" | "neutral";

export interface Kpi {
  label: string;
  value: string;
  change: string;
  trend: TrendDirection;
  icon: LucideIcon;
}

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline" | "success" | "warning";

export type NavigationIcon = "alerts" | "dashboard" | "finance" | "fnb" | "inventory" | "revenue" | "rooms";

export interface NavigationItem {
  href: string;
  label: string;
  icon: NavigationIcon;
}

export interface TopbarConfig {
  eyebrow: string;
  title: string;
  dateLabel: string;
  searchLabel: string;
  notificationsLabel: string;
}

export interface AppShellConfig {
  productLabel: string;
  sectionLabel: string;
  navigation: NavigationItem[];
  topbar: TopbarConfig;
}

export interface ChartPoint {
  name: string;
  occupancy?: number;
  adr?: number;
  revenue?: number;
  covers?: number;
  margin?: number;
  value?: number;
}

export type RoomStatus = "Occupied" | "Vacant" | "Cleaning" | "Maintenance";

export interface Room {
  room: string;
  type: string;
  floor: number;
  status: RoomStatus;
  guest: string;
  rate: number;
}

export interface RevenueSegment {
  name: string;
  value: number;
  fill: string;
}

export interface FnbOutlet {
  outlet: string;
  covers: number;
  revenue: number;
  avgCheck: number;
  satisfaction: string;
}

export interface InventoryItem {
  item: string;
  category: string;
  onHand: number;
  par: number;
  unit: string;
  status: "Healthy" | "Low" | "Critical";
}

export interface FinanceRecord {
  account: string;
  budget: number;
  actual: number;
  variance: number;
  owner: string;
}

export type AlertSeverity = "low" | "medium" | "high";

export interface HotelAlert {
  id: string;
  title: string;
  area: string;
  severity: AlertSeverity;
  createdAt: string;
  owner: string;
}

export interface DataTableColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  className?: string;
}
