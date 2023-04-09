<script setup>
defineProps({
  solid: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <span
    :class="{'gradient-text' : !solid}"
  >
    <slot></slot>
  </span>
</template>

<style scoped>
  .gradient-text {
    background: -webkit-linear-gradient(180deg, #F87C34 1%, #FFB02F 94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>