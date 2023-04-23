<script setup>
import IconJS from '@/components/IconJS.vue'
import IconVueJS from '@/components/IconVueJS.vue'
import IconPixiJS from '@/components/IconPixiJS.vue'
import IconTailwind from '@/components/IconTailwind.vue'
import IconThreeJS from '@/components/IconThreeJS.vue'
import IconReact from '@/components/IconReact.vue'
import IconNextJS from '@/components/IconNextJS.vue'

const isDark = useDark()

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
  },
  url: {
    type: String,
    default: ''
  },
  repositoryUrl: {
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
  'tailwindcss': IconTailwind,
  'nextjs': IconNextJS
}

</script>

<template>
  <div class="relative max-w-[360px]">
    <a
      :href="repositoryUrl"
      target="_blank"
      class="dark:bg-orange/50 hover:opacity-70 z-10 absolute top-2 right-2 w-10 h-8 bg-orange/30"
    >
      <icon-code-fill class="w-full h-full text-black" />
    </a>
    <figure class="relative w-full rounded-2xl overflow-hidden">
      <img
        :src="img"
        :alt="name"
        class="max-w-max w-full h-full object-cover"
      >
    </figure>
    <div class="mt-3 grid grid-cols-12">
      <a
        :href="url"
        target="_blank"
        class="hover:underline col-span-6 font-[600]"
      >
        {{ name }}
      </a>
      <div class="col-span-6 flex justify-end gap-1">
        <div
          v-for="n of categories"
          :key="n"
          :class="[isDark ? 'border-lavender/50 bg-lavender/20' : 'border-accent']"
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