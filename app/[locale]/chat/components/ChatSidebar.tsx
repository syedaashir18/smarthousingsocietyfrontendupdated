"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/tailwindUtils/utils";
import { Plus } from "lucide-react";
import type { ChatFilterId } from "../types";

interface ChatSidebarProps {
  activeFilter: ChatFilterId;
  onSelectFilter: (filter: ChatFilterId) => void;
}

const filters = [
  { id: "all" as const, labelKey: "filters.all", count: 0 },
  { id: "unread" as const, labelKey: "filters.unread", count: 62 },
  { id: "favorites" as const, labelKey: "filters.favorites", count: 0 },
  { id: "groups" as const, labelKey: "filters.groups", count: 42 },
];

export function ChatSidebar({ activeFilter, onSelectFilter }: ChatSidebarProps) {
  const t = useTranslations("chat.sidebar");

  return (
    <div className="flex items-center gap-2 p-3 overflow-x-auto no-scrollbar">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        
        return (
          <button
            key={filter.id}
            onClick={() => onSelectFilter(filter.id)}
            className={cn(
              "flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-200 text-[13px] font-medium border",
              isActive
                ? "bg-accent text-accent-foreground border-transparent shadow-sm"
                : "bg-muted/30 text-muted-foreground border-foreground/20 hover:bg-muted/50 hover:text-foreground"
            )}
          >
            <span>{t(filter.labelKey as any)}</span>
            {filter.count > 0 && (
              <span className="text-[11px] opacity-70">
                {filter.count}
              </span>
            )}
          </button>
        );
      })}
      
      {/* Quick Add Button matching image */}
      <button className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all border border-foreground/20 hover:border-primary/20">
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
