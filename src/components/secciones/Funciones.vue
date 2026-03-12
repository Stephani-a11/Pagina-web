<template>
  <SeccionBase id="funciones" titulo="9. Funciones">
    <p>Las funciones son bloques de código reutilizables que realizan una tarea específica.</p>
    
    <h3>Formas de declarar funciones:</h3>
    <ul>
      <li><strong>Declaración de función:</strong> <code>function nombre() { ... }</code></li>
      <li><strong>Expresión de función:</strong> <code>const nombre = function() { ... }</code></li>
      <li><strong>Función flecha (ES6):</strong> <code>const nombre = () => { ... }</code></li>
    </ul>
    
    <h3>Parámetros y argumentos:</h3>
    <p>Las funciones pueden recibir parámetros (valores de entrada) y devolver un resultado con <code>return</code>.</p>
    
    <EjemploBase 
      titulo="Ejemplo: Funciones"
      :codigo="codigoEjemplo"
      @ejecutar="mostrarFunciones"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const codigoEjemplo = `// Declaración de función
function sumar(a, b) {
    return a + b;
}

// Expresión de función
const restar = function(a, b) {
    return a - b;
};

// Función flecha
const multiplicar = (a, b) => a * b;

// Función con parámetros por defecto
function saludar(nombre = "Visitante") {
    return \`¡Hola, \${nombre}!\`;
}

// Llamadas a funciones
let resultado1 = sumar(5, 3);        // 8
let resultado2 = restar(10, 4);      // 6
let resultado3 = multiplicar(2, 6);  // 12
let saludo1 = saludar("Ana");        // "¡Hola, Ana!"
let saludo2 = saludar();             // "¡Hola, Visitante!"`

const mostrarFunciones = () => {
  function sumar(a, b) {
    return a + b
  }
  
  const restar = function(a, b) {
    return a - b
  }
  
  const multiplicar = (a, b) => a * b
  
  function saludar(nombre = "Visitante") {
    return `¡Hola, ${nombre}!`
  }
  
  let resultado1 = sumar(5, 3)
  let resultado2 = restar(10, 4)
  let resultado3 = multiplicar(2, 6)
  let saludo1 = saludar("Ana")
  let saludo2 = saludar()
  
  return `
    <p><strong>Resultados de las funciones:</strong></p>
    <ul>
      <li>sumar(5, 3) = ${resultado1}</li>
      <li>restar(10, 4) = ${resultado2}</li>
      <li>multiplicar(2, 6) = ${resultado3}</li>
      <li>saludar("Ana") = "${saludo1}"</li>
      <li>saludar() = "${saludo2}"</li>
    </ul>
  `
}
</script>