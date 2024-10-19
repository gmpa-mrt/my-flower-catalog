<template>
  <input
      class="w-full rounded-lg bg-white-50 py-1 px-3"
      :type="type"
      value="Hibou"
  >
</template>

<script setup>
defineProps({
  type: String
})
</script>

<style scoped>

</style>