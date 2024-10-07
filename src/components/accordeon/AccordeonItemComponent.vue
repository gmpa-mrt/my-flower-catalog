<template>
  <li class="w-full ">
    <button class="relative underline-left text-left z-10 pl-4 w-full text-4xl" @click="toggle">
      {{ title }}
    </button>
      <div :class="`accordeon ${show ? 'open' : 'close'}`">
        <slot/>
      </div>
    </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String
})

const show = ref(false)
const toggle = () => show.value = !show.value

</script>