<template>
  <div>
    <div v-if="films.data.length === 0" class="spinner"><Spinner /></div>
    <div
      v-else-if="filteredFilms.length === 0 || searchFilm.length === 0"
      class="no-data"
    >
      <h1>No data found:(</h1>
    </div>
    <div class="container">
      <div class="item" v-for="(item, id) in searchFilm" :key="id">
        <div class="poster">
          <router-link :to="{ name: 'details', params: { id: item.id } }">
            <img
              :src="`https://image.tmdb.org/t/p/w200/` + item.poster_path"
              alt=""
            />
          </router-link>
        </div>
        <div class="title">
          <h6 class="name">{{ item.original_title }}</h6>
          <h6 class="year">({{ getDate(item.release_date) }})</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import { usePagination } from "@/store/Pagination";
import { useFilters } from "@/store/Filters";
import Spinner from "@/components/UI/Spinner.vue";
const films = usePagination();
const filters = useFilters();

function getDate(i: string) {
  const date = new Date(i);
  return date.getFullYear();
}
const filteredFilms = computed(() => {
  if (filters.selectedGenre === "All") {
    return films.data;
  } else {
    return films.data.filter((item) =>
      item.genres_list.includes(filters.selectedGenre)
    );
  }
});
const searchFilm = computed(() => {
  if (filters.inputValue == "") {
    return filteredFilms.value;
  } else {
    return filteredFilms.value.filter((item) =>
      item.original_title
        .toLocaleLowerCase()
        .includes(filters.inputValue.toLocaleLowerCase())
    );
  }
});
onMounted(() => {
  films.paginateData();
});
</script>
<style lang="scss" scoped>
.spinner {
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: center;
  height: 70vh;
}
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: gray;
    font-size: 50px;
  }
}
.container {
  display: grid;
  grid-template-columns: 15em 15em 15em 15em 15em;
  grid-template-rows: repeat(7, 22em);
  padding: 0 0 0 200px;
  align-items: stretch;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .poster {
      cursor: pointer;
      img {
        width: 190px;
        height: 280px;
        border-radius: 8px;
      }
    }
    .poster:hover img {
      width: 210px;
      height: 300px;
      position: relative;
    }

    .title {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 80%;
      flex-wrap: wrap;
      height: 40px;
      h6 {
        font-size: 12px;
        margin: 8px 0 0 0;
        color: rgba(234, 234, 234, 1);
        font-weight: 400;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      }
    }
  }
}
</style>
