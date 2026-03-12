<template>
  <footer>
    <p>Práctica de JavaScript - {{ fechaActual }}</p>
    <p>Guía completa con ejemplos interactivos</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const fechaActual = ref(new Date().toLocaleDateString('es-ES', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
}))
</script>