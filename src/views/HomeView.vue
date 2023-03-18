<script setup>
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <the-header v-if="isLargeScreen" />
  <the-nav />
  <the-header v-if="!isLargeScreen" />
  <the-banner />
  <the-middle1 />
  <the-middle2 />
  <the-main />
  <the-bottom1 />
  <the-bottom2 />
  <the-footer />
</template>
