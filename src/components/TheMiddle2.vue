<script setup>
</script>
<template>
  <base-container class="lg:pt-[123px] lg:pb-0 py-10">
    <section>
      <h2 class="lg:mb-[42px] lg:text-[length:50px] lg:text-left mb-5 font-avalon font-bold text-3xl text-center">
        Technologies Use
      </h2>

      <div class="relative lg:min-h-[660px] lg:pt-[138px] flex justify-center">
        <base-button class="lg:block xl:left-40 hidden absolute left-0 top-1/2 -translate-y-1/2">
          <img
            src="/images/prev-arrow.png"
            alt="previous"
          >
        </base-button>

        <base-button class="lg:block xl:right-40 hidden absolute right-0 top-1/2 -translate-y-1/2">
          <img
            src="/images/next-arrow.png"
            alt="next"
          >
        </base-button>

        <article>
          <figure class="lg:mb-0 mb-3">
            <img
              src="/images/middle2-img1.png"
              alt="javascript"
              class="mx-auto"
            >
            <figcaption class="lg:text-[length:49px] lg:mt-12 lg:mb-14 text-center text-xl font-avalon font-bold ">
              Javascript
            </figcaption>
          </figure>

          <p class="lg:text-[23px] lg:leading-[40px] lg:text-left max-w-[600px] text-center">
            A popular programming language used for creating interactive web applications.
          </p>
        </article>
      </div>
    </section>
  </base-container>
</template>