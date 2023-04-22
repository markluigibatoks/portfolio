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
  <base-container class="py-10 dark:bg-dark dark:text-white">
    <p class="lg:mb-20 lg:text-[length:23px] lg:leading-[40px] mb-10 text-justify">
      Welcome to my portfolio website! Here, you'll find examples of my work in web development, design, and more. Explore my portfolio to learn more about my professional abilities and experience. If you have any questions or are interested in collaborating, feel free to contact me. Thanks for visiting!
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
  <the-footer />
</template>