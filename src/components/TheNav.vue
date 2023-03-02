<script setup>
const menu = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us', menu: [
    { name: 'Vision', url: '/about-us#vision' },
    { name: 'Mission', url: '/about-us#mission' }
  ]},
  { name: 'Projects', url: '/projects' },
  { name: 'Contact Us', url: '/contact-us' },
]

const open = ref(false)
const target = ref('')

const targetHeight = ref('0px')

useResizeObserver(target, ([entry]) => {
  targetHeight.value = entry.borderBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0) + 'px'
})
</script>

<template>
  <base-container
    class="z-20 relative bg-white"
    :class="[{ 'shadow shadow-lg': open }]"
  >
    <div
      ref="target" 
      class="relative flex justify-between items-center transition-all ease-in-out"
    >
      <base-logo class="float-left">
        <img src="../assets/logo.svg" alt="logo" class="w-16 h-16"/>
      </base-logo>

      <base-hamburger
        class="lg:hidden block"
        :open="open"
        @click:hamburger="open = !open"
      />
      <base-list
        class="lg:flex hidden"
        :items="menu"
        main-axis="horizontal"
        >
          <template #item>
            Test
          </template>
      </base-list>
    </div>
  </base-container>
  <base-container
      class="lg:hidden block overflow-hidden z-10 fixed top-0 left-0 w-screen bg-red-100 transition-all ease-in-out" 
      :class="[ open ? 'h-screen dynamic-padding': 'h-0 pt-0' ]"
    >
      <base-list
        :items="menu"
      >
        <template #item>
          Test
        </template>
      </base-list>
  </base-container>
</template>

<style scoped>
  .dynamic-padding {
    padding-top: v-bind(targetHeight)
  }
</style>