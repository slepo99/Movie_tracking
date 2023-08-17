<template>
  <div class="container" :class="{open: props.isOpen}">
    <div v-for="item in getFilmInfo">
      <h1 class="title">{{ item.original_title }}</h1>
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
          <div class="rating">
            <p>
              IMDB Rating:{{ voteAverage(item.vote_average)
              }}<span class="material-symbols-outlined"> star </span>
            </p>
          </div>
          <div class="year">
            <p>Year: {{ getDate(item.release_date) }}</p>
          </div>
          <div
            class="country"
            v-for="(county, id) in item.production_countries"
            :key="id"
          >
            <p>Country: {{ county.name }}</p>
          </div>
          <div>
            <p>Budget: {{ getBudget(item.budget) }}</p>
          </div>
          <div class="overview">
            <p>{{ item.overview }}</p>
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
  isOpen: boolean
}
const props = defineProps<Props>();
const pagination = usePagination();
const films = useFilms();

const getFilmInfo = computed(() => {
  const data = films.data.filter((item) => item.id === parseInt(props.routeId));
  return data;
});

function voteAverage(item: number) {
  return `${item.toFixed(1)} / 10`;
}
function getDate(i: string) {
  const date = new Date(i);
  return date.getFullYear();
}
 function getBudget(item: number) {
  if (item !== undefined && item !== null) {
    return item.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
}

onMounted(() => {
  pagination.paginateData();
  console.log(props.isOpen);
  
});
</script>
<style lang="scss" scoped>
.container {
  width: 80%;
  height: 100%;
  position: absolute;
  transition: width 0.3s ease;
  top: 0;
  right: 0;
  z-index: 1;
  
  .title {
    color: white;
    margin: 0;
    padding: 50px 0 0 50px;
    text-align: start;
  }
  &_movie {
    display: flex;
    padding: 50px 0 0 50px;
    gap: 50px;
    .image-box {
      height: 320px;
      width: 210px;

      img {
        height: 350px;
        width: 230px;
        border-radius: 12px;
      }
    }
    .info-box {
      width: 600px;
      height: 350px;
      display: flex;
      flex-direction: column;
      color: white;
      justify-content: space-between;
      .genres {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
      .rating {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
          margin: 0;
          display: flex;
          align-items: center;
          text-align: center;
        }
      }
    }
  }
}
.open {
    width: 90%;
    transition: width 0.3s ease;
  }
</style>
