<template>
  <title-component title="my diary"/>
  <nav class="mx-10">
    <ul class="flex w-full flex-col items-center gap-9">
      <li>
        <link-component to="/table-contents" text="table of contents"/>
      </li>
      <li>
        <link-component to="/list-page/plants" text="catalog"/>
      </li>
      <li>
        <link-component to="/my-notes" text="my notes"/>
      </li>
      <li>
        <link-component to="/front-cover" text="Close"/>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import LinkComponent from "@components/LinkComponent.vue";


</script>

<style scoped>


</style>
