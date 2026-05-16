import type { ReactNode } from "react";

import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { appShellConfig } from "@/lib/navigation";
import type { AppShellConfig } from "@/lib/types";

type AppShellProps = {
  children: ReactNode;
  config?: AppShellConfig;
};

export function AppShell({ children, config = appShellConfig }: AppShellProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        <Sidebar
          navigation={config.navigation}
          productLabel={config.productLabel}
          sectionLabel={config.sectionLabel}
        />
        <div className="flex min-h-screen flex-1 flex-col">
          <Topbar config={config.topbar} />
          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
