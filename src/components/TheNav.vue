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

const targetHeight = computed(() => {
  return target.value.clientHeight + 20
})

</script>

<template>
<base-section>
  <div 
    ref="target" 
    class="z-20 transition-all ease-in-out"
    :class="[{ 'shadow shadow-lg': open }]"
  >
    <base-logo>
      <img src="" alt="" />
    </base-logo>

    <base-hamburger
      :open="open"
      @click:hamburger="open = !open"
    />
  </div>

  <base-wrapper
    class="overflow-hidden z-10 dynamic-padding fixed top-0 w-screen bg-white transition-all ease-in-out" 
    :class="[{ open ? 'h-screen': 'h-0' }]"
  >
    <base-list
      :items="menu"
    >
      <template #item>
        Test
      </template>
    </base-list>
  </base-wrapper>
</base-section>
</template>

<style scoped>
  .dynamic-padding {
    padding-top: v-bind(targetHeight)
  }
</style>