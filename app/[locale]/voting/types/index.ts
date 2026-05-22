export interface Candidate {
  id: number;
  name: string;
  role: string;
  party: string;
  pClass: string;
  emoji: string;
}

export interface ActivityLogEntry {
  text: string;
  time: string;
}

export type VotingTabId = 'vote' | 'results' | 'rules';

export interface ToastState {
  show: boolean;
  msg: string;
  type: 'success' | 'error';
}

export interface ModalState {
  show: boolean;
  title: string;
  text: React.ReactNode;
  icon: string;
}
