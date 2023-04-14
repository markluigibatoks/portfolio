<script setup>
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <the-header
    v-if="isLargeScreen"
    class="dark:section-divider-dark lg:section-divider"
  />
  <the-nav />
  <the-header v-if="!isLargeScreen" />
  <base-container class="dark:bg-dark dark:text-white">
    <p class="lg:mb-20 lg:text-[length:23px] lg:leading-[40px] mb-10">
      Greetings and welcome to my portfolio website! I'm excited to share with you some of the work that I've been involved with, ranging from web development projects to design samples and other creative pursuits. This portfolio serves as a representation of my professional abilities and experience, with the hope that it will provide you with a better understanding of who I am as a professional. Please feel free to explore my work, and if you have any questions or would like to discuss a potential project or collaboration, don't hesitate to reach out. Thank you for taking the time to visit!
    </p>
    <div class="grid grid-cols-12 place-content-center place-items-center gap-x-5 gap-y-20">
      <base-project-card
        v-for="n of 20"
        :key="n"
        class="lg:col-span-4 md:col-span-6 col-span-12"
        name="Title"
        :categories="['vuejs', 'tailwindcss', 'pixijs']"
        img="/images/bnr-img1.png"
      />
    </div>
  </base-container>
</template>