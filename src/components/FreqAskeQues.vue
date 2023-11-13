<script setup>
import FreqAskeQuesItem from './FreqAskeQuesItem.vue'
</script>

<template>
  <div class="py-16 w-full bg-white/10">
    <h1 class="mb-24 text-center font-serif text-4xl">Frequently Asked Questions</h1>

    <div class="flex flex-col items-center mx-auto px-4">
      <FreqAskeQuesItem
        question="What is Mutant Coci, and when will it be released ?"
        answer="Mutant Coci is a mutant cat that ate Mutant Koki's lover. Mutant Coci collection will be
        introduced when Mutant Koki reaches a sales volume of 5k."
      />
      <FreqAskeQuesItem
        question="When will Tezlive Token be launched ?"
        answer="Tezlive Token will be launched when Mutant Coci reaches a sales volume of 5k."
      />
      <FreqAskeQuesItem
        question="What is Tezlive Token, and what is it's purpose ?"
        answer="Tezlive Token is a cryptocurrency that will be used to purchase talented individuals' videos and participate in their sales within the mobile app."
      />
      <FreqAskeQuesItem
        question="When will the mobile app be released ?"
        answer="The mobile app will be released shortly after the launch of Tezlive Token."
      />
      <FreqAskeQuesItem
        question="What is the benefit of the marketplace for talented individuals ?"
        answer="This application allows talented individuals, such as magicians, to showcase their skills through videos that can be auctioned. Owners of the Mutant Koki NFT collection and Mutant Coci collection can receive free Tezlive tokens, allowing them to purchase talented individuals' videos for free within the app, and then resell them at a higher price."
      />
    </div>
  </div>
</template>
