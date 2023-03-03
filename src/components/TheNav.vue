<script setup>
const menu = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us', menu: [
    { name: 'Vision', url: '/about-us#vision' },
    { name: 'Mission', url: '/about-us#mission' }
  ] },
  { name: 'Projects', url: '/projects' },
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
  <div
    ref="target"
    class="lg:px-5 relative flex justify-between items-center"
  >
    <div
      class="lg:w-fit lg:px-0 px-5 w-full z-20 flex justify-between items-center bg-white"
      :class="[{ 'shadow shadow-lg': open }]"
    >
      <base-logo>
        <img
          src="../assets/logo.svg"
          alt="logo"
          class="w-16 h-16"
        >
      </base-logo>

      <base-hamburger
        class="lg:hidden block"
        :open="open"
        @click:hamburger="open = !open"
      />
    </div>
    <nav
      class=" lg:overflow-auto overflow-hidden z-10 lg:static fixed top-0 left-0 lg:w-fit w-screen lg:!h-fit lg:bg-transparent bg-red-100 transition-all ease-in-out"
      :class="[ open ? 'h-screen dynamic-padding lg:pt-0': 'h-0 pt-0' ]"
    >
      <base-list
        class="px-5 lg:px-0"
        :items="menu"
        :main-axis="isLargeScreen ? 'horizontal' : 'vertical'"
      >
        <template #item>
          Test
        </template>
      </base-list>
    </nav>
  </div>
</template>

<style scoped>
  .dynamic-padding {
    padding-top: v-bind(targetHeight)
  }
</style>