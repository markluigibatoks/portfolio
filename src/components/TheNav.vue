<script setup>
const menu = [
  { name: 'Home', url: '/' },
  { name: 'Portfolio', url: '/portfolio' }
]

const open = ref(false)
const target = ref('')

const targetHeight = ref('0px')
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

watchEffect(() => {
  if (isLargeScreen.value) {
    open.value = false
  }
})

useResizeObserver(target, ([entry]) => {
  targetHeight.value = entry.borderBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0) + 'px'
})
</script>

<template>
  <base-container
    ref="target"
    class="dark:bg-dark dark:section-divider-dark lg:z-0 z-50 !px-0 lg:!px-5 relative lg:!border-0 section-divider"
    :class="{ 'sticky top-0 left-0' : open }"
  >
    <div class="lg:pr-[233px] lg:pt-[56px] lg:pb-[49px] flex justify-between items-center">
      <div
        class="lg:border-0 lg:px-0 lg:w-fit  w-full px-5 py-2 z-20 flex justify-between items-center"
        :class="[{ 'dark:bg-black shadow shadow-lg': open }]"
      >
        <base-logo>
          <img
            src="/images/logo.png"
            alt="logo"
          >
        </base-logo>

        <div class="lg:hidden flex items-center">
          <a
            class="hover:bg-accent/70 z-10 min-w-[125px] min-h-[49px] flex justify-center items-center rounded-full uppercase text-white bg-accent"
            href="/resume.pdf"
            download
          >
            Resume
          </a>

          <base-hamburger
            :open="open"
            @click:hamburger="open = !open"
          />
        </div>
      </div>
      <nav
        class="dark:bg-dark lg:overflow-auto overflow-hidden z-10 lg:static fixed top-0 left-0 lg:w-fit w-screen lg:!h-fit lg:bg-transparent bg-lavender transition-all ease-in-out"
        :class="[ open ? 'h-screen dynamic-padding lg:pt-0': 'h-0 pt-0' ]"
      >
        <base-list
          :items="menu"
          :main-axis="isLargeScreen ? 'horizontal' : 'vertical'"
          :main-axis-spacing="isLargeScreen ? 12 : 0"
          class="lg:divide-none lg:max-w-none max-w-[360px] mx-auto divide-y divide-white"
        >
          <template #item="{ item }">
            <router-link
              :to="item.url"
              class="dark:text-white hover:underline block p-2"
              exact-active-class="underline"
            >
              {{ item.name }}
            </router-link>
          </template>
        </base-list>
        <the-header v-if="!isLargeScreen" />
        <div
          v-if="!isLargeScreen"
          class="dark:bg-black/50 dark:text-white p-2 max-w-[360px] mx-auto flex justify-between items-center rounded bg-iris/30"
        >
          <span>Appearance</span>
          <base-theme-toggle />
        </div>
      </nav>
    </div>
  </base-container>
</template>

<style scoped>
  .dynamic-padding {
    padding-top: v-bind(targetHeight)
  }
</style>