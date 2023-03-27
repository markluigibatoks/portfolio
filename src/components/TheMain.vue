<script setup>

const circleDesign = ref()
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}

onMounted(() => {
  const { stop } = useIntersectionObserver(circleDesign, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      circleDesign.value.classList.add('animate-bounce-in')
      stop()
    }
  }, options)
})

</script>

<template>
  <base-container class="xl:h-[888px] xl:pt-[229px] xl:pb-0 py-10 ">
    <main class="lg:flex">
      <div class="lg:order-2 lg:mb-0 mb-5 relative w-full">
        <figure class="relative z-10 xl:-top-[229px] lg:top-0 lg:absolute z-10">
          <img
            src="/images/main-img1.png"
            alt="Mark-Luigi"
            class="lg:max-h-none lg:max-w-none lg:w-full lg:h-full max-w-[320px] max-h-[400px] mx-auto"
          >
        </figure>

        <figure
          ref="circleDesign"
          class="xl:-top-[134px] lg:relative w-full h-full absolute top-0"
        >
          <img
            src="/images/design-img1.png"
            alt="Circles"
            class="lg:max-h-none lg:max-w-none lg:w-full h-full mx-auto"
          >
        </figure>
      </div>

      <div class="lg:order-1 lg:w-[560px] lg:min-w-[560px] ">
        <h1 class="lg:text-[length:60px] lg:mb-[30px] lg:leading-normal leading-none font-avalon font-bold text-3xl">
          Hello,
          <span class="lg:-mt-4 block">I’m <em class="lg:whitespace-normal whitespace-nowrap text-accent not-italic">MARK-LUIGI</em> </span>
          <span class="lg:-mt-7 block">Web Developer</span>
        </h1>

        <p class="lg:leading-[40px] lg:text-[23px] lg:text-left text-justify">
          Hi, you can call me Mark, a web developer with x years of experience. I specialize in creating beautiful, responsive, and user-friendly websites, and I offer services that include website conversion, responsive design, website animation, and maintenance. I'm dedicated to delivering high-quality web solutions that help businesses thrive online.
        </p>
      </div>
    </main>
  </base-container>
</template>