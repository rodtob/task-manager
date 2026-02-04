import { create } from "zustand";
import { persist } from "zustand/middleware";

type Filter = "all" | "completed" | "incomplete";

interface FilterState {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      filter: "all",
      setFilter: (filter) => set({ filter }),
    }),
    {
      name: "filter-storage",
    }
  )
);
