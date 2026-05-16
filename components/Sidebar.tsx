"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  BedDouble,
  ChefHat,
  LayoutDashboard,
  PackageOpen,
  ReceiptText,
  TrendingUp
} from "lucide-react";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/rooms", label: "Rooms", icon: BedDouble },
  { href: "/revenue", label: "Revenue", icon: TrendingUp },
  { href: "/fnb", label: "F&B", icon: ChefHat },
  { href: "/inventory", label: "Inventory", icon: PackageOpen },
  { href: "/finance", label: "Finance", icon: ReceiptText },
  { href: "/alerts", label: "Alerts", icon: AlertTriangle }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-72 border-r bg-card px-4 py-6 lg:block">
      <div className="mb-8 px-3">
        <p className="text-sm font-medium text-muted-foreground">HotelOS</p>
        <h1 className="text-2xl font-bold tracking-tight">Management</h1>
      </div>
      <nav className="space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                active && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
