import { create } from "zustand";
import type { Task } from "../types/Task";

export const useTaskStore = create((set) => ({
  tasks: [] as Task[],

  addTask: (task: Task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),

  toggleTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),

  updateTask: (id: number, updates: Partial<Task>) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      ),
    })),

  deleteTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),
}));
