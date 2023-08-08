<template>
  <div>
    <div class="container">
      <div v-for="item in getFilmInfo" class="test">
        <img
          :src="`https://image.tmdb.org/t/p/w500/` + item.poster_path"
          alt=""
        />
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

const getFilmInfo = computed(() => {
  const data = films.data.filter((item) => item.id === parseInt(props.routeId));
  return data;
});
onMounted(() => {
  pagination.paginateData();
});
</script>
<style lang="scss" scoped>
.test {
  color: white;
}
</style>
