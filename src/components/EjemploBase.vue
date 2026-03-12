<template>
  <div class="example-container">
    <div class="example-title">{{ titulo }}</div>
    <pre><code>{{ codigo }}</code></pre>
    <button 
      class="btn" 
      @click="ejecutar"
      :disabled="ejecutando"
    >
      {{ botonTexto }}
    </button>
    <div v-if="resultadoVisible" class="result">
      <div v-html="resultado"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  titulo: {
    type: String,
    required: true
  },
  codigo: {
    type: String,
    required: true
  },
  botonTexto: {
    type: String,
    default: 'Ejecutar ejemplo'
  }
})

const emit = defineEmits(['ejecutar'])

const ejecutando = ref(false)
const resultadoVisible = ref(false)
const resultado = ref('')

const ejecutar = async () => {
  ejecutando.value = true
  try {
    const res = await emit('ejecutar')
    resultadoVisible.value = true
  } catch (error) {
    console.error('Error al ejecutar:', error)
  } finally {
    ejecutando.value = false
  }
}
</script>