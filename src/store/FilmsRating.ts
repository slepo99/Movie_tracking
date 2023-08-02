import { defineStore } from "pinia";
import axios from "axios";
import {
  movieApiKey,
  movieApiUrl,
  genreApiUrl,
  creditsApiUrl,
  trailerApiUrl,
} from "../Api/API";
import { FilmData } from "@/types/Films.ts";
import { Genres } from "@/types/Genres.ts";
import { Credits } from "@/types/Casts";
export const useFilmsRating = defineStore("filmsRating", {
  state: () => ({
    data: [] as FilmData[],
    genres: [] as Genres[],
    credits: [] as Credits[],
  }),
  actions: {
    async getRating() {
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
        for (let item of results) {
          const posterUrl: string = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
          item.poster_path = posterUrl;
        }
      }
    },
    async getGenre() {
      if (this.data.length === 0) {
        await this.getRating();
      }
      const response = await axios.get(genreApiUrl, {
        headers: {
          accept: "application/json",
          Authorization: movieApiKey,
        },
      });
      this.genres.push(...response.data.genres);
    },
    async addGenreToData() {
      await this.getGenre();
      this.data.map((movie) => {
        const gen = this.genres
          .filter((genre) => movie.genre_ids.includes(genre.id))
          .map((genre) => genre.name);
        movie.film_genres = gen.slice(gen.length / 2);
      });
    },
    // async getCredits() {
    //   await this.addGenreToData()
    //   const ids =  this.data.map((item) =>  (item.id))
    //   for(let i = 0; i < ids.length; i++) {
    //     const response = await axios.get(creditsApiUrl(ids[i]), {
    //       headers: {
    //         accept: "application/json",
    //         Authorization: movieApiKey,
    //       },
    //     })
    //     this.credits.push(response.data)
    //   }
    // },
    async getCredits() {
      await this.addGenreToData();
      const ids = this.data.map((item) => item.id);
      const creditPromises = ids.map((id) =>
        axios.get(creditsApiUrl(id), {
          headers: {
            accept: "application/json",
            Authorization: movieApiKey,
          },
        })
      );
      try {
        const responses = await Promise.all(creditPromises);
        this.credits.push(
          ...responses.map((response) => ({
            id: response.data.id,
            cast: response.data.cast.splice(0, 4),
            crew: response.data.crew.splice(0, 4),
          }))
        );
      } catch (error) {
        console.error("error", error);
      }
    },

    async addCreditsToData() {
      await this.getCredits();
      this.data.map((movie) => {
        const casts = this.credits
          .filter((item) => movie.id === item.id)
          .map((item) => item);
        movie.credits = casts;
      });
    },
    async getTrailer() {
      await this.addCreditsToData();
      const ids = this.data.map((item) => item.id);
      for (let i = 0; i < ids.length; i++) {
        const response = await axios.get(trailerApiUrl(ids[i]), {
          headers: {
            accept: "application/json",
            Authorization: movieApiKey,
          },
        });
        const res = response.data;

        this.data.map((item) => {
          if (item.id == res.id) {
            const trailer = res.results.filter((i: any) => {
              return i.type === "Trailer" && i.name === "Official Trailer";
            });
            if (trailer.length === 0) {
              const fallbackTrailer = res.results.find(
                (i: any) => i.type === "Trailer"
              );
              if (fallbackTrailer) {
                trailer.push(fallbackTrailer);
              }
            }
            item.trailer = trailer;
          }
        });
      }
    },
  },
});
