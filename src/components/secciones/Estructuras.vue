<template>
  <SeccionBase id="estructuras" titulo="8. Estructuras de control">
    <p>Las estructuras de control permiten dirigir el flujo de ejecución del código.</p>
    
    <h3>Condicionales:</h3>
    <ul>
      <li><code>if</code>, <code>else if</code>, <code>else</code> - Ejecuta código según condiciones</li>
      <li><code>switch</code> - Ejecuta diferentes bloques según el valor de una expresión</li>
      <li>Operador ternario <code>condición ? valor1 : valor2</code> - If/else en una línea</li>
    </ul>
    
    <h3>Bucles:</h3>
    <ul>
      <li v-for="bucle in bucles" :key="bucle.nombre">
        <code>{{ bucle.nombre }}</code> - {{ bucle.descripcion }}
      </li>
    </ul>
    
    <EjemploBase 
      titulo="Ejemplo: Estructuras de control"
      :codigo="codigoEjemplo"
      @ejecutar="mostrarEstructuras"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const bucles = ref([
  { nombre: 'for', descripcion: 'Bucle con contador' },
  { nombre: 'while', descripcion: 'Bucle que se ejecuta mientras se cumpla una condición' },
  { nombre: 'do...while', descripcion: 'Bucle que se ejecuta al menos una vez' },
  { nombre: 'for...in', descripcion: 'Itera sobre propiedades de un objeto' },
  { nombre: 'for...of', descripcion: 'Itera sobre elementos de un objeto iterable (arrays, strings)' }
])

const codigoEjemplo = `// Condicional if-else
let hora = new Date().getHours();
let saludo;

if (hora < 12) {
    saludo = "¡Buenos días!";
} else if (hora < 18) {
    saludo = "¡Buenas tardes!";
} else {
    saludo = "¡Buenas noches!";
}

// Bucle for
let numeros = "";
for (let i = 1; i <= 5; i++) {
    numeros += i + " ";
}

// Bucle for...of con array
let frutas = ["manzana", "banana", "naranja"];
let listaFrutas = "";
for (let fruta of frutas) {
    listaFrutas += fruta + ", ";
}`

const mostrarEstructuras = () => {
  let hora = new Date().getHours()
  let saludo
  
  if (hora < 12) {
    saludo = "¡Buenos días!"
  } else if (hora < 18) {
    saludo = "¡Buenas tardes!"
  } else {
    saludo = "¡Buenas noches!"
  }
  
  let numeros = ""
  for (let i = 1; i <= 5; i++) {
    numeros += i + " "
  }
  
  let frutas = ["manzana", "banana", "naranja"]
  let listaFrutas = ""
  for (let fruta of frutas) {
    listaFrutas += fruta + ", "
  }
  listaFrutas = listaFrutas.slice(0, -2)
  
  return `
    <p><strong>Condicional if-else (hora actual: ${hora}):</strong></p>
    <ul>
      <li>${saludo}</li>
    </ul>
    <p><strong>Bucle for (números del 1 al 5):</strong></p>
    <ul>
      <li>${numeros}</li>
    </ul>
    <p><strong>Bucle for...of (lista de frutas):</strong></p>
    <ul>
      <li>${listaFrutas}</li>
    </ul>
  `
}
</script>