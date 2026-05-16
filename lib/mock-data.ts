import {
  AlertTriangle,
  BedDouble,
  ChefHat,
  CircleDollarSign,
  PackageOpen,
  ReceiptText,
  TrendingUp
} from "lucide-react";

import type {
  ChartPoint,
  FinanceRecord,
  FnbOutlet,
  HotelAlert,
  InventoryItem,
  Kpi,
  RevenueSegment,
  Room
} from "@/lib/types";

export const dashboardKpis: Kpi[] = [
  {
    label: "Occupancy",
    value: "86%",
    change: "+4.2% vs yesterday",
    trend: "up",
    icon: BedDouble
  },
  {
    label: "ADR",
    value: "$214",
    change: "+$18 vs last week",
    trend: "up",
    icon: CircleDollarSign
  },
  {
    label: "RevPAR",
    value: "$184",
    change: "+7.8% vs last month",
    trend: "up",
    icon: TrendingUp
  },
  {
    label: "Open Alerts",
    value: "9",
    change: "3 high priority",
    trend: "neutral",
    icon: AlertTriangle
  }
];

export const occupancyTrend: ChartPoint[] = [
  { name: "Mon", occupancy: 71, adr: 192 },
  { name: "Tue", occupancy: 75, adr: 198 },
  { name: "Wed", occupancy: 80, adr: 204 },
  { name: "Thu", occupancy: 84, adr: 211 },
  { name: "Fri", occupancy: 91, adr: 229 },
  { name: "Sat", occupancy: 96, adr: 238 },
  { name: "Sun", occupancy: 86, adr: 214 }
];

export const revenueTrend: ChartPoint[] = [
  { name: "Jan", revenue: 420000, margin: 31 },
  { name: "Feb", revenue: 438000, margin: 33 },
  { name: "Mar", revenue: 471000, margin: 34 },
  { name: "Apr", revenue: 489000, margin: 35 },
  { name: "May", revenue: 530000, margin: 37 },
  { name: "Jun", revenue: 562000, margin: 38 }
];

export const revenueSegments: RevenueSegment[] = [
  { name: "Rooms", value: 64, fill: "var(--color-chart-1)" },
  { name: "F&B", value: 21, fill: "var(--color-chart-2)" },
  { name: "Events", value: 9, fill: "var(--color-chart-3)" },
  { name: "Spa", value: 6, fill: "var(--color-chart-4)" }
];

export const rooms: Room[] = [
  { room: "1201", type: "King Suite", floor: 12, status: "Occupied", guest: "Ava Patel", rate: 389 },
  { room: "1118", type: "Queen Double", floor: 11, status: "Cleaning", guest: "-", rate: 249 },
  { room: "1004", type: "Executive King", floor: 10, status: "Vacant", guest: "-", rate: 299 },
  { room: "0922", type: "Standard King", floor: 9, status: "Maintenance", guest: "-", rate: 189 },
  { room: "0810", type: "Queen Double", floor: 8, status: "Occupied", guest: "Noah Chen", rate: 238 },
  { room: "0715", type: "Standard King", floor: 7, status: "Occupied", guest: "Mia Johnson", rate: 219 }
];

export const fnbOutlets: FnbOutlet[] = [
  { outlet: "Atrium Bistro", covers: 186, revenue: 12480, avgCheck: 67, satisfaction: "94%" },
  { outlet: "Skyline Bar", covers: 142, revenue: 9840, avgCheck: 69, satisfaction: "91%" },
  { outlet: "In-room Dining", covers: 74, revenue: 3922, avgCheck: 53, satisfaction: "88%" },
  { outlet: "Banquets", covers: 320, revenue: 21800, avgCheck: 68, satisfaction: "96%" }
];

export const fnbTrend: ChartPoint[] = [
  { name: "Breakfast", covers: 212, revenue: 7420 },
  { name: "Lunch", covers: 168, revenue: 6210 },
  { name: "Dinner", covers: 238, revenue: 15140 },
  { name: "Late", covers: 104, revenue: 5272 }
];

export const inventoryItems: InventoryItem[] = [
  { item: "Bath towels", category: "Housekeeping", onHand: 1180, par: 1000, unit: "pcs", status: "Healthy" },
  { item: "King sheet sets", category: "Laundry", onHand: 260, par: 320, unit: "sets", status: "Low" },
  { item: "Arabica beans", category: "F&B", onHand: 34, par: 40, unit: "kg", status: "Low" },
  { item: "Still water", category: "Minibar", onHand: 980, par: 800, unit: "bottles", status: "Healthy" },
  { item: "HVAC filters", category: "Engineering", onHand: 8, par: 24, unit: "pcs", status: "Critical" }
];

export const financeRecords: FinanceRecord[] = [
  { account: "Room revenue", budget: 365000, actual: 389400, variance: 24400, owner: "Rooms" },
  { account: "F&B revenue", budget: 118000, actual: 126900, variance: 8900, owner: "F&B" },
  { account: "Labor cost", budget: 142000, actual: 149800, variance: -7800, owner: "People Ops" },
  { account: "Utilities", budget: 38500, actual: 36100, variance: 2400, owner: "Engineering" },
  { account: "Supplies", budget: 29200, actual: 31600, variance: -2400, owner: "Procurement" }
];

export const alerts: HotelAlert[] = [
  {
    id: "ALT-1042",
    title: "HVAC filters below safety stock",
    area: "Inventory",
    severity: "high",
    createdAt: "08:10",
    owner: "Engineering"
  },
  {
    id: "ALT-1041",
    title: "VIP early arrival awaiting suite inspection",
    area: "Rooms",
    severity: "medium",
    createdAt: "08:24",
    owner: "Front Office"
  },
  {
    id: "ALT-1039",
    title: "Banquet BEO revised for tonight",
    area: "F&B",
    severity: "medium",
    createdAt: "07:55",
    owner: "Banquets"
  },
  {
    id: "ALT-1037",
    title: "Labor forecast exceeds target by 2.4%",
    area: "Finance",
    severity: "low",
    createdAt: "07:30",
    owner: "Finance"
  }
];

export const operationKpis: Kpi[] = [
  {
    label: "Rooms ready",
    value: "128",
    change: "22 turning over",
    trend: "up",
    icon: BedDouble
  },
  {
    label: "F&B revenue",
    value: "$48.0k",
    change: "+11% vs forecast",
    trend: "up",
    icon: ChefHat
  },
  {
    label: "Critical stock",
    value: "1",
    change: "4 low items",
    trend: "down",
    icon: PackageOpen
  },
  {
    label: "Month close",
    value: "73%",
    change: "12 tasks left",
    trend: "neutral",
    icon: ReceiptText
  }
];
