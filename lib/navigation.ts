import type { AppShellConfig } from "@/lib/types";

export const appShellConfig: AppShellConfig = {
  productLabel: "HotelOS",
  sectionLabel: "Management",
  topbar: {
    eyebrow: "Today's operations",
    title: "Hotel Management Dashboard",
    dateLabel: "May 16, 2026",
    searchLabel: "Search",
    notificationsLabel: "Notifications"
  },
  navigation: [
    { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { href: "/rooms", label: "Rooms", icon: "rooms" },
    { href: "/revenue", label: "Revenue", icon: "revenue" },
    { href: "/fnb", label: "F&B", icon: "fnb" },
    { href: "/inventory", label: "Inventory", icon: "inventory" },
    { href: "/finance", label: "Finance", icon: "finance" },
    { href: "/alerts", label: "Alerts", icon: "alerts" }
  ]
};
