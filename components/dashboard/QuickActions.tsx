import { UserPlus, Megaphone, FileBarChart } from "lucide-react";

const actions = [
  { label: "Add Resident", icon: UserPlus, variant: "primary" as const },
  { label: "Create Announcement", icon: Megaphone, variant: "accent" as const },
  { label: "Generate Report", icon: FileBarChart, variant: "outline" as const },
];

export function QuickActions() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="font-semibold">Quick Actions</h3>
        <p className="text-xs text-muted-foreground">Shortcuts to common tasks</p>
      </div>
      <div className="flex flex-col gap-2.5">
        {actions.map((a) => (
          <button
            key={a.label}
            className={
              a.variant === "primary"
                ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition"
                : a.variant === "accent"
                  ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition"
                  : "flex items-center gap-3 px-4 py-3 rounded-lg border border-border font-medium text-sm hover:bg-muted transition"
            }
          >
            <a.icon className="h-4 w-4" />
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}
