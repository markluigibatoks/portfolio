<script setup>
const isDark = useDark()

import IconJS from '@/components/IconJS.vue'
import IconVueJS from '@/components/IconVueJS.vue'
import IconPixiJS from '@/components/IconPixiJS.vue'
import IconTailwind from '@/components/IconTailwind.vue'
import IconThreeJS from '@/components/IconThreeJS.vue'
import IconReact from '@/components/IconReact.vue'

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

const categoryIcons = {
  'javascript': IconJS,
  'vuejs': IconVueJS,
  'react': IconReact,
  'pixijs': IconPixiJS,
  'threejs': IconThreeJS,
  'tailwindcss': IconTailwind
}

console.log(categoryIcons)
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
    <div class="mt-3 grid grid-cols-12">
      <div class="col-span-6 font-[600]">
        {{ name }}
      </div>
      <div class="col-span-6 flex justify-end gap-1">
        <div
          v-for="n of categories"
          :key="n"
          :class="[isDark ? 'border-orange/50 bg-orange/20' : 'border-accent']"
          class="border rounded p-1 max-w-[32px] max-h-[32px]"
        >
          <component
            :is="categoryIcons[n]"
            class="w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>