import { Users, Wrench, Wallet, UserCheck, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Total Residents",
    value: "248",
    icon: Users,
    trend: "+12",
    up: true,
    tint: "bg-primary/10 text-primary",
  },
  {
    label: "Pending Maintenance",
    value: "12",
    icon: Wrench,
    trend: "-3",
    up: false,
    tint: "bg-accent/15 text-accent-foreground",
  },
  {
    label: "Monthly Revenue",
    value: "PKR 2.4M",
    icon: Wallet,
    trend: "+8.2%",
    up: true,
    tint: "bg-primary/10 text-primary",
  },
  {
    label: "Active Visitors Today",
    value: "34",
    icon: UserCheck,
    trend: "+5",
    up: true,
    tint: "bg-accent/15 text-accent-foreground",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className={cn("h-11 w-11 rounded-lg grid place-items-center", s.tint)}>
              <s.icon className="h-5 w-5" />
            </div>
            <div
              className={cn(
                "flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full",
                s.up ? "text-primary bg-primary/10" : "text-destructive bg-destructive/10"
              )}
            >
              {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {s.trend}
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold tracking-tight">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
