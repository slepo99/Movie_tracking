<template>
  <div class="container">
    <Menu/>
    <FilmList/>
  </div>
</template>
<script setup lang="ts">
import { usePagination } from "@/store/Pagination";
import { onMounted } from "vue";
import Menu from '@/components/Menu.vue'
import FilmList from '../FilmList.vue'
const data = usePagination();
onMounted(() => {
  data.paginateData();
});
</script>
<style lang="scss">
.container {
  display: flex;
}
</style>
