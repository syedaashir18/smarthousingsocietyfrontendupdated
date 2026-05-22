export type ComplaintStatus = 'Submitted' | 'Pending' | 'In Progress' | 'Resolved';

export interface Complaint {
  id: string;
  name: string;
  gender: 'male' | 'female';
  comment: string;
  status: ComplaintStatus;
  submittedAt: string;
  updatedAt: string;
}
