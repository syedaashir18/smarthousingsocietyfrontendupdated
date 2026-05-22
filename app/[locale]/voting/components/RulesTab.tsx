import React from 'react';
import { Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const RulesTab: React.FC = () => {
  const t = useTranslations("voting.rulesTab");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{t("title")}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: '🪪', title: t("rules.cnic.title"), desc: t("rules.cnic.desc") },
          { icon: '👤', title: t("rules.name.title"), desc: t("rules.name.desc") },
          { icon: '🏘️', title: t("rules.society.title"), desc: t("rules.society.desc") },
          { icon: '🔒', title: t("rules.singleVote.title"), desc: t("rules.singleVote.desc") },
          { icon: '📊', title: t("rules.liveResults.title"), desc: t("rules.liveResults.desc") },
          { icon: '🏆', title: t("rules.winner.title"), desc: t("rules.winner.desc") }
        ].map((rule, i) => (
          <div key={i} className="bg-card border rounded-2xl p-6 hover:border-primary/40 transition-colors">
            <div className="text-3xl mb-4">{rule.icon}</div>
            <h4 className="font-bold text-foreground text-sm mb-2">{rule.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{rule.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border rounded-2xl p-6">
        <h3 className="font-bold flex items-center gap-2 mb-4 text-foreground">
          <Users className="w-5 h-5 text-primary" /> {t("committeeTitle")}
        </h3>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="bg-muted px-4 py-2 rounded-lg flex items-center gap-2"><span className="text-lg">🧑‍⚖️</span> <b>{t("members.presidingOfficer")}:</b> Rao Tariq Mehmood</div>
          <div className="bg-muted px-4 py-2 rounded-lg flex items-center gap-2"><span className="text-lg">📋</span> <b>{t("members.secretary")}:</b> Mrs. Sana Javed</div>
          <div className="bg-muted px-4 py-2 rounded-lg flex items-center gap-2"><span className="text-lg">🔍</span> <b>{t("members.observer")}:</b> Haji Abdul Rehman</div>
          <div className="bg-muted px-4 py-2 rounded-lg flex items-center gap-2"><span className="text-lg">💻</span> <b>{t("members.sysAdmin")}:</b> Usman Raza</div>
        </div>
      </div>
    </div>
  );
};
