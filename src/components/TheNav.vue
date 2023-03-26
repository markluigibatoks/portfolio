<script setup>
const menu = [
  { name: 'Home', url: '/' },
  { name: 'About Me', url: '/about-me', menu: [
    { name: 'Vision', url: '/about-me#vision' },
    { name: 'Mission', url: '/about-me#mission' }
  ] },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Contact Us', url: '/contact-us' }
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
    class="lg:z-0 z-50 !px-0 lg:!px-5 relative lg:border-0 section-divider"
    :class="{ 'sticky top-0 left-0' : open }"
  >
    <div class="lg:pr-[233px] lg:pt-[56px] lg:pb-[49px] flex justify-between items-center">
      <div
        class="lg:px-0 lg:w-fit w-full px-5 py-2 z-20 flex justify-between items-center"
        :class="[{ 'shadow shadow-lg': open }]"
      >
        <base-logo>
          <img
            src="/images/logo.png"
            alt="logo"
          >
        </base-logo>

        <div class="lg:hidden flex items-center">
          <base-button
            color="#2A1ED2"
            class="rounded-full text-white"
          >
            Resume
          </base-button>

          <base-hamburger
            :open="open"
            @click:hamburger="open = !open"
          />
        </div>
      </div>
      <nav
        class="lg:overflow-auto overflow-hidden z-10 lg:static fixed top-0 left-0 lg:w-fit w-screen lg:!h-fit lg:bg-transparent bg-lavender transition-all ease-in-out"
        :class="[ open ? 'h-screen dynamic-padding lg:pt-0': 'h-0 pt-0' ]"
      >
        <base-list
          :items="menu"
          :main-axis="isLargeScreen ? 'horizontal' : 'vertical'"
          :main-axis-spacing="isLargeScreen ? 12 : 0"
          class="lg:divide-none divide-y divide-white"
        >
          <template #item="{ item }">
            <a
              href="#"
              class="lg:hover:bg-transparent lg:hover:underline hover:bg-white block p-2"
            >
              {{ item.name }}
            </a>
          </template>
        </base-list>
      </nav>
    </div>
  </base-container>
</template>

<style scoped>
  .dynamic-padding {
    padding-top: v-bind(targetHeight)
  }
</style>