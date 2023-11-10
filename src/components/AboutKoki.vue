<script setup>
import { ref } from 'vue'
let kokiColor = ref('#fff')

document.addEventListener('scroll', () => {
  kokiColor.value = '#' + Math.floor(Math.random() * 16777215).toString(16)
})
</script>

<template>
  <div>
    <p class="">
      <span class="">
        <span class="md:text-[230px] text-[120px] md:leading-[5rem] leading-[2rem]"> Mutant </span>
        <span class="md:flex">
          <span
            class="font-serif md:text-[230px] text-[120px] md:leading-[5rem] leading-[2rem]"
            :style="'color:' + kokiColor + ';'"
          >
            Koki
          </span>
          <span class="m-4 max-w-[30rem] text-justify">
            is an Ethereum-based NFT collection of 5000 unique items that do not resemble each
            other. This NFT collection features various rare attributes such as hats, cigars, fire
            in the mouth, earrings, among others. Some NFTs have even higher rarity attributes.
          </span>
        </span>
      </span>
    </p>
  </div>
</template>
