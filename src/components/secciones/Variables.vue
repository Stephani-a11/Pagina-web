<template>
  <SeccionBase id="variables" titulo="6. Variables">
    <p>Las variables se utilizan para almacenar y manipular datos en JavaScript.</p>
    
    <h3>Declaración de variables:</h3>
    <ul>
      <li><code>var</code> - Declaración con ámbito de función (más antiguo)</li>
      <li><code>let</code> - Declaración con ámbito de bloque (ES6)</li>
      <li><code>const</code> - Declaración de constante con ámbito de bloque (ES6)</li>
    </ul>
    
    <div class="note">
      <p><strong>Nota:</strong> Se recomienda usar <code>const</code> por defecto y <code>let</code> cuando se necesite reasignar valores. Evitar <code>var</code> en código moderno.</p>
    </div>
    
    <EjemploBase 
      titulo="Ejemplo: Variables"
      :codigo="codigoEjemplo"
      @ejecutar="mostrarVariables"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const codigoEjemplo = `// Declaración con var (ámbito de función)
var nombreVar = "Juan";
nombreVar = "Pedro";  // Se puede reasignar

// Declaración con let (ámbito de bloque)
let nombreLet = "Ana";
nombreLet = "María";  // Se puede reasignar

// Declaración con const (ámbito de bloque)
const nombreConst = "Carlos";
// nombreConst = "Luis";  // Error: no se puede reasignar

// Ámbito de bloque
if (true) {
    let variableBloque = "Solo existe en este bloque";
    console.log(variableBloque);  // Funciona
}
// console.log(variableBloque);  // Error: variable no definida`

const mostrarVariables = () => {
  var nombreVar = "Juan"
  nombreVar = "Pedro"
  
  let nombreLet = "Ana"
  nombreLet = "María"
  
  const nombreConst = "Carlos"
  
  let mensajeBloque = ""
  if (true) {
    let variableBloque = "Solo existe en este bloque"
    mensajeBloque = variableBloque
  }
  
  return `
    <p><strong>Variables con var:</strong></p>
    <ul>
      <li>var nombreVar = "Juan";</li>
      <li>nombreVar = "Pedro"; // Ahora vale: ${nombreVar}</li>
    </ul>
    <p><strong>Variables con let:</strong></p>
    <ul>
      <li>let nombreLet = "Ana";</li>
      <li>nombreLet = "María"; // Ahora vale: ${nombreLet}</li>
    </ul>
    <p><strong>Constantes con const:</strong></p>
    <ul>
      <li>const nombreConst = "Carlos"; // Valor: ${nombreConst}</li>
      <li>// nombreConst = "Luis"; // Esto produciría un error</li>
    </ul>
    <p><strong>Ámbito de bloque:</strong></p>
    <ul>
      <li>Variable dentro de bloque: ${mensajeBloque}</li>
      <li>// Acceder fuera del bloque produciría un error</li>
    </ul>
  `
}
</script>