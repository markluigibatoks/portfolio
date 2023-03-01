<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => ([])
  },
  listStyle: {
    type: String,
    default: 'none',
    validator (value) {
      const listTypes = ['list-none', 'list-disc', 'list-decimal']
      return listTypes.includes(`list-${value}`)
    }
  },
  marker: {
    type: Object,
    default: () => ({
      color: 'black',
      size: 'base'
    }),
    validator (value) {
      const colors = ['text-dark-primary', 'text-light-primary', 'text-primary', 'accentText1', 'text-black', 'text-white']
      const sizes = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl']
      return colors.includes(`text-${value.color}`) && sizes.includes(`text-${value.size}`)
    }
  },
  mainAxis: {
    type: String,
    default: 'vertical',
    validator (value) {
      return ['horizontal', 'vertical'].includes(value)
    }
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
  intersectAt: {
    type: Number,
    default: 0
  },
  block: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['handle:intersecting'])

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

const axisClass = computed(() => {
  const list = []

  if (props.mainAxis === 'horizontal') {
    list.push('flex-row overflow-x-auto overflow-y-hidden')
  } else {
    list.push('flex-col overflow-x-hidden overflow-y-auto')
  }

  if (!props.isShowScrollbar) {
    list.push('hideScrollbar')
  }

  return list
})

const listClass = computed(() => {
  const list = []

  if (props.listStyle === 'none') return list

  list.push(`list-${props.listStyle}`, 'list-inside')

  list.push(`marker:text-${props.marker.color}`, `marker:text-${props.marker.size}`)

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
    class="flex"
    :class="[listClass, axisClass, alignmentClass, spacingClass]"
  >
    <template
      v-for="(item, index) in items"
      :key="item"
    >
      <li
        :ref="(el) => { targets[index] = (el) }"
        :class="[block ? 'flex-auto w-full' : '']"
      >
        <slot
          name="item"
          :item="item"
          :index="index"
          :length="items.length"
        >
        </slot>
      </li>
      <slot
        name="divider"
        :item="item"
        :index="index"
        :length="items.length"
      >
      </slot>
    </template>
  </ul>
</template>