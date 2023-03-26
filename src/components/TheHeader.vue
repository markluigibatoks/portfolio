<script setup>
const socialMedia = ref([
  { name: 'linkedin', url: 'https://www.linkedin.com/in/mark-luigi-batoctoy-47a4351b1/', src: '/images/linkedin.png' },
  { name: 'github', url: 'https://github.com/markluigibatoks/', src: '/images/github.png' }
])
</script>

<template>
  <div class="bg-accent text-white text-center p-2">
    <p>The site is currently under construction and some features, such as the navigation links, are not yet functional.</p>
  </div>
  <header class="lg:py-0 py-10 lg:section-divider">
    <base-container class="min-h-[66px]">
      <div class="lg:flex lg:justify-between lg:items-center lg:min-h-[66px] text-center">
        <ul class="lg:flex lg:gap-10 xl:gap-20 lg:mb-0 mb-5">
          <li class="mx-auto w-fit relative pl-7 before:content-[url('images/phone.png')] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:flex">
            <mark class="pb-1 block">(+63) 915 265 5585</mark>
          </li>
          <li class="mx-auto w-fit relative pl-7 before:content-[url('images/email.png')] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:flex">
            <a
              class="pb-1 block underline hover:no-underline"
              href="mailto:markluigibatoks@gmail.com"
              target="_blank"
            >markluigibatoks@gmail.com</a>
          </li>
          <li class="mx-auto w-fit relative pl-7 before:content-[url('images/house.png')] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:flex">
            <address class="block">
              Cebu City, Philippines 6000
            </address>
          </li>
        </ul>

        <section class="lg:flex lg:gap-6 lg:items-center">
          <h2 class="lg:mb-0 mb-2">
            Connect With Me
          </h2>
          <base-list
            :items="socialMedia"
            main-axis="horizontal"
            main-axis-alignment="center"
            :main-axis-spacing="3"
          >
            <template #item="{ item }">
              <a
                :href="item.url"
                target="_blank"
                class="hover:opacity-60"
              >
                <figure>
                  <img
                    :src="item.src"
                    alt="logo"
                  >
                </figure>
              </a>
            </template>
          </base-list>

          <base-button
            color="#2A1ED2"
            class="lg:block hidden z-10 min-w-[125px] min-h-[49px] absolute top-[140px] right-0 rounded-full text-white"
          >
            Resume
          </base-button>
        </section>
      </div>
    </base-container>
  </header>
</template>