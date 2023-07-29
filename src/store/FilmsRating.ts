import { defineStore } from "pinia";
import axios from "axios";
import { movieApiKey, movieApiUrl } from "../Api/API";
import { FilmData } from "@/types/Films.ts";

export const useFilmsRating = defineStore("filmsRating", {
  state: () => ({
    data: [] as FilmData[],
  }),
  actions: {
    async getRating() {
      const totalPages: number = 3;
      let responses: any[] = [];
      for (let i = 0; i < totalPages; i++) {
        const response = await axios.get(movieApiUrl, {
          params: {
            page: i + 1,
          },
          headers: {
            accept: "application/json",
            Authorization: movieApiKey,
          },
        });
        responses.push(response);
      }

      for (const res of responses) {
        let results = res.data.results;
        this.data.push(...results);
        for (let item of results) {
          const posterUrl: string = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
          item.poster_path = posterUrl;
        }
      }
    },
  },
});
