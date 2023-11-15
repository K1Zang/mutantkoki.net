<script setup>
import { ref } from 'vue'
import Line from '../components/Line.vue'

defineProps({
  answer: String,
  question: String
})

let isShowAnswer = ref(false)
</script>

<template>
  <div @click="isShowAnswer = !isShowAnswer" class="w-full md:w-[50rem]">
    <p class="text-left py-6">
      <span>
        {{ question }}
      </span>
    </p>

    <Line v-show="isShowAnswer" class="" />

    <p class="text-left p-6 bg-black/50 text-neutral-400" v-show="isShowAnswer">{{ answer }}</p>

    <Line class="" />
  </div>
</template>
