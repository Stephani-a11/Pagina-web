<template>
  <SeccionBase id="semanticas" titulo="4. Operadores con diferentes semánticas (funciones)">
    <p>Algunos operadores en JavaScript pueden tener diferentes comportamientos según el contexto:</p>
    
    <h3>Operador <code>+</code>:</h3>
    <ul>
      <li v-for="item in operadorSuma" :key="item.descripcion">
        {{ item.descripcion }}
      </li>
    </ul>
    
    <h3>Operadores unarios:</h3>
    <ul>
      <li v-for="item in operadoresUnarios" :key="item.descripcion">
        {{ item.descripcion }}
      </li>
    </ul>
    
    <EjemploBase 
      titulo="Ejemplo: Semánticas de operadores"
      :codigo="codigoEjemplo"
      @ejecutar="mostrarSemanticas"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const operadorSuma = ref([
  { descripcion: 'Con números: realiza suma aritmética' },
  { descripcion: 'Con strings: realiza concatenación' },
  { descripcion: 'Con números y strings: convierte números a strings y concatena' }
])

const operadoresUnarios = ref([
  { descripcion: '<code>+</code> (unario): convierte a número' },
  { descripcion: '<code>-</code> (unario): convierte a número y cambia el signo' },
  { descripcion: '<code>!</code> (unario): convierte a booleano y lo niega' }
])

const codigoEjemplo = `// Diferentes usos del operador +
let sumaNumeros = 5 + 3;           // 8 (suma)
let concatenacion = "Hola " + "Mundo";  // "Hola Mundo" (concatenación)
let mezcla = 5 + "3";              // "53" (conversión y concatenación)

// Operadores unarios
let convertirNumero = +"42";       // 42 (convierte string a número)
let cambiarSigno = -"10";          // -10 (convierte y cambia signo)
let negacion = !true;              // false (niega el valor booleano)`

const mostrarSemanticas = () => {
  let sumaNumeros = 5 + 3
  let concatenacion = "Hola " + "Mundo"
  let mezcla = 5 + "3"
  
  let convertirNumero = +"42"
  let cambiarSigno = -"10"
  let negacion = !true
  
  return `
    <p><strong>Diferentes usos del operador +:</strong></p>
    <ul>
      <li>5 + 3 = ${sumaNumeros} (suma de números)</li>
      <li>"Hola " + "Mundo" = "${concatenacion}" (concatenación de strings)</li>
      <li>5 + "3" = "${mezcla}" (conversión y concatenación)</li>
    </ul>
    <p><strong>Operadores unarios:</strong></p>
    <ul>
      <li>+"42" = ${convertirNumero} (convierte string a número)</li>
      <li>-"10" = ${cambiarSigno} (convierte y cambia signo)</li>
      <li>!true = ${negacion} (niega el valor booleano)</li>
    </ul>
  `
}
</script>