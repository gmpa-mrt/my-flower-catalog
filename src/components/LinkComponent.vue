<template>
  <router-link :to="link" class="
      capitalize text-4xl text-white-300
      underline-left
      hover:text-black-100
  ">
    {{text}}
  </router-link>
</template>

<script setup>
  import {ref} from "vue";

  const props = defineProps({
    link: String,
    text: String
  })

  const link = ref(props.link)
  const text = ref(props.text)
</script>

<style scoped>

</style>