<template>
   <div class="pagination" v-if="pagination.data.length">
      <button @click="pagination.Prev">Prev</button>
      <button @click="pagination.Next">Next</button>
    </div>
</template>

<script setup lang="ts">
    import { usePagination } from "../store/Pagination.ts"
    const pagination = usePagination();
</script>

<style>

</style>