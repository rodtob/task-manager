type Priority = "high" | "medium" | "low";

export type Tasks = {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
  createdAt: string;
};
