import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const revenue = [
  { month: "Jan", value: 1.8 },
  { month: "Feb", value: 2.1 },
  { month: "Mar", value: 1.95 },
  { month: "Apr", value: 2.3 },
  { month: "May", value: 2.25 },
  { month: "Jun", value: 2.4 },
];

const maintenance = [
  { name: "Pending", value: 12, color: "oklch(0.78 0.16 70)" },
  { name: "In Progress", value: 18, color: "oklch(0.55 0.15 200)" },
  { name: "Resolved", value: 64, color: "oklch(0.38 0.11 148)" },
];

export function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Monthly Revenue</h3>
            <p className="text-xs text-muted-foreground">Last 6 months (PKR Millions)</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">
            +12.4%
          </span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenue} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 150)" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="oklch(0.5 0.02 150)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis stroke="oklch(0.5 0.02 150)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: "1px solid oklch(0.92 0.01 150)" }}
                formatter={(v: number) => [`PKR ${v}M`, "Revenue"]}
              />
              <Bar dataKey="value" fill="oklch(0.38 0.11 148)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-2">
          <h3 className="font-semibold">Maintenance Requests</h3>
          <p className="text-xs text-muted-foreground">Current status breakdown</p>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={maintenance}
                dataKey="value"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
              >
                {maintenance.map((e) => (
                  <Cell key={e.name} fill={e.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
