<script setup>
import PageHeader from '../components/PageHeader.vue'
import AboutKoki from '../components/AboutKoki.vue'
</script>

<template>
  <main>
    <PageHeader>
      <section
        style="max-width: 50rem"
        class="m-auto p-4 flex flex-col items-center justify-center"
      >
        <AboutKoki />
      </section>
    </PageHeader>
  </main>
</template>
