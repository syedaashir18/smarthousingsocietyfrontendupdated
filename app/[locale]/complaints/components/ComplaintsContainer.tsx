"use client";

import React, { useState, useEffect } from 'react';
import ComplaintsHeader from './ComplaintsHeader';
import ComplaintsTabs from './ComplaintsTabs';
import SubmitTab from './SubmitTab';
import TrackTab from './TrackTab';
import { Complaint } from '../types';

const COMPLAINTS_KEY = 'cms_complaints_v1';

export default function ComplaintsContainer() {
  const [activeTab, setActiveTab] = useState<'submit' | 'track'>('submit');
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  
  // Last submitted complaint for PDF generation (in-memory for current session)
  const [lastSubmitted, setLastSubmitted] = useState<Complaint | null>(null);

  // Load complaints from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(COMPLAINTS_KEY);
      if (stored) {
        setComplaints(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load complaints from local storage:", e);
    }
  }, []);

  const handleAddComplaint = (complaint: Complaint) => {
    const updated = [...complaints, complaint];
    setComplaints(updated);
    setLastSubmitted(complaint);
    try {
      localStorage.setItem(COMPLAINTS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save complaint to local storage:", e);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <ComplaintsHeader complaints={complaints} />
      <ComplaintsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative">
        {activeTab === 'submit' && (
          <SubmitTab 
            onAddComplaint={handleAddComplaint}
            lastSubmitted={lastSubmitted}
            onNewComplaint={() => setLastSubmitted(null)}
          />
        )}
        {activeTab === 'track' && (
          <TrackTab complaints={complaints} />
        )}
      </div>
    </div>
  );
}
