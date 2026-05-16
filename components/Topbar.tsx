import { Bell, CalendarDays, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Today&apos;s operations</p>
          <h2 className="text-xl font-semibold tracking-tight">Hotel Management Dashboard</h2>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" className="gap-2">
            <CalendarDays className="h-4 w-4" />
            May 16, 2026
          </Button>
          <Button variant="outline" size="icon" aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
