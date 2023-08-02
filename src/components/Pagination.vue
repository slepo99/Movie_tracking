<template>
  <div class="pagination" v-if="pagination.data.length">
    <button class="btn" @click="pagination.Prev">
      <span> &lt </span>
    </button>
    <button class="btn" @click="pagination.Next">
      <span> > </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePagination } from "../store/Pagination";
const pagination = usePagination();
</script>

<style scoped lang="scss">
.pagination {
    width: 300px;
  display: flex;
  justify-content: space-evenly;
  .btn {
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    background-color: black;
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
    }
  }
}
</style>
