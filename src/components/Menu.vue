<template>
  <div class="container_menu">
    <div class="title">
      <img src="../assets/icons/logo.svg" alt="" />
    </div>
    <div class="search-input">
      <input type="text" placeholder="Search" />
    </div>
    <div class="navigation">
      <button class="home btn"><span class="text">Home</span></button>
      <button class="lib btn"><span class="text">Library</span></button>
      <button class="friends btn"><span class="text">Friends</span></button>
    </div>
    <hr>
    <div>
      <Genres/>
    </div>
   
  </div>
</template>
<script setup lang="ts">
import  Genres  from '@/components/Genres.vue';
</script>
<style scoped lang="scss">
.container_menu {
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
  .navigation {
    display: flex;
    flex-direction: column;
    width: 260px;
    margin: 3vh 0 0 1vw;
    align-items: center;
    gap: 20px;

    .btn {
      border-radius: 8px;
      width: 240px;
      height: 44px;
      text-decoration: none;
      background-color: rgba(8, 8, 8, 1);
      border: 3px solid rgb(13, 13, 13);
      color: white;
      text-indent: -50px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
    }
    .text {
      display: inline-block;
    }
    .btn:hover {
      background: rgb(31, 31, 31);
    }
    .btn:hover .text {
      transform: translateX(-50px);
    }

    .home {
      background: url("../assets/icons/home.svg");
      background-repeat: no-repeat;
      background-position: left center;
      background-position-x: 0px;
      text-align: center;
    }
    .lib {
      background: url("../assets/icons/library.svg");
      background-repeat: no-repeat;
      background-position: left center;
      background-position-x: 0px;
      text-align: center;
    }
    .friends {
      background: url("../assets/icons/friends.svg");
      background-repeat: no-repeat;
      background-position: left center;
      background-position-x: 0px;
      text-align: center;
    }
  }
  hr {
    width: 260px;
    margin-top: 20px;
    background-color: rgb(31, 31, 31);
    height: 2px;
    border: none;
  }
}
</style>
