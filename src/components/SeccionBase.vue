<template>
  <section :id="id">
    <h2>{{ titulo }}</h2>
    <slot></slot>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  }
})
</script>