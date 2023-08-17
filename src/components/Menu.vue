<template>
  <div class="container_menu" :class="{ some: isOpen }">
    <div class="main-content">
      <div class="title">
        <router-link to="/">
          <img src="../assets/icons/logo.svg" alt="" />
        </router-link>
      </div>
      <div class="search-input">
        <input type="text" placeholder="Search" />
      </div>
      <div class="navigation">
        <router-link to="/" class="link"
          ><button class="home btn">
            <span class="text">Home</span>
          </button></router-link
        >
        <button class="lib btn"><span class="text">Library</span></button>
        <button class="friends btn"><span class="text">Friends</span></button>
      </div>
      <hr class="vertical" />
      <div>
        <Genres />
      </div>
    </div>
    <div class="dropdown" @click="toggleMenu" v-if="isMain">
      <span class="material-symbols-outlined"> menu </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import Genres from "@/components/Genres.vue";
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";

const router = useRoute();
const emit = defineEmits();
const isOpen = ref(false);

const isMain = computed(() => {
  return router.name !== "main";
});
function toggleMenu() {
  isOpen.value = !isOpen.value;
  emit("toggleMenu", isOpen.value);
}
function setMenuState() {
  if (router.name !== "main") {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
}
onMounted(() => {
  setMenuState();
  emit("toggleMenu", isOpen.value);
});
</script>
<style scoped lang="scss">
.container_menu {
  min-height: 100vh;
  transition: width 0.3s ease;
  width: 20%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: rgba(8, 8, 8, 1);
  display: flex;
  z-index: 2;
  .dropdown {
    top: 0;
    position: inherit;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 2px;

    .material-symbols-outlined {
      font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 300, "opsz" 48;
      color: white;
      font-weight: 700;
      transform: rotate(90deg) scaleY(-1) scaleX(5);
      cursor: pointer;
    }
    .material-symbols-outlined:hover {
      color: black;
    }
  }
  .dropdown:hover {
    background-color: rgb(255, 255, 255);
    .material-symbols-outlined {
      font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 300, "opsz" 48;
      font-weight: 700;
      color: black;
    }
  }
  .title {
    width: 150px;
    transition: width 0.3s ease;
    height: 30px;
    margin: 5vh 0 0 3vw;
    img {
      width: 150px;
      height: 30px;
      transition: width 0.3s ease;
    }
  }
  .search-input {
    width: 260px;
    transition: width 0.3s ease;
    height: 44px;
    margin: 3vh 0 0 1vw;

    input {
      border-radius: 8px;
      transition: width 0.3s ease;
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
  .navigation {
    display: flex;
    flex-direction: column;
    width: 260px;
    transition: width 0.3s ease;
    margin: 3vh 0 0 1vw;
    align-items: center;
    gap: 20px;

    .btn {
      border-radius: 8px;
      width: 240px;
      height: 44px;
      transition: width 0.3s ease;
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
      text-decoration: none;
    }
    .link {
      text-decoration: none;
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
  .vertical {
    width: 260px;
    transition: width 0.3s ease;
    margin-top: 20px;
    background-color: rgb(31, 31, 31);
    height: 2px;
    border: none;
  }
}

.container_menu.some {
  min-height: 100vh;
  transition: width 0.3s ease;
  width: 24px;
  left: 0;
  top: 0;
  position: absolute;
  background-color: rgba(8, 8, 8, 1);
  overflow: hidden;
  z-index: 101;
  position: absolute;
  .title {
    width: 0px;
    transition: width 0.3s ease;
    height: 30px;
    margin: 5vh 0 0 3vw;
    img {
      width: 0px;
      height: 30px;
      transition: width 0.3s ease;
    }
  }
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
  .navigation {
    display: flex;
    flex-direction: column;
    width: 0px;
    margin: 3vh 0 0 1vw;
    align-items: center;
    transition: width 0.3s ease;
    gap: 20px;

    .btn {
      transition: width 0.3s ease;
      font-size: 0;
    }
    .link {
      transition: width 0.3s ease;
      text-decoration: none;
    }
    .text {
      transition: width 0.3s ease;
      display: inline-block;
    }
    .btn:hover {
      transition: width 0.3s ease;
      background: rgb(31, 31, 31);
    }
    .btn:hover .text {
      transition: width 0.3s ease;
      transform: translateX(-50px);
    }

    .home {
      transition: width 0.3s ease;
      background: url("../assets/icons/home.svg");
      background-repeat: no-repeat;
      background-position: left center;
      background-position-x: 0px;
      text-align: center;
    }
    .lib {
      transition: width 0.3s ease;
      background: url("../assets/icons/library.svg");
      background-repeat: no-repeat;
      background-position: left center;
      background-position-x: 0px;
      text-align: center;
    }
    .friends {
      transition: width 0.3s ease;
      background: url("../assets/icons/friends.svg");
      background-repeat: no-repeat;
      background-position: left center;
      background-position-x: 0px;
      text-align: center;
    }
  }
  hr {
    transition: width 0.3s ease;
    width: 0px;
    margin-top: 20px;
    background-color: rgb(31, 31, 31);
    height: 2px;
    border: none;
    transition: width 0.2s ease;
  }
}
</style>
