'use client'

import { DynamicLayout } from '@/components/layout/dynamic-layout'
import VotingContainer from './components/VotingContainer'

export default function VotingPage() {
  return (
    <DynamicLayout>
      <div className="p-4 md:p-6 h-full w-full bg-background overflow-y-auto">
        <VotingContainer />
      </div>
    </DynamicLayout>
  )
}
