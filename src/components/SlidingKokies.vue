<script setup>
import { ref } from 'vue'
const props = defineProps({
  height: String,
  reverse: Boolean
})
</script>

<template>
  <div class="flex overflow-hidden">
    <div v-if="reverse" class="slider r_to_l">
      <div :class="(height ?? 'h-16') + ' slider_inner'">
        <img class="object-cover" src="./../assets/kokis-1.jpg" />
      </div>
      <div :class="(height ?? 'h-16') + ' slider_inner'">
        <img class="object-cover" src="./../assets/kokis-2.jpg" />
      </div>
    </div>

    <div v-else class="slider l_to_r">
      <div :class="(height ?? 'h-16') + ' slider_inner'">
        <img class="object-cover" src="./../assets/kokis-2.jpg" />
        <img class="object-cover" src="./../assets/kokis-1.jpg" />
        <img class="object-cover" src="./../assets/kokis-2.jpg" />
        <img class="object-cover" src="./../assets/kokis-1.jpg" />
        <img class="object-cover" src="./../assets/kokis-1.jpg" />
        <img class="object-cover" src="./../assets/kokis-2.jpg" />
        <img class="object-cover" src="./../assets/kokis-1.jpg" />
      </div>
      <div :class="(height ?? 'h-16') + ' slider_inner'">
        <img class="object-cover" src="./../assets/kokis-2.jpg" />
        <img class="object-cover" src="./../assets/kokis-1.jpg" />
        <img class="object-cover" src="./../assets/kokis-2.jpg" />
        <img class="object-cover" src="./../assets/kokis-1.jpg" />
        <img class="object-cover" src="./../assets/kokis-1.jpg" />
        <img class="object-cover" src="./../assets/kokis-2.jpg" />
        <img class="object-cover" src="./../assets/kokis-1.jpg" />
      </div>
    </div>
  </div>
</template>

<style>
.slider {
  display: flex;
  width: 100vw;
}
.slider_inner {
  min-width: 100vw;
  display: flex;
}

.r_to_l .slider_inner:first-of-type {
  animation: reverse-loop 50s -25s linear infinite;
}
.r_to_l .slider_inner:last-of-type {
  animation: reverse-loop2 50s linear infinite;
}

@keyframes reverse-loop {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes reverse-loop2 {
  0% {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
}

.l_to_r .slider_inner:first-of-type {
  animation: loop 50s -25s linear infinite;
}
.l_to_r .slider_inner:last-of-type {
  animation: loop2 50s linear infinite;
}

@keyframes loop {
  0% {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes loop2 {
  0% {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
