<script setup>
defineProps({
  name: String,
  description: String,
  title: String
})
</script>

<template>
  <div class="m-4 p-4 bg-black flex justify-center items-center">
    <img class="mt-4 bg-black h-24 object-cover rounded-full" src="./../assets/pic-yunus.jpg" />

    <div class="text-left ml-4 flex flex-col space-y-4 leading-6">
      <h1 class="text-xl">
        <span class="capitalize text-xl">
          {{ name }}
        </span>
        <span class="mx-4 text-neutral-400 text-base">{{ title }}</span>
      </h1>
      <p class="">
        {{ description }}
      </p>
    </div>
  </div>
</template>
