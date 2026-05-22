"use client";

import { useTranslations } from "next-intl";
import { Search, Plus, Share2, PlusCircle } from "lucide-react";
import { cn } from "@/lib/tailwindUtils/utils";
import { ChatSidebar } from "./ChatSidebar";
import type { ChatThread, ChatFilterId } from "../types";

interface ChatListProps {
  activeChatId: number | null;
  onSelectChat: (id: number) => void;
  activeFilter: ChatFilterId;
  onSelectFilter: (filter: ChatFilterId) => void;
}

// Mock Data
const MOCK_CHATS: ChatThread[] = [
  {
    id: 1,
    title: "Project Alpha Sync",
    type: "Work",
    icon: "bg-emerald-500",
    unread: 8,
    isOnline: true,
  },
  {
    id: 2,
    title: "Client Requirements",
    type: "Meeting",
    icon: "bg-blue-500",
    unread: 7,
    isOnline: false,
  },
  {
    id: 3,
    title: "UI/UX Design Review",
    type: "Design",
    icon: "bg-purple-500",
    unread: 0,
    isOnline: true,
  },
  {
    id: 4,
    title: "Backend Refactoring",
    type: "Development",
    icon: "bg-yellow-500",
    unread: 2,
    isOnline: true,
  },
  {
    id: 5,
    title: "Marketing Kickoff",
    type: "Marketing",
    icon: "bg-pink-500",
    unread: 5,
    isOnline: false,
  },
];

export function ChatList({ activeChatId, onSelectChat, activeFilter, onSelectFilter }: ChatListProps) {
  const t = useTranslations("chat.list");

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/40">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span>{t("topics")}</span>
          <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            24
          </span>
        </h2>
      </div>

      {/* Search */}
      <div className="px-3 pt-3">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="w-full bg-background/50 border border-border/60 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-medium placeholder:text-muted-foreground/70"
          />
        </div>
      </div>

      {/* WhatsApp Style Tabs (Sidebar integrated here) */}
      <ChatSidebar activeFilter={activeFilter} onSelectFilter={onSelectFilter} />

      {/* List */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 custom-scrollbar">
        {MOCK_CHATS.map((chat) => {
          const isActive = activeChatId === chat.id;

          return (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={cn(
                "group relative flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300",
                isActive
                  ? "bg-primary/5 border border-primary/20 shadow-sm"
                  : "hover:bg-accent/50 border border-transparent"
              )}
            >
               {/* Active indicator bar */}
               {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-md"></div>
              )}

              {/* Icon / Avatar */}
              <div className="relative">
                <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-sm", chat.icon)}>
                  {chat.title.charAt(0)}
                </div>
                {chat.isOnline && (
                  <span className="absolute -bottom-1 -right-1 block h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-background"></span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={cn("font-semibold text-sm truncate pr-2", isActive ? "text-primary" : "")}>
                    {chat.title}
                  </h3>
                  {chat.unread > 0 ? (
                    <span className="flex-shrink-0 bg-primary text-primary-foreground text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                      {chat.unread}
                    </span>
                  ) : (
                    <span className="flex-shrink-0 h-2 w-2 rounded-full bg-muted mt-1.5"></span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                  <span>{chat.type}</span>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Share2 className="h-3 w-3" /> {t("actions.share")}
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <PlusCircle className="h-3 w-3" /> {t("actions.add")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Button Footer */}
      <div className="p-4 border-t border-border/40 mt-auto bg-background/50 backdrop-blur-sm">
        <button className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary font-semibold py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border border-foreground/20">
          <Plus className="h-5 w-5" />
          {t("addNewConversation")}
        </button>
      </div>
    </div>
  );
}
