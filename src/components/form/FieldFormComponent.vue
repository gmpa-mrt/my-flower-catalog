<template>
  <label :for="linkInput" class="relative flex flex-col capitalize text-red-900 w-100">
    <span class="flex gap-x-3">
      {{ label }}
      <img
          v-if="needTooltip"
          v-on:mouseenter="toggle"
          v-on:mouseleave="toggle"
          :src="info"
          alt="ìnfo"
          class="h-5 w-5 opacity-50 transition-opacity duration-700 hover:opacity-100"
      >
    </span>
    <slot name="input"/>
    <span v-if="needTooltip" :class="`absolute -right-5 bottom-14 z-50 flex h-0 justify-center px-4 rounded text-red-700 shadow duration-700 transition-[height] text-[9px] bg-white-200 ${display ?'h-10' : 'delay-300 h-0'}`">
      <span :class="`text-red-700 font-info transition-opacity ${display ? 'opacity-100 delay-300 py-2' : 'opacity-0 py-2'}`">
        This password is not encrypted and may be insecure. <br>
        Avoid using sensitive information.
      </span>
    </span>
  </label>
</template>

<script setup>
import info from '@/assets/svg/info.svg'
import {ref} from "vue";

defineProps({
  linkInput: String,
  label: String,
  needTooltip: Boolean
})

const display = ref(false)

const toggle = () => display.value = !display.value

</script>

<style scoped>

</style>