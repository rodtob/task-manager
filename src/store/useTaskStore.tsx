import { create } from "zustand";
import type { Task } from "../types/Task";

export const useTaskStore = create((set) => ({
  tasks: [] as Task[],
  addTask: (task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),
}));
