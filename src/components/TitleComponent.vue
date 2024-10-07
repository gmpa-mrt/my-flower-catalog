<template>
  <div class="flex flex-col items-center gap-8 my-20">
    <h1 class="text-6xl md:text-8xl font-vibes capitalize">{{title}}</h1>
    <svg class="w-full" width="547" height="83" viewBox="0 0 547 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="line" d="M1 60.2312C103.985 15.534 305.751 -47.0423 288.941 60.2312" stroke="#292827"/>
      <path class="line" d="M546.231 22.7688C443.247 67.466 241.48 130.042 258.291 22.7688" stroke="#292827"/>
    </svg>
  </div>
</template>

<script setup>
import line from '@/assets/icons/line.svg'
import {ref} from "vue";

const props = defineProps({
  title: String
})
const title = ref(props.title)

</script>

<style scoped>
.line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

.line:nth-child(1) {
  animation: drawLineLeft 1.5s forwards ease-in-out;
}

.line:nth-child(2) {
  animation: drawLineRight 1.5s  forwards ease-in-out;
}

@keyframes drawLineLeft {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes drawLineRight {
  from {
    stroke-dashoffset: -1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>