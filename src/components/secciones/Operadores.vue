<template>
  <SeccionBase id="operadores" titulo="3. Operadores y expresiones">
    <p>Los operadores permiten realizar operaciones con valores y variables.</p>
    
    <h3>Operadores aritméticos:</h3>
    <table>
      <tr>
        <th>Operador</th>
        <th>Descripción</th>
        <th>Ejemplo</th>
      </tr>
      <tr v-for="op in operadoresAritmeticos" :key="op.simbolo">
        <td><code>{{ op.simbolo }}</code></td>
        <td>{{ op.descripcion }}</td>
        <td><code>{{ op.ejemplo }}</code></td>
      </tr>
    </table>
    
    <h3>Operadores de comparación:</h3>
    <table>
      <tr>
        <th>Operador</th>
        <th>Descripción</th>
        <th>Ejemplo</th>
      </tr>
      <tr v-for="op in operadoresComparacion" :key="op.simbolo">
        <td><code>{{ op.simbolo }}</code></td>
        <td>{{ op.descripcion }}</td>
        <td><code>{{ op.ejemplo }}</code></td>
      </tr>
    </table>
    
    <EjemploBase 
      titulo="Ejemplo: Operadores"
      :codigo="codigoEjemplo"
      @ejecutar="mostrarOperadores"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const operadoresAritmeticos = ref([
  { simbolo: '+', descripcion: 'Suma', ejemplo: '5 + 3 // 8' },
  { simbolo: '-', descripcion: 'Resta', ejemplo: '5 - 3 // 2' },
  { simbolo: '*', descripcion: 'Multiplicación', ejemplo: '5 * 3 // 15' },
  { simbolo: '/', descripcion: 'División', ejemplo: '6 / 3 // 2' },
  { simbolo: '%', descripcion: 'Módulo (resto)', ejemplo: '7 % 3 // 1' },
  { simbolo: '**', descripcion: 'Exponenciación', ejemplo: '2 ** 3 // 8' }
])

const operadoresComparacion = ref([
  { simbolo: '==', descripcion: 'Igualdad (solo valor)', ejemplo: '5 == "5" // true' },
  { simbolo: '===', descripcion: 'Igualdad estricta (valor y tipo)', ejemplo: '5 === "5" // false' },
  { simbolo: '!=', descripcion: 'Desigualdad', ejemplo: '5 != "5" // false' },
  { simbolo: '!==', descripcion: 'Desigualdad estricta', ejemplo: '5 !== "5" // true' },
  { simbolo: '>', descripcion: 'Mayor que', ejemplo: '5 > 3 // true' },
  { simbolo: '<', descripcion: 'Menor que', ejemplo: '5 < 3 // false' }
])

const codigoEjemplo = `// Operadores aritméticos
let a = 10;
let b = 3;

let suma = a + b;        // 13
let resta = a - b;       // 7
let multiplicacion = a * b;  // 30
let division = a / b;    // 3.333...
let modulo = a % b;      // 1
let exponente = a ** b;  // 1000

// Operadores de comparación
let igualdad = a == "10";    // true
let igualdadEstricta = a === "10";  // false
let desigualdad = a != "10"; // false
let desigualdadEstricta = a !== "10"; // true`

const mostrarOperadores = () => {
  let a = 10
  let b = 3
  
  let suma = a + b
  let resta = a - b
  let multiplicacion = a * b
  let division = a / b
  let modulo = a % b
  let exponente = a ** b
  
  let igualdad = a == "10"
  let igualdadEstricta = a === "10"
  let desigualdad = a != "10"
  let desigualdadEstricta = a !== "10"
  
  return `
    <p><strong>Operadores aritméticos (a = ${a}, b = ${b}):</strong></p>
    <ul>
      <li>a + b = ${suma}</li>
      <li>a - b = ${resta}</li>
      <li>a * b = ${multiplicacion}</li>
      <li>a / b = ${division}</li>
      <li>a % b = ${modulo}</li>
      <li>a ** b = ${exponente}</li>
    </ul>
    <p><strong>Operadores de comparación (a = ${a}, b = "10"):</strong></p>
    <ul>
      <li>a == "10": ${igualdad}</li>
      <li>a === "10": ${igualdadEstricta}</li>
      <li>a != "10": ${desigualdad}</li>
      <li>a !== "10": ${desigualdadEstricta}</li>
    </ul>
  `
}
</script>