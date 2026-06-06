import { Bell, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border">
      <div className="flex items-center gap-3 px-4 lg:px-8 h-16">
        <div className="lg:hidden w-10" />
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search residents, units, requests..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-muted text-sm outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
          />
        </div>
        <button className="relative h-10 w-10 grid place-items-center rounded-lg hover:bg-muted">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute top-1.5 right-1.5 h-4 min-w-4 px-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold grid place-items-center">
            5
          </span>
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 h-10 pl-1 pr-2 rounded-lg hover:bg-muted">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-semibold">
              AD
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <div className="text-sm font-semibold">Admin</div>
              <div className="text-[11px] text-muted-foreground">Society Manager</div>
            </div>
            <ChevronDown className="hidden sm:block h-4 w-4 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Activity Log</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
