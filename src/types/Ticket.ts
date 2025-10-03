export default interface Ticket {
  _id: string;
  title: string;
  description: string;
  status: string;
  createdBy: string;
  assignedTo: string | null;
  priority: string;
  deadline: Date | null;
  helpfulNotes: string | null;
  relatedSkills: string[];
  createdAt: Date;
  updatedAt: Date;
}
