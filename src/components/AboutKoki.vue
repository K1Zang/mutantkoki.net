<script setup>
import { ref } from 'vue'
let kokiColor = ref('#fff')

document.addEventListener('scroll', (event) => {
  kokiColor.value = '#' + Math.floor(Math.random() * 16777215).toString(16)
})
</script>

<template>
  <div>
    <p class="mt-4 h-[100rem]">
      <span class="md:text-[250px] text-[120px] md:leading-[5rem] leading-[2rem]">
        Mutant
        <span class="font-serif" :style="'color:' + kokiColor + ';'"> Koki </span>
      </span>
      <span class="max-w-[10rem]">
        is an Ethereum-based NFT collection of 5000 unique items that do not resemble each other.
        This NFT collection features various rare attributes such as hats, cigars, fire in the
        mouth, earrings, among others. Some NFTs have even higher rarity attributes.
      </span>
    </p>
  </div>
</template>
