<template>
    <router-link :to="`/list-page/${id}`" class="w-80 h-96 relative">
      <img :src="cross_1" alt="" class="absolute -top-8 -right-8 z-50">
      <img :src="cross_2" alt="" class="absolute -bottom-8 -left-8 z-50">
      <slot/>
    </router-link>
</template>

<script setup>
import cross_1 from "@assets/svg/cross_1.svg";
import cross_2 from "@assets/svg/cross_2.svg";
import {ref} from "vue";

const props = defineProps({
  index: Number
})

const id = ref( 1)

</script>

<style scoped>

</style>