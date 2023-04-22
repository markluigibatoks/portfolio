<script setup>
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

onMounted(() => {
  document.body.style.background = 'none'
  document.body.classList.add('!bg-lavender')
})
</script>

<template>
  <the-header
    v-if="isLargeScreen"
    class="dark:section-divider-dark lg:section-divider"
  />
  <the-nav />
  <the-header v-if="!isLargeScreen" />
  <div class="relative">
    <figure class="relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black/50">
      <img
        src="/images/bnr-portfolio.png"
        alt="a man coding a website"
        class="min-h-[360px] object-cover"
      >
    </figure>
    <base-container class="flex flex-col justify-center w-full h-full absolute top-1/2 left-0 -translate-y-1/2 text-white">
      <h2 class="lg:mb-10 mb-5 font-bold text-4xl">
        Portfolio
      </h2>
      <p class="lg:text-[length:23px] lg:leading-[40px] md:w-1/2 text-justify">
        This is my portfolio website showcasing my work in web development and design.
        Contact me if you have any questions or are interested in collaborating.
      </p>
    </base-container>
  </div>
  <base-container class="py-10 dark:bg-dark dark:text-white bg-lavender">
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