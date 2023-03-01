<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => ([])
  },
  isShowScrollbar: {
    type: Boolean,
    default: true
  },
  mainAxisSpacing: {
    type: Number,
    default: 0,
    validator (value) {
      const gapValues = ['gap-x-0', 'gap-x-0.5', 'gap-x-1', 'gap-x-2', 'gap-x-3', 'gap-x-4', 'gap-x-5', 'gap-x-6', 'gap-x-7', 'gap-x-8', 'gap-x-9', 'gap-x-10']
      return gapValues.includes(`gap-x-${value}`)
    }
  },
  crossAxisSpacing: {
    type: Number,
    default: 0,
    validator (value) {
      const gapValues = ['gap-y-0', 'gap-y-0.5', 'gap-y-1', 'gap-y-2', 'gap-y-3', 'gap-y-4', 'gap-y-5', 'gap-y-6', 'gap-y-7', 'gap-y-8', 'gap-y-9', 'gap-y-10']
      return gapValues.includes(`gap-y-${value}`)
    }
  },
  mainAxisAlignment: {
    type: String,
    default: 'start',
    validator (value) {
      const justifyValues = ['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly']
      return justifyValues.includes(`justify-${value}`)
    }
  },
  crossAxisAlignment: {
    type: String,
    default: 'stretch',
    validator (value) {
      const justifyValues = ['items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch']
      return justifyValues.includes(`items-${value}`)
    }
  },
  minSize: {
    type: String,
    default: '20px'
  },
  maxSize: {
    type: String,
    default: '1fr'
  }
})

const emit = defineEmits(['handle:intersecting'])

const scrollClass = computed(() => {
  const list = []

  if (!props.isShowScrollbar) {
    list.push('hideScrollbar')
  }

  return list
})

const spacingClass = computed(() => {
  const list = []

  list.push(`gap-x-${props.mainAxisSpacing}`, `gap-y-${props.crossAxisSpacing}`)

  return list
})

const alignmentClass = computed(() => {
  const list = []

  list.push(`justify-${props.mainAxisAlignment}`, `items-${props.crossAxisAlignment}`)

  return list
})

const targets = ref([])

watchEffect(() => {
  const HTMLElement = targets.value[props.intersectAt]
  createIntersection (HTMLElement)
})

function createIntersection (HTMLElement) {
  const { stop } = useIntersectionObserver(
    HTMLElement,
    ([{ isIntersecting }]) => {
      if (isIntersecting && props.hasMore) {
        emit('handle:intersecting')

        stop()
      }
    }
  )
}
</script>

<template>
  <ul
    :class="[scrollClass, alignmentClass, spacingClass]"
    class="grid grid-cols-x"
  >
    <li
      v-for="(item, index) in items"
      :key="item"
    >
      <slot
        name="item"
        :item="item"
        :index="index"
        :length="items.length"
      >
      </slot>
    </li>
  </ul>
</template>

<style scoped>
  .grid-cols-x {
    grid-template-columns: repeat(auto-fit, minmax(v-bind(minSize), v-bind(maxSize)))
  }
</style>