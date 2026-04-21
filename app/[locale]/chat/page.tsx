'use client'
import { DynamicLayout } from '@/components/layout/dynamic-layout'
import { ChatContainer } from './components/ChatContainer'

export default function ChatPage() {
  return (
    <DynamicLayout>
      <div className="p-6 h-full w-full">
        <ChatContainer />
      </div>
    </DynamicLayout>
  )
}
