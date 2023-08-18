<template>
  <div class="search-input">
    <input type="text" placeholder="Search" v-model="filter.inputValue"/>
  </div>
</template>
<script setup lang="ts">
import { useFilters } from '@/store/Filters';
const filter = useFilters()
</script>
<style scoped lang="scss">
.search-input {
  width: 260px;
  transition: width 0.3s ease;
  height: 44px;
  margin: 3vh 0 0 1vw;

  input {
    border-radius: 8px;
    transition: width 0.2s ease;
    width: 230px;
    height: 34px;
    text-decoration: none;
    background-color: rgba(8, 8, 8, 1);
    border: 3px solid rgb(13, 13, 13);
    background: url("../assets/icons/s.svg");
    background-repeat: no-repeat;
    background-position: left center;
    background-position-x: 10px;
    text-align: center;
  }
  input::placeholder {
    text-indent: -50px;
    transition: width 0.3s ease;
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
  }
  input,
  select,
  textarea {
    color: white;
    font-size: 16px;
  }
  input:focus {
    outline: none;
    border: 2px solid #fff;
  }
}
.container_menu.some {
  .search-input {
    width: 0px;
    height: 0px;
    z-index: -1;
    transition: width 0.2s ease;

    input {
      background: none;
      transition: width 0.2s ease;
      width: 0px;
      height: 34px;
      text-decoration: none;
      border: none;
    }
    input::placeholder {
      font-size: 16px;
      transition: width 0.3s ease;
    }
    input,
    select,
    textarea {
      transition: width 0.3s ease;
      color: white;
      font-size: 16px;
      transition: width 0.3s ease;
    }
    input:focus {
      outline: none;
      border: 2px solid #fff;
      transition: width 0.3s ease;
    }
  }
}
</style>
