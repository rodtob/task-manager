type Priority = "high" | "medium" | "low";

export type Filter = "all" | "completed" | "incomplete";

export type Task = {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
  createdAt: string;
};
