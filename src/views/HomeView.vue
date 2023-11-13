<script setup>
import PageHeader from '../components/PageHeader.vue'
import Footer from '../components/Footer.vue'
import RoadMap from '../components/RoadMap.vue'
import TeamIntro from '../components/TeamIntro.vue'
import TezliveToken from '../components/TezliveToken.vue'
import AboutKoki from '../components/AboutKoki.vue'
import SlidingKokies from '../components/SlidingKokies.vue'
import KokiAdvantages from '../components/KokiAdvantages.vue'
import KokiStory from '../components/KokiStory.vue'
import FreqAskeQues from '../components/FreqAskeQues.vue'
</script>

<template>
  <main class="mb-16">
    <PageHeader />
    <SlidingKokies class="z-0 -mt-16" />

    <section class="text-justify m-auto flex flex-col items-center justify-center">
      <AboutKoki class="my-40 place-self-center" />

      <SlidingKokies reverse height="md:h-96" class="mt-[-2rem] md:block" />

      <KokiStory class="md:pb-0 pb-16" />

      <KokiAdvantages id="advantages" class="py-16 pb-32 w-full" />

      <TezliveToken />

      <RoadMap id="road_map" class="py-24 w-full" />

      <TeamIntro id="team" class="w-full my-24" />

      <FreqAskeQues id="faq" class="w-full py-24" />

      <Footer class="w-full pt-24" />
    </section>
  </main>
</template>
