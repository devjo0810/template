import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useLayoutStore = create(
  devtools(
    persist(
      (set) => ({
        themeMode: "light",
        toggleTheme: () => set((state) => ({ themeMode: state.themeMode === "light" ? "dark" : "light" })),
        isDrawerOpen: true,
        toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
      }),
      { name: "layout-store", getStorage: () => localStorage }
    )
  )
);

export default useLayoutStore;
