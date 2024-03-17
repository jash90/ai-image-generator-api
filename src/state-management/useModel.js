import { create } from "zustand";

export const useModel = create((set) => ({
  model: "gpt-3.5-turbo",
  setModel: (model) => set(() => ({ model })),
}));
