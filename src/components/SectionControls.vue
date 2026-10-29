<script setup>
import ArrowIcon from './ArrowIcon.vue'

defineProps({
  next: { type: String, required: true },
  previous: String,
})
defineEmits(['next', 'back'])
</script>

<template>
  <div class="section-controls">
    <button v-if="previous" class="back-section" :aria-label="`Go back to ${previous}`" @click="$emit('back')">
      <i><ArrowIcon /></i><span>Back</span><b>{{ previous }}</b>
    </button>
    <button class="next-section" :aria-label="`Go to ${next}`" @click="$emit('next')">
      <span>Next</span><b>{{ next }}</b><i><ArrowIcon /></i>
    </button>
  </div>
</template>
