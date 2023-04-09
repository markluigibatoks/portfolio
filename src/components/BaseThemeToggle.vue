<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <base-button
    :color="isDark ? '#ffffff' : '#121212'"
    class="relative w-20 h-10 rounded-full transition-all ease-in-out duration-1000"
    @click="toggleDark()"
  >
    <span
      :class="isDark ? ' bg-black right-2' : ' bg-white left-2'"
      class="z-10 transition-all ease-in-out duration-500 absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
    ></span>
    <figure
      :class="isDark ? 'hidden' : 'block'"
      class="absolute right-2 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-1000"
    >
      <img
        src="/images/moon.png"
        alt="moon"
      >
    </figure>

    <figure
      :class="isDark ? 'block' : 'hidden'"
      class="absolute left-2 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-1000"
    >
      <img
        src="/images/sun.png"
        alt="sun"
      >
    </figure>
  </base-button>
</template>