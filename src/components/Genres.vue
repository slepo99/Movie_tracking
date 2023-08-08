<template>
  <div class="filters_container" v-if="isMainPage">
    <h2>Genres</h2>
    <div class="checkbox" v-for="item in genres.genres" :key="item.id">
      <input
        type="button"
        :id="String(item.id)"
        :value="item.name"
        @click="selectGenre(item.name)"
      />
    </div>
    <h1 style="color: aliceblue"></h1>
  </div>
</template>
<script lang="ts" setup>
import { useGenres } from "@/store/Genres";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();
const genres = useGenres();
const emit = defineEmits();

function selectGenre(genre: string) {
  emit("selectGenre", genre);
}
const isMainPage = computed(() => {
  return router.name === "main" ? true : false;
});
onMounted(() => {
  genres.getGenres();
});
</script>
<style lang="scss" scoped>
.filters_container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 260px;
  margin: 0 0 0 2vw;
  gap: 3px;
  h2 {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 500;
  }
  .checkbox {
    input {
      color: rgba(255, 255, 255, 0.5);
      background-color: rgba(8, 8, 8, 1);
      width: 160px;
      height: 35px;
      border-radius: 8px;
      font-family: "SF Pro Display", sans-serif;
      border: none;
      cursor: pointer;
      text-align: start;
      font-size: 13px;
    }
    input:hover {
      background-color: rgba(255, 255, 255, 0.5);
      width: 180px;
      height: 43px;
      font-size: 15px;
      color: rgb(255, 255, 255);
      font-weight: 600;
    }
  }
}
</style>
