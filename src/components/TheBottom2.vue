<script setup>
const testimonials = ref([
  {
    name: 'Alex',
    img: '/images/avatar-1.png',
    content: '"Excellent communication and service - transformed our website!"',
    job: 'Small Business Owner'
  },
  {
    name: 'Sarah',
    img: '/images/avatar-3.png',
    content: '"Professional, efficient, and creative - highly recommended!"',
    job: 'Marketing Manager'
  },
  {
    name: 'David',
    img: '/images/avatar-2.png',
    content: '"Innovative design and seamless execution - exceeded our expectations!"',
    job: 'CEO'
  },
  {
    name: 'Michelle',
    img: '/images/avatar-4.png',
    content: '"Responsive, helpful, and detail-oriented - a pleasure to work with!"',
    job: 'Project Manager'
  },
  {
    name: 'John',
    img: '/images/avatar-5.png',
    content: '"Improved website speed and functionality - thanks for the great work!"',
    job: 'E-commerce Owner'
  },
  {
    name: 'Samantha',
    img: '/images/avatar-6.png',
    content: '"Reliable, knowledgeable, and affordable - I\'ll definitely work with them again!"',
    job: 'Startup Founder'
  }
])
/**
 * "Excellent communication and service - transformed our website!" - Alex, Small Business Owner
"Professional, efficient, and creative - highly recommended!" - Sarah, Marketing Manager
"Innovative design and seamless execution - exceeded our expectations!" - David, CEO
"Responsive, helpful, and detail-oriented - a pleasure to work with!" - Michelle, Project Manager
"Improved website speed and functionality - thanks for the great work!" - John, E-commerce Owner
"Reliable, knowledgeable, and affordable - I'll definitely work with them again!" - Samantha, Startup Founder
 */

const { slideIndex } = useSimpleSlide(testimonials.value.length)
</script>

<template>
  <base-container class="lg:pt-[187px] lg:min-h-[684px] py-10 bg-lavender">
    <section class="lg:flex justify-between gap-10">
      <figure class="animate-bounce-in absolute -top-[124px] -left-[100px]">
        <img
          src="/images/design-img1.png"
          alt="Circles"
          class="w-[551px] h-[540px]"
        >
      </figure>

      <figure class="lg:opacity-100 opacity-60 absolute -top-10 -left-5 lg:top-[179px] lg:left-[353px]">
        <img
          src="/images/blockquote.png"
          alt="Blockquote"
        >
      </figure>
      <div class="relative z-10 lg:text-left lg:max-w-[467px] lg:mx-0 mx-auto max-w-[600px] text-center">
        <h2 class="lg:text-[length:60px] lg:mb-12 font-avalon font-bold text-3xl">
          Testimonials
        </h2>
        <p class="lg:text-[length:23px]">
          Read what my clients have to say! See how I've helped businesses create stunning and high-performing websites through website conversion, responsive design, website animation, and maintenance.
        </p>
      </div>
      <article class="relative z-10 lg:mt-0 lg:max-w-[579px] lg:mx-0 mx-auto mt-10 max-w-[600px] text-center">
        <figure class="mb-8">
          <img
            :src="testimonials[slideIndex].img"
            alt="avatar"
            class="mx-auto"
          >
        </figure>

        <blockquote>
          <p class="lg:text-[length:23px]">
            {{ testimonials[slideIndex].content }}
          </p>
          <footer class="mt-9">
            <cite class="lg:text-[length:25px] block not-italic font-bold text-iris text-xl">{{ testimonials[slideIndex].name }}</cite>
            <cite class="block not-italic">{{ testimonials[slideIndex].job }}</cite>
          </footer>
        </blockquote>
      </article>

      <div class="lg:absolute lg:justify-start lg:mt-0 mt-5 top-[294px] left-0.5 flex justify-center gap-2.5">
        <span
          v-for="(x, index) in testimonials"
          :key="x"
          class="w-[17px] h-[17px] rounded-full"
          :class="index === slideIndex ? 'bg-violet' : 'bg-white'"
        ></span>
      </div>
    </section>
  </base-container>
</template>