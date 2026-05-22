import React from 'react';
import { useTranslations } from 'next-intl';
import { PencilLine, Search } from 'lucide-react';
import { cn } from '@/lib/tailwindUtils/utils';

interface ComplaintsTabsProps {
  activeTab: 'submit' | 'track';
  setActiveTab: (tab: 'submit' | 'track') => void;
}

export default function ComplaintsTabs({ activeTab, setActiveTab }: ComplaintsTabsProps) {
  const t = useTranslations("complaints.header");

  return (
    <div className="flex-none p-4 md:p-6 lg:p-8 border-b bg-muted/10">
      <div className="inline-flex items-center gap-1 p-1 bg-muted/40 rounded-xl border">
        <button
          onClick={() => setActiveTab('submit')}
          className={cn(
            "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
            activeTab === 'submit' 
              ? "bg-background text-foreground shadow-sm ring-1 ring-border" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <PencilLine className="w-4 h-4" />
          {t("submitTab")}
        </button>
        <button
          onClick={() => setActiveTab('track')}
          className={cn(
            "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
            activeTab === 'track' 
              ? "bg-background text-foreground shadow-sm ring-1 ring-border" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <Search className="w-4 h-4" />
          {t("trackTab")}
        </button>
      </div>
    </div>
  );
}
