import { defineStore } from "pinia";
import axios from "axios";
import { genreApiUrl, movieApiKey } from "@/services/links/api/API";
import { Genres } from "@/types/Genres";
export const useGenres = defineStore("genres", {
  state: () => ({
    genres: [] as Genres[],
  }),
  actions: {
    async getGenres() {
      const params = {
        headers: {
          accept: "application/json",
          Authorization: movieApiKey,
        },
      };
      const response = await axios.get(genreApiUrl, params)
      this.genres = response.data.genres
      const all = {
        id: 1, 
        name: 'All'
      }
      this.genres.unshift(all)
    },
  },
});
