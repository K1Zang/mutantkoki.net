<script setup>
import TeamIntroItem from './TeamIntroItem.vue'
</script>

<template>
  <div class="">
    <h1 class="mb-24 text-center font-serif text-4xl">Our Team</h1>

    <div class="flex justify-center flex-wrap">
      <TeamIntroItem
        name="yunus"
        title="Co-founder"
        description="4 years of work experience in the field of design, consultancy in the NFT field for the last 2 years."
        twitter="https://twitter.com/TezinYunus843"
      >
        <img
          class="mt-4 bg-white/10 w-24 h-24 object-cover rounded-full"
          src="@/assets/pic-yunus.jpg"
        />
      </TeamIntroItem>

      <TeamIntroItem
        name="erkan"
        title="Co-founder & Software Seveloper"
        description="5 years of work experience in mobile application development, freelance software developer for the last year."
        twitter="https://x.com/nizet55?t=ky3Ar1qbsGjipb3R2WMUnA&s=09"
      >
        <img
          class="mt-4 bg-white/10 w-24 h-24 object-cover rounded-full"
          src="@/assets/pic-erkan.jpg"
        />
      </TeamIntroItem>

      <TeamIntroItem
        name="onur"
        title="Social Media Management & Marketing"
        description="Work experience in social media and sales marketing for the last 5 years."
      >
        <img
          class="mt-4 bg-white/10 w-24 h-24 object-cover rounded-full"
          src="@/assets/pic-onur.jpg"
        />
      </TeamIntroItem>

      <TeamIntroItem
        name="Berkay"
        title="Designer"
        description="He has been working as a team member in the design and animation team in the field of films and TV series for the last 6 years."
      >
        <img
          class="mt-4 bg-white/10 w-24 h-24 object-cover rounded-full"
          src="@/assets/pic-berkay.jpg"
        />
      </TeamIntroItem>
    </div>
  </div>
</template>
