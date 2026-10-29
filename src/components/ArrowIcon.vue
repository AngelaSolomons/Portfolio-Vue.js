<script setup>
defineProps({ diagonal: { type: Boolean, default: false } })
</script>

<template>
  <span aria-hidden="true" :class="diagonal ? 'arrow diagonal' : 'arrow'">→</span>
</template>
