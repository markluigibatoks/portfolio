<script setup>
const portfolio = ref([
  {
    name: 'Make remote work',
    img: '/images/btm1-img1.png'
  },
  {
    name: 'Random advice',
    img: '/images/btm1-img2.png'
  },
  {
    name: 'The bright future of web',
    img: '/images/btm1-img3.png'
  }
])

const portfolioElements = ref([])
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}

onMounted(() => {
  portfolioElements.value.forEach(element => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        element.classList.add('animate-bounce-in')
        observer.unobserve(element)
      }
    }, options)
    observer.observe(element)
  })
})
</script>

<template>
  <base-container class="lg:py-[91px] lg:min-h-[900px] py-10 relative z-10 bg-white">
    <section class="text-center">
      <h2 class="lg:text-left lg:mb-9 lg:text-[length:50px] font-bold font-avalon text-3xl">
        Portfolio
      </h2>
      <p class="lg:text-left lg:leading-[40px] lg:text-[length:23px]">
        My portfolio showcases my skills in website conversion, responsive design, website animation, and maintenance. I am committed to delivering web solutions that exceed my clients' expectations and create an engaging user experience.
      </p>

      <div class="lg:mt-14 md:flex-row lg:justify-between lg:flex-nowrap mt-5 flex flex-wrap justify-center items-center gap-5">
        <figure
          v-for="n in portfolio"
          ref="portfolioElements"
          :key="n"
          class="overflow-hidden rounded-2xl shadow-violet/10 shadow-4xl"
        >
          <img
            :src="n.img"
            :alt="n.name"
          >
        </figure>
      </div>

      <base-button
        color="#2A1ED2"
        class="lg:mt-[78px] lg:!h-[70px] lg:!w-[191px] mt-5 rounded-full text-white"
      >
        View More
      </base-button>
    </section>
  </base-container>
</template>