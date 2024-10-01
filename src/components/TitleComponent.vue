<template>
  <div class="flex flex-col items-center gap-8 my-20">
    <h1 class="text-6xl md:text-8xl font-vibes capitalize">{{title}}</h1>
    <img :src="line" alt="">
  </div>
</template>

<script setup>
import line from '@/assets/icons/line.svg'
import {ref} from "vue";

const props = defineProps({
  title: String
})
console.log('Image ===> ', line)
const title = ref(props.title)

</script>

<style scoped>

</style>