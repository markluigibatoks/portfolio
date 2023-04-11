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
  src: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="relative">
    <a
      href="#"
      target="_blank"
      class="absolute top-0 right-0"
    >
      <icon-code-fill />
    </a>
    <figure class="w-20 h-20">
      <img
        :src="src"
        :alt="name"
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