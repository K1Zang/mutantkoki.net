<script setup>
import PageHeader from '../components/PageHeader.vue'
import AboutKoki from '../components/AboutKoki.vue'
import SlidingKokies from '../components/SlidingKokies.vue'
import KokiAdvantages from '../components/KokiAdvantages.vue'
import Line from '../components/Line.vue'
import KokiStory from '../components/KokiStory.vue'
</script>

<template>
  <main>
    <PageHeader>
      <section
        style="max-width: 50rem"
        class="space-y-16 m-auto p-4 flex flex-col items-center justify-center"
      >
        <AboutKoki class="mt-24" />

        <Line />

        <KokiStory />

        <KokiAdvantages />
        <!-- <SlidingKokies /> -->
      </section>
    </PageHeader>
  </main>
</template>
