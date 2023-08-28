import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state: any) => ({ count: state.count + 1 })),
      decrement: () => set((state: any) => ({ count: state.count - 1 })),
    }),
    {
      name: "counter-store",
      getStorage: () => localStorage,
    }
  )
);

type TestState = {
  firstName: string;
  lastName: string;
  updateFirstName: (name: any) => void;
  updateLastName: (name: any) => void;
};

export const useTestStore = create<TestState>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      updateFirstName: (name) => set({ firstName: name }),
      updateLastName: (name) => set({ lastName: name }),
    }),
    {
      name: "test-store",
      getStorage: () => localStorage,
    }
  )
);

type NonPersistState = {
  count: number;
  increment: (value: number) => void;
};

export const useNonPersistStore = create<NonPersistState>((set) => ({
  count: 0,
  increment: (param: number) =>
    set((state: any) => ({
      count: state.count + param,
    })),
}));
