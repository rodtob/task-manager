type Priority = "high" | "medium" | "low";

export type Task = {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
  createdAt: string;
};
