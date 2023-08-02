<template>
  <div class="filters_container">
    <div class="checkbox" v-for="(item, id) in films.genres" :key="id">
      <input
        type="checkbox"
        name=""
        :id="String(item.id)"
        :value="item.name"
        v-model="selectedGenres"
      />
      <label :for="String(item.id)">{{ item.name }}</label>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useFilmsRating } from "../store/FilmsRating";
import { ref } from "vue";
const films = useFilmsRating();
const selectedGenres = ref([])
</script>
<style lang="scss" scoped>
.filters_container {
  position: absolute;
  left: 0;
  top: 0;
  margin: 30vh 0 0 10vw;
  height: 50vh;
  width: 15vw;
}
</style>
