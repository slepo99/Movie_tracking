import { defineStore } from "pinia";

export const useFilters = defineStore('filters', {
    state: () => ({
      selectedGenre: 'All' as string ,
    }),
    actions: {
      setSelectedGenre(item: string) {
      this.selectedGenre = item
      },
    },
  });