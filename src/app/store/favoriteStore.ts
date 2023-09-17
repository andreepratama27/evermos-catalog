"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavoriteStore {
  favorites: Product[];
  addFavorite: (item: Product) => void;
  removeFavorite: (item: Product) => void;
  isFavorited: (item: Product) => boolean;
}

export const useStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (item) => {
        set((state) => ({
          favorites: [...state.favorites, item],
        }));
      },
      removeFavorite: (item: Product) => {
        const filter = get().favorites.filter((x) => x.id !== item.id);
        set(() => ({
          favorites: [...filter],
        }));
      },
      isFavorited: (item: Product) => {
        const filter = get().favorites.filter((x) => x.id === item.id);
        return !!filter.length;
      },
    }),
    {
      name: "favorite-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
