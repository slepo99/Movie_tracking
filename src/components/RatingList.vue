<template>
  <div class="container">
    <div v-for="(film, id) in pagination.data" :key="id">
      <div class="container_item">
        <div class="poster-box">
          <img
            loading="lazy"
            :src="film.poster_path"
            :alt="film.title"
            class="poster"
          />
        </div>
        <div class="information">
          <h1>{{ film.title }}</h1>
          <ul class="params">
            <li>Year: {{ film.release_date }}</li>
            <div class="genres">
              Genre:&nbsp
              <li v-for="(genre, index) in film.film_genres" :key="index">
                {{ genre}} 
              <span v-if="index !== film.film_genres.length - 1">, </span>
              </li>
            </div>

            <li>
              Age rating:
              <span v-if="film.adult">18+</span>
              <span v-else>12+</span>
            </li>
            <li>Language: {{ film.original_language.toUpperCase() }}</li>
          </ul>
          <div class="description">
            <h2>{{ film.overview }}</h2>
          </div>
        </div>
      </div>
      <hr v-if="id !== pagination.data.length - 1" />
    </div>
    <Pagination />
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { usePagination } from "../store/Pagination.ts";
import Pagination from "./Pagination.vue";
import { useFilmsRating } from "../store/FilmsRating.ts";
const pagination = usePagination();
const film = useFilmsRating()
onMounted(() => {
  pagination.paginateData();

});
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  backdrop-filter: blur(15px);
  width: 750px;
  align-items: center;
  -webkit-box-shadow: 10px 13px 10px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 10px 13px 10px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 13px 10px 2px rgba(0, 0, 0, 0.4);

  &_item {
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    gap: 20px;
    margin: 30px;
    padding-top: 40px;
    .poster-box {
      height: 350px;
      width: auto;
      border-color: #666 #8ebf42;
      border-image: none;
      border-radius: 50px 0 50px 0;
      border-style: solid;
      border-width: 20px;
    }
    .poster {
      width: 230px;
      height: 350px;
    }
    .information {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h1 {
        font-size: 27px;
        line-height: 32px;
        margin: 0;
        font-weight: 500;
        color: #0e0a0a;
      }
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      .params {
        .genres {
          display: flex;
        }
      }
      .description {
        h2 {
          font-size: 20px;
          line-height: 22px;
          margin: 0;
          font-weight: 300;
          color: #0e0a0a;
        }
      }
    }
  }
  hr {
    width: 80%;
    background-color: black;
    height: 4px;
    border: 1.3px solid black;
    border-radius: 14px;
  }
}
</style>
