import React from 'react';
import { Candidate } from '../types';
import { useTranslations } from 'next-intl';

interface VotingStatsProps {
  totalVotes: number;
  totalCandidates: number;
  leader: Candidate | null;
  leaderPct: number;
}

export const VotingStats: React.FC<VotingStatsProps> = ({ 
  totalVotes, 
  totalCandidates, 
  leader, 
  leaderPct 
}) => {
  const t = useTranslations("voting.stats");
  const tCommon = useTranslations("voting.common");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-card border rounded-xl p-5 text-center hover:shadow-md transition-all">
        <div className="text-3xl font-black text-primary">{totalVotes}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("totalVotes")}</div>
      </div>
      <div className="bg-card border rounded-xl p-5 text-center hover:shadow-md transition-all">
        <div className="text-3xl font-black text-primary">{totalCandidates}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("candidates")}</div>
      </div>
      <div className="bg-card border rounded-xl p-5 text-center hover:shadow-md transition-all">
        <div className="text-xl md:text-2xl font-black text-primary truncate px-2">
          {leader ? leader.name.split(' ')[0] : tCommon("emptyDash")}
        </div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("leading")}</div>
      </div>
      <div className="bg-card border rounded-xl p-5 text-center hover:shadow-md transition-all">
        <div className="text-3xl font-black text-primary">{leaderPct}%</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("topPct")}</div>
      </div>
    </div>
  );
};
