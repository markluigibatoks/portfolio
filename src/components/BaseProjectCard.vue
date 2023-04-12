<script setup>
defineProps({
  name: {
    type: String,
    default: ''
  },
  categories: {
    type: Array,
    default: () => []
  },
  img: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="relative max-w-[360px]">
    <a
      href="#"
      target="_blank"
      class="z-10 absolute top-0 right-0 w-10 h-8 bg-red-100"
    >
      <icon-code-fill class="w-full h-full" />
    </a>
    <figure class="relative w-full">
      <img
        :src="img"
        :alt="name"
        class="max-w-max w-full h-full object-cover"
      >
    </figure>
    <div class="grid grid-cols-12">
      <div class="col-span-6">
        {{ name }}
      </div>
      <div class="col-span-6">
        <div
          v-for="n of categories"
          :key="n"
        >
          {{ n }}
        </div>
      </div>
    </div>
  </div>
</template>