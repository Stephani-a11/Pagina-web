<template>
  <SeccionBase id="tipos-datos" titulo="2. Tipos de datos">
    <p>JavaScript tiene varios tipos de datos primitivos y objetos:</p>
    
    <h3>Tipos primitivos:</h3>
    <ul>
      <li v-for="tipo in tiposPrimitivos" :key="tipo.nombre">
        <code>{{ tipo.nombre }}</code> - {{ tipo.descripcion }}
      </li>
    </ul>
    
    <h3>Objetos:</h3>
    <ul>
      <li v-for="tipo in tiposObjeto" :key="tipo.nombre">
        <code>{{ tipo.nombre }}</code> - {{ tipo.descripcion }}
      </li>
    </ul>
    
    <EjemploBase 
      titulo="Ejemplo: Tipos de datos"
      :codigo="codigoEjemplo"
      @ejecutar="mostrarTiposDatos"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const tiposPrimitivos = ref([
  { nombre: 'String', descripcion: 'Cadenas de texto' },
  { nombre: 'Number', descripcion: 'Números (enteros y decimales)' },
  { nombre: 'Boolean', descripcion: 'Valores verdadero/falso' },
  { nombre: 'undefined', descripcion: 'Variable sin valor asignado' },
  { nombre: 'null', descripcion: 'Valor nulo intencional' },
  { nombre: 'Symbol', descripcion: 'Valor único e inmutable (ES6)' },
  { nombre: 'BigInt', descripcion: 'Números enteros muy grandes (ES2020)' }
])

const tiposObjeto = ref([
  { nombre: 'Object', descripcion: 'Estructura de datos clave-valor' },
  { nombre: 'Array', descripcion: 'Colección ordenada de elementos' },
  { nombre: 'Function', descripcion: 'Bloque de código reutilizable' },
  { nombre: 'Date', descripcion: 'Fechas y horas' },
  { nombre: 'RegExp', descripcion: 'Expresiones regulares' }
])

const codigoEjemplo = `// Tipos primitivos
let texto = "Hola Mundo";          // String
let numero = 42;                   // Number
let decimal = 3.14;               // Number
let booleano = true;              // Boolean
let nulo = null;                  // null
let indefinido;                   // undefined

// Objetos
let persona = {                   // Object
    nombre: "Juan",
    edad: 30
};
let colores = ["rojo", "verde", "azul"];  // Array
let fecha = new Date();           // Date`

const mostrarTiposDatos = () => {
  // Tipos primitivos
  let texto = "Hola Mundo"
  let numero = 42
  let decimal = 3.14
  let booleano = true
  let nulo = null
  let indefinido
  
  // Objetos
  let persona = {
    nombre: "Juan",
    edad: 30
  }
  let colores = ["rojo", "verde", "azul"]
  let fecha = new Date()
  
  return `
    <p><strong>Tipos primitivos:</strong></p>
    <ul>
      <li>texto: "${texto}" (${typeof texto})</li>
      <li>numero: ${numero} (${typeof numero})</li>
      <li>decimal: ${decimal} (${typeof decimal})</li>
      <li>booleano: ${booleano} (${typeof booleano})</li>
      <li>nulo: ${nulo} (${typeof nulo})</li>
      <li>indefinido: ${indefinido} (${typeof indefinido})</li>
    </ul>
    <p><strong>Objetos:</strong></p>
    <ul>
      <li>persona: ${JSON.stringify(persona)} (${typeof persona})</li>
      <li>colores: [${colores.join(", ")}] (${typeof colores})</li>
      <li>fecha: ${fecha.toString()} (${typeof fecha})</li>
    </ul>
  `
}
</script>