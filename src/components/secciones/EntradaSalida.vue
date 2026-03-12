<template>
  <SeccionBase id="entrada-salida" titulo="7. Entrada y salida de datos">
    <p>JavaScript proporciona varias formas de interactuar con el usuario y mostrar información.</p>
    
    <h3>Salida de datos:</h3>
    <ul>
      <li v-for="item in salidaDatos" :key="item.nombre">
        <code>{{ item.nombre }}</code> - {{ item.descripcion }}
      </li>
    </ul>
    
    <h3>Entrada de datos:</h3>
    <ul>
      <li v-for="item in entradaDatos" :key="item.nombre">
        <code>{{ item.nombre }}</code> - {{ item.descripcion }}
      </li>
    </ul>
    
    <EjemploBase 
      titulo="Ejemplo: Entrada y salida de datos"
      :codigo="codigoEjemplo"
      @ejecutar="ejecutarEntradaSalida"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const salidaDatos = ref([
  { nombre: 'console.log()', descripcion: 'Muestra mensajes en la consola' },
  { nombre: 'alert()', descripcion: 'Muestra un cuadro de diálogo' },
  { nombre: 'document.write()', descripcion: 'Escribe directamente en el documento' },
  { nombre: 'innerHTML', descripcion: 'Modifica el contenido HTML de un elemento' },
  { nombre: 'textContent', descripcion: 'Modifica el contenido de texto de un elemento' }
])

const entradaDatos = ref([
  { nombre: 'prompt()', descripcion: 'Solicita información al usuario' },
  { nombre: 'confirm()', descripcion: 'Muestra un cuadro de confirmación' },
  { nombre: 'Formularios HTML', descripcion: 'Recoge datos a través de elementos de formulario' }
])

const codigoEjemplo = `// Salida de datos
console.log("Mensaje en consola");
alert("¡Este es un mensaje de alerta!");

// Entrada de datos
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");

// Mostrar los datos recogidos
if (nombre && edad) {
    alert(\`Hola \${nombre}, tienes \${edad} años.\`);
}`

const ejecutarEntradaSalida = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let nombre = prompt("¿Cuál es tu nombre?")
      let edad = prompt("¿Cuál es tu edad?")
      
      let resultado
      if (nombre && edad) {
        resultado = `<p>Hola <strong>${nombre}</strong>, tienes <strong>${edad}</strong> años.</p>`
        alert(`Hola ${nombre}, tienes ${edad} años.`)
      } else {
        resultado = "<p>No se proporcionaron todos los datos.</p>"
      }
      
      resolve(resultado)
    }, 100)
  })
}
</script>