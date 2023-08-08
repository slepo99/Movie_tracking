<template >
    <div>
      <Menu/>
      <Film :routeId="routeId"/> 
    </div>
</template>
<script lang="ts" setup>
import Film from '../Film.vue';
import Menu from '../Menu.vue';
import { useRoute } from "vue-router";
const route = useRoute()
const routeId: string = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
</script>
<style lang="scss" scoped>
</style>