<template>
  <div id="app" :class="{ 'tema-oscuro': temaOscuro }">
    <HeaderComponent />
    <NavComponent :secciones="secciones" />
    
    <main>
      <!-- Botón de tema al inicio -->
      <section id="control-tema" style="border-left-color: #9b59b6;">
        <h2>🎨 Control de Tema</h2>
        <div style="display: flex; gap: 20px; align-items: center;">
          <TemaButton 
            @temaCambiado="actualizarTema"
          />
          <div class="result" v-if="temaActual">
            <p><strong>Tema actual:</strong> {{ temaActual }}</p>
          </div>
        </div>
      </section>

      <!-- Resto de tus secciones -->
      <QueEsJs />
      <TiposDatos />
      <Operadores />
      <Semanticas />
      <Conversion />
      <Variables />
      <EntradaSalida />
      <Estructuras />
      <Funciones />
      <Objetos />
    </main>
    
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { applyPureReactInVue } from 'veaury'
import BotonTema from './react_app/BotonTema.jsx'

// Componentes Vue existentes
import HeaderComponent from './components/HeaderComponent.vue'
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import QueEsJs from './components/secciones/QueEsJs.vue'
import TiposDatos from './components/secciones/TiposDatos.vue'
import Operadores from './components/secciones/Operadores.vue'
import Semanticas from './components/secciones/Semanticas.vue'
import Conversion from './components/secciones/Conversion.vue'
import Variables from './components/secciones/Variables.vue'
import EntradaSalida from './components/secciones/EntradaSalida.vue'
import Estructuras from './components/secciones/Estructuras.vue'
import Funciones from './components/secciones/Funciones.vue'
import Objetos from './components/secciones/Objetos.vue'

// Convertir componente React a Vue
const TemaButton = applyPureReactInVue(BotonTema)

// Estado del tema
const temaOscuro = ref(false)
const temaActual = ref('claro')

const actualizarTema = (tema) => {
  temaActual.value = tema
  temaOscuro.value = tema === 'oscuro'
  console.log('Tema cambiado a:', tema)
}

// Navegación existente
const secciones = ref([
  { id: 'que-es-js', nombre: '¿Qué es JS?' },
  { id: 'tipos-datos', nombre: 'Tipos de datos' },
  { id: 'operadores', nombre: 'Operadores' },
  { id: 'semanticas', nombre: 'Semánticas' },
  { id: 'conversion', nombre: 'Conversión' },
  { id: 'variables', nombre: 'Variables' },
  { id: 'entrada-salida', nombre: 'E/S de datos' },
  { id: 'estructuras', nombre: 'Estructuras' },
  { id: 'funciones', nombre: 'Funciones' },
  { id: 'objetos', nombre: 'Objetos' },
  { id: 'control-tema', nombre: '🎨 Tema' }
])
</script>

<style>
/* Estilos para el tema oscuro */
.tema-oscuro {
  background-color: #1a1a1a;
  color: #ffffff;
}

.tema-oscuro section {
  background-color: #2d2d2d;
  color: #ffffff;
  border-left-color: #9b59b6;
}

.tema-oscuro h2 {
  color: #9b59b6;
  border-bottom-color: #444;
}

.tema-oscuro h3 {
  color: #e0e0e0;
}

.tema-oscuro code {
  background-color: #3d3d3d;
  color: #e74c3c;
}

.tema-oscuro pre {
  background-color: #000000;
  color: #00ff00;
}

.tema-oscuro .example-container {
  background-color: #333333;
  border-color: #444;
}

.tema-oscuro .result {
  background-color: #2d2d2d;
  color: #ffffff;
}

.tema-oscuro .note {
  background-color: #3d3d2d;
  color: #ffffff;
}

.tema-oscuro table {
  color: #ffffff;
}

.tema-oscuro th {
  background-color: #3d3d3d;
  color: #9b59b6;
}

.tema-oscuro td {
  border-bottom-color: #444;
}

.tema-oscuro tr:hover {
  background-color: #3d3d3d;
}

.tema-oscuro footer {
  background-color: #000000;
}
</style>