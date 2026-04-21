"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { 
  Search, 
  Settings, 
  ChevronLeft, 
  Paperclip, 
  Send,
  MoreVertical,
  FileText
} from "lucide-react";
import { cn } from "@/lib/tailwindUtils/utils";
import type { ChatWindowProps } from "../types";

export function ChatWindow({ activeChatId, onBack }: ChatWindowProps) {
  const t = useTranslations("chat.window");
  const [message, setMessage] = useState("");

  if (activeChatId === null) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-muted-foreground bg-accent/10">
        <div className="h-24 w-24 rounded-full bg-accent/50 flex items-center justify-center mb-6 shadow-inner">
          <MessageSquareIcon className="h-10 w-10 text-muted-foreground/50" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground/70">{t("empty.title")}</h3>
        <p className="text-sm">{t("empty.description")}</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-border/40 bg-background/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="md:hidden p-2 -ml-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold">{t("header.title")}</h2>
            <div className="hidden sm:flex items-center gap-2">
              <span className="px-2 py-1 text-[10px] font-bold bg-primary/10 text-primary rounded-md border border-primary/20">
                {t("header.modelBadge")}
              </span>
              <span className="px-2 py-1 text-[10px] font-bold bg-accent text-accent-foreground rounded-md border border-border/50">
                {t("header.dataBadge")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2.5 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-all">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2.5 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-all">
            <Settings className="h-5 w-5" />
          </button>
          <button className="p-2.5 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-all sm:hidden">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar bg-accent/5">
        
        {/* Recipient Message */}
        <div className="flex flex-col items-end gap-1 w-full max-w-3xl ml-auto">
          <div className="bg-primary text-primary-foreground p-4 rounded-2xl rounded-tr-sm shadow-md shadow-primary/10">
            <p className="text-sm leading-relaxed">
              {t("mock.recipient1")}
            </p>
          </div>
          <span className="text-[10px] text-muted-foreground mr-1 font-medium">{t("mock.time1")}</span>
        </div>

        {/* Sender (Bot) Message */}
        <div className="flex flex-col items-start gap-1 w-full max-w-2xl mr-auto">
          <div className="flex gap-3 items-end">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-background">
              <span className="text-white text-xs font-bold">DF</span>
            </div>
            <div className="bg-card border border-border/50 p-4 rounded-2xl rounded-bl-sm shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {t("mock.bot1")}
              </p>
            </div>
          </div>
          <span className="text-[10px] text-muted-foreground ml-12 font-medium">{t("mock.time2")}</span>
        </div>

        {/* Recipient Message with Attachments */}
        <div className="flex flex-col items-end gap-1 w-full max-w-3xl ml-auto mt-8">
          <div className="relative w-full flex items-center justify-center py-4">
            <div className="absolute w-full h-px bg-border/40"></div>
            <span className="relative bg-background/80 backdrop-blur-sm px-4 text-xs font-medium text-muted-foreground rounded-full border border-border/30">
              {t("mock.today")}
            </span>
          </div>

          <div className="bg-primary text-primary-foreground p-4 rounded-2xl rounded-tr-sm shadow-md shadow-primary/10 mt-2">
            <p className="text-sm leading-relaxed">
              {t("mock.recipient2")}
            </p>
            <p className="text-sm leading-relaxed mt-4 font-medium opacity-90">
              {t("mock.attachmentsTitle")}
            </p>
            
            {/* Attachments */}
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="flex items-center gap-2 bg-background/20 hover:bg-background/30 transition-colors backdrop-blur-sm px-3 py-2 rounded-lg border border-primary-foreground/20 cursor-pointer">
                <FileText className="h-4 w-4" />
                <span className="text-xs font-semibold">{t("mock.attachment1")}</span>
              </div>
              <div className="flex items-center gap-2 bg-background/20 hover:bg-background/30 transition-colors backdrop-blur-sm px-3 py-2 rounded-lg border border-primary-foreground/20 cursor-pointer">
                <FileText className="h-4 w-4" />
                <span className="text-xs font-semibold">{t("mock.attachment2")}</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-muted-foreground mr-1 font-medium">{t("mock.time3")}</span>
        </div>

        {/* Sender (Bot) Message */}
        <div className="flex flex-col items-start gap-1 w-full max-w-2xl mr-auto">
          <div className="flex gap-3 items-end">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-background">
              <span className="text-white text-xs font-bold">DF</span>
            </div>
            <div className="bg-card border border-border/50 p-4 rounded-2xl rounded-bl-sm shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {t("mock.bot2")}
              </p>
            </div>
          </div>
          <span className="text-[10px] text-muted-foreground ml-12 font-medium">{t("mock.time4")}</span>
        </div>
        
        {/* Invisible element to auto-scroll to bottom */}
        <div className="h-4"></div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-background/95 backdrop-blur-xl border-t border-border/40 z-10">
        <div className="flex items-center gap-2 max-w-4xl mx-auto">
          <button className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all">
            <Paperclip className="h-5 w-5" />
          </button>
          
          <div className="flex-1 relative group">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("input.placeholder")}
              className="w-full bg-accent/30 border border-foreground/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-2xl pl-4 pr-12 py-3.5 text-sm transition-all focus:outline-none placeholder:text-muted-foreground"
            />
            {/* Quick action mic/recording could go here */}
          </div>
          
          <button 
            className={cn(
              "p-3.5 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm group border border-foreground/20",
              message.trim().length > 0 
                ? "bg-primary text-primary-foreground hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5" 
                : "bg-accent text-muted-foreground cursor-not-allowed"
            )}
          >
            <Send className={cn("h-5 w-5", message.trim().length > 0 ? "translate-x-0.5 -translate-y-0.5" : "")} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Simple fallback icon for empty state
function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
