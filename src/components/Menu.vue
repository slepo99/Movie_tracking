<template>
  <div class="container_menu">
    <div class="title">
      <img src="../assets/images/main-title.svg" alt="" />
    </div>
    <div class="search-input">
      <input type="text" placeholder="Search" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.container_menu {
  height: 100vh;
  width: 320px;
  left: 0;
  top: 0;
  position: absolute;
  background-color: rgba(8, 8, 8, 1);
  .title {
    width: 150px;
    height: 30px;
    margin: 5vh 0 0 3vw;
    img {
      width: 150px;
      height: 30px;
    }
  }
  .search-input {
    width: 260px;
    height: 44px;
    margin: 3vh 0 0 1vw;

    input {
      border-radius: 8px;
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
}
</style>
