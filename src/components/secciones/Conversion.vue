<template>
  <SeccionBase id="conversion" titulo="5. Conversión de tipos de expresiones">
    <p>JavaScript realiza conversiones automáticas de tipos en muchas situaciones (coerción).</p>
    
    <h3>Conversión implícita:</h3>
    <p>Ocurre automáticamente cuando se usan operadores con tipos diferentes.</p>
    
    <h3>Conversión explícita:</h3>
    <p>Se realiza manualmente usando funciones como <code>String()</code>, <code>Number()</code>, <code>Boolean()</code>.</p>
    
    <EjemploBase 
      titulo="Ejemplo: Conversión de tipos"
      :codigo="codigoEjemplo"
      @ejecutar="mostrarConversion"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const codigoEjemplo = `// Conversión implícita
let resultado1 = "5" + 3;          // "53" (conversión a string)
let resultado2 = "5" - 3;          // 2 (conversión a número)
let resultado3 = "5" * "2";        // 10 (conversión a número)

// Conversión explícita
let numeroExplicito = Number("123");    // 123
let stringExplicito = String(456);      // "456"
let booleanoExplicito = Boolean(0);     // false

// Valores "falsy" y "truthy"
let falsy1 = Boolean("");          // false
let falsy2 = Boolean(0);           // false
let falsy3 = Boolean(null);        // false
let truthy1 = Boolean("Hola");     // true
let truthy2 = Boolean(1);          // true
let truthy3 = Boolean([]);         // true`

const mostrarConversion = () => {
  let resultado1 = "5" + 3
  let resultado2 = "5" - 3
  let resultado3 = "5" * "2"
  
  let numeroExplicito = Number("123")
  let stringExplicito = String(456)
  let booleanoExplicito = Boolean(0)
  
  let falsy1 = Boolean("")
  let falsy2 = Boolean(0)
  let falsy3 = Boolean(null)
  let truthy1 = Boolean("Hola")
  let truthy2 = Boolean(1)
  let truthy3 = Boolean([])
  
  return `
    <p><strong>Conversión implícita:</strong></p>
    <ul>
      <li>"5" + 3 = "${resultado1}" (conversión a string)</li>
      <li>"5" - 3 = ${resultado2} (conversión a número)</li>
      <li>"5" * "2" = ${resultado3} (conversión a número)</li>
    </ul>
    <p><strong>Conversión explícita:</strong></p>
    <ul>
      <li>Number("123") = ${numeroExplicito}</li>
      <li>String(456) = "${stringExplicito}"</li>
      <li>Boolean(0) = ${booleanoExplicito}</li>
    </ul>
    <p><strong>Valores "falsy" y "truthy":</strong></p>
    <ul>
      <li>Boolean("") = ${falsy1}</li>
      <li>Boolean(0) = ${falsy2}</li>
      <li>Boolean(null) = ${falsy3}</li>
      <li>Boolean("Hola") = ${truthy1}</li>
      <li>Boolean(1) = ${truthy2}</li>
      <li>Boolean([]) = ${truthy3}</li>
    </ul>
  `
}
</script>