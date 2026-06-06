"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { Charts } from "@/components/dashboard/Charts";
import { RecentTable } from "@/components/dashboard/RecentTable";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 overflow-auto">
          <StatsCards />
          <Charts />
          <RecentTable />
          <QuickActions />
        </main>
      </div>
    </div>
  );
}
