import { defineStore } from "pinia";
import axios from "axios";
import { movieApiKey, movieApiUrl, detailedApiUrl } from "@/services/links/api/API";
import { FilmData } from "@/types/Films";

export const useFilms = defineStore("films", {
  state: () => ({
    data: [] as FilmData[],
  }),
  actions: {
    async getFilms() {
      const totalPages: number = 2;
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
      }
    },

    async getDetails() {
      await this.getFilms();
      const params = {
        headers: {
          accept: "application/json",
          Authorization: movieApiKey,
        },
      };
      const filmIds: number[] = this.data.map((item) => item.id);
      const detailResponses = await Promise.all(
        filmIds.map((filmId) => axios.get(detailedApiUrl(filmId), params))
      );

      const updatedData = detailResponses.map((response) => response.data);

      updatedData.forEach((item) => {
        if (item.credits) {
          item.credits.cast.splice(3);
          item.credits.crew.splice(3);
        }
        if (item.videos.results) {
         (item.videos.results = item.videos.results.filter((i: { type: string; }) => i.type === 'Trailer' || i.type === 'Teaser')).splice(1)
        }
      });
      updatedData.map((item) => {
        const genres = item.genres.map((i: { name: string }) => i.name);
        item.genres_list = genres;
      });

      this.data = updatedData;
    },
  },
});
