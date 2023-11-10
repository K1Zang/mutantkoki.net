<script setup>
import PageHeader from '../components/PageHeader.vue'
import TeamIntro from '../components/TeamIntro.vue'
import TezliveToken from '../components/TezliveToken.vue'
import AboutKoki from '../components/AboutKoki.vue'
import SlidingKokies from '../components/SlidingKokies.vue'
import KokiAdvantages from '../components/KokiAdvantages.vue'
import Line from '../components/Line.vue'
import KokiStory from '../components/KokiStory.vue'
</script>

<template>
  <main class="mb-16">
    <PageHeader />
    <SlidingKokies class="z-0 -mt-16" />

    <section class="text-justify m-auto flex flex-col items-center justify-center">
      <AboutKoki class="my-40 place-self-center" />

      <SlidingKokies reverse height="h-96" class="mt-[-2rem] md:block" />

      <KokiStory class="md:pb-0 pb-16" />

      <KokiAdvantages class="py-16 pb-32 w-full" />

      <TezliveToken />

      <TeamIntro class="w-full" />
      <!-- <Line /> -->
    </section>
  </main>
</template>
