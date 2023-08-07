<template>
  <div class="container">
    <Menu/>
    <FilmList/>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Menu from '@/components/Menu.vue'
import FilmList from '../FilmList.vue'

onMounted(() => {
 // data.paginateData();
});
</script>
<style scoped lang="scss">

</style>
