<script setup>
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

const isDark = useDark()
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <header class="dark:bg-dark dark:text-white lg:py-0 py-10">
    <base-container>
      <div class="lg:flex lg:justify-between lg:items-center lg:min-h-[66px] lg:py-2 text-center">
        <ul class="lg:flex-row lg:gap-5 flex flex-col items-center gap-3 lg:mb-0 mb-5">
          <li
            :class="isDark ? `before:content-[url('/images/phone-dark.png')]`: `before:content-[url('/images/phone.png')]`"
            class="mx-auto w-fit relative pl-7 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:flex"
          >
            <mark class="dark:text-white pb-1 block text-black">+1 (825) 977-8458</mark>
          </li>
          <li
            :class="isDark ? `before:content-[url('/images/email-dark.png')]` : `before:content-[url('/images/email.png')]`"
            class="mx-auto w-fit relative pl-7 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:flex"
          >
            <a
              class="pb-1 block underline hover:no-underline"
              href="mailto:markluigibatoks@gmail.com"
              target="_blank"
            >markluigibatoks@gmail.com</a>
          </li>
          <li
            :class="isDark ? `before:content-[url('/images/house-dark.png')]` : `before:content-[url('/images/house.png')]`"
            class="mx-auto w-fit relative pl-7 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:flex"
          >
            <address class="text-left">
              <span class="xl:inline block">Canada</span>
            </address>
          </li>
        </ul>

        <section class="xl:gap-6 lg:flex lg:gap-2 lg:items-center">
          <!-- <h2 class="lg:mb-0 mb-2">
            Connect With Me
          </h2> -->
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
                    :src="isDark ? item.srcDark : item.srcLight"
                    alt="logo"
                  >
                </figure>
              </a>
            </template>
          </base-list>

          <a
            class="lg:flex hidden hover:bg-accent/70 z-10 min-w-[125px] min-h-[49px] absolute top-[140px] right-0 justify-center items-center rounded-full uppercase text-white bg-accent"
            href="/resume.pdf"
            download
          >
            Resume
          </a>

          <base-theme-toggle
            v-if="isLargeScreen"
          />
        </section>
      </div>
    </base-container>
  </header>
</template>