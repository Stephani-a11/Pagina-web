<template>
  <nav>
    <div class="nav-container">
      <a
        v-for="seccion in secciones"
        :key="seccion.id"
        :href="`#${seccion.id}`"
        class="nav-link"
      >
        {{ seccion.nombre }}
      </a>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  secciones: {
    type: Array,
    required: true
  }
})
</script>