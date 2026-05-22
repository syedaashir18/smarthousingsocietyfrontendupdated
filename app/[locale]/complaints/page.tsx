import React from 'react';
import { useTranslations } from 'next-intl';
import { DynamicLayout } from '@/components/layout/dynamic-layout';
import ComplaintsContainer from './components/ComplaintsContainer';

export default function ComplaintsPage() {
  const t = useTranslations("layout.sidebar");

  return (
    <DynamicLayout>
      <div className="flex-1 w-full flex flex-col h-full bg-background rounded-xl overflow-hidden border">
        <ComplaintsContainer />
      </div>
    </DynamicLayout>
  );
}
