<script setup>
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isSmallScreen = useMediaQuery('(min-width: 640px)')
const isMediumScreen = useMediaQuery('(min-width: 768px)')

const isDark = useDark()

const socialMedia = ref([
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/mark-luigi-batoctoy-47a4351b1/',
    srcLight: '/images/linkedin.png',
    srcDark: '/images/linkedin.png'
  },
  {
    name: 'github',
    url: 'https://github.com/markluigibatoks/',
    srcLight: '/images/github.png',
    srcDark: '/images/github-dark.png'
  }
])

const myPage = ref([
  {
    name: 'Slogan',
    url: '/#slogan'
  },
  {
    name: 'Autobiography',
    url: '/#autobiography'
  },
  {
    name: 'Services Offered',
    url: '/#services-offered'
  },
  {
    name: 'Technologies Used',
    url: '/#technologies-used'
  },
  {
    name: 'Portfolio',
    url: '/#portfolio'
  },
  {
    name: 'Testimonials',
    url: '/#testimonials'
  },
  {
    name: 'Contact Me',
    url: '/#contact-me'
  }
])

const menu = [
  { name: 'Home', url: '/' },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Resume', url: '/resume.docx' }
]
</script>

<template>
  <base-container class="dark:bg-emphasis1 dark:text-white lg:pt-[179px] py-10 min-h-[564px] bg-white">
    <section class="lg:justify-between md:flex-row md:flex-wrap md:text-left md:justify-around md:gap-20 flex flex-col justify-between gap-5 text-center">
      <div class="lg:mx-0 lg:w-fit lg:max-w-[250px] md:mb-0 md:w-full mx-auto">
        <figure class="mb-[35px]">
          <img
            src="/images/logo.png"
            alt="logo"
            class="mx-auto"
          >
        </figure>
        <p class="lg:text-justify md:text-center max-w-[600px] mx-auto">
          Thanks for visiting my website! Contact me for web development inquiries or connect on social media.
        </p>
      </div>

      <div class="lg:w-fit lg:mb-0 mb-10">
        <h3 class="lg:text-[length:30px] lg:mb-7 mb-3 font-avalon font-bold text-xl">
          My Page
        </h3>
        <ul class="grid grid-cols-12 gap-5">
          <li
            v-for="item in myPage"
            :key="item"
            class="md:col-span-6 col-span-12"
          >
            <a
              :href="item.url"
              class="hover:underline"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

      <div
        id="contact-me"
        class="lg:w-fit lg:mb-0 mb-10"
      >
        <h3 class="lg:text-[length:30px] lg:mb-7 mb-3 font-avalon font-bold text-xl">
          Contact Me
        </h3>

        <ul class="flex flex-col gap-5 mb-5">
          <li><mark class="dark:text-white">+1 (825) 977-8458</mark></li>
          <li>
            <a
              href="mailto:markluigibatoks@gmail.com"
              class="underline hover:no-underline"
            >markluigibatoks@gmail.com</a>
          </li>
          <li>
            <address>
              <span class="block">Mandaue City<span class="hidden">,</span></span>
              <span class="block">Cebu, Philippines, 6014</span>
            </address>
          </li>
        </ul>

        <base-list
          :items="socialMedia"
          main-axis="horizontal"
          :main-axis-alignment="isMediumScreen ? 'start' : 'center'"
          :main-axis-spacing="3"
        >
          <template #item="{ item }">
            <a
              :href="item.url"
              target="_blank"
              class="hover:opacity-70"
            >
              <figure>
                <img
                  :src="isDark ? item.srcDark : item.srcLight"
                  alt="logo"
                >
              </figure>
            </a>
          </template>
        </base-list>
      </div>
    </section>
  </base-container>

  <base-container class="dark:bg-emphasis3 dark:text-white bg-lavender">
    <section class="lg:flex lg:text-left lg:py-0 py-5 min-h-[132px] justify-between items-center text-center">
      <base-list
        class="lg:px-0 lg:mb-0 lg:text-[length:20px] order-2 mb-5"
        :items="menu"
        :main-axis="isSmallScreen ? 'horizontal' : 'vertical'"
        :main-axis-spacing="isLargeScreen ? 12 : 2"
        :main-axis-alignment="isSmallScreen ? 'center' : 'start'"
        cross-axis-alignment="center"
      >
        <template #item="{ item }">
          <a
            v-if="item.name === 'Resume'"
            href="/resume.pdf"
            download
            class="hover:underline"
          >
            Resume
          </a>
          <router-link
            v-else
            :to="item.url"
            class="dark:bg-emphasis2 lg:dark:bg-transparent lg:px-0 lg:py-0 lg:w-fit lg:bg-transparent lg:hover:bg-transparent lg:hover:text-inherit hover:underline hover:bg-accent hover:text-white px-5 py-2 block rounded w-full bg-white"
            exact-active-class="underline"
          >
            {{ item.name }}
          </router-link>
        </template>
      </base-list>

      <div class="lg:text-[length:20px] order-1">
        Produced by
        <a
          class="inline underline hover:no-underline"
          href="https://www.linkedin.com/in/mark-luigi-batoctoy-47a4351b1/"
          target="_blank"
        >
          Mark-Luigi Batoctoy
        </a>
        <span class="lg:inline hidden"> | </span>
        <span class="lg:inline block">Designed by Caren C</span>
      </div>
    </section>
  </base-container>
</template>