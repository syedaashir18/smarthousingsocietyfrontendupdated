import { cn } from "@/lib/utils";

const rows = [
  {
    id: "#MR-1042",
    name: "Ahmed Raza",
    issue: "Water leakage in kitchen",
    unit: "B-204",
    status: "Pending",
    date: "Jun 04, 2026",
  },
  {
    id: "#MR-1041",
    name: "Sara Khan",
    issue: "AC not cooling",
    unit: "A-112",
    status: "In Progress",
    date: "Jun 04, 2026",
  },
  {
    id: "#MR-1040",
    name: "Bilal Hussain",
    issue: "Elevator stuck on 3rd floor",
    unit: "C-301",
    status: "Resolved",
    date: "Jun 03, 2026",
  },
  {
    id: "#MR-1039",
    name: "Fatima Noor",
    issue: "Lobby light flickering",
    unit: "A-405",
    status: "In Progress",
    date: "Jun 03, 2026",
  },
  {
    id: "#MR-1038",
    name: "Hamza Sheikh",
    issue: "Parking gate malfunction",
    unit: "—",
    status: "Resolved",
    date: "Jun 02, 2026",
  },
  {
    id: "#MR-1037",
    name: "Ayesha Tariq",
    issue: "Bathroom drain blocked",
    unit: "B-108",
    status: "Pending",
    date: "Jun 02, 2026",
  },
];

const statusClass = (s: string) =>
  s === "Pending"
    ? "bg-accent/20 text-accent-foreground border-accent/40"
    : s === "In Progress"
      ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300"
      : "bg-primary/10 text-primary border-primary/20";

export function RecentTable() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between p-5 border-b border-border">
        <div>
          <h3 className="font-semibold">Recent Maintenance Requests</h3>
          <p className="text-xs text-muted-foreground">Latest issues reported by residents</p>
        </div>
        <button className="text-sm font-medium text-primary hover:underline">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground bg-muted/50">
              <th className="px-5 py-3 font-medium">ID</th>
              <th className="px-5 py-3 font-medium">Resident</th>
              <th className="px-5 py-3 font-medium">Issue</th>
              <th className="px-5 py-3 font-medium">Unit No</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-border hover:bg-muted/30">
                <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">{r.id}</td>
                <td className="px-5 py-3.5 font-medium">{r.name}</td>
                <td className="px-5 py-3.5 text-muted-foreground max-w-xs truncate">{r.issue}</td>
                <td className="px-5 py-3.5">{r.unit}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border",
                      statusClass(r.status)
                    )}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-muted-foreground whitespace-nowrap">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
