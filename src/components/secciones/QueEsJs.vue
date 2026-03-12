<template>
  <SeccionBase id="que-es-js" titulo="1. ¿Qué es JavaScript?">
    <p>JavaScript es un lenguaje de programación interpretado, de alto nivel y orientado a objetos, utilizado principalmente para crear interactividad en páginas web.</p>
    <p>Fue creado en 1995 por Brendan Eich mientras trabajaba en Netscape Communications Corporation.</p>
    
    <EjemploBase 
      titulo="Ejemplo: Hola Mundo en JavaScript"
      :codigo="codigoEjemplo"
      @ejecutar="ejecutarHolaMundo"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const codigoEjemplo = `// Mostrar un mensaje en la consola
console.log("¡Hola Mundo!");

// Mostrar un mensaje en una alerta
alert("¡Bienvenido a JavaScript!");

// Escribir en el documento HTML
document.write("<p>Este texto se escribió con JavaScript</p>");`

const resultado = ref('')

const ejecutarHolaMundo = () => {
  resultado.value = `
    <p>Se ejecutaron los siguientes comandos:</p>
    <ul>
      <li>console.log("¡Hola Mundo!") - Revisa la consola del navegador</li>
      <li>alert("¡Bienvenido a JavaScript!") - Deberías ver una alerta</li>
      <li>document.write() - Se ejecutó al cargar la página</li>
    </ul>
  `
  console.log("¡Hola Mundo!")
  alert("¡Bienvenido a JavaScript!")
  return resultado.value
}
</script>