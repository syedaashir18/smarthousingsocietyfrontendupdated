import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Wrench,
  CreditCard,
  Megaphone,
  UserCheck,
  ShieldCheck,
  CalendarDays,
  BarChart3,
  Settings,
  Building2,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Residents Management", icon: Users },
  { label: "Maintenance Requests", icon: Wrench },
  { label: "Billing & Payments", icon: CreditCard },
  { label: "Announcements", icon: Megaphone },
  { label: "Visitors Log", icon: UserCheck },
  { label: "Security & CCTV", icon: ShieldCheck },
  { label: "Amenities Booking", icon: CalendarDays },
  { label: "Reports & Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-sidebar text-sidebar-foreground shadow-lg"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setOpen(false)} />
      )}

      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-sidebar-border">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-lg bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm">Smart Housing</div>
              <div className="text-[11px] text-sidebar-foreground/70">Society</div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-1 rounded hover:bg-sidebar-accent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {items.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground/85 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="h-[18px] w-[18px] shrink-0" />
              <span className="truncate">{label}</span>
            </a>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-sidebar-border text-[11px] text-sidebar-foreground/60">
          Smart Living, Better Future
        </div>
      </aside>
    </>
  );
}
