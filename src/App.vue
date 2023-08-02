<template>
  <div class="app">
    <Filters/>
    <div>
      <RatingList />
    </div>
   
  </div>
</template>

<script lang="ts" setup>
import RatingList from "./components/RatingList.vue";
import Filters from "./components/Filters.vue";
</script>

<style scoped>
.app {
  margin: 0 auto;
  padding: 0;
  display: flex;
  width: 100%;

}
</style>
