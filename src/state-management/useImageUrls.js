import { create } from "zustand";

export const useImageUrls = create((set) => ({
  imageUrls: [],
  setImageUrls: (imageUrls) =>
    set(() => {
      localStorage.setItem("imageUrls", JSON.stringify(imageUrls));
      return { imageUrls };
    }),
  appendImageUrls: (imageUrls) =>
    set((state) => {
      localStorage.setItem(
        "imageUrls",
        JSON.stringify([...state.imageUrls, ...imageUrls]),
      );
      return { imageUrls: [...state.imageUrls, ...imageUrls] };
    }),
}));
