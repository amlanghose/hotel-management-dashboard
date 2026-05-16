import { Bell, CalendarDays, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { TopbarConfig } from "@/lib/types";

type TopbarProps = {
  config: TopbarConfig;
};

export function Topbar({ config }: TopbarProps) {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{config.eyebrow}</p>
          <h2 className="text-xl font-semibold tracking-tight">{config.title}</h2>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" className="gap-2">
            <CalendarDays className="h-4 w-4" />
            {config.dateLabel}
          </Button>
          <Button variant="outline" size="icon" aria-label={config.searchLabel}>
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label={config.notificationsLabel}>
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
