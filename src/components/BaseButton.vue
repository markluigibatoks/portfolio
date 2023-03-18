<script setup>
const iconSizes = {
  'xsm': 32,
  'sm': 40,
  'md': 56,
  'lg': 64,
  'xl': 72,
  '2xl': 80,
  '3xl': 88
}

const defaultSizes = {
  'xsm': 20,
  'sm': 28,
  'md': 36,
  'lg': 44,
  'xl': 52,
  '2xl': 60,
  '3xl': 68
}

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'transparent',
    validator (value) {
      return value === 'transparent' || /((^#([0-9a-f]{4}){1,2})|(^#([0-9a-f]{3}){1,2}))$/i.test(value)
    }
  },
  shadowColor: {
    type: String,
    default: 'transparent',
    validator (value) {
      return value === 'transparent' || /((^#([0-9a-f]{4}){1,2})|(^#([0-9a-f]{3}){1,2}))$/i.test(value)
    }
  },
  shadowed: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  outlined: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validator (value) {
      return ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value)
    }
  }
})

const classList = computed(() => {
  const list = []

  if (props.icon) {
    list.push('w-[length:var(--base-size)] h-[length:var(--base-size)] min-w-[length:var(--base-size)] text-2xl')
  } else {
    list.push('px-4 h-[length:var(--base-size)]')
  }

  if (props.disabled) {
    list.push('opacity-60 pointer-events-none')
  }

  if (props.block) {
    list.push('!min-w-full !max-w-none flex flex-auto')
  } else {
    list.push('inline-flex')
  }

  if (props.outlined) {
    list.push('border border-[color:var(--base-color)] bg-transparent text-[color:var(--base-color)]')
  } else {
    list.push('bg-[color:var(--base-color)]')
  }

  if (props.shadowed) {
    list.push('shadow-[inset_0_1px_1px_var(--light-color),_inset_0_0_1px_#255fb6]')
  }

  return list
})

const cssVars = computed(() => {
  return {
    '--base-color': props.color,
    '--light-color': props.shadowColor === 'transparent' ? lighten(props.color || '#000', 50) : props.shadowColor,
    '--base-size': useGetKey(props.size, props.icon ? iconSizes : defaultSizes) + 'px'
  }
})
</script>

<template>
  <button
    :style="[cssVars]"
    class="justify-center items-center uppercase whitespace-nowrap active:brightness-110 focus:ring-inset focus:ring-2 focus:ring-blue-500 hover:brightness-90 transition-all duration-200 ease-in-out"
    :class="[classList]"
  >
    <slot
      name="loader"
      :is-loading="isLoading"
    >
      <base-loader
        v-if="isLoading"
        class="w-5 -ml-1 mr-2"
      />
    </slot>
    <slot></slot>
  </button>
</template>