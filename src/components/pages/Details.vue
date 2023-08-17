<template >
    <div>
      <Menu @toggleMenu="toggleMenu"/>
      <Film :routeId="routeId" :isOpen="isOpen"/> 
    </div>
</template>
<script lang="ts" setup>
import Film from '../Film.vue';
import Menu from '../Menu.vue';
import { useRoute } from "vue-router";
import { ref } from 'vue';
const route = useRoute()
const routeId: string = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const isOpen = ref(false)
function toggleMenu(item:boolean) {
  isOpen.value = item
}
</script>
<style lang="scss" scoped>
</style>