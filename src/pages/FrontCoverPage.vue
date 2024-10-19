<template>
  <h1>Front Cover</h1>
</template>

<script setup>
// Set up IndexDB and Pinia
import {onMounted, ref} from "vue";
import {createDb} from "@/composables/db/createDb.js";
import TitleComponent from "@components/TitleComponent.vue";
import AccordeonItemComponent from "@components/accordeon/AccordeonItemComponent.vue";

const db = ref(null)

const initDb = async () => db.value = await createDb()

onMounted(() => {
  const setupDb = async () => initDb()
  setupDb();
})

</script>

<style scoped>

</style>