import { create } from "zustand";

export const usePerformanceSelection = create((set) => ({
  performanceSelection: "Extreme Speed",
  setPerformanceSelection: (performanceSelection) =>
    set(() => ({ performanceSelection })),
}));
