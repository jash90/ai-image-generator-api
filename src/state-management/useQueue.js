import { create } from "zustand";

export const useQueue = create((set) => ({
  queue: [],
  setQueue: (queue) =>
    set(() => {
      localStorage.setItem("queue", JSON.stringify(queue));
      return { queue };
    }),
  sliceQueue: (count) =>
    set((state) => {
      localStorage.setItem("queue", JSON.stringify(state.queue.slice(count)));
      return { queue: state.queue.slice(count) };
    }),
  appendQueue: (queue) =>
    set((state) => {
      localStorage.setItem("queue", JSON.stringify([...state.queue, ...queue]));
      return { queue: [...state.queue, ...queue] };
    }),
}));
