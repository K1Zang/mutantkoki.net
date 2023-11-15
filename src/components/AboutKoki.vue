<script setup>
import { ref } from 'vue'

function throttle(func, wait, options) {
  var context, args, result
  var timeout = null
  var previous = 0
  if (!options) options = {}
  var later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function () {
    var now = Date.now()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}

let kokiColor = ref('#fff')

const changeKokiColor = () =>
  (kokiColor.value = '#' + Math.floor(Math.random() * 16777215).toString(16))

document.addEventListener('scroll', throttle(changeKokiColor, 100))
</script>

<template>
  <div class="px-4">
    <p class="">
      <span class="">
        <span class="md:text-[14rem] text-[6rem] md:leading-[5rem] leading-[2rem]"> Mutant </span>
        <span class="md:flex">
          <span
            class="font-serif md:text-[14rem] text-[6rem] md:leading-[5rem] leading-[2rem]"
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
