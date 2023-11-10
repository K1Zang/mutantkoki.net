<script setup>
import KokiAdvantagesItem from './KokiAdvantagesItem.vue'
</script>

<template>
  <div class="flex flex-col justify-center bg-white">
    <div class="md:flex flex-col md:space-y-28 m-4">
      <h1 class="mb-24 md:mb-0 text-center font-serif text-black text-4xl">
        Advantages of Owning This NFT Collection
      </h1>

      <div class="flex md:flex-row flex-col space-y-4 justify-evenly">
        <img
          class="bg-black md:h-96 h-40 object-cover md:max-w-[30vw] p-4 w-fit"
          src="./../assets/koki-1.jpeg"
        />

        <div class="flex flex-col justify-evenly space-y-4">
          <KokiAdvantagesItem
            title="Mutant Coci Cat"
            description="Owners of Mutant Koki will receive a free Mutant Coci Cat NFT."
          />
          <KokiAdvantagesItem
            title="Tezlive tokens"
            description="Owners of Mutant Koki and Mutant Coci Cat NFTs will also receive free Tezlive tokens."
          />
        </div>
      </div>

      <div class="flex md:flex-row-reverse flex-col-reverse space-y-4 justify-evenly">
        <img
          class="mt-4 bg-black md:h-96 h-40 object-cover md:max-w-[30vw] p-4 w-fit"
          src="./../assets/koki-3.jpeg"
        />

        <div class="flex flex-col justify-evenly space-y-4">
          <KokiAdvantagesItem
            title="Unlocking Artistry"
            description="Tezlive tokens can be used within a mobile app where talented individuals' artworks will be auctioned and can only be purchased with Tezlive tokens."
          />
          <KokiAdvantagesItem
            title="Exclusive Offers"
            description="Since they bought the mutant koki, they will get the mutant coci cat for free and those who have these two collections will receive the tezlive tokens as a gift for free. Thanks to these tezlive tokens they received as a gift, they will earn money again by purchasing the video of a talented person with the tezlive token and selling it at a higher price."
          />
        </div>
      </div>
    </div>
  </div>
</template>
