import { defineStore } from "pinia";
import { useFilmsRating } from "./FilmsRating.ts";
import { FilmData } from "@/types/Films.ts";
export const usePagination = defineStore("pagination", {
  state: () => ({
    data: [] as FilmData[],
    itemsPerPage: 7 as number,
    currentPage: 1 as number,
  }),
  getters: {
    totalPages: function (): number {
      const res = useFilmsRating().data;
      return Math.ceil(res.length / this.itemsPerPage);
    },
  },
  actions: {
    async paginateData(): Promise<FilmData[]> {
      if (this.data.length === 0) {
        await useFilmsRating().getRating();
      }
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;

      return this.data = useFilmsRating().data.slice(start, end);
    },
    async Next() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        await this.paginateData();
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
          });
      }
    },
    async Prev() {
      if (this.currentPage > 1) {
        this.currentPage--;
        await this.paginateData();
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
          });
      }
    },
  },
});
