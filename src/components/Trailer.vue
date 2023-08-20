<template>
  <div class="wrapper">
    <iframe
      :src="`https://www.youtube.com/embed/${props.source}`"
      width="70%"
      height="400"
      frameborder="0"
      allowfullscreen
      modestbranding="0"
      showinfo="0"
    ></iframe>  
  </div>
</template>
<script setup lang="ts">
interface Props {
    source: string
}
const props = defineProps<Props>()
</script>
<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100%;
}
</style>
