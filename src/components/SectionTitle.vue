<script setup>
defineProps({
  index: String,
  eyebrow: String,
  title: String,
  intro: String,
})
</script>

<template>
  <header class="section-heading">
    <div class="section-kicker"><span>{{ index }}</span>{{ eyebrow }}</div>
    <h2>{{ title }}</h2>
    <p v-if="intro">{{ intro }}</p>
  </header>
</template>
