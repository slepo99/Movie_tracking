<template>
  <div class="container">
    <div v-for="item in getFilmInfo">
      <div class="container_movie">
        <div class="image-box">
          <img
            class="image"
            :src="`https://image.tmdb.org/t/p/w300/` + item.poster_path"
            alt=""
          />
        </div>
        <div class="info-box">
          <div class="genres">
            <div v-for="genre in item.genres" :key="genre.id">
              <p>{{ genre.name }}</p>
            </div>
          </div>
          <div class="overview">
            <p>{{ item.overview }}</p>
          </div>
          <div class="rating">
            <p>IMDB Rating {{ voteAverage(item.vote_average) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFilms } from "@/store/Films";
import { usePagination } from "@/store/Pagination";
import { computed, onMounted } from "vue";
interface Props {
  routeId: string;
}
const props = defineProps<Props>();
const pagination = usePagination();
const films = useFilms();
function voteAverage(item: number) {
  return `${item.toFixed(1)} / 10`;
}
const getFilmInfo = computed(() => {
  const data = films.data.filter((item) => item.id === parseInt(props.routeId));
  return data;
});

onMounted(() => {
  pagination.paginateData();
});
</script>
<style lang="scss" scoped>
.container {
  width: 80vw;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  &_movie {
    display: flex;
    padding: 50px 0 0 50px;
    gap: 50px;
    .image-box {
      height: 320px;
      width: 210px;

      img {
        height: 300px;
        width: 200px;
        border-radius: 12px;
      }
    }
    .info-box {
      width: 700px;
      display: flex;
      flex-direction: column;
      color: white;
      .genres {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 5px;
        div {
          width: 100px;
          max-width: 200px;
          height: 50px;
          border-radius: 40px;
          border: 1px solid white;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          p {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
