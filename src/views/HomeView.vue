<script setup>
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <the-header
    v-if="isLargeScreen"
    class="dark:section-divider-dark lg:section-divider"
  />
  <the-nav />
  <the-banner id="slogan" />
  <the-main id="autobiography" />
  <the-middle1 id="services-offered" />
  <the-middle2 id="technologies-used" />
  <the-bottom1 id="portfolio" />
  <the-bottom2 id="testimonials" />
  <the-footer />
</template>
