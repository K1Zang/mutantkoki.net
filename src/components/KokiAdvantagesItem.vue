<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="md:m-4 flex flex-col bg-black p-4 h-fit md:w-fit items-center max-w-[60rem]">
    <h1 class="place-self-start mr-4 font-serif text-2xl">{{ title }}</h1>

    <p class="">{{ description }}</p>
  </div>
</template>
