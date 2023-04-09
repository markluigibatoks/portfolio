<script setup>
const bnrImg1 = ref()
const bnrImg2 = ref()
const bnrImg3 = ref()
const bnrImg4 = ref()
const bnrText = ref()

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }

  animateOnScroll(bnrImg1, 'animate-zoom-in-right', options)

  animateOnScroll(bnrImg2, 'animate-zoom-in', options)
  animateOnScroll(bnrImg3, 'animate-zoom-in', options)
  animateOnScroll(bnrImg4, 'animate-zoom-in', options)

  animateOnScroll(bnrText, 'animate-fade-in-left', options)
})

function animateOnScroll (element, className, options) {
  const { stop } = useIntersectionObserver(element, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      element.value.classList.add(className)
      stop()
    }
  }, options)
}
</script>

<template>
  <base-container class="dark:bg-dark dark:text-white lg:py-0 pb-10 text-center lg:text-left lg:border-0 section-divider">
    <div class="lg:pt-[49px] lg:flex lg:justify-between lg:gap-10">
      <div class="lg:order-2 sm:max-w-[638px] sm:h-[518px] mx-auto mb-5 relative w-full">
        <figure
          ref="bnrImg1"
          class="lg:block relative w-full h-full z-20 flex justify-center items-center"
        >
          <img
            src="/images/bnr-img0.png"
            alt="bnr-img1"
            class="lg:absolute lg:top-[58%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
        </figure>
        <figure
          ref="bnrImg2"
          class="w-1/2 lg:w-2/3 z-10 absolute top-0 left-0"
        >
          <img
            src="/images/bnr-img1.png"
            alt="bnr-img1"
            class="rounded-2xl"
          >
        </figure>
        <figure
          ref="bnrImg3"
          class="w-1/2 lg:w-2/3 absolute top-1/2 right-0 -translate-y-1/2"
        >
          <img
            src="/images/bnr-img2.png"
            alt="bnr-img1"
            class="rounded-2xl"
          >
        </figure>
        <figure
          ref="bnrImg4"
          class="w-1/2 lg:w-2/3 z-10 absolute bottom-0 left-0"
        >
          <img
            src="/images/bnr-img3.png"
            alt="bnr-img1"
            class="rounded-2xl"
          >
        </figure>
      </div>

      <div
        ref="bnrText"
        class="xl:max-w-none lg:max-w-[500px] order-1"
      >
        <h2 class="xl:text-[70px] xl:leading-[90px] lg:leading-[80px] lg:text-[60px] lg:mt-6 lg:mb-[30px] text-2xl font-avalon font-bold">
          Building <span class="text-accent">beautiful websites</span>, one pixel at a time.
        </h2>
        <p>
          With a commitment to building beautiful websites one pixel at a time, I strive to provide clients with a website that truly stands out.
        </p>
      </div>
    </div>
  </base-container>
</template>