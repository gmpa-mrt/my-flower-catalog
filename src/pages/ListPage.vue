<template>
  <title-component title="list of plants"/>
  <main>
    <div class="mx-4 flex grid-cols-2 flex-col items-center justify-items-center gap-12 md:grid lg:grid-cols-3 xl:grid-cols-4">
      <frame-component v-for="(item, index) in flowers" :index="index">
        <img :src="firstOne.image" alt="" :class="`h-full w-full object-cover object-center grayscale`">
      </frame-component>
    </div>
  </main>
</template>

<script setup>
import TitleComponent from "@components/TitleComponent.vue";
import img from "@assets/test/img_01.jpg"
import FrameComponent from "@components/FrameComponent.vue";
import {computed, reactive, ref} from "vue";
import {flowerData} from "@/data/data.js";

// Calcule de la ligne et du nombre d'elements pour placement dans la grid data in object


const flowers = reactive(flowerData.flowers)
const firstOne = computed(() => flowers[0])

</script>

<style scoped>

</style>