import { create } from "zustand";

export const useAspectRatio = create((set) => ({
  aspectRatio: "1920*1080",
  setAspectRatio: (aspectRatio) => set(() => ({ aspectRatio })),
}));
