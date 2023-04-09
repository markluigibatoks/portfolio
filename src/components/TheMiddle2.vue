<script setup>
const technologiesUsed = ref([
  {
    name: 'Javascript',
    img: '/images/middle2-img1.png',
    content: 'A popular programming language used for creating interactive web applications.'
  },
  {
    name: 'VueJS',
    img: '/images/middle2-img2.png',
    content: 'A progressive JavaScript framework used for building user interfaces and single-page applications.'
  },
  {
    name: 'PixiJS',
    img: '/images/middle2-img3.png',
    content: 'A 2D web rendering engine used for creating fast, high-performance graphics and animations.'
  },
  {
    name: 'NodeJS',
    img: '/images/middle2-img4.png',
    content: 'A JavaScript runtime environment used for building scalable, server-side web applications.'
  },
  {
    name: 'HTML5',
    img: '/images/middle2-img5.png',
    content: 'The latest version of the standard markup language used for creating web pages.'
  },
  {
    name: 'CSS',
    img: '/images/middle2-img6.png',
    content: 'A stylesheet language used for describing the presentation of web pages.'
  }
])

/**
 JavaScript: A popular programming language used for creating interactive web applications.
VueJS: A progressive JavaScript framework used for building user interfaces and single-page applications.
ReactJS: A JavaScript library used for building user interfaces and web applications.
HTML5: The latest version of the standard markup language used for creating web pages.
PixiJS: A 2D web rendering engine used for creating fast, high-performance graphics and animations.
CSS: A stylesheet language used for describing the presentation of web pages.
NodeJS: A JavaScript runtime environment used for building scalable, server-side web applications.
ThreeJS: A 3D graphics library and API used for creating and displaying 3D animations and models on the web.
 */

const { slideIndex, handleNext, handlePrevious } = useSimpleSlide(technologiesUsed.value.length)

</script>
<template>
  <base-container class="dark:bg-dark dark:text-white lg:pt-[123px] lg:pb-0 py-10">
    <section>
      <h2 class="lg:mb-[42px] lg:text-[length:50px] lg:text-left mb-5 font-avalon font-bold text-3xl text-center">
        Technologies Used
      </h2>

      <div class="relative lg:min-h-[660px] lg:pt-[138px] flex justify-center">
        <base-button
          class="lg:block xl:left-40 hidden absolute left-0 top-1/2 -translate-y-1/2"
          @click="handlePrevious"
        >
          <img
            src="/images/prev-arrow.png"
            alt="previous"
          >
        </base-button>

        <base-button
          class="lg:block xl:right-40 hidden absolute right-0 top-1/2 -translate-y-1/2"
          @click="handleNext"
        >
          <img
            src="/images/next-arrow.png"
            alt="next"
          >
        </base-button>

        <article>
          <figure class="lg:mb-0 mb-3">
            <div class="min-h-[150px] flex justify-center items-center">
              <img
                :src="technologiesUsed[slideIndex].img"
                :alt="technologiesUsed[slideIndex].name"
                class="mx-auto"
              >
            </div>
            <figcaption class="lg:text-[length:49px] lg:mt-12 lg:mb-14 text-center text-xl font-avalon font-bold ">
              {{ technologiesUsed[slideIndex].name }}
            </figcaption>
          </figure>

          <p class="lg:text-[23px] lg:leading-[40px] lg:text-left max-w-[600px] text-center">
            {{ technologiesUsed[slideIndex].content }}
          </p>
        </article>
      </div>
    </section>
  </base-container>
</template>