<script setup></script>

<template>
  <div class="px-4 bg-white flex flex-col items-center justify-center text-left">
    <p class="text-black mb-24 text-center text-4xl leading-[4rem] font-serif">Road Map</p>

    <div class="flex justify-evenly items-center w-full">
      <img
        class="mr-8 md:flex hidden bg-black md:h-full object-cover md:max-w-[30vw] p-4 w-fit"
        src="@/assets/animated-koki.gif"
      />

      <ol class="max-w-[50rem] relative border-l-8 border-black">
        <li class="mb-10 ms-4">
          <div class="absolute w-6 h-6 bg-black rounded-full -start-4 border-2 border-white"></div>
          <h3 class="font-semibold text-gray-900">The Purr-fect Milestone</h3>
          <p class="mb-4 text-gray-500">
            When Mutant Koki reaches a sales volume of 5k , the Mutant Coci Cat collection will be
            introduced.
          </p>
        </li>

        <li class="mb-10 ms-4">
          <div class="absolute w-6 h-6 bg-black rounded-full -start-4 border-2 border-white"></div>
          <h3 class="font-semibold text-gray-900">Catapulting Success</h3>
          <p class="text-gray-500">
            When Mutant Coci Cat reaches a sales volume of 5k, Tezlive Token will be launched.
          </p>
        </li>

        <li class="mb-10 ms-4">
          <div class="absolute w-6 h-6 bg-black rounded-full -start-4 border-2 border-white"></div>
          <h3 class="font-semibold text-gray-900">Beyond Tokens</h3>
          <p class="text-gray-500">
            Following the launch of Tezlive Token , a marketplace for talented individuals' videos
            will be established through auctions.
          </p>
        </li>

        <li class="ms-4">
          <div class="absolute w-6 h-6 bg-black rounded-full -start-4 border-2 border-white"></div>
          <h3 class="font-semibold text-gray-900">The Prestige Market</h3>
          <p class="text-gray-500">
            A marketplace will be created where only talented people can do things that not everyone
            can do, and where they can be purchased and sold at a much higher price by determining
            the price according to the value of this talent and increasing this price.
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>
